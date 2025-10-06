interview - 
For this interview, you can expect an in-depth discussion of your submission, with a focus on your thought process, assumptions, tradeoffs, value optimization, and timeline considerations.

link back to T-Mobile’s goals, constraints, and ROI.
### Potential questions
1. Why multi agent vs single agent?
	1. Easier to optimize for each function
	2. Can isolate sensitive actions like billing changes 
	3. Can use cheaper, faster models for simpler tasks
	4. Easier to debug
	5. Scalability
	6. Cons: adds latency
	7. assuming that speed to market is not top priority as much as ability to scale
	8. > “We chose multi-agent orchestration for modularity and security isolation, especially since Tier 1 and Tier 2 flows touch sensitive billing APIs. The tradeoff is added orchestration latency, which we mitigate with async calls. If speed-to-market were the top priority, we could start with a single-agent MVP and refactor.” 
	9. 
3. one primary metric 
	1. % of AI resolution rate
		1. cleanest bridge from product performance to cost savings
4. fear of tokens?
	1. summarize intermediate results before passing between agents to refine window usage
5. - “Walk me through your design process — from problem statement to architecture.”
6. “Why start with both Tier 1 resolution and Tier 2 triage in the MVP?”
7. Why GPT-5 main loop + GPT-4.1 Mini for retrieval?”
	- “The orchestrator is the brain of the system — it needs to correctly interpret intent, decide when and how to call sub-agents, and weave those results into a final customer-ready response that matches T-Mobile’s brand voice. Smaller models often struggle with multi-turn context retention and complex decision-making, which are critical in Tier 1 and Tier 2 customer flows
8. Assumptions I made :
	1. data accessibility, latency budget tolerance, data accessibility
	2. organizational technical 
	3. market readiness
	4.riskiest assumption is tmobiles enterprise readines 
9. Why these metrics?
	1. Well it all goes back to the business goals.
	2. “T-Mobile’s top goals are reducing cost-to-serve, improving first-contact resolution, and maintaining brand voice. The metrics I chose are the most direct and measurable indicators of whether we’re moving those needles.”
10. ### **Q4: What are some examples of guardrails?**

> “We used guardrails in three categories:  
> **Relevance filters** – Classifiers that reject out-of-scope or irrelevant queries before retrieval, preventing wasted calls.  
> **Safety filters** – Toxicity detection, PII redaction, and sensitive topic escalation (e.g., harassment, legal threats) before sending a response.  
> **Action validation** – Schema and business-rule checks before executing API calls — for example, confirming refund amounts are within allowed limits, or that plan changes meet policy criteria.
> 
> These guardrails slow down some responses but prevent critical errors, protect brand voice, and maintain compliance.”


**Timeline & Rollout**

