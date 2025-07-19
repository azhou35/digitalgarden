so i think we're aligned on the overall goal with planned maintenance is really to batch all of the updates within carefully coordinated maintenance windows
i added info in the playbook on how this rlly works on the operational level 
how our team works with yours 
so  the role that hpc ops team does is serve as the interface between our update owner teams with our MAI ccontact


we work hand in hand with mai, in order to coordination and determine a maintenance window
there are constraints from mai' side - such as when mai is running training workloads
also from our team, we dont do maintenances over the weekend and strive not to do on friday 

what our team really does is be the conductor of these updates, ensure that we give fair estimates for maintenance windows, sequence things to reduce end to end time, and ensure we're giviing a fair amount of capaciy back relative to what we start with 

list of contacts here

i outlined a high level process - though it may be quite granular as itr represents what ops ppl do on ur end 
- a couple weeks before planned maintennace 
- we align on a maintenance window
- usually the need to take in updates is for example 1.1 firmware addresses a big pain point you're having with your workloads, or you ned nvlink updates to address crashes 
- once we start th eplan for one update, we see which other updates to include
	- cuz the goal here is rlly reduce the # of maintenance windows, bc each window is disuptive
- hpc team coordinates with internal teams to figure out types of updates, duration of each update, sequence parallelization
	- e.g. crd take anywhere from 5-12 hours

day of maintenance
- we'll create an icm and a bridge for our maintenance event - high priority 
- hpc team works with someone from mai to scae down their workoads and deallocate from nodes 
- we''ll take a snapshot of the starting nis (so of the capacity we take, how many nodes are available)
- each update team is queued up for their starting time
- and we'll orchestrate across team 
- during maintenance well update your team if we're running behind, ahead, or on schedule 
- often times start to fail at the very end, so we'll send a time
- after maintenance wraps up, azure takes a snapshot for avail nodes

-
nfz 
