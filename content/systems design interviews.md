
1. Which database to use?
	1. Relational database
	2. Non relational database
		1. if app requires super low latency
		2. data is unstructured
		3. only need to serialize and deserialize data
		4. need to store a massive ammount
2. Vertical scaling vs horizontal scaling
	1. Vertical - scale up - process of adding more power (CPU, RAM, etc) to servers
		1. Has a hard limit - imposible to add unlimited CPU and memory to a single server
		2. Lacks failover and redundancy
	2. Horizontal - scale out - scale by adding more servers into your pool of resources
3. Load balancer evenly distributes incoming traffic among web servers defined in a load balanced set 

Database replication
- Master database generally only supports write operations
- Slave database gets copies of the data from master database

Cache: 
- temporary storage area
- better system performance
- expiration policy
- consistency
- mitigating failures 

CDN
- network of geographically dispersed servers used to deliver static content
- serves cache static content like images/videos/CSS/JS 

Stateless web tier - move state out of we tier and store it in persistent storage like  a relational database

Data pipeline:
- moves data from source system into centralized store or analytics platform for use by dashboards/models
- includes stages for extract data, transforming it, and loading it into a target

key components:
- sources (databases/files/apis/processing)
- data types: batch files (CSV/JSON), transactional data (NoSQL) or streaming data (event logs, message queries)
- architecting pipelines requires choosing patterns that match these types and meet requirements for freshness and throughput

ingestion patterns:
- data virtualization 
	- query live data across sources via a virtual layer (without moving it) - offers near real time access but suffers source limitations or latency and is not ideal for historical analyses
- ETL:
	- data is extracted from sources, transformed (cleaned/normalized) on separate ETL server, then loaded into DB 
	- user friendly but creates bottlenecks
- ELT:
	- raw data is first loaded into a data platform like a cloud warehouse or data lake and transformed later 
	- more flexible and can handle larger volumes
	- increased complexity - multiple tools must be orchestrated and governance is more challenging when using disparate systems
- streaming:
	- for near real time needs: data flows continously - events are streamed into messaging systems like Apache Kafka / AWS kinesis than processed and stored
	- often run in parallel to batch pipelines
	- Kafka is common for streaming
	- advantage is low latency insight 
	- but adds complexity around exaclty once delivery and data quality 
data storage
- data warehouse - cleaned structured data optimized for analytics - high performance queries and built in bi tools 
- warehousess enforce schemas and acid transactions and makes them ideal for business reporting
- data lake - uses low cost scalable ojbect storage to sore raw data of any format
- data laekhouse: merges a warehouses structure w a lakes flexibility
	- stores all data on cheap object storage but adds a metadata for indexinb
data processing and orchestration 
- data processing - apache spark/aws glue/google dataflow to handle large scale batch jobs 
	- suited to heavy transformations and aggregations over historical data
	- batch pipelines run on schedules
- streaming processing
	- message queries
- serverless processing:
	- cloud services like aws lambda/google cloud function can run etl on demand
- SQl engines
- orchestration
. In multi-cloud scenarios, you might replicate data across clouds or use cross-cloud tools (like Apache Beam or Kafka)

- dashboard is a isual interface to explore the processed data
- two categories:
	- operational - show real tme metrics like time-series or log databases like Prometheus and tools like Grafana to query metrics from any cloud provider's monitoring to give a unified view across AWS, Azure, GCP in one pane
	- business analytics - show businss insights that query a data ware house or cube via BI toools ( Tableau, power bi, looker) taht runs on a schedule
- important to decide if dashboards need live data or near real time is acceptable
![[Pasted image 20250909103110.png]]

orchestration is a central hub that coordinates workflow across various systems. Pipeline metadata captured in orchestration systems provides details of the workflow schedule, system and data dependencies, configurations, connection details, and much more.

Step 1 - Understand the problem and establish design scope "Why did the tiger roar?" A hand shot up in the back of the class. "Yes, Jimmy?", the teacher responded. "Because he was HUNGRY". "Very good Jimmy." Throughout his childhood, Jimmy has always been the first to answer questions in the class. Whenever the teacher asks a question, there is always a kid in the classroom who loves to take a crack at the question, no matter if he knows the answer or not. That is Jimmy. Jimmy is an ace student. He takes pride in knowing all the answers fast. In exams, he is usually the first person to finish the questions. He is a teacher's top choice for any academic competition. DON'T be like Jimmy. In a system design interview, giving out an answer quickly without thinking gives you no bonus points. Answering without a thorough understanding of the requirements is a huge red flag as the interview is not a trivia contest. There is no right answer. So, do not jump right in to give a solution. Slow down. Think deeply and ask questions to clarify requirements and assumptions. This is extremely important. As an engineer, we like to solve hard problems and jump into the final design; however, this approach is likely to lead you to design the wrong system. One of the most important skills as an engineer is to ask the right questions, make the proper assumptions, and gather all the information needed to build a system. So, do not be afraid to ask questions. When you ask a question, the interviewer either answers your question directly or asks you to make your assumptions. If the latter happens, write down your assumptions on the whiteboard or paper. You might need them later. What kind of questions to ask? Ask questions to understand the exact requirements. Here is a list of questions to help you get started: • What specific features are we going to build? • How many users does the product have? • How fast does the company anticipate to scale up? What are the anticipated scales in 3 months, 6 months, and a year? • What is the company’s technology stack? What existing services you might leverage to simplify the design?