- 90-day onboarding plan
- Week 7: Internal pilot launch (Milestone #1)
- Week 9: 0.5% of live customer interactions (Milestone #2)
- Week 12: Scale to 50% of targeted support traffic (Milestone #3)
	- Explanation: 
		- We want the first stage for statistically meaningful data (500k interactions) 
		- Jump to 50% only happens after proven success criteria 
		- Also clear rollback crtieria
		- Scaling from 0.5% -> 50% in 3 weeks is massive 
- 80% human-in-the-loop approval during beta
	- Safety > efficiency in early phases 

**Success Metrics Targets**

- CSAT: >80% beta → >90% scaled rollout
- Resolution Rate: 70% Tier 1, 60% Tier 2 → >90% both
	- Assuming that maybe 80% resolution is achievable
	- The goal is to be better 
- Average Handle Time: 10% reduction → 15% reduction
- Brand Voice Accuracy: >95% pass rate
- Cost Reduction: 10% of customer service costs post-launch
- Churn: 1% month-over-month reduction
- Key Points:
	- I set phased targets that start achievable and scale ambitiously. The initial resolution rates are realistic, but the timeline and final scale targets are aggressive because T-Mobile needs fast ROI. I'd rather hit aggressive goals that matter than conservative ones that don't move the business
	- While the scaling looks aggressive, I built multiple safety nets: 80% human approval in beta, clear success criteria gates between phases, and explicit go/no-go decisions at each milestone. We don't proceed to 50% unless we've proven success at 0.5%. The 0.5% → 50% jump only happens if we hit all success criteria - >80% CSAT, 70% resolution rate, and compliance sign-offs. If we don't hit these, we iterate longer at lower volume. The timeline is aggressive but the quality gates are rigid.

**Technical Specs**

- 100M+ T-Mobile customers
- GPT-5 for main agent loop
- text-embedding-3-large for embeddings
	- premium model: high accuracy for understanding qeries - but its more expensive - balanced out using a low-cost model for downstream use
- GPT-4.1 Mini for summarization (cost efficiency)
	- **The Tradeoff:** _"We're deliberately adding system complexity to get better performance. A single GPT-5 could handle all tasks, but it would be slower, more expensive, and less accurate. By specializing each agent, we optimize for speed and precision - the retrieval agent is built specifically for search, the action agent for account operations, etc."_

## Future Improvements:
- Overall goal of agents is not only to excel at current workflows, but actually transform the workflows for agent-driven work
	- E.g. in short term are goals are to help customer service folks resolve tickets, triage, etc
	- Long term could be reinventing the customer experience itself
		- Imagine customer service that is deeply personalized and proactive 
		- Deeply contextual 
	- Checkpoints along the way:
		- Expanding scope of T1 and T2 support work 
			- The main difference between T1 and T2 agents in the tier support model is that **T1 agents handle basic, customer-facing problems using knowledge bases and ticketing systems**. In comparison, T2 agents handle more complex, system-level problems through admin consoles and configuration tools.
			- T1 is thingss like password resets, answering cold inbound 
			- T2 is things like diagnosing problems, techinical work more technical support
				- If we need to better fine-tune models for technical understanding, something we address in the long term
- handle more complicated customer scenarios thru fine-tuning / looking at customer feedback 
	- intentionally held off directly fine tuning at beginning 
### Things to talk about - 
- tools to effectively build/deploy/monitor agentic systems
	- monitor: observe agent behavior thru tracing in real time
		- agentops for llm cost tracking,benchmarking
- iteration:
	- theres a lot of stuff that works within the platform 
		- agents sdk ytohn 
		- on the portal you can use logs to trace agent behavior 
		- with the functions and tokens they consume 
- guardrails:
	- explicit guidelines
	- - Use existing documents (policy documents/operating procedures/routines can map to individual articles in knowledge base)
* safety
	* moderation
	* relevance / safety classifier
* few-shot xamples: 3-4 examples of ideal tmobile customer service
* fine-tuning: train model on thousands/hundreds of tmobile customer service
-  few shot is somethign we will start off w for rapid prototyping*
	this is something we will consider as we collect more interaction data


### Tradeoffs
1. System complexity vs performance
	1. trades increased system complexity for improvements over single agent
2. Safety vs response Time
3. Speed vs quality control
4. Cost vs accuracy
	1. Higher compute costs -> better reasoning
	2. crucial ways of cutting down costs aong the way
5. Storage vs performance
6. Speed vs risk management
7. Automation vs control
**1. Conservative Start, Aggressive Scale:** Begin safely, then accelerate once proven 
**2. Cost for Quality:** Premium tools/models where accuracy matters most 
**3. Safety Over Speed:** Multiple checkpoints and approval layers 
**4. Specialization Over Simplicity:** Complex architecture for better performance
**5. Business Value Over Technical Elegance:** Practical deployment over perfect solutions


### Metrics
1. North star 
	1. Ratio of Customer satisfaction against cost reduction 
	2. Initial goal was to reduce cost to serve but at the end of the day  we can't sacrifice customer experience for efficiency, but the business case is fundamentally about operational efficiency at scale.
	3. T-Mobile's scale means 10% cost reduction could save hundreds of millions annually.
	4. We have leading indicators here like service time reduction 
2. p0 - if this solution ruins our customer relationship its a nonstarter 
	1. customer satisfaction
	2. resolution rate
	3. churn
		1. customer retention
3. p1 - cost reduction 
	1. primary business case 
4. p2 - quality assurance 
5. as an enterprise project we must clear the bar for not being harmful before they can prove theyre valuable