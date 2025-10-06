
- technical conversation/experience
	- llms/inference
	- optimization levels
	- how r they used 
	- why r they used
	- scheduled w engineering leadership
"The technical interview will cover your ability to interface with technical stakeholders at Fireworks, including how you'd think through potential solutions. I'd be prepared to talk about your past technical work here too."

### Virtual Cloud
- VPC - dedicated isolated environment within a public cloud w virtual networking 
- Virtualization Foundations Virtual Machines (VMs) are software-defined computers that emulate hardware, running their own OS and encapsulating compute workloads Identical Cloud Oracle . Hypervisors manage multiple VMs on shared hardware, abstracting compute, memory, and storage to enable flexible allocation
- 
### Tradeoffs:
1. latency vs throughput
2. performance vs cost
3. performance vs reliability
	1. optimizing for cluster uptime to inimize disruption to model training 
4. scalability vs reliability
5. flexibility vs optimization 
### Past Technical Solutions 

#### HPC Copilot for Workflow Orchestration
“At a high level, I worked on designing an **AI assistant to orchestrate HPC workflows on Azure Batch**. The problem we tackled was that managing HPC infrastructure in the cloud is complex—users have to provision VMs, configure environments, schedule jobs, and manage resources, which is especially challenging for tightly coupled, compute-intensive workloads like genomics.

Our solution uses **specialized LLM modules** for distinct tasks—environment setup, task creation, and VM configuration—so that users can interact in natural language while the assistant generates structured, executable workflows. We applied **prompt engineering** to ensure outputs are precise and **RAG (retrieval-augmented generation)** to ground the model in Azure Batch documentation, improving accuracy.

The result is a tool that **lowers the barrier to entry for cloud-based HPC**, automating complex steps while preserving flexibility and efficiency. From a PM perspective, I drove the architecture design, defined module responsibilities, and collaborated closely with engineers to explore trade-offs between automation, performance, and resource utilization.


- Engineering tradeoffs:
	- API Engineering Limitations
- Structure artifacts - JSON templates to be consumed by the Batch APIs
	- - **Environment Setup Module**: Installs dependencies, pulls container images, uploads data to storage.**Task & Job Creation Module**: Converts workflow scripts into Azure Batch tasks, defining inputs, outputs, and execution order.**VM & Node Configuration Module**: Suggests optimal VM SKUs and number of nodes based on workload requirements.
1. Proof of Concept with healthcare solutions 
	1. Research labs 

### Batch 
1. driving improvements to compute scalability for enterprise customers running large-scale batch workloads. We started noticing recurring feedback from high-throughput customers—particularly one like **WTW**, a major actuarial firm—regarding **slow job startup times**, even when warm nodes were available
	1. reduce **cold start latency** for jobs, while keeping costs under control. I needed to **rethink the Warm Pool feature**, which pre-provisions compute nodes to reduce startup time, but had platform limitations that made it slow, inflexible, and costly for production users.
		1. At the time, the scheduler would spin up new VMs even if deallocated ones were sitting idle, because it treated them as unavailable. The engineering work was about changing state handling
	2. customer requirements:
		1. balance performance vs cost 
		   automation - use available warm nodes instead of spinning up old ones
		2. wanted to quickly reuse pre provisioned nodes
	3. short term solution:
		1. Let customers **pre-create compute nodes in an “offline but ready” state** — this was something Azure ML already used internally, so we pushed to make it available more broadly.
		2. Update our scheduler to **automatically prioritize warm nodes** before provisioning new ones.
	4. what i actually did:
		1. partner with engineering and platform teams
			1. short term: 
				1. - Repurpose **internal Azure ML technique** → allow **pre-created “offline but ready” nodes**
					1. technical details: understood the bottlenecks for number of standby pools 
			2. long term: 
				1. - - Worked with **Azure VMSS team** on **Standby Pools**: near-instant activation (~50 VMs in 40s), plus ODCR for reserved capacity.
	5. tradeoofs:
		1. performance vs cost - storage vs fast startup
		2. automation vs control
	6. outcome: public preview 
	
