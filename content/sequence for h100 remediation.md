July 21st - 
- CX7 Update - 4 hour 
- IB Switch update - 8 hr
- Return capacity for all other clusters (02, 03)
- Keep capacity for GPC01 

July 22nd - 
- Do GPU Baseboard Repair for GPC01 

July 22nd - 24th 

- We want to avoid having HCA mismatch on clusters and this unexpected behavior 
- So do CX7 all at once in a time window

## Script: 
Hey Saagar, hope your break was good

Thanks for taking the one-off meeting, wanted to focus this meeting on the plan for H100 Remediation. the hardware folks are aiming to start work later this month so wanted to meet with you asap. 

It's a shorter agenda than usual - we really want to focus on the remediation plan. Rameez and I will share our proposal for an impactful window to do software + hardware repair. 

We're planning cluster levll remediation for H100 Inglewood clusters. Decided to start on PHX11. 
So this is a good opportunity to roll out the CX7 / CRD fixes we've been wanting on Inglewood. It'll be a little different than our typical software package - IB Switch/CX7/UFM can be done fleet-wide, and CRD will be done along with the GPU repair. 

## Planned Maintenance Schedule
So let me walk you through the tentative schedule for planned maintenace. 
First callout to make is that these exact dates are tentative. For GPU repair it depends on shipping time that may extend past July 21. So think of this more like a relative timeline. The parts may arrive the 28th or August 4, and we'd have to get back to you on that. 

On whichever day we do GPU repair, lets say July 21, we'll ask you to deallocate PHX11 in the morning. 
 
IB Switch, UFM, CX7 will be rolled out in parallel, allowing teams to roll out IB Switch (8 hour), HostOS/CX7 (4 hours), and UFM. The most important upadate here is HCA - all else should follow natrurally. 

this update going to decouple host OS from HCA updates in the future.

Altogether, software maintenance is 8 hours. 

Then after the IB update, we can return GPC 02 - 07, but keep GPC01 for GPU Baseboard replacement. This would start after the HCA update and is expected to last three days. 

Note that for IB, even if we return capacity before IB switch work is over, the IB fabric is down, so your team cant run any workloads that involve IB interconnectivity. 

We don't have exact confirmation on when the parts for bulk remediation will arrive at the DC. I know this is a longer maintenance window, how much lead time do you guys need before the start of the process? 


Then once CX7 is complete, we can start GPU baseboard replacement. Rameez is on point for that so he can provide more details.

Tangibly, this means if the first GPU baseboard replacement starts July 22, we ask OAI to take down all of PHX11, sometime on July 21st. We need an 8 hour window for IB Switch.  

The reason why we’re not combining CX7 work with the hardware work in a synchronous time window is the issue that comes up when HCA is mismatched across the fleet. In the case that we rolled it out to PHX11 at the same time each GPU baseboard was being released, aka node-by-node, it means we would have to hold back the clusters that aren’t getting work done from use. This would mean OAI could not use the GPC receiving hardware repair, from the time GPU repair work starts (July 22) until the day they get capacity back (August 5).


Why dont we hand back right after IB Switch?
The big thing to consider about handing over the remaining clusters while the switch updates are still straggling is that there could be fabric instability and VM creation failures while there's active upgrades happening.

Tentatively, that plan is for CRD will be rolled out in sequence with the GPU baseboards, so we don’t need to accommodate for extra time for that.