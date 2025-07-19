## 7/8
- 3 day maintenance window from July 15 to 22nd 
- Sagar Rawal

- Next week
- h100 wide issue
- start w the issue
- going into whats happening with oai
- whats our plan
- what are we doing
- we've talked about how money we've lost
- start out with the issue
    - work w rameez with the issue
    - jer-ming may be
    - how big is oai deployment what
- he cares about business impact and this will save this money
- how fast can this be done
- he doesn't rlly understand maintenance
- have a slide ready for what our plan is
- here's how we normally do maintenance
- now we're doing this a few nodes at a time
- how is it helping
- what is it helping us achieve overall
- focus on the what and the why
- how can be
- if you need someone else to co-present
- keep the flow chart in the appendix
- next Wednesday
    - let you know when ill have slides ready
- when saagar is back
    - send a message to do a sync
    - do boris sync
    - with rameez
- Align on an overall plan for OAI
- Think about what Sagar cares about - how long will u take cluster away from me
    - 3-4 days
- planning to set up a 1-time call

- worked with Boris and Oswaldo and update owners who can comment further
- typically our software procedure is to take the entire cluster down and roll it out at a cluster level - so the way we define a maintenance duration is from when the entire cluster is deallocated, and when the entire cluster is returned 
- with the hardware updates this fundamentally changes the timing and complexity of operations 
	- as nodes go thru hardware replacement they'll automatically pick up software updates  
- what we can still do at a fabric level with the switch + ufm update 
	- and also change the custom environment to configure for the new os and hca 
	- this has historically taken 8 hours on phx61 
- at a node level 
	- as nodes get to production 
	- they pick up and os and hca upon repave 
	- there's two potential mechanisms of updating CRD - if the FW is not a qualified FW the node can be automatically updated with the CoolVille tool - estimated for 2 hour
		- if the FW is a qualified FW, it still needs the latest fleet CRD, node goes to production so PF agent updates CRD 
	- In either case node picks up OS and HCA - which estimated for 1 hr
- in terms of timing 
- we're gonna need to manage oai's expectations
	- what oai cares about is after they deallocate their cluster, when will they get their entire cluster back? ie if we take 500 nodes away when will they get 500 nodes back
	- care less about node by node return 
	- unlike our normal software schedule it's difficult to estimate how long it'll take to roll out updates 
	- can only get a true estimate after the first time we run it 
	- - generally it seems like a 3 day downtime, where the long pole are the hardware updates
	- or if we better define 
- biggest dependency is to confirm 

fix on failure and cluster remediation
based on priority
- what we can assume is after the last gpu baseboard is replaced, itll take the time of node diagnostics + crd update + hca update
- this is not what we want to share with the customer today
	- first we need to align on the hardware part 
define something can not have a crd fw mismatch, aka qualified version, but not the latest 1,6,1 crd version
everything is done at a node level 
if node comes out 

raj: 
- need another day to explore 
- propose doing 1 cluster within first week 
	- first cluster will be bit slow 
	- 3 days and 5 days per day 


new versions:
- UFM - 1.12.2-2​
- Switch - 3.12.4002
- HCA: 28.44.1210
- CRD: 1.6.1

- two big questions that affect timing 
	- how long do diagnostics take?
## 7/7 
long pole is hardware 
some processes like crd udpates, firmware updates, are automated at a node level.
firmware and all will happen 
while ib switch, config changes happen at a cluster level
they vacate 
the entire cluster will go to ofr
after nodes go to ofr
they have hardware done 
that long pole
as nodes get pushed back node 

disclose that we have to do this work
its going to take capacity of all ur clusters
have to replace hardware
here is a proposal

whether they want do 1/3 or a cluster

go to meeting w customer
we need to do this work 
we need to change
we need to put in new firmware update

> ![[Pasted image 20250707201526.png]]
- many things are tested
- after technician does baseboard 
- itll take 12 hours 

question - 
- we dont know how long node diagnostics flow will take
- coolmile updates will take 2 hours
- Ask Sunita on how long node diagnostics 
- we dont normally do pf agents
- 

we are working thoroughly 

certificate diagnostics phase take around 12+ hours 


if they cant support to ghr 
would we ask oai to deallocate the whole cluster because it cant handle marking nodes as ghr 
anticipate
see how long it takes for them to repair the cluster 

get 200 nodes the first day 
return as Healthy Empty Nodes

