[[content/open router analysis|open router analysis]]


I'm Annie, and today I want to talk about OpenRouter and why I believe it's buiding critical infra fo LLMs. 

We’re seeing a rapid shift in how developers access and deploy large language models. The ecosystem is exploding—OpenAI, Anthropic, Mistral, and thousands of open-source models are now in play. GenAI has moved from experimentation to **top-down enterprise priority**, with the **inference market projected to grow from $106B in 2025 to $255B by 2030**.

> In practice, teams now mix and match models for different things—some optimized for cost, others for accuracy or latency. 

But each vendor has its own distinct details: API, authentication, rate limits. To manage many is unwieldy and difficult to scale.

If you look at the tooling landscape, as shown on the left, you’ll see a spectrum of abstraction. On one end, there are full-stack platforms like Together and Fireworks, which bundle infra and model access. Hyperscaler marketplaces offer another path—centralized but often tied to a single cloud.

At a lower level of abstraction, a new category is emerging: the **LLM API Gateway**. These platforms provide unified access to multiple model providers—abstracting away vendor-specific quirks. Developers can switch models just by changing a parameter. 

One player to highlight here is Portkey. They also manage a lot of the backend infrastructure—things like API key management, rate limiting, intelligent routing, and access control. They focus heavily on enterprise needs, like security, governance, observability.

For example, it’s really important to keep API keys and credentials safe, set up role-based access so only the right people can do certain things, and keep audit logs when multiple teams are working together. They’ve also built strong tools to track costs and monitor how tokens are used across teams. Plus, they provide formal guarantees on uptime and performance, which enterprises need to scale confidently. 

But that focus has tradeoffs. Portkey’s setup is more complex, its free tier is limited, and it’s struggled to build bottom-up traction thanks to a strict 3 tiered business model. That’s risky if hyperscalers ship native routing tools or if enterprises start insourcing those layers, Portkey is left vulnerable without a strong dev community. 

Now on the opposite end is OpenRouter. It addresses a similar need for one API access to over a hundred LLMs. 

What sets it apart is its developer-first approach -- 
1) it has a consumer-facing playground, where you can test the performance of models agaisnt each other. this acts as a powerful growth engine by getting eyes on the product. 
2) Its pricing model is consumption-based and aligns directly with developer usage, avoiding the complexity of traditional infrastructure billing. It has a generous free tier for open source models to boot. 
3) > It also maintains a **live leaderboard of model usage across open-source LLMs**,. It helps OpenRouter's brand and positions it as as a curator in fragmented market, helping developers evaluate models based on real-world usage. 
	1) Over time, that leaderboard data—combined with usage and performance analytics—could become a powerful engine for model benchmarking or evals.

Another opportunity here is moving into observability -  Openrouter sits at a unique place in the LLM stack - it sees which models are used and where performance breaks down. Overtime OpenRouter can evolve into a full observability layer for LLMs, with things like latency and failure analysis or dashboards to provide a control plane for LLM workflows. 

That said, OpenRouter currently lacks some of the enterprise-grade controls—like SLAs, fine-grained governance, or multi-tenant cost tracking—that are standard in more enterprise-focused platforms like Portkey. It also depends on third-party model APIs, so performance and availability are partially out of its hands.
**Threats:**  

Openrouter also faces the threat hyperscalers or model vendors building native gateway features, which could undercut OpenRouter’s position. There’s also the broader risk of inference commoditization, which could pressure margins. And if it does try to shift towards enterprise, it needs to be careful to not alienate its developer users.

**Overall,** OpenRouter is building from a strong developer wedge with impressive traction and clarity of vision—it just needs to scale thoughtfully into more complex use cases as the market matures.
Ultimately, I’d choose to work at OpenRouter. At the end of the day, the tool with the most developer love is going to win, and if if developers don’t want to use a tool, top-down enterprise mandates won’t stick.

OpenRouter has a compelling opportunity to turn its strong product-led growth into a durable enterprise motion, and I believe there’s a clear need for a PM to unify these efforts into a focused roadmap. As a PM on infra tools I come from a background where I'm doing client service all day and understand the expectations for reliability and compliance at scale. I have a massive enterprise client and I see how much you need to customize your product for specific enterprise needs and how actively trade offs from a dev friendly platform.  

 I’d work to scale the platform without losing its developer-first simplicity, transform leaderboard and usage data into product and GTM insights, and build tight feedback loops between developers, sales, and product. I’d also prioritize building “trust as a product”—delivering features like SLAs, compliance support, identity, and multi-tenant governance—while balancing bottoms-up adoption with top-down enterprise traction.


----
Ultimately, I’d choose to work at OpenRouter. At the end of the day, the tool with the most developer love is going to win, devs dictate enterprise purchasing behavior. if enterprises implement something top down but devs dont wanna use it. devs are more forward looking on what is needed than enterprise. early feature love is a good leading indicator.

