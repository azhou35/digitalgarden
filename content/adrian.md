seizes the blob, sucks it
never pulled it into streaming analytics
streaming analytics does analysis
one question adrian has - when we look at the data 
consisteently over the area
do all of our samples in that hour and do a running average

if we're reading data before its fully written 
periodically read where we only read blobs that have been in there 5 min a
look at data every hour 
all thats dependent if thats the underlying problem 
forced delay rather than streaming it anymore
periodic aggregation 
right now whenever it sees a new file it grabs it and reads it
on every hourr, it would read everything in the past hour 
use the event hub as an input 

figure out what altneratives work
see if we can use existing event hubs data
and see what we 
using dialogue for event hubs
forego stream analytics
and have things aggregator on the kusto side

using kusto orchestrator
workdirectly w app insights data stream
run that periodically
create the aggregated data 
and dump that
replace 
build the hourly usage table
other option is to use 
use stream analytics to pass thru
pass data into event hub 
use either kusto ro even orchestrator 

app insights pass into event hub
and have kusto orchestrator OR streaming analytics interact w event hub

stream analytics on the event hub instead of the storage account 

different input in