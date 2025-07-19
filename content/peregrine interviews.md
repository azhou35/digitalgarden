
### Decomposition

| Step         | Prompt                                      |
| ------------ | ------------------------------------------- |
| 1. Clarify   | “What is the specific problem and scope?”   |
| 2. Decompose | “What are the system’s moving parts?”       |
| 3. Leverage  | “Where are the bottlenecks or pain points?” |
| 4. Propose   | “What interventions make sense and why?”    |
| 5. Metrics   | “How will we know it’s working?”            |
| 6. Recap     | “What’s the big picture and roadmap?”       |

decomposition is purely just a system design question. But it won't be something like design an existing application. The question is much more vague and you should go over a couple possible design choices, explore each of them talking

creative collection of data of models to generate effective solutions for customer problem
### **What Are Data Models?**

Data models are **structured representations** of how data is organized, related, and flows within a system. They serve as blueprints that define:

- **What data exists** (entities, attributes)
- **How data connects** (relationships, dependencies)
- **How data behaves** (rules, constraints, transformations)

---

## **Why Data Models Enable Effective Solutions**

### **1. Problem Understanding**

**Clear Data Structure = Clear Problem Definition**

- **Example:** In our AML analysis, understanding that "agents" ≠ "people" was crucial
- **Impact:** Proper data modeling prevented false conclusions about money loops
- **Result:** More accurate suspect identification

### **2. Solution Architecture**

**Good Models Guide Design Decisions**

```
Raw Data → Data Model → Solution Architecture → Implementation
```

- **Defines scope:** What can/cannot be solved with available data
- **Identifies gaps:** What additional data is needed
- **Shapes algorithms:** Determines appropriate analytical approaches

### **3. Scalability and Maintenance**

**Well-Modeled Data Scales Better**

- **Consistency:** Standardized data formats across systems
- **Flexibility:** Easy to add new data sources or modify existing ones
- **Performance:** Optimized for query patterns and analytical needs

---

## **Types of Data Models for Solutions**

### **Conceptual Models**

**High-level business understanding**

- **Purpose:** Align stakeholders on what data represents
- **Example:** "Customers send money through agents to recipients"
- **Value:** Ensures everyone understands the domain

### **Logical Models**

**Detailed structure without implementation**

- **Purpose:** Define relationships and business rules
- **Example:** "One sender can have many transactions, one transaction has one receiver"
- **Value:** Platform-independent design that guides development

### **Physical Models**

**Implementation-specific structure**

- **Purpose:** Optimize for specific technology and performance needs
- **Example:** Database schemas, API specifications, file formats
- **Value:** Efficient storage and retrieval for analytical workloads

---

## **Data Models in Different Solution Types**

### **Analytics Solutions**

**Model Focus:** Dimensional modeling for insights

- **Star/Snowflake schemas** for data warehouses
- **Time-series models** for trend analysis
- **Graph models** for network analysis (like our AML suspect relationships)

### **Machine Learning Solutions**

**Model Focus:** Feature engineering and training data structure

- **Feature stores** for ML pipeline efficiency
- **Training/validation/test splits** for model development
- **Real-time vs. batch prediction** data flows

### **Operational Solutions**

**Model Focus:** Transaction processing and system integration

- **CRUD operations** and data consistency
- **Event streaming** for real-time processing
- **Master data management** for system-wide consistency


about their pros and cons then dive into one design.
emergency management 
fire rescue
law enforcement
collaborative problem solving

#### Understand the Problem
*> _“So if I understand correctly, the problem is [X], affecting [Y group], caused by [Z factors]. Are we focused on [prevention/intervention/response]?”_*

- Understand scope - 
	- national/locla/org wide
	- Redesign/improve system
- Are there priorities ?
	- Cost effectiveness, equity, speed
- Who are the primary actors?
	- Responders, citizens, dispatch
	- Vulnerable populations
- Constraints & Environment 
	- What constraints should I envision? Budget/policy
	- Is public trust high or low
- General
	- *Who is most afected by this problem*
#### Decompose the System

- What are the main drivers?
    
- What layers are at play (behavioral, operational, infrastructure, political)?
    
- Who are the stakeholders, and how do they interact?

#### Identify Leverage Points
*Goal is to spot where changes can lead to big improvements*
Brainstorm some high frition pain points
Where is avoidable waste/risk
Behavioral/technical bottlenecks
Trust/timing/coordination failures 


