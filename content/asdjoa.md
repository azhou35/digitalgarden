north star:
self-managed experience
no document would talk about that gap 
requires investment in hiring dev ersources
being pushed out to 2026 

what we need to deliver
Drew is doing the semester plan 
Never go to NFzs inan ideal world 

short and medium term effot

long term - baremetal 
full baremetal

validating FW we dont have to capacity
plan that the SCHIE Team had presented 
we'd validate in one rack - that still seems risky
question - budget is tight 
Amy Hood - there is no docking 

h100 not goign to work
h200 - coul work 

we just need to bubble up the pain point
we need a full cluster
large cost to internal canary cluster
if we push an update thru - it will bring cluster down - 24 hours 
exercise the costs on both sides
this happened on gb200 
networking team pushed an update - couldnt land a vm on the nodes - took 24 hours to fix this
if we have a number of updates on gb200 that are not validated properly run the risk of these outages
diego to extend that to all 18 clusters 
how much money to 
- we could have to pay for this
- we could ask OAI to pay for this - payin for spares
- we could have cluster 

one final idea; 
using sat13 as a test bed for OAI - we handed it off to them 
we give them a cluster that they can use and we have time to use for validation

give us back sat13 - so no one else grabs it
aditya - push to sell to 3P customers
diego's doc can list out all these documents

think about the $ impact on OAI 
any downtime results in dollar impact

if planned maintenance takes too long it affects our nis 
combine the numbers from finance for when we miss our nis targets - with the numbers that diego has

gap to us losing capacity 
planned power outage - always take a snapshot of NIS afterwards
trying to get 95% of where we weere before

Telemachus lift was chaos - lift it and you dont know what happens 
nfz lift for inglewood last year - a little more insight 
a list of impactful updates
80 impactless updates that were pending
came up w a proces on the fly 
if we lift the nfz - everythings going to roll out at once 
impactful could go at any random time
instead of lifting the nfz - kept the nfz in place for a few more days 
we should take impactful ves first 
issue nfz bypass for 6 ves, let them go thru 
also all these impactful updates and had to roll this back
coordinate all that include impactful ves
everytime we do nfz lift - how many ves impactful vs impactless
depends on the situation
automation bit - bc we had 6 impactful ve's - each one had to be triggered 
the process of lifting a nfz - amy \ mackie had to enter the ve you want to roll out 


buildout 
validation - 2 weeks
if we wanna doing the upgrade on other h100 public fleet clusters to get more confidence in recipe
1 week notoficaiton
next tues 
- at least 2 weeks for validation
- we want recipe living on cluster for 2 weeks

4-6 week mark is miimum 
additional 2-3 weeks to roll out 

h100 buildot should have slowed down 
not being built out - halfway built out 

no more h200s
not a huge risk
often jeff wouldnt teston both 

host os - difference for payload w phx28
mechanism for that update will be different
steps 

30 min later 
