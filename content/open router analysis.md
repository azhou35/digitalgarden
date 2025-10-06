[Investing in OpenRouter, the One API for All AI | Menlo Ventures](https://menlovc.com/perspective/investing-in-openrouter-the-one-api-for-all-ai/)

[X](https://x.com/karpathy/status/1917546757929722115)


openrouter business model:
- one stop shop for LLMs accessed behind a single API 
- "API" as a product - auto failover, zero switching cost between models, manages rate limtis

 business model is charging a fee at the time of API recharge
 aligns incentives well with developers
customers:
- developers / ppl who just want to use a service
- middle managers / middlemand fees
## 1. Industry Trends
- Market of API gateways
	- AI Inference market: 106$ billion in 2025 to 255$ billion by 2030, 19.2% CAGR ([AI Inference Market Size, Share & Growth, 2025 To 2030](https://www.marketsandmarkets.com/Market-Reports/ai-inference-market-189921964.html))
	- API Gateway: reshaping the definition of API gateways - "gateway" often signifies unified access for user requests, authentication. -> reshaping it into a AI forward trend
	- expands scope from sres/ops to programmers using general models 
	- expands capability beyond enterprise delivery to also traffic governance and use access control capabilities 
	- [AI Gateway Analysis: OpenRouter vs Higress - Alibaba Cloud Community](https://www.alibabacloud.com/blog/ai-gateway-analysis-openrouter-vs-higress_602401)
	- 
- Industry Trends
	- Move to multi-cloud, multi-model, open source
	- As AI development trends to larger, more complex AI models, enterprises and individuals alike opt for a multi-cloud, multi-model, and open source strategy.

- Opportunities
	- API Management 
		- The API Management Market grew from USD 7.82 billion in 2023 to USD 8.94 billion in 2024
		- MMonolithic systems -> modular agile architecture
	- MCP Platforms - appetite for one size fits all 
	- GenAI is a mission-critcial, tops down strategy 
		- McKinsey Report
		- Open Source Model Momentum - recent launches like Kim K2, Quinn Models, ZAI's GOM, Chinese labs 
- Tailwinds/Challenges
	- Adoption / facing against incumbents 
	- Commotidization of AI LLMs as models are driven down in price 
- ptofuct: 
	- 1) model aggregation 
		- allows users to acccess models thru one input 
	- 2) invocation experience 
		- online multi model conversation tool that provides unified convo interface to show developers output differences, compare model response effects, debug prompts, evaluate context performance
	- 3) ranking
		- collect data on token usage as proxies for measurement units for models 
	- other features:
		- routing/policy control
		- permission/multi tenant suppot
		- availabiliy detection
## SWOT Analysis OpenRouter

- BYOK (bring your own provider key) 
- addresses developer pain of invoking multiple mainstream large model API perfromance differences (OpenAI Anthropic Google DeepSeek Qwen Kimi) - consolidating inconsistent invocation methods into a unified standard
- modular aggregator -.> model invocation gateway 
	- introducing load balancing between models, continuously optimizing calling peformance, invoking log queries, key permission division, model availability observation 
- addresses genuine neeed to invoke mulitple models w minimal access costs

Strengths: 
- Developer oriented integration
	- BYOK, liteLLM
- Unique leaderboard as an organic flywheel for discovery, trust, and meta-data on usage behavior 
	- Real-time data to see which models are performant 
	- harvesting data for opensource model users -> key unlock that open source folks are not collecting on their own hand 
		- risk: incentive for users to not track their data, it's an opt-in to get data 
- give good models for free - 1000 daily requests limit for free models in OpenRouter
- Value: solving the ‘unified entry’ problem for model calls and building services (rate limiting, logging, routing, fallback, etc.) around this entry
- Helps devs save money - instead of paying for Claude AND ChatGPT you can just do it thru the license
	- dont have to worry about rate limits, good uptime, compatibility/support, requests become disconnected from you as an individual
	- openrouter is exposed to models instead of consumer
- AI moves quickly, so its an overview of spending
- Why is it better than using a model API key 
	- User Tracking
		- esp for open source without their own usage tracking capability 
	- Usage accounting out of box 
	- Organization management 
	- 5% discount when using own keys
	- access to whole library of models
	- help abstract away challenges of api managemnet
		- event / message schema
		- patterns of interaction 
		- versioning 
		- challenges in large data integration
		- security concerns
		- scalability 
		- backward compatibility

Weaknesses:
[OpenRouter Insights: Behind the Scenes of an Aggregated AI Model Gateway - Jimmy Song](https://jimmysong.io/en/blog/openrouter-insight/) 
- Doesn't emphasize enterprise level security / SLA
- Dependency around the big LLMs 
	- Lose access to various mobile apps / GPTs / poduct features
- Negates benefits of privacy for hositing local open source models 
	- esp for apps that dont handle sensitive data and dont need logs
- Lacking certain features needed for enterprises 
- You need to choose a backend
- misses lower level network protocols, granular security governance, enterprise application integration
- From interview
	- Can tick the boxes for enterprise but UX isnt first class 

Opportunities:
- Opportunities - provide LLM observability for free as part of inference instead of a point solution 
	- Unique value prop to consolidate IT spend to single vendo, make money when customers use inference vs selling observability tools 
- Lightweight, but by building the entry point for models it could evolve into an AI Infra
- Power to negotiate with other providers with a lot of users
- Enterprise sales - production LLM workloads
	- strict governance / compliance requirements complicates design 
	- revamp identity / credentials management 
	- mix of entities that use APIs
	- integration with backend legacy systems
	- SLA - expectations of uptime and performance of API, relying infra investments
- support culture 
	- API as the brnad
Threats:
- Lage Language models could throttle their requests
- Big Tech vertical integration
	- Hyperscalers own large resources / established enterprise relationships 
	- Azure AI Foundy also has its own model / opensource marketplace - but it will give some models as more expensive / cheaper 
		- e.g. deepseek is $1.35 / 1M input, $5.4 / 1M output.
		- compared to lambda with 0.5 / 1M input, 2.18 / 1M output
		- friction to deal w azure ecosystem (e.g. setting up roles / cost controls / budgeting
	- Commotidization of AI inference services 
- Commoditization 
- Compromising dev exp as they move to enterprise
- Scale-induced drift 


TogetherAI
[Better alternative then Openrouter : r/SillyTavernAI](https://www.reddit.com/r/SillyTavernAI/comments/18ltt6z/better_alternative_then_openrouter/)
[LiteLLM](https://www.litellm.ai/)
[Just a moment...](https://www.crunchbase.com/organization/portkey) 
[LiteLLM: Call every LLM API like it's OpenAI [100+ LLMs] | Y Combinator](https://www.ycombinator.com/companies/litellm)
LiteLLM 
[LinkedIn](https://www.linkedin.com/posts/y-combinator_launch-yc-litellm-call-all-llm-apis-activity-7100491949559746563-45TM/)
Chutes AI
SWOT
Strengths: 
- strong research coming from team
- reliability 
- observability integrations

Weaknessses: 

OpenRouter is like a Stripe for AI APIs
AWS but for open-source AI

LiteLLM - 
Strengths:
- enterprise option
	- centralized billing to give 200+ ppl in a class access to LLM with spending caps

### EdenAI
[Best OpenRouter Alternatives | Eden AI](https://www.edenai.co/post/best-alternatives-to-openrouter) 
developer platform > token broker
- runs on actual infra like Google/Microsoft/AWS

- lower uptime 
Opportunities:
- 
Strengths:
- - no middleman CPU lottery or backend lottery 
- proper SLAs, consistent dashboard, proper debugging, clarity into debugging
- reliability and dev experience
- includes services 
	Weakness:
## Portkey
[Production Stack for Gen AI Builders|Portkey](https://portkey.ai/)

- integrate multiple ai models with caching and rate limiting
- smart routing capabilities 
- advanced monitoring tools
- automate apps and work involved in using gen ai

abstracts atop both models AND infernence services like hugging face and groq
allows easy switching between models
built in load balancing and fail over mechanisms
strengths:
- advanced caching/rate limited
- comprehensive observability
- fallback strategies/load balancing
- cost tracking and budget management
- security and compliance features
- governance and operational tools
- somplified maintenance on logs, latencies, and traces 
### Dream Role

I would work for this company as a PM who enjoys the intersection of developer experience and infra, briniging systems thinking to the API layer
Enterprise challenges are not from product gaps alone but also execution and positioning
- clear need for an enterprise play 
- processes in intaking dev requests - rn main comms is via slides 
- navigate the enterprise pivot
	- help openroter capture enterprise without losing its soul - building slas and compliance while preserving low friction onboarding and community trust 
	- work w sales to sell trust as a product 
	- audit what is necessary to evolve into a trusted enterprise
	- 
- lots of metrics we have - what do we do with it? 
	- scale product with usage-based insights 
	- sleeping giant of leaderboard data - use it to drive product and GTM 
	- *product growth pivot*

- developer advocacy 
- need for PM guidance for engineers & product visoin alignment 
- Two-customer base tension with different needs
- Cloud-lke platform strategy
	- Cloudflare
	- Core networking (API gateway) + additnal services layered on top
---
**FINAL PRESENTATION:** Individual presentations will take place over three days in-person at Primary Venture Partners' office at 386 Park Avenue South (at 27th Street) - July 31 (Th), August 1 (F), and August 4 (M). [Sign up here.](https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0dOA7XQQXwZLIdlEjXGDYUQQDRnx9XS3Qh_2gUGlxt48HiZMDskt5ifbzTPZz4k-UMdnOySL6i)

Your presentation should be five minutes long (we'll time you!), followed by five minutes of Q&A. The presentation slots are 20 minutes to allow us plenty of buffer. Details on the presentation prompt are below - feel free to ask us any follow-up questions.

If you cannot make any of the listed times, or need to present by Zoom, email Matt and myself and we will work with you to make alternative arrangements. Details on the presentation are below.

Please reach out with any questions,

Tom, Lisa, Matt, Boris, Victor, and the Factor Team

**FINAL ASSIGNMENT:** Begin by selecting a venture-backed company located in New York City.  Once you have chosen a company, conduct a high-level SWOT (Strengths, Weaknesses, Opportunities, Threats) analysis. This analysis should be threefold:

- First, assess the company's broader sector, considering industry trends, potential opportunities, and existing challenges; 
    
- Second, perform a SWOT analysis of one of the company's direct competitors;
    
- Third, conduct a SWOT analysis of the chosen company itself, evaluating both internal and external factors.
    

Finally, based on your analyses, articulate whether you would personally choose to work for this company, and what role you would pitch yourself for. Justify your decision with clear and well-reasoned explanations.

Some things to think about:

- **Analysis:** Absorb as much as you can about the company and the sector, but do not let your analysis get bogged down in the details - balance rigor with precision. 
    
- **Deliverable:** Primary and Factor’s brand positioning emphasize clarity, brevity, and simplicity. Aim for crisp, clean, uncluttered slides. 
    
- **Presentation:** We do not expect you to know every detail of your chosen sector, but expect you to have an easy and confident command of the fundamentals.