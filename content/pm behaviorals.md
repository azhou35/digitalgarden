> Fundamental STAR stories 
## Foundational PM Skills
1. - "Tell me about a product you led end to end — how did you define success?"
2. Tell me about a product or feature you owned from start to finish. 
	1. (Product)
	2. S: When I was on the batch inference team, we worked very closely w research teams on high throughput workloads. However, a lot of folks we chatted w brought up how difficult it was to use the Azure UI. It was crazy to see incredibly talented researchers blocked by setting up the AI infra for their experiments. 
	3. T: We saw an opportunity to help streamline their initial setup with a copilot. We conducted zero to one discovery with genomics customers, partnering with them on their deployment. 
	4. Action: Product development, engineering roadmap, etc
	5. Result: Shipped a research prototype that was received by the communitiy
		1. Tracked a couple metrics like speed to deployment, number of failures per session
3. Feature for ^
	1. S: Rn when OAI gets cluster updates, we take down the entire update and get it returned. There's a strong case for streaming updates, where the nodes get returned as they are updated. It's a capability Microsoft AI has asked for based on exp w Coreweave. 
	2. T: TMy task was to work with the VMSS team to evaluate this feature gap, translate the customer requirements, and collaborate with engineering to explore how to plug this capability into their system safely and scalably.
	3. A: I represented the customer ask in cross-team forums, worked closely with VMSS engineers to deeply understand their update flow, and mapped out technical constraints. I provided concrete use cases and integration points based on real OpenAI workflows. I also led recurring alignment meetings between engineering and Microsoft AI to ensure progress tracked to both feasibility and need..
	4. R: We scoped an interim workaround to unblock immediate use cases, and the full streaming update capability is now on track for GA in October. This feature will significantly reduce downtime during updates, and represents a long-term platform improvement driven directly by customer feedback.. 
	5. Metric is quite clear here - its did we reduce the time window and also maintain the acceptable nodes in service as agreed by our SLA
4. How do you handle pushback/rejection while maintaining momentum. 
	1. S:
	2. T:
	3. A: 
	4. R: 

## Customer Deployment
1. - “Tell me how you’ve worked with customers to gather requirements.”
	1. *General vibe - tho OAI dominates our asks, we balances needs from other customers*
	2. S
	3. T
	4. A
	5. R
2. - “How do you balance one customer’s urgency with the broader roadmap?”
		1. *General vibe - tho OAI dominates our asks, we balances needs from other customers*
3. You support multiple high priority customers who want different things. How do you decide what to build? Navigate competing priorities?
4. How do you balance customer requests with product roadmap, timelines, and shfiting priorities?
5. How do you keep a broader view across accounts to optimize for overall business success? 


## Prioritization 
1. - “Walk me through how you prioritize across multiple features or customers.”
	1. tradeoffs to speak of - telemetry /  speed vs security 
		1. latency vs cost 
		2. observability vs security 
		3. latency vs throughput 
		4. completeness of update vs speed
		5. higher gpu utilization -> increases latency to start smaller jobs 
		6. customer-specific asks 
			1. e.g. oai wants full cluster downtime, microsoft ai just wants partial
		7. complex scheduling (orchestration) vs simplicity 
		8. model versioning vs infra compatibility
		9. 
2. What does success look like for a product you shipped?”


Frameworks:
1. Let me break this into three parts - 1) understanding the problem, 2) evaluating options, 3) proposing a path & success metrics 
2. Job to be done 
3. RICE 
	1. Reach, impact, confidence, effort
4. Tradeoff scenario
	1. Define user
	2. express goal
	3. triage constraints
	4. evaluate options
	5. choose and justify
	6. test and iterate

Questions to ask:
1. What type of customer is this? how much revenue do they drive? use cases? 
	1. Customer impact/platform leverage
		1. Urgency/scale/effort
	2. Evaluate options 
	3. Make a call





