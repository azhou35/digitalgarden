
## Hiring Manager Interview - 45 min

The Hiring Manager will dive into your background and work experience. They will be particularly interested in how you’ve demonstrated agency and collaborated with others on past projects. 
How to prepare 
● Review the job description and prepare questions to ask 
● Consider how the role aligns with your professional interests and career goals

Demonstrated agency:
- Really learned to thread the needle of Azure. For example when a customer asked us for 

TPM Role:
- I view it as a T shaped generalist. how do you move up and down the ladder of abstraction and work w the right teams and right interfaces to drive towards an outcome? 
	-  high leverage to be able to see the full picture while maintaining depth in the specific problem
	- highly customer facing, which means you're biased to communicate 

Customer interactions:
- Often times my touchpoints are with the engineers building / integrating the service on their end 
- When I was selling a data processing service we worked with our sales team to engage top customers within a vertical
- I tracked usage 

Professional interests:
- Pretty multidisciplinary set of interests here
- I've done projects where I work with life science researchers and pharma companies on integrating copilots into their research pipelines. Been privvy to the importance of HIIPA compliant data.
- Worked in financial services industry on some of their highest powered data-processing pipelines. 

- Professional goals:
	- Ultimately my goal is to build something deeply impactful that helps the people around me. I want to use my craftsmanship and drive towards an outcome
	- I develop an army swiss knife of tools - customer interaction, building, strategy, ops, and product. As a T-shaped generalist I'm able to tackle any problem and see it from all dimensions. 

Questions:
- I'll turn it back to you: how do you see a career in this role evolving? Does it lead to becoming a higher leverage Agent strategist, a customer facing deployed folk, etc.
- How do you design solutions that align towards business outcomes?
## Execution & Engineering Partnership - 45 min

We’ll evaluate your ability to work cross-functionally with engineering teams to drive successful product outcomes. Expect discussions around execution, trade-offs, and decision-making. 
How to prepare 

● Think critically about metrics, data, and structured problem-solving 
● Be ready to discuss how you collaborate with engineering teams 
● Prepare examples of how you’ve navigated technical feasibility constraints

Technical feasibility constraints:
- One constraint we've seen is how fast we can roll out updates to a supercomputer at scale. we can return capacity. Imagine you're in a high pressure situation where we do maintenance for these clusters, and every minute wasted is thousands of GPU dollars lost.
	- So we work across a team of site reliability engineers as well as SMEs in parts of the GPU stack, like FW/OS/networking parts. 
	- We need to make product improvements into our orchestration plan to be able to return the cluster faster.
	- One specific constraint was a feature we needed to hold down all nodes under maintenance. We had a feature known as "UA" that had a rate limit that wasnt good for our scale. 
	- So i worked on enabling another feature that could design with our API call rate in mind - 2k nodes within 5 minutes. We sketched out a short-term and long-term plan, established an onboarding plan, and tested the API on a test cluster we had before deploying onto the customer. 
	- Reduced time by 20 % 

- Collaborated with engineering teams

What is a technical project you worked on?
- I built a multi-agent system proof of concept for our genomics customers. Our agent takes the workflow and its description to create an Azure executable script for running on Azure Batch. This agent uses a RAG model for retrieval, grounded on Azure documentation, batch documentation. New tool designed to create and execute HPC workloads on [[Azure Batch]] using smaller, more specialized LLM modules. In tandem with sales and research teams, I led an end-to-end sprint to prototype a multi-agent Copilot that would reduce the friction HPC researchers had when using our platform for their genomics workflows, accelerating their time to execution
	- Reduced their workflow time by 20% 

Engineering team partnership
- Worked closely with our Batch dev team to set up the telemetry of our dashboarding service.
- A big problem is in our old system we were losing 30% of data loss
- Debugged this and saw it was because of the way we were ingesting data 
- Set up a proper pipeline of data ingest, ETL transform, storage, SQL database, dashboard 
## Collaboration & Communication - 45 min

This interview will focus on the aspects of management and internal process driving from your collaboration with stakeholders in external teams, and internal partners. We’ll be testing for your ability to clearly and effectively communicate and work with different personas to achieve positive business outcomes. 

How to prepare 
● Prepare by thinking of past examples of your process and methodology around driving improvements within your organization through collaboration and partnership.


1. Previous time I drove improvements:    
	1. One high leverage improvement I drove is our planned maintenance program.
2. Challenges you had to overcome
	1. A big challenge was the relationship between our engineers and customer. Before I stepped in it was devs intefacing directly - which led to the customer pushing for more work and the team having extremely low morale as they signed up for more they could handle. 
	2. I had to strive to restore trust across our team - restore the customer's trust in our ability to execute, as well the individual dev's trust in leadership.
	3. This involved adding more structure to the program expectations - better tracking and sharing progress on big feature requests, better dashboards. This also required difficult convos w the customer - how to respect our team.
3. OpenAI, internal engineering 
	1. I work on a team thats essentially a support team for a high value customer - OpenAI - where they expect us to work around the clock, 24/7, for engineering support to answer questions and triage bugs. This has led to a low team morale in our org and churn as we push ourselves to deliver the best experience, as well as fears for what happens when the supercomputer scales. I see this as an allegory for customer support -  its something that is uniquely painful to all involved. 
    
4. How do you communicate w devs?
	1. Structured & precise - clear specs, capture open questions
	2. Contextualize requirements
	3. Two-way collaboration
	4. Adapt to their preferred way of consuming information

5. How do you communicate w customers
	1. Listen more than you speak - understand their pain points before jumping into solution
	2. Avoid technical jargon, lean on business impact
	3. Transparency & trust - share risks/delays early, make progress visible
	4. Working with customers on a genomics copilot - having low ego in hearing their current problems and not being prescriptive about how we can help. Leaning into the specific metrics they value - research performance 
	5. E.g. there was a time they repeatedly asked for a digital AI workflow that our copilot didn't support that was very unique to them. Important to have discernment and think about the general dig bio space and if 
6. How do you partner with stakeholders
	1. We partnered with the sales team who own the customer relationship to reach out to potential partners for our copilot. 



