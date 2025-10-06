> For this conversation, you can expect at least one hypothetical scenario during the interview. It’s designed to assess your product sense and product management experience, particularly around:


---

- Navigating competing priorities across multiple customers
- Balancing customer requests with the product roadmap, timelines, and shifting priorities in an agile environment
- Keeping a broader view across accounts to optimize for overall business success
- Handling rejection or pushback while maintaining momentum

We’re not looking for a perfect answer. We're more interested in how you think, make tradeoffs, and lead in complex, real-world situations. I'm also including some reading info about [Fireworks](https://fireworks.ai/) below for your reference.

- [ ] message someone to bump fireworks

tradeoffs:
- smaller model + prompt tuning + rag vs giant model in latency and cost for production
- the bigger the model, the higher the accuracy, the longer the context windows, the better the generalization
	- but the slower the infernce, the more gpu needed, more exepnsive 
- except Mixture of Exper\t models are faster than dense models of same size - but they require smart routing / higher infra support
	- shines in high throughput setting but infra and complexity may delay rollout, weigh this against dev support and tooling maturity
* quantization compresses models from f16->int8 which reduces memory footprint and is good for smaller gpus and cheaper to serve, better for edge inference - but you need evals to trust quality trade off
* attention optimization techniques are impotant for long context or multi user batching 
	* good for latency SLAs such as chatbots, important to minimize time and memory cost of attention computation step

types of customers:
1. indie developers 
	1. low cost, fast iteration, ez onboarding, prefer smaller OSS models / quantized versions 
	2. accuracy trade off is ok 
	3. developer ux, instant availability, per token cost
2. small - mid teams for a domain (like legal biotech finance)
	1. tuned performance, observability and reliability, ability to upload fine-tunes, swap models
	2. cost is important but so is model fit for a task
	3. latency matters in production - need plat control + performance
3. enterprise teams 
	1. ai/ml teams inside large companies
	2. enterprise grade support, slas, privacy security model customization
	3. latency is negotiable but accuracy is 
	4. suppot for evals/audits

challenges in gpu orchestration:
- effectivelly managing gpu allocation, model loading, scaling up/down
- cold starts, idle gpu waste, multi tenant sharing
- preemptive vs reseved nodes, spot pricing fluctuations

batching/caching /token streaming

- - Designed so a _small team_ can ship an AI app with _big-team reliability_/
- ?


focus on api=first infra native devs 
- curl or python sdk access
- logs/token usage/latency breakdowns

this sort of 
### Terms
- p50 latency = median latency
	- 50% of requests re faster than this
- p95 latency 
	- 95% of requests are faster
	- tail performance (how bad it can get)
	- worst case scenario
- => if p50 is good but p95 is high, there are tail latency issues
- => this sort of platform focuses on the worst psosible scenario 
- kv cache = key value cache
	- performance trick used by llms to respond faster 
	- llms remember what has been written, instead of rereading everything from beginning 
	- it **caches** key value pairs to make future steps faster and cheaper 
	- lets model remember its work instead of strating a math problem from 0 everytime
	- **fireworks ai** optimizes the efficient gpu memory layout 
	- con - its very memory intensive, hard to manage at scale, not needed for short prompts
	- good for chatbots, code generation, real time streaming
- cold start = when model isnt ready or cached on the gpu when a request comes in so system must load the model weights, allocate gpu memory, or even spin up enw sintance
	- features to fix: model preloading, warm pools, predicitve autoscaling, kv cache ttl tuning 


fireworks product
1. Playground:
- Try out different models as soon as they come out (e.g. OSS gpt)
1. Deployments
2. Datasets
3. Batch Inference
	1.batch api - more cost efficient than real-time inference api 
	can include thousands of results
	results ready within hour
	 similar to azure batch 
	1. good for processing a huge dataset at a time
	2. useful for model benchmarking / eval, bulk text/data generatoin/etl pipelines
4. Evaluations
5. Finetuning
6. Usage 
7. fireworks virtual cloud
	1. BYOC - manages gpu delpoyments for you 
	2. managing bare-metal gpu deployments is hard - fraught w hardware quirks, fallover challenges, global sclaling headaches
	3. flexible global scheduling, autoscaling, fixed scheduling
	4. high reliability 
	5. fireworks inference engine runs within your own cloud infra - so u get benefits of fireworks while ensuring data doesnt leave secure environment 
![How Fireworks Virtual Cloud Scheduler Works](https://cdn.sanity.io/images/pv37i0yn/production/957c8a6fcbf41ff947f3a4eaee93fda5c67a977e-1039x572.svg)
8. Model Librrary
![[Pasted image 20250805135751.png]]

glossary: 
- temperature = controls randomness, lower is more deterministic
- max tokens = max length of generated output![[Pasted image 20250805135751.png]]
- top p = nucleus sampling (probability mass to consider)
- top k = sampling to top k most likely tokens

### pm fundamentals
- https://www.notion.so/maheshmurag/Tecton-Onsite-3-Call-with-Matt-Bleifer-45-min-b1507ef0b01841aaad068dd4c16db7fe?source=copy_link
- [[content/pm behaviorals|pm behaviorals]]
- what is your favorite product & how would you improve?
	[[content/substack product features|substack product features]]
	from recruiter: 1st round 
		- foundational pm skills
		- chat w pms 
		- ur pm specific experience
		- hw u work w customers
		- how u drive conversations to gather requiremnts
		- translate to align w business offerings
		- prioritze requests
		- success 

### Hypotheticals
1. - **"Fireworks is considering open-sourcing part of its stack. What should we think about before doing that?"**
2. Two of your highest-usage customers are requesting custom features:
	- Customer A wants support for Anthropic's latest Claude 3.5 model by next week for a launch demo.
    - Customer B wants usage metering + API analytics to roll out to their internal teams at scale.
    - How do you determine what to prioritize? What tradeoffs would u make?
3. Sales is pushing hard for a customer-specific feature that could close a $400K annual contract. It’s a one-off change to support a proprietary tokenizer the customer uses.
	1. Your current roadmap is focused on launching Fireworks' next-gen routing system that will benefit all customers.
4. Multiple customers ask for diff features but u only have capability to build one - how do you decide?
	1. Clarify underlying needs: is this workflow blocker / scaling concern / nice to have. Basic prioritzation check list - reach, impact, effort. 
	2. Platform observability for all vs bespoke integration


tradeoffs to reason about 
- latency vs cost (preload models to eliminate cold starts at the price of gpu time )
- flexibility vs simplicity (speed vs knobs)
- breadth of models vs operational focus
- self serve devs vs enterprise customers
- control vs abstraction

strat:
- bottoms-up motion, then layer on enterprise as usage grows 
- trust their users are infra-literate
- best place for production grade oss


Compound AI Platform ![[Pasted image 20250806141351.png]]


**FireAttention** is likely **Fireworks AI’s custom implementation of the attention mechanism**, the core computational operation behind Transformers (the architecture that powers models like GPT, LLaMA, etc.).

Think of it like a **highly optimized engine for attention** — the part of the model that decides “what to focus on” in a sequence of text, image, audio, etc.


three types of inference modes:
1. serverless - base models are avai on shared serverless deployments - gpus pre configured and you pay per token
2. on demand / dedicated - for high throughput or custom requirements, launch private deployments on demand - here fireworks spins up dedicated gpu instances when u invoke a model
3. enterprise reservd (capacity)

