---
title: "Resilient AI Infrastructure"
source: "https://www.harvey.ai/blog/resilient-ai-infrastructure"
author:
  - "[[Harvey]]"
published:
created: 2025-04-23
description: "How Harvey scales and manages AI model performance reliably across millions of daily requests."
tags:
  - "clippings"
---
How Harvey scales and manages AI model performance reliably across millions of daily requests.

Apr 22, 2025

Harvey Team

At Harvey, our AI model deployments are at the center of every customer query—whether summarizing lengthy documents or generating concise answers to specific questions.

Because Harvey systems utilize a variety of AI models, and each request carries a varying computational load based on the weight of the request (prompt tokens) and the response (completion tokens), managing how much load each model sees is critical to our overall reliability.

Harvey consumes billions of prompt tokens from our model providers and produces hundreds of millions of output tokens across millions of daily requests. And model usage can be bursty—while some Harvey features issue fewer requests, others with more prompt tokens may have a flurry of many lightweight requests. We implement active load balancing and monitoring of LLM resources across all of our environments to optimize utilization and maintain consistent performance and a reliable user experience across our products.

### Key Challenges

#### Reliability & Availability

Managing computational load across model deployments is a key reliability challenge. Each model deployment has finite resource capacity. When the combined load from concurrent requests approaches or exceeds this limit, server performance can degrade, leading to increased latency, timeouts, and potential downtime. This risk is amplified during traffic spikes or sustained high usage.

#### Seamless Onboarding & Scaling

With new model versions and features coming out frequently, the Harvey team needs to be able to quickly evaluate their quality for inclusion in various products and features. Reducing developer friction and increasing developer velocity are key to achieving this.

#### Real-time Usage Tracking

We must be able to attribute every model call to its origin so our data teams can understand usage patterns and trends. We also need to be able to see usage in real time to detect downtime and failures as quickly as possible.

### A Centralized Model Inference Client Library

At Harvey we have written a centralized Python library that abstracts all model interactions for both the product and our developers. It encapsulates multiple features and relies on a distributed key-value store, an in-house proxy service, and a custom-built model health tracker to enable scalable, fault-tolerant interaction with our model inference servers and maximize their availability.

![Centralized model inference client library](https://www.harvey.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F07s0r5r6%2Fproduction%2F1d362d5e12561d4fbc06ef7c4f249294fb3d7212-2400x1350.png%3Fauto%3Dformat&w=3840&q=90)

This library takes in a list of model configurations and provides critical instrumentation around all model inference calls. The model configuration framework allows for new models to be added to the system quickly and provides a syntax that allows engineers to define configurations for new models, including characteristics such as region, capacity, supported environments, and model family. Once a model’s answer quality and other characteristics are validated through our [benchmarks](https://www.harvey.ai/blog/introducing-biglaw-bench), and statistical significance in performance and cost is confirmed by our research team, the model can be rapidly integrated into our products, allowing customers to benefit from state-of-the-art models.

#### Model Endpoint Selection

Harvey maintains parallel deployments for each model family. When the client library receives a request, it picks the right model to forward the request to based on the request's model family. The system verifies which deployments within a model family are healthy and meet our service reliability thresholds ("SRT"), then selects a model deployment based on a weighted selection process. Each deployment is assigned a weight based on criteria including health, capacity, and region, ensuring the load is distributed across reliable endpoints.

To assess deployment health, we measure latency and success rate Service Level Indicators (SLI) periodically. If a model endpoint is not healthy enough to satisfy our SLA, the system reduces its weight during the weighted selection process. These deployments are also ranked based on priority of fallback, i.e., the system first iterates over the higher-priority models before checking the lower priority ones. Through a variety of deployments, layered fallbacks, and retries, Harvey is able to ensure high availability and performance for our customers at all times.

![Model endpoint selection](https://www.harvey.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F07s0r5r6%2Fproduction%2Fab2bcac5d608ae9962a516dfeb276ca61b897d40-2400x1350.png%3Fauto%3Dformat&w=3840&q=90)

#### Centralized Quota & Rate Limiting System

Once the model endpoint is selected, the library checks the request against the quota allocated for the current context, which includes information such as requesting feature, environment, user, and workspace. Each request’s weight—determined by its prompt token count—and context is evaluated against the inference server’s available capacity. To prevent the server from degrading, we implemented a distributed, feature-aware rate limiting system utilizing a Redis-backed approximate sliding-window token bucket algorithm.

![Centralized quota & rate limiting system](https://www.harvey.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F07s0r5r6%2Fproduction%2Fce5359a41f2fe097606c0742e36861a1b84272c5-2400x1350.png%3Fauto%3Dformat&w=3840&q=90)

The system is able to handle bursty traffic without a significant impact on request throughput or latency. It achieves high scalability and throughput by balancing accuracy and speed while maintaining a constant memory footprint. To ensure on-callers are able to react quickly during model-related incidents, we built a mechanism into the framework that allows runtime configuration of limits and quotas across all our geographically deployed clusters—without any restart and in just seconds.

Together with the model deployment selection system, this ensures our systems get the most out of our model deployments.

#### Model Proxy

Our engineers need to be able to experiment with and use the model deployments in their regular development workflow quickly and without friction. The easiest way to do this is to share the API keys with our developers to use as needed. On the flip side, we must also be able to track all model calls and keep an account of where resources are being used. We also want to ensure that a developer’s local machine, CI/CD pipeline, test infrastructure, or experiment does not unintentionally degrade our model deployments.

To prevent this, our team developed a thin proxy that forwards all model requests made outside of our Kubernetes cluster back through the cluster to the model servers. The proxy API is compatible with the OpenAI API spec, ensuring no additional changes are needed beyond updating the endpoint URL. This setup allows us to add all the necessary instrumentation around the requests. It also means a new model only needs to be added to this model proxy to be used across the company. Having a model proxy adds an additional layer of security (e.g., rotating API keys) and allows our developers to focus on what matters while masking and protecting sensitive data.

#### Observability and Monitoring

Last but not least, adding granular observability across this AI infrastructure stack is critical for tracking the reliability of the system. Despite having layered defense in terms of fallbacks and retries, there can still be issues within the distributed system. To address this, we have very strict burn rate alerts around our SLAs to ensure a rapid response by the team.

Another critical piece of information that we track is detailed accounting of every prompt and output token consumed by our system. This data is collected through our in-house telemetry events pipeline and exported to our Snowflake data warehouse, where our Data and Finance teams can extract the necessary information.

### Job’s Not Finished

Our AI infrastructure and the systems that support it continue to evolve every day. There is always room to improve performance, reduce costs, and add new features as our requirements change. This includes everything from optimizing the rate limiter algorithm, to reducing the end-to-end latency during request failures, to making it even simpler to customize model configurations while keeping our test pipelines robust. At Harvey, we prioritize taking the simplest possible approach while ensuring our systems can scale horizontally.

There are countless opportunities for optimization and innovation, from fine-tuning quota distribution to enhancing real-time observability and improving rate limiting algorithms. If tackling complex, high-impact problems like these excites you, [we’d love to hear from you](https://www.harvey.ai/company?category=Engineering#company-careers). Join us to help build the next generation of scalable AI infrastructure.

*Thanks to everyone who’s worked on AI infra at Harvey!*

Malay Keshav, Samer Masterson, Roshan Rajan, Mark McCaskey, Bhavesh Kakadiya, Stefan Palombo, Tom D'Netto