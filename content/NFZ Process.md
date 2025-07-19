im annie 
been working on the nfz and planned maintenance processs for our customers 
going to go thru a sample of how the planned maintenance operations work for our customers today, and open to questions and understanding wat can be applied to openai

first to clarify the way that ive defined certain terms
## UPDATES CLASSIFICATION

- Impactless updates: No anticipated impact (0 sec) on customer workloads
- Impactful updates: Can cause >0 sec greyout, brownout, or blackout impact
- Rebootful updates: Cause host to reboot (e.g., BIOS FW, GPU FW)
- these upadtes are done at the cluster level
## NORMAL OPERATIONS

- Regular maintenance activities take place
- Customer runs training jobs or trial runs for next training model
- Impactful updates require coordination between HPC AICE team and OAI
- Coordination involves finding time to vacate & scale down clusters before updates

## NFZ (NO FLY ZONE) PROCESS

- Activated when OAI runs large training workloads that cannot accept disruptions
- Most commonly used for next large training model development
- During NFZ, all updates across software are postponed
- Updates applied when NFZ is lifted or training job ends
- we ask for some lead time before initiating an nfz, usually a few days to a week's hedas up
- two types of nfz as well - only impactful updates, and nfz blocking impactless + impactful 

- OAI informs HPC team about NFZ requirements for specific clusters
- HPC PMs request approval from Finance and upper leadership
- HPC team informs Customer Experience Team (CXP) to create NFZ in AzDeployer
	- Owns NFZ infra. Team can help with NFZ configuration, bypass, troubleshooting
- PM sends email notification to stakeholders with NFZ details
- OneDeploy team communicates with partner teams (Stager, Orchestration Manager, Policy Engine, Health Store)
	- Stager - Responsible for orchestrating and kicking off PF deployments. Team can help with tracking ongoing rollouts across stages
	- OM - Responsible for applying node-level updates. Team can help with predicting rollout behavior/completion time
- HPC team creates ADO work item to track NFZ and updates

September timeframe
## NFZ LIFT PROCESS
say the training workloads have ran 3-4 months
say mai has ran for a couple of months 
- when the workloads are done running we coordinate a date for nfz lift, and we also ask for a weeks heads up before the date so we can work with our update teams to prep 
- know theres sometimes slippage bc these workloads are hard to coordinate
- process led by HPC/AI team
- Requires coordination with OneDeploy and VE owners
- Process depends on update types (impactful vs. impactless)
### September 2024 NFZ Lift Process Example:

1. HPC/AI team coordinates with OpenAI on NFZ lift timing
2. HPC/AI team identifies all required updates
3. Team determines which updates can run in parallel and creates timetable
4. Deallocate nodes if applicable; each update manually rolled out
5. For deallocated nodes, work with VE owners to expedite rollouts

## PLANNED MAINTENANCE PROCESS

- Occurs between NFZ periods or for pressing updates
- HPC team coordinates with OpenAI (usually requires NFZ lift)
- Special instances include situations like power outages
- During maintenance windows, updates applied to all nodes
- For impactful updates, OAI can:
    - Drain training workloads and apply updates across all nodes, OR
    - Allow workloads to continue and apply updates gradually

### Coordination Process:

- HPC/AI team works with OAI to find suitable time window
- Team identifies pending VEs and corresponding owners
- Team tracks update readiness and duration
- Team works with OneDeploy to plan and queue updates
- Updates sequenced based on dependencies
- Timeline created showing updates, affected agents, and clusters


NFZ LIfts:
* there are moments where we allow impactless upadtes to go thru and manually include nfz lifts 
* Sometimes, critical updates or security patches need to be applied immediately to ensure the stability and security of the system. For example, bypassing the NFZ might be necessary to pre-stage firmware updates or apply critical patches that cannot wait until the NFZ is lifted