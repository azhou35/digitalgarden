modern 
security review in hpc pack
- writing directly to stroage
- didnt have an api that schematized
if we were using old app insights structure could still be vulnerable
- is this architecture is approved 
- could be hard to invest 
- cyclecloud owns app insights and writes into storage that it owns
- if theres no api connection between 3rd party compromised data in storage
- vulnerable to architectural technique
- if app insights has an api thats sanitized
- add sas keys and shared keys 
- post directly storage account
no sanitization of data
- leak pii
- app insights
- leak of storage

api service
writing directly
easier thru api
use app insights sdk
get teres an app insights token
owned by app insights
actual control - some infra that microsoft owns has an api surface
data flows thru api surface
as opposed to polite atifacts

architecture: 3P data would go to 3P data estates
no conflict
if their data was compromised their problm
if data starts from 3P -> 1P
if we're making the jump from 3P->1P
few times an exception

put a list of to dos
AMA
transition for 3P -> 1P
Observability meeting series - struggled w 3P -> 1P for quite some time
iif 3P stays in 1P, security concerns go away
Abandoned the scenario - had it planned to discuss 
Scrapers were inside compromise
excited about 3p->1P
could detect errors befoe they detected

3p->1p->3p

microsoft infra - risks go way up

Daramfon Akpan - hard on this scenario

data retention side - pii?

App Insights does get sucked into Kusto
now App Insights
- not tables - cant do any joins with them
- kusto orchestrator
- instead of streaming analytics use kusto orchestrator

skip continuous storage
misses out on aggregation
1p concept of kusto - 

AppInsights to move 3P->1P 
one internal magic
AppInsights consumed into AM
Getting data - further manipulation into data 
Kusto Orchestrator

Lets try B and get that working 

circle back to mitra

Can we use the ADE 
Support those things

Follow up w Dara - whether the Geneva in 3P is still ongoing 
Geneva is 1P 
Challenge of adding another agent 
Reduce the number of
Onboarding to Geneva
They dont have a direct
