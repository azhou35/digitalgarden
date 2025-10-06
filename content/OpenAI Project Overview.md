1. H100/H200 Planned Maintenance
2. DC Power Maintenance Shutdown 
	1. for PHX62 
	2. GB200s 
3. GB200 planned maintenance

In general, we're looking for evidence of the following:
- Ability to define clear, appropriate goals based on business and product context
- Ability to devise and implement strong, thoughtful technical solutions to complex problems, from high-level architecture to key implementation details
- Communication, about technical topics as well as product/business/organizational context
- Programs experience and execution path. How did you push things forward and execute at high bar
- Walk through technical project or program. Slides or visuals would be great. Dive into technical details AND execution map. What was YOUR contribution?
- Show architectural diagrams
- Create frameworks and structure and showcase you were in the weeds and your involvement
- Need to showcase driving the programs end to end

Org content:
- communication with openai
- program and execution path
- operating a standby que 

what is a nic
networking 


Complex, cross-functional program I led 
1. Company goals: 
	1. timing (X amount of days)
	2. capacity of nodes back in service
	3. planned maintenance 
2. Soft power down vs hard shut down
	1. Rollback / back up plans 
3. Testing graceful shutdown script 
	1. NSD / Anvil Concerns 
		1. nsd must be explicitly disabled before powering down gb200 racks - if left active it interferes w node recovery and leaves nodes in a HI state 
		2. anvil = automation framework used to manage node states and repairs across GB200 clusters  move nodes to HI even when they're fully powered off 
			1. this is bc it would interpret lack of response during a boot as a fault -> trigger automated state transitions 
			2. if anvil is active during re-energization it can block nodes from returning to service 
		3. NSD state 
		4. repair coordination - turned off to prevent conflicting actions w scripted operations 
4. Callans = second-gen heat rejection unit necessary for deploying GB200s into existing Ballard class data centers
	1. together gb200 <> callan racks form a closed loop liquid cooled system that does not require retrofitting
		1. new generation liquid cooling rack by providing 125 kW of cooling power 
	2. 
	3. scale concern
	4. resolving whether to chasedown 
Tenant Manager = Landing VMs
- Fabric controllers control an entire clusters resource
	- FC Shell - runs ltos of software more than just TM
	- managing tenancy on nodes 
	- 
3/9s = 99.9% =? downtime /yr is 9 hours 
