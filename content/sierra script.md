

## Slide 1: Expanding Sierra Agent

**Thanks for joining me today folks. I'm an Agent Strategist from Sierra and Today we’ll be leading a workshop with the goal is to understand the customers goals and guide them to how the Sierra agent can help them.
## Slide 2: Agenda (1 min)

Our agenda today is to start with where we last left off with our initial agent.
## Slide 3: Customer Recap: (2 min) 

First, I want to celebrate our wins and reflect what the agent has helped us achieve. 

We’ve gotten some quick wins with the fundamental agent, which today helps with what we refer to as Level 1 tasks like FAQ, account look ups, and routing. Assuming we have access to the Agent SDK here.  

I’m going to assume some core metrics we’ve hit across resolution time, Customer satisfaction, and the amount of volume we support. Today, your agent supports ~20–30% of inbound volume on the website. That’s a strong baseline — we’re seeing containment on FAQs and account lookups. But theres a lot of other actions we can capture here. 

Overall from our last chat our premise is to increase customer satisfaction, increase cost protection, and decrease time to service. The overall north star is to create a better customer experience in a low-cost manner. 

*I’d love to ask you: Which of these metrics matter most to you next quarter?*

## Slide 4: Opportunities (5 min)

At Sierra we want to be with you every step of the way. First I want to focus on what the agent enables the customer to do and how we can expand across the customer journey, and move up and down the interaction funnel. 

1. We can start with the pre-purchase behavior, and assist the customer in their experience choosing and browsing for your product. It’s an important touch point to drive sales, clarify questions, and influence purchasing behavior. For retail, if a user is browsing different clothing options, your agent can recommend options.
	1. Business outcomes include converting browsers into buyers, nudging their purchasing patterns, help with cart abandonment and new plan sign-up to increase lead capture.

2. Usage is another important stage - it’s where a customer has chosen your service, and perhaps needs help troubleshooting problems. For travel, if a customer needs to change their flight details, it’d be a huge win to be able to take this off a human’s hands. 
	1. Business outcome here would be reducing churn and improving customer satisfaction. 

3. Finally there’s post-purchase behavior. Where after a purchase is made, an agent can facilitate actions like returns / refunds, subscription management. The business outcome we drive towards here would be improving customer experience, reducing churn, and improving renewal rates
I’ll pause here and would love to hear if there are significant problems your customers have faced within these bucket. We can brainstorm here what the problems have been for your business in particular. 


- *What 3-5 transactions would remove the most pain this month*?

## Slide 5: Tech Opportunities (2 min)

From the Sierra POV, there are three levers we can pull to expand the functionality of your agent. 

First category is the medium that the agent communicates with the customer. In its current state we use a web UI, but voice / text messages have incredible potential here. Voice is low friction and highly accessible and can be a better way of conveying empathy during stressful situations. 

The next category reframes these agents, where they go from reactive to proactive. This unlocks a whole new dimension of value - how can we troubleshoot problems before the customer even asks us? An example here would be proactively recommending products they may like, or recognizing strange billing patterns and providing a heads up.

The final category is context awareness. Our agents can maintain context across interactions – if a customer steps away and returns, the agent picks up where it left off. In the framework of the customer journey, this is duly helpful In this way they can also sense sentiment and frustration. 

Now, based on how we feel about the previous user scenarios is how we decide to deploy these features. 

## Slide 6: Evaluation (5 min)

Given all the directions we can move into, we can also create an evaluation framework. 
We want to have some high ROI impovements as well as choose scenarios with long-term value.
Using this simple prioritization exercise there are a couple of examples of use cases from the previous slide.     

Value is defined by, based on which business outcomes we anchor towards, 
Effort can be defined as:
- how many systems/backends does the agent need to access? 
	- does it require access to sensitive APIs? like billing?
- what is the security/data provenance needed here? 
- what are the scale needs we need to anticipate? 
- what is the adjustment to the human workflow we need to account for here 

*What are the most important business outcomes for you this quarter?*
*What are other concerns you may have in terms of engineering effort here* 
*What is a high value, high effort action we take?
What are a couple high value, low/medium effort actions we take?*

## Slide 8: Building Plan (4 min)
Hey - skipping ahead this is what the building plan and its 
Talk a little bit about the decision here
1. Co-develop
	- To enable the solution plan which APIs may we need?
	- e.g. integration with our backend database, with your customer dashboard 
	- What's important here is that we're not just shipping features - we're teaching your team how to fish
		- *How does your team want to develop this with us?*
2. Simulate / QA
	1. What guardrails do we want to put in place?
	2. Define thresholds for success 
3. Pilot
	1. We'd do a small pilot with maybe 10% of your cohort. Deploy your agents
	2. Review convo transcripts identify areas for improvement and refine agent's responses or decision logic
	3. It's an ongoing process
		1. If AI is failing on certain intents or if satisfaction dips, Sierra’s team will help diagnose whether the knowledge base needs an update or if a new conversation path should be added
4. Launch
	1. Anticipate scale concerns and peak demand / growth
	2. Here is where you can let us know what scale concerns and seasonal trends you are aware of.
	3. Ensure agents can answer many questions in parallel
	4. Consider how your team can maintain and continue to expand this agent and build it into our workflows.

*Questions - what do you feel about the guardrails/sizes specific to your business? What unique integrations do we want to be mindful of?*
## Slide 7: Decision (2 min)

I want us to walk away with a decision log and feel good about our next phase.
The decisions we want to walk away today with:

1. First is the top 2 - 3 use cases we want to prioritize here.  That'll help us agree on timeline for scoping solutions out, build out the proof of concept. 
	1. My prior is that what is high impact and low effort is in the usage. What is high impact and high effort is help with billing support, which is a complex user journey that usually leads to churn and friction. 

*Lets go with X Y Z*.

Thinking out loud, we'd prob need 4 - 8 weeks to do X Y Z.

Based on our evaluation framework earlier, this is where I lean. 