#### Propose Solutions 
- Propose levers and waht the intervention/implementation plan would look like
- List at least 2 - 3

| Type           | Examples                                                       |
| -------------- | -------------------------------------------------------------- |
| Tech           | Real-time dashboards, alerting tools, risk prediction models   |
| Policy         | Regulation, incentives, zoning, mandates                       |
| Infrastructure | Emergency shelters, broadband expansion, wildfire buffer zones |
| Behavioral     | Training, public campaigns, nudges                             |
| Operational    | Better workflows, coordination centers, escalation protocols   |

#### Metrics / Risks
- *What are leading indicators of change*
- *What data would I collect*
- *What blind spots or second order effects exist*
- *How will this affect equity trust and access*
![[Pasted image 20250717160716.png]]

![[Pasted image 20250717160735.png]]

#### Summarize![[Pasted image 20250717160917.png]]

applied to any school 
generalizable 

data model - 
boxes 

public safety Instagram Warrant

activitty

- instagram 
	- know from the data
- social media users
	- account and activity history
	- messages
- detective 
	- to put 
	- returned for one specific person
	- geoloacations 

key concepts or data models:
user
- name 
- user information
- age 
- location 
- geolocation

- Group DM  

any interactions 

post interactions 
- time of interaction 
- type of interaction: comment/like or repost
- owner of the post account receiving the interaction: 
- content of the post iteself
- geolocation 

post:
- time of post
- post: primary key 
- content of the post
- number of likes number of comments
- comments:
- pictures: content 
- 
- geolocation 


post  post interaction
dm 
dm group chat 
user

data models


Dm itself
	- person's dming: 
	- group cha t name 
	- receiving data: [ x y z sd]
	- text 
	- Time of first DM
	- person theyre dm 
	- number of dms
	- content of the dm itself 
	- timing of the dms 
	- receivers: (preethi, emily)
one record

one group chat is suspcious 


- post interctions

post history 
- geolocation 
### Behavioral

- We'll take this time to hear how you can strengthen our culture with a few behavioral questions.
tell me about a time when you displayed X-type questions. Why Peregrine? Why Deployment Strategy? They seem to really index on the quality of their hires – who they are, what they’ve done and why, and what traits/experiences will position them for success at Peregrine.

1. Tell me about yourself 
	1. I grew up in Jersey in the shadow of Bell Labs and attending engineering high school prepped me to be technical from day one. At the same time I had a deep love for humanities—this combination sparked my passion for bridging technical complexity with human-centered solutions. This interest led me to Cornell, where I studied data science while also leading our product development club. I took a lot of machine learning classes and loved the complexity and messiness of data. 
	2. After graduation, I joined Microsoft as a Technical Product Manager on the AI infrastructure team—perfectly timed with Microsoft's deepening partnership with OpenAI. My role focuses on how supercomputing at scale works for OpenAI and Microsoft AI, managing the operational complexity of running these incredibly expensive machines efficiently. It’s business critical - even a minute of wasted time means thousands of dollars Microsoft has to payout to OpenAI. I’ve orchestrated complex update packages across engineering and research teams, interfaced regularly with high-value AI customers to build features for their workload needs, 
	3. Where I am today is looking to build on this foundational experience in a faster-moving environment. I learn best when pushed to my limits, and I'm seeking a place with rapid product lifecycles where I can make a more direct impact. You know Microsoft is great at scale but its still a huge company, with organizational hurdles between a worker and delivering outcomes to the customer. I want to return to what brought me to tech in the first place—building products that make complex processes easier for people.

2.. Why Peregrine
	2. 	1. As someone passionate about technology that serves the greater good, I admire how Peregrine balances innovation with privacy and security to build community trust. you know safety in urban cities has always been a key concern of mine, In high school I created a safety tracking wearable for people visiting a new city, and while an inelegant solution it really sparked a desire to solve for my community.