The other nodes are in OFR 
after 1 day theyll get 200 nodes
ask aditya 


move the node to UA 
once the 
show up to OAI's side at HEN 
there has to be a way for us to communicate which 



Questions to clarify with boris
- how long does diagnostics take 
- who's doing OFR - using GHR will not work as it has to be an OaaS script they own an dpush for each cluster 
- decision to do it on a node level 
	- traditionally we've done it cluster by cluster 
		- does OAI prefer a node by node update?  Depending on what they want to do wit hteh capacity they would have to take a node out of their job, and then bring one in everyday?
	- ask sunita - up to 12 hours 
		- certification - 4 hours
	- when crd update actually happens
		- within the stage
		- dcmx has diff stages
		- move from ofr 
		- proper fault code
		- from ofr comes back to certification
- ask them to disable the auto-scaler cluster by cluster 
- make sure tha tall the nodes 
- give them green light
- if we make sure whatever capacity is getting crd update is picking up in line new pupdates
- if we have quantitatively validate 
- in the first cluster ensure thats the case
- can ask anastasia - nodes that are not allocatable
- timing perspective
- what is p = 0
- what is the time that customer deallocates
- switching the configuration
- making sure the configuration is in place
- everything will be bounded by node repair
- hopefully all the data will be self driven 
- do one cluster 
- 
## 7/7/25
	
for PHX 11 - 1/3 of gpus are 
IB Switch - hold down entire cluster at beginning and releasing it as updaes are completed
Node-by-node level:
- Hosting environment is set so nodes get cx7 upon coming out of OFR 
- CRD updates would happen after nodes are out of OFR 
-  for CRD two flows: one where nodes are updated in OFR if there is a firmware mismatch, and another where nodes are updated in production if there is no mismatch. The sequence of updates in production needs to be clarified.
- Ask Sunita how long the diagnostics part will take for nodes will go out

oai - 
- does OAI prefer a node by node update?  Depending on what they want to do wit hteh capacity they would have to take a node out of their job, and then bring one in everyday?
- however, how long would that take the team to swap out node by node to complete an entire cluster?

if we go from ua 
if nodes move to ofr

nodes will move to ofr for baseboard replacement
theyll get hardware
theyll get os and hca update
that entire process
take a day 
- the team can handle 200 nodes per day 
- will trickle
- will take 1 cluster 2 1/2 days 

concerns:
- will hca going node by node lead to hca misalignment
- cannot return specific nodes to them 
- what oai sees in ghr is available hand 
- when we move to OFR 
- it goes thru 
- happening on an OFR basis
- definitely need to take 8 hours of impact
- as long as these component updates
- as long as it puts into ofr process
- we dont know how long itll take to update 
- it's going to happen a little by little
- mark nodes as ua
- theyre gonna go thru ofr
- we're gonna return back to 
- we're gonna take 

- from raj
- our action: provide a process and some sort of plan to oai tmrw 
	- on July 15 for 3 days 
		- Day 1 - 200 baseboards replaced
			- For every node coming back, 
		- Day 2 - 200 baseboards replaced
		- Day 3 - 200 baseboards replaced
	- For IB - 8 hours per cluster 
