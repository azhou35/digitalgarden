---
publish: true
---

I believe that single-pane systems-level observability - the practice of instrumenting, correlating, and autonomously acting on multi-modal telemetry - will be the linchpin of reliability and efficiency in any complex, high-stakes infrastructure. By viewing relationships and casual chains across components of a system, you can not only diagnose systems but prevent them before they cascade. 

This assertion emerges from my background driving Microsoft's supercomputing cluster for OpenAI, which make up the largest the world has seen thus far. Despite powering some of the most intelligent frontier models, the work of operating and maintaining the GPUs is rote and manual labor scales exponentially with complexity. It's an example of a [[system that breaks at scale]]. Without proper automated observability, during times of maintenance and times of crisis engineers are the trenches, leading to three outcomes: 
1. *signal-to-noise crisis* where the sheer volume of telemetry becomes paralyzing and quickly leads to alert fatigue.
2. *context switching hell* where developers jump from different tools and streams of activity to diagnose a single issue.
3. *knowledge silos* where understanding how to diagnose issues are inevitably restrained to certain senior engineers with experience. this creates bottlenecks when engineers are out of office. 

Some early challenges arose when we drove the GB200s to operations. We would look at the state of everything through a single pane view on Mission Control, but there are many components to a GPU that could break - from host level to NV link to portflaps to datacenters. 

I'd love to see novel applications of graph science used in understanding how problems propagate across a system. **Graph theory** is a way to model system components and focus on their relationships, which can reveal how the complex relationships within a system unfold. One example is the combination of graph neural netwoks (GNNs) and knowledge graph applications in observability dashboards, reviewed [here]([A visual future: GraphRAG and AI observability | TechTarget](https://www.techtarget.com/searchitoperations/podcast/A-visual-future-GraphRAG-and-AI-observability)).

Observability control planes, abstractly, are a lens to seeing a complex system for all the characters involved in a multiverse. Accuracy & completedness are tablestakes - what differentiates them are their modularity, adaptability to different contexts, and ability to incite second-derivative analysis immediately. 

Most observability planes are built for decision makers - what would a developer-first observability plane look like? One with immediate code-level context based on semantic context, failure blast radius mapping that shows which services will be impacted if an issue is not fixed, and actionable recommendations? 

I'd love to apply my learnings from supercomputing maintenance and see what other large-scale systems can benefit from a multidimensional control plane. Any domain that relies on a highly complex system in which telemetry is available, downtime/failures are costly, and there is proactiveness. In a factory, imagine if you can map out all the dependencies of what machines and components depend on each other and you're able to monitor the telemetry of machines in order to predict failures before they happen.