Step 2 - Propose high-level design and get buy-in In this step, we aim to develop a high-level design and reach an agreement with the interviewer on the design. It is a great idea to collaborate with the interviewer during the process. • Come up with an initial blueprint for the design. Ask for feedback. Treat your interviewer as a teammate and work together. Many good interviewers love to talk and get involved. • Draw box diagrams with key components on the whiteboard or paper. This might include clients (mobile/web), APIs, web servers, data stores, cache, CDN, message queue, etc. • Do back-of-the-envelope calculations to evaluate if your blueprint fits the scale constraints. Think out loud. Communicate with your interviewer if back-of-the-envelope is necessary before diving into it. If possible, go through a few concrete use cases. This will help you frame the high-level design. It is also likely that the use cases would help you discover edge cases you have not yet considered. Should we include API endpoints and database schema here? This depends on the problem. For large design problems like “Design Google search engine”, this is a bit of too low level. For a problem like designing the backend for a multi-player poker game, this is a fair game. Communicate with your interviewer

Step 3 - Design deep dive At this step, you and your interviewer should have already achieved the following objectives: • Agreed on the overall goals and feature scope • Sketched out a high-level blueprint for the overall design • Obtained feedback from your interviewer on the high-level design • Had some initial ideas about areas to focus on in deep dive based on her feedback You shall work with the interviewer to identify and prioritize components in the architecture. It is worth stressing that every interview is different. Sometimes, the interviewer may give off hints that she likes focusing on high-level design. Sometimes, for a senior candidate interview, the discussion could be on the system performance characteristics, likely focusing on the bottlenecks and resource estimations. In most cases, the interviewer may want you to dig into details of some system components. For URL shortener, it is interesting to dive into the hash function design that converts a long URL to a short one. For a chat system, how to reduce latency and how to support online/offline status are two interesting topics. Time management is essential as it is easy to get carried away with minute details that do not demonstrate your abilities. You must be armed with signals to show your interviewer. Try not to get into unnecessary details. For example, talking about the EdgeRank algorithm of Facebook feed ranking in detail is not ideal during a system design interview as this takes much precious time and does not prove your ability in designing a scalable system

tep 4 - Wrap up In this final step, the interviewer might ask you a few follow-up questions or give you the freedom to discuss other additional points. Here are a few directions to follow: • The interviewer might want you to identify the system bottlenecks and discuss potential improvements. Never say your design is perfect and nothing can be improved. There is always something to improve upon. This is a great opportunity to show your critical thinking and leave a good final impression. • It could be useful to give the interviewer a recap of your design. This is particularly important if you suggested a few solutions. Refreshing your interviewer’s memory can be helpful after a long session. • Error cases (server failure, network loss, etc.) are interesting to talk about. • Operation issues are worth mentioning. How do you monitor metrics and error logs? How to roll out the system? • How to handle the next scale curve is also an interesting topic. For example, if your current design supports 1 million users, what changes do you need to make to support 10 million users? • Propose other refinements you need if you had more time. To wrap up, we summarize a list of the Dos and Don’ts. Dos • Always ask for clarification. Do not assume your assumption is correct. • Understand the requirements of the problem. • There is neither the right answer nor the best answer. A solution designed to solve the problems of a young startup is different from that of an established company with millions of users. Make sure you understand the requirements. • Let the interviewer know what you are thinking. Communicate with your interview. • Suggest multiple approaches if possible. • Once you agree with your interviewer on the blueprint, go into details on each component. Design the most critical components first. • Bounce ideas off the interviewer. A good interviewer works with you as a teammate. • Never give up. Don’ts • Don't be unprepared for typical interview questions. • Don’t jump into a solution without clarifying the requirements and assumptions. • Don’t go into too much detail on a single component in the beginning. Give the high level design first then drills down. • If you get stuck, don't hesitate to ask for hints. • Again, communicate. Don't think in silence. • Don’t think your interview is done once you give the design. You are not done until your interviewer says you are done. Ask for feedback early and often.