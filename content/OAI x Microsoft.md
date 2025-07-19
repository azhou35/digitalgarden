Joining this project via [[Planned Maintenance for OAI]]
Relevant Docs:
* [Supercomputer Maintenance Exp.docx](https://microsoft.sharepoint.com/:w:/r/teams/DMESpecStore/_layouts/15/guestaccess.aspx?share=IQHvFhtPz-LVR6esNO76WHvSAcBs9_FA2JgIl-XsPLafhrc&fallback=1)*
* [OAI_Painpoints_TrainingandApplied.docx](https://microsoft-my.sharepoint.com/:w:/r/personal/emboyd_microsoft_com/_layouts/15/Doc.aspx?sourcedoc=%7BFD45D49C-0CC7-4DFD-90A7-8C679A3248E5%7D&file=OAI_Painpoints_TrainingandApplied.docx&action=default&mobileredirect=true&share=IQGc1EX9xwz9TZCnjGeaMkjlARpLESAJsJ9MZO2g8RKcyWs) 
* [Telemachus Update Process_NVIDIA_Edits.docx](https://microsoft.sharepoint.com/:w:/r/teams/argos_inglewood/_layouts/15/Doc.aspx?sourcedoc=%7B64C6F31F-44C9-4191-A68A-ECE92971C8CD%7D&file=Telemachus%20Update%20Process_NVIDIA_Edits.docx&action=default&mobileredirect=true&share=IQEf88ZkyUSRQaaK7OkpccjNAUDCSQ0OMILNenOmvIigO-Y) 
OAI is frustrated with its Azure Platform experience. 

**Problems with Training Workloads:**
* 10-15 crashes per day (10-20 minutes)
* 1 node failure -> interrupts entre job 
* NFZ prevents updates from maintenance and update operations 
* Architecture: running on dedicated clusters using VMSS (no abstraction), self-hosted K8s (no AKS/Batch/CC/SLURM), custom guest image
* 95% NIS, 90%+ job uptime, MTTR 2 Day
* Expensive workload that is sensitive to even one single interruption (is this sustainable??) 
	* Superncomputers across multiple clusters to run neural network workloads 
	* Back-end network (IB) and compute (NVIDIA GPUs)
* Themes of problems:
	* Availability
	* Reliability
	* Recovery 
		* O(1) recovery for nodes
	* Maintenance
		* Concoction of updates that are pending have never been tested together and this creates issues.
			* Monitoring the number of rollouts & progress that have been blocked during an NFZ period. See if there is an ability to test them together
			* Working with Core/OneDeploy Team
		* Identifying impactful vs impactless updates
		* Need to prevent customers from scaling nodes under maintenance
			* Mark nodes as being under maintenance so customer cannot scale them
	* ![[Pasted image 20241031130212.png]]
	* Observability 
#### Differences between OAI and our General Purpose Compute Fleets
![[Pasted image 20241031125911.png]]

### Business Impact
* Even 10 seconds of downtime can lead to 10 hours of delay 
* Though models leverage checkpoints to track progress of a job, we guarantee 95% node availability


#### Cluster Summary
![[Pasted image 20241031131236.png]]