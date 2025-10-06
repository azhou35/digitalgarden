**- So I think agents sort of being paid on commission, if you will, is not only a great incentive alignment between a vendor and a partner and a company but also just feels right from first principles
- If you’ve ever seen someone who’s done a big ERP implementation, I don’t know much about ERP systems, but apparently, they’re really hard to execute because for everyone I’ve ever met who’s done one, it’s taken two years longer than expected and cost a lot more money than expected.
- And it’s like success has a thousand fathers, but failure is an orphan. Part of the issue is the only party in that relationship that cares about the outcome is the company.relationship with our customers, we’ve really focused on a couple of different things. One is product usability. I think to make your outcome, you need to make it as easy as possible to achieve that outcome. We’re somewhat unparalleled in the market in having a product for technology teams as well as a product for operations teams. You can build agents without any technical knowledge at all. Again, we’re trying to empower as many customer experience professionals as possible. And then on the partnership side, we have a lot of support with what we call agent development. So if you need help getting your agent out the door, we show up in a bus to help you do it
- solely going after big companies
	- If you just do the math, there’s a phrase in call centers called cost per contact, and it essentially measures how much all-in labor and technology costs to answer the phone or answer the chat
- it is really the first-order effect of reducing the cost of a phone call, which is great; you can save that money and return it to shareholders. But I think the more sophisticated companies are asking, “Can I actually gain market share?” And that’s really, really exciting, and that’s what we’re trying to do for some of the largest brands in the world
Agents Doing things for customers

- We have retailers for whom you can submit a photo of your damaged goods and immediately adjudicate a warranty claim, and it’ll connect to the inventory system and ship you a new product. You can refinance your home with
	- without human in the loop
- very complex conversation with regulatory oversight. How do you put AI-based guardrails around it? How do you put deterministic-based guardrails around
- effective guardrails, multilingual conversations over chat and voice, deterministic guardrails, AI-based guardrails, which are called supervisor models — and are really, really effective and interesting
voice is a bigger part of platform than text 
- We’re all born with it. We all know how to talk. As a consequence, I think it’s quite low friction, it’s quite accessible. We talk a lot about the digital divide, and I think if most of the ways you interact with digital technology is just speaking, what a great way to make it accessible to everyone, especially if it’s multilingual and patient.
- For any given message to one of the agents on our platform, that’s probably 20-plus inference calls just to generate one response. Just to give you a sense of the complexity, there are lots of different models under the hood
- It will be the practitioners of building these agents and other things. They’re not going to be the researchers who know how to pretrain a model. My intuition, for what it’s worth, is that even fine-tuning will wane over time just as the context of windows and the quality of rules adherence improves in these models

Agent Development 
- Crucially, they maintain context across interactions – if a customer steps away and returns, the agent picks up where it left off
- They use advanced large language models (LLMs) and can sense sentiment or frustration, then adjust tone accordingly to stay helpful and **on-brand**

Product:
- Agent SDK - define the agent's goals, skills, guadrails
	- Custom conversation flows as code
	- version control
	- Sophisticated logic 
	- could control AI agent as an extension of theirhardware
- No-code configuratio - agent studio interface to configure and manage the agent withotu code. Teams set up conversatio flows, konwledge base content, define brand voice and guidelines
- Continuous optimization and monitoring 
	- Agent Command Center w tools for testing/monitoring quality/analytics
	- Quality Assurance workflows to review convo transcripts identify areas for improvement and refine agent's responses or decision logic 
	- platform can simulate thousands of conversations to regression-test the agent before updates, helping catch issues or “rogue'
- Trust 
	- “constellation of AI models” orchestrated together, with robust guardrails to ensure safe and accurate interactions
	- jailbreak detection, abuse monitoring, and supervisory AI models

workflow:
- Deep discovyer and goal alignment - business/brand goals
	- Identify high imact use cases like common support scenarios or tasks ripe for automation
	- define success mteric
	- Conduct an AI readiness / intent audit
	- Map out top customer intents by volume / complexity along w data/systems agents need to access
	- Prioritize the right initial use case for quick wins
- Co development - e.g. ramp needd a parterner to scale it for complex tasks
	- Ramp’s engineers were able to write custom journeys with the Agent SDK, while Sierra’s experts handled the underlying AI orchestration and best practices
	- They’re not just shipping features – they’re teaching us to fish
	- embedded in Ramp’s workflow: pairing with their engineers, sharing knowledge on how to design effective prompts and flows, and enabling Ramp to eventually **maintain and expand the agent independently**
- Integration and Testing Support
	- tackle interoperability challenges so the agent can securely pull in customer data or perform transactions across different back-end systems
	- is **battle-tested for real-world scenarios** be
- Launch
	-**phased rollout** – for instance, starting with a small percentage of customer interactions or a limited set of use cases to gather data and feedback
	works with the client to review transcripts, measure outcomes, and fine-tune the agent
- Ongoing partnership
	- define what to measure – e.g. **time-to-resolution, deflection rate, self-serve CSAT, NPS impact, upsell conversions**
	- the AI is failing on certain intents or if satisfaction dips, Sierra’s team will help diagnose whether the knowledge base needs an update or if a new conversation path should be added
	- require ongoing training and tuning, much like a new team member
	- enable the client’s own team (customer support ops, product managers, etc.) to take ownership of that continuous improvement process
- de-risks the project for the customer and accelerates time-to-value. It also forges a strong relationship
Problems AI Agents Form
- Customers traditionally might wait on hold for a support rep or only get service during certain hours 
- unified, omnichannel experience
- Sierra enables companies to **scale up support for peak demand or growth** without proportional headcount increases[sierra.ai](https://sierra.ai/industries/financial-services#:~:text=%2A%20). The AI agents can handle spikes (like seasonal shopping surges or an outage causing a flood of calls) by instantly answering many inquiries in parallel
- cost per contact
- would an AI truly engage members in a caring
- touches that resonated emotionally
	- WW AI agent **handled ~70% of all cases** on its own (a containment rate of ~70%) while maintaining a **CSAT above 4.5 out of 5**, essentially matching human agent satisfaction levels