2. Why Deployment Strategist
***Why Deployment Strategist*** Throughout my career, I’ve been drawn to roles that sit at the intersection of technical execution and customer impact. My experience as a PM at Azure has reinforced what I discovered during my Cornell days building the study partner platform – I’m energized by translating complex technical capabilities into solutions that genuinely solve real problems for real people. What excites me most about the Deployment Strategist role is how it combines three areas where I’ve found my strongest impact: ***hands-on technical work, direct customer engagement, and strategic product influence***. ***The Technical Appeal:*** Unlike traditional PM roles where I often felt the frustration of “influencing without power,” this role puts me back in the driver’s seat with code. My recent work prototyping the Azure copilot reminded me how much I miss that immediate feedback loop of building something tangible. The data engineering component – connecting sources, designing ontologies, building pipelines – feels like a natural evolution of my CS background while solving more complex, real-world problems. ***The Customer Connection:*** My most rewarding moments at Azure have been those direct customer conversations – even the challenging ones with OpenAI where I had to navigate competing priorities and technical constraints. What drew me to product management initially was that user interview process, understanding pain points, and seeing the impact of solutions. The DS role offers this customer intimacy but with the added dimension of being embedded in their environment, truly understanding their workflows rather than just gathering requirements. ***The Strategic Impact:*** Having been on the receiving end of product feedback as a PM, I’m excited to be on the other side – the person in the field gathering authentic signal about what’s working and what isn’t. My experience managing the OpenAI supercomputing operations taught me how much context gets lost when feedback travels through multiple layers. Being able to directly influence product roadmap based on real deployment experience feels like closing a loop I’ve always wanted to complete. ***Why Now, Why Peregrine:*** The timing feels perfect as someone who’s ready to move beyond the “administrative tedium” of traditional PM work toward something more hands-on and impactful. Peregrine’s focus on public safety and law enforcement resonates with my desire to work on technology that serves a greater purpose. The company’s stage – transitioning from product-market fit to scaled deployment – aligns perfectly with my experience helping organizations navigate complex technical challenges during critical growth phases. What ultimately draws me to this role is the promise of “radical autonomy” – the ability to own outcomes end-to-end, from technical implementation to customer success to product evolution. It’s the natural next step for someone who’s learned to bridge technical and non-technical worlds and is ready to do it with more direct impact and ownership.

Career growth
- rlly motivated by the principles of making impact
- in 5 years - i would love to have seen myself in some technical leadership, where i get to navigate high stakes technically challenging business implementations, or bridging strategy with outcomes
- in 10 years - this is gets rly exciting cuz i imagine the quote on quote role i want has existed yet. maybe its workign for myself, maybe its becoming a product leader 

pranav - cornell dec 2022 
joined bain
worked in pe 
autonomous
joined last october
small deployment
emegency management

understand how u work on difficult customers
work w end users
collaborations
general ambitions


general 
time you've worked
built your own process

general theme

### Deep Dive
- What makes you you?
Final interview rounds involved questions about values, goals, motivations, as well as strengths, weaknesses, and important lessons gained from when I've failed.
Why Peregrine? Why this role? Tell me about a time when you've had success in your role. What are your long-term goals? 5, 10 years? What are some high points in your career (where you showed impact and seized opportunity)?

[  

given an example to do something
taking ownership


least maanger 

manager


interfacing w a customer
- recommended ad proposed 


deployment strategist at palantir
autonomy and mission
hiring process
6 months to ramp up
fodyo;;omh yrvjmovs; yp mpmyrvjmovs;

how has peregrine affected ur career 

entrepreneurial mindset
coming 
assigned a deployment
funnels interest on busines side and technical side

keys u in on missue
right by the customer tby the company


how do u feel about constantly client

sitting a room w a piece of work
to distill and translate

palantir has a team that deploys product for each of their customers
they have central product 
deploy it across multi customers
come up w ways to deploy workflows
any thing we build 
most ecdtiin =g tiemes


](https://www.glassdoor.com/Interview/Why-Peregrine-Why-this-role-Tell-me-about-a-time-when-you-ve-had-success-in-your-role-What-are-your-long-term-goals-QTN_5230447.htm)
### Recruiter Wrap up

### Leadership Intro


Hey folks, dropping an update on Planned Maintenance for Inglewood here: 

- ⁠CX7 updates are prioritized for July/August across PHX11/27/61
	- 61 - next week
	- 27 - beginning or end of august
	- 11 - July or early August
- Aligned with OAI for fix-on-fail for H100 Remediation across Inglewood
- Currently rolling out SAT13 CRD + HostOS updates. Saw some issues with internal containers creating before deployment start and customer containers being created mid-deployment

2 buckets

![[Pasted image 20250716132917.png]]