- [H100 Heat Sink Remediation.loop](https://microsoft.sharepoint.com/:fl:/g/contentstorage/CSP_6e2552f4-bc0e-4ca3-a434-b084b4981928/EVJVbVaqu89ImrkFvx783Z8B9Fi8-lMoGNH2jPTFQvBylA?e=bVsecQ&nav=cz0lMkZjb250ZW50c3RvcmFnZSUyRkNTUF82ZTI1NTJmNC1iYzBlLTRjYTMtYTQzNC1iMDg0YjQ5ODE5MjgmZD1iJTIxOUZJbGJnNjhvMHlrTkxDRXRKZ1pLRXJ2end6UjNyVkloUzlXZ01yUkZDRWNucDVyRk44WVFxOFZjMDZHWnJTQSZmPTAxUFZIU0JMMlNLVldWTktWM1o1RUpWT0lGWDRQUFpYTTcmYz0lMkYmYT1Mb29wQXBwJng9JTdCJTIydyUyMiUzQSUyMlQwUlRVSHh0YVdOeWIzTnZablF1YzJoaGNtVndiMmx1ZEM1amIyMThZaUU1Umtsc1ltYzJPRzh3ZVd0T1RFTkZkRXBuV2t0RmNuWjZkM3BTTTNKV1NXaFRPVmRuVFhKU1JrTkZZMjV3TlhKR1RqaFpVWEU0Vm1Nd05rZGFjbE5CZkRBeFVGWklVMEpNTmxWVFdrb3pRa3BCU2pKQ1Jrb3pWMU5OUjFORVEwbElOVTglM0QlMjIlMkMlMjJpJTIyJTNBJTIyMmZhZmRjOTktNmY5Yi00MzkwLTkxNzQtZGE4NTY3YWUyNzEyJTIyJTdE) 
1 w raghu 
1 w schie 
1 w oai 

lots of issues w 
customers have to agree to 3 days of downtime

Remi 

alternatively all the beginning 

dependency w CRD
CRD would happen w 

CRD doesnt have a similar option of updating upon OFR 

node level hosting to 
node pick up os and new hca


send all nodes to OFR
to get piece of hardware uploaded
crd firmware update standpoint
bucket 1 
- node is in ofr and not coming back in production 
- node would be parked in ofr
- we would be updated via automation that we call it cool built 
bucket 2
- if hardware is replaced, go thru diagnostic flows, and thru diagnostic flow all the firmware vitual
- it will not get mismtch it gets hold
- pf agents will push
- nodes pick up new OS
- if node doesnt get parked in ofr 
- we will update it when node gets put into production

do pushing the updates to production 
updates must happen before they return to prodution

pf team 


if os goes first and then firmware goes its ok
if firmware goes first is there any correlation 

still concerned w sat13 

cx7 fw is not updated by the schie fw deployment team
updated 
nodes not coming out of ofr
cx7 update via os 
pcie framework in pcie and gpu 
mismatch between cx7 f
toady we're not changing the pcie firmware in gpu 
spare parts 
concern if baseboard has off the shelf retimer framework

branch this into two parts
if a node is in ofr and theres a firmware mismatch crd will alwyas happen first
if node has no mismatch - this will happen in production
	- what will go first? crd update and host os 
	- if they both run on nodes coming out of ofr is that fine
	- ofr 

for ofr - 

outlining these steps
- still trying to figure out what cna be done at a node by node basis 
- and what can be done at cluster 


most important t hing to figure out is what they look like 
node gets pushed to 
diagnostics
1. if diagnostics flow - if theres a firmware mismatch 
including take action

depends on what the parts coming with 
1. what are the 
2. replace the part 
3. during diagnostics no firmware mismatch
4. ofr - return to production
5. agents to do crd update
6. question is what we run it 

they repair the node and


cool ville path 
- as nodes come out 
- ensure that coolville runs
- ensure that nodes 
- want to really guarantee

as they repair nodes 
nodes will go into diagnostiic flow 
ofr 
IB switches 
if ur using ofr to
once diagnostic is complete - 
it would take 2 hours per node 

vacate 
600 nodes go to ofr
in 6 hours, they would see 20 hours 
in next 24 hours 
200 nodes will come back

next 24 hours
next 200 nodes

200 nodes per day 
open nodes
replace the parts

Diagnostiics - how long ok that will take
Once diagnostics have completed 
If it runs every hour
we cant tell them how long the nodes 


maintenance window
3 day 

nodes pick up new OS and new HCA - when ucomplete OS repave you will reboot the node 

reinforcing the messaging that timeline
making sure the schie teams are aligned with my plans


- 

question
- crd goes first
- does os update go first

- when does cool build happen
- when the node is in ofr
- host os update would happen in repave 


Remi and Annie discussed the challenges of performing a CRD on over 100 clusters, highlighting the reluctance of Byte Dance to provide extended maintenance windows and the potential issues with inference clusters.

.

**Challenges with CRD:** Remi expressed concerns about performing a CRD on over 100 clusters, noting that Byte Dance is only willing to provide a 6-hour maintenance window, and any downtime beyond that would be their responsibility. This creates significant pressure to complete the updates within the limited timeframe.

.

**Inference Clusters:** Annie mentioned that she lacks visibility into the inference clusters and is more focused on training remediation. She suggested sharing the schedule for GPU-based boards to guide the discussion on what is feasible for their teams.

.

**Inglewood Clusters:** Remi noted that they are more up-to-date on the Inglewood clusters, which makes it easier to get maintenance windows, although the stakeholders are not enthusiastic about the maintenance either.

**Training Remediation Context:** Annie explained their focus on training remediation for specific clusters and shared the schedule for GPU baseboard updates, which are planned to be done in phases from July to September.

.

**Training Remediation Focus:** Annie clarified that her focus is on training remediation for specific clusters, specifically 11/27/61, and she does not have much visibility into Byte Dance or inference clusters.

.

**GPU Baseboard Updates:** Annie shared the schedule for updating GPU baseboards, which involves doing a third of a cluster at a time across different clusters from July to September. The updates are expected to start around July 21st.

.

**Heat Sink Issues:** Annie mentioned that Phoenix 11 has had issues related to heat sinks, which has led Sunita to prioritize training clusters first. This prioritization is reflected in the shared schedule.

**Update Process Flow:** Annie and Chloe discussed the process flow for updating the IB switch and GPU baseboards, considering the possibility of doing these updates in parallel to minimize downtime.

**CRD and OFR Dependencies:** Anastasia and Oswaldo explored the dependencies between CRD updates and nodes coming out of OFR, emphasizing the need to understand the sequence of updates to avoid potential issues.

.

**CRD Update Timing:** Anastasia and Oswaldo discussed the timing of CRD updates in relation to nodes coming out of OFR. Anastasia mentioned that CRD updates would happen after nodes are out of OFR, and she is investigating the dependencies with the mods team.

.

**Flow Clarification:** Oswaldo clarified that there are two flows: one where nodes are updated in OFR if there is a firmware mismatch, and another where nodes are updated in production if there is no mismatch. The sequence of updates in production needs to be clarified.

.

**Dependency Concerns:** Oswaldo raised concerns about the potential fallout from updating CX7 firmware before CRD, referencing past issues and the need to consult with engineers to understand the root cause.

**Flow Clarification:** Oswaldo clarified the flow for nodes coming out of OFR, detailing the scenarios where nodes would be updated in OFR or in production, and the importance of understanding the sequence of updates.

.

**OFR Flow:** Oswaldo explained that nodes coming out of OFR would either be updated in OFR if there is a firmware mismatch or updated in production if there is no mismatch. This distinction is crucial for planning the update sequence.

.

**Update Sequence:** Oswaldo emphasized the need to understand the sequence of updates, particularly whether CRD or OS updates should happen first, to avoid potential issues. He suggested consulting with the PF team for clarity.

**Potential Issues with Update Sequence:** Oswaldo raised concerns about the potential fallout from updating CX7 firmware before CRD, referencing past issues and the need to consult with engineers to understand the root cause.

.


**Past Issues:** Oswaldo referenced past issues where updating CX7 firmware before CRD led to a large fallout. He emphasized the need to understand the root cause by consulting with engineers who were involved at that time.

.

**Dependency Clarification:** Oswaldo and Chloe discussed the need to clarify whether CRD has a dependency on OS or vice versa. Chloe suggested checking the list of priorities to determine the correct sequence of updates.

.

**Action Items for Clarification:** Annie and Oswaldo agreed on the need to clarify the update sequence with the PF team and to review the list of priorities to ensure the correct order of updates.

**Diagnostic Flow and Time Estimation:** Annie and Oswaldo discussed the complexity of estimating the time required for updates, considering the diagnostic flow and the need to consult with Sunita for a more accurate estimation.

.

**Time Estimation:** Annie and Oswaldo discussed the complexity of estimating the time required for updates, considering the diagnostic flow. Oswaldo mentioned that the duration of the maintenance should come from the team doing the hardware repair, and they need to consult with Sunita for a more accurate estimation.

.

**Diagnostic Flow:** Oswaldo explained that the diagnostic flow involves several steps, including detecting firmware mismatches and updating nodes accordingly. The time required for these steps needs to be considered in the overall time estimation.


.

**Training Cluster Update Flow:** Send a copy of the process flow to Oswaldo for him to edit and branch into two buckets. (Annie)

.

**Diagnostic Duration:** Ask Sunita how long the diagnostics part will take for nodes going through OFR. (Annie)

.

**Pilot Fish Agent Priority:** Check the list of priority for Pilot Fish agents to determine the sequence of updates for nodes coming out of OFR. (Chloe)

.

**Open AI Maintenance Notification:** Determine the date to notify Open AI about the start of maintenance and ensure all questions are resolved before presenting the plan. (Annie)

.

**Fault Code Optimization:** Discuss with the DC OPS team the possibility of forcing nodes into a specific fault code to ensure Coolville runs during the repair process. (Sean)