2. Common tradeoffs:
	1.Cost optimization vs time efficiency
		also work with cyclecloud
		on prem overprovision for peak usage
		genomics researchers have often complained about unnnecessary spend
 performance vs flexibility
	 1. GPU limitation
	 2. Tightly coupled HPC workloads demand ultra-fast, low-latency networking (e
	 3. Loosely coupled workloads benefit from cloud scale, but may not fully utilize specialized hardware, leading to potential inefficiencies
Technical Guide:
[Technical Guide to Onboarding on Azure HPC.docx](https://microsoft.sharepoint.com/:w:/r/teams/BigComputeChampions/_layouts/15/Doc.aspx?sourcedoc=%7B04CD7EAC-40E4-46F0-8996-194E96997F32%7D&file=Technical%20Guide%20to%20Onboarding%20on%20Azure%20HPC.docx&action=default&mobileredirect=true&share=IQGsfs0E5EDwRomWGU6WmX8yAQiKow9ntGwBj4_pLb4APlA) 

#### Node State Management 
1. High level concern from OpenAI is that they wanted their nodes as soon as they were updated - in tension with our current system - also kept landing vms during planned maintenance times
	1. Our level of support was highly manual and we've never worked with this user scenario 
		1. Evaluated options: 
			1. node locking 
			2. node pinning - can we pin these jobs to specific nodes?
				1. at the VMSS level
			3. node "ua" state 
	2. “I worked on improving planned maintenance for OpenAI’s dedicated GPU clusters. Historically, every update required taking the entire cluster offline, even if only part of it was being updated, which created costly downtime for OpenAI and inefficiency for us.” “The underlying issue was that nodes could only be released back to OpenAI once the entire cluster finished. Even if 80% of nodes were healthy and ready, they sat idle until the last 20% were updated. This was due to the lack of a mechanism to lock, track, and gradually release nodes safely.” “I explored different approaches with engineering partners:

– Timestamp-based availability (delaying release of nodes until they were verified).

– Introducing a new ‘hard unavailable’ state in the fabric allocator.

– Node locking: programmatically locking nodes under update so they can’t be allocated, and releasing them as soon as they pass verification.

I worked with the allocator and VMSS teams to assess trade-offs — short-term feasibility, engineering lift, and operational risk.”
1. Streaming node-by-node updates for FW 
	1. Work w the FW team on how we can blast these updates
	2. Less of an engineering problem than a technical implementation 


### Planned Maintenance API on BareMetal

- OAI is actually mving to a baremetal use of cloud to cut out virtualizations altogether
- a recurring request is for full customer control over their maintenance updates - right now its highly disruptive with human oversight 
- before these requests were lost on deaf ears but i bridged the gap to Working w our maintenance orchestration platform team, OneDeploy, to build a customer-controlled API for all supercomputers. 
- The gap is that customers need **more control over update timing, visibility into impact, and failproof recovery**, but existing processes don’t support selective rollout or rapid, safe cluster-wide updates
- The Fairwater API is built around a new resource provider (RP)
	- - **Stop BMI API**: Halts the node without deallocating it.
	- **Reimage BMI API**: Refreshes the node while in a stopped state.
	- **Restart BMI API**: Brings the node back online post-update. 
- These APIs are coordinated via the **AzNOM API**, which notifies the control plane (e.g., Anvil) before rebooting. 
- Work across engineers who own these different updates
- Gaps:
	- Validation has only been done on VM nodes. BMI testing is pending due to lack of healthy stage nodes
	


notes:
- fireworks is fundamentally a driver that optimizes for the latest model performances for the cloud
- hyperscalers throw more money and ppl at something

Small expert models as key components of the future of AI systems 


Open AI has requested access to telemetry and device CLI to accelerate debugging and diagnostics. The request covers the following: 

- Some switch configurations (e.g. SRv6 routes) defined by OAI 
    

- APIs to disable suspect switches/links 
    

- ssh read-only access 

- self-serve packet capture 
    

- Direct telemetry streams for counters, syslogs (i.e. not through kusto)