But that focus has tradeoffs. Portkey’s setup is more complex, its free tier is limited, and it’s struggled to build bottom-up traction. That’s risky if hyperscalers ship native routing tools or if enterprises start insourcing those layers.
---

Today I want to focus my conversation on OpenRouter.

First to give some background on the industry: we're in a middle of a rapid shift  in how developers access and deploy large language models. The ecosystem is expanding fast: OpenAI, Anthropic, Mistral, and thousands of open-source models are now available. GenAI is no longer an experiment—it’s become a top-down enterprise priority. And according to analysts, the AI inference market is expected to grow from **$106 billion in 2025 to $255 billion by 2030**.

In practice, teams now mix and match models for different things—some optimized for cost, others for accuracy or latency. As inference becomes increasingly cheaper, teams are under pressure to optimize usage across providers. 
But each vendor has its own quirks: API, authentication, rate limits. To manage many is unwieldy and difficult to scale.

If you look at the tooling landscape, as shown on the left, you’ll see a spectrum of abstraction. On one end, there are full-stack platforms like Together and Fireworks, which bundle infra and model access. Hyperscaler marketplaces offer another path—centralized but often tied to a single cloud.

At a lower level of abstraction, a new category is emerging: the **LLM API Gateway**. These platforms provide unified access to multiple model providers—abstracting away vendor-specific quirks. Developers can switch models just by changing a parameter, instead of rewriting code. 

One player to highlight here is Portkey, one of OpenRouter's competitors. Along with an API, it handles the backend plumbing: API key management, rate limiting, intelligent routing, and access control. It's enterprise first. offering features like **security**, **governance**, **observability**, and **SLAs** that are essential for running LLMs in production. For example, it's important to protect API keys and credentials, and have strong role based access controls and audit logs for multi-team environments. They've built out robust observability views to monitor cost acorss teams and track token usage. Finally, it provides formal uptime and performance guarantees, which are essential for enterprises to operate at scale. 

But that focus has tradeoffs. Portkey’s setup is more complex, its free tier is limited, and it’s struggled to build bottom-up traction. That’s risky if hyperscalers ship native routing tools or if enterprises start insourcing those layers.
    

OpenRouter addresses a similar need for one API access to over a hundred LLMs. 

What sets it apart is its developer-first approach -- 1) it has a consumer-facing playground, which acts as a powerful growth engine by driving organic developer adoption. 2) Its consumption-based pricing model is transparent and aligns directly with developer usage, avoiding the complexity of traditional infrastructure billing. 3) > It also maintains a **live leaderboard of model usage across open-source LLMs**, surfacing. This not only reinforces transparency and trust—it positions OpenRouter as a **curation layer** in a fragmented market, helping developers evaluate models based on real-world usage. > Over time, that leaderboard data—combined with usage and performance analytics—could become a powerful engine for model benchmarking or evals.

There’s a massive opportunity here to ride the wave of open-source model adoption and become the default gateway for developers navigating a fragmented model ecosystem. OpenRouter is well-positioned to grow bottom-up and move into enterprise. 
Moreover, Openrouter sits at a unique place in the LLM stack - it sees which models are used and where performance breaks down. Overtime OpenRouter can evolve into a full observability layer for LLMs, with things like latency and failure analysis or dashboards to provide a control plane for LLM workflows. 

That said, OpenRouter currently lacks some of the enterprise-grade controls—like SLAs, fine-grained governance, or multi-tenant cost tracking—that are standard in more enterprise-focused platforms like Portkey. It also depends on third-party model APIs, so performance and availability are partially out of its hands.
**Threats:**  
Openrouter also faces the threat hyperscalers or model vendors building native gateway features, which could undercut OpenRouter’s position. There’s also the broader risk of inference commoditization, which could pressure margins. And in highly regulated industries, its current lack of enterprise compliance features could be a barrier to adoption.

**Overall,** OpenRouter is building from a strong developer wedge with impressive traction and clarity of vision—it just needs to scale thoughtfully into more complex use cases as the market matures.
Ultimately, I’d choose to work at OpenRouter. As a product manager experienced in building for the enterprise, I understand the reliability, compliance, and governance expectations required to operate at scale. Having worked on developer tools I know how crucial it is to start off with love from the developer community. 

OpenRouter has a compelling opportunity to turn its strong product-led growth into a durable enterprise motion, and I believe there’s a clear need for a PM to unify these efforts into a focused roadmap. I’d work to scale the platform without losing its developer-first simplicity, transform leaderboard and usage data into product and GTM insights, and build tight feedback loops between developers, sales, and product. I’d also prioritize building “trust as a product”—delivering features like SLAs, compliance support, identity, and multi-tenant governance—while balancing bottoms-up adoption with top-down enterprise traction.



Portkey operates a three-tier business model tailored for enterprises, offering scalable plans that range from basic API access to advanced features like enhanced security, governance, and dedicated support.