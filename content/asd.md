cc vm -> log analytics -> 
yk ur its collecting log analytics

thru these three stages 

Log Analytics export changes its format

append blobs hve more nuance
- if ur a source reader 
- capture a diff set 

put blob 

append blob
- created n append blob
- keep adding 
- different set 
upload all data from events at once 

the're only reading append blobs once 
that read that range and they never read the data 

1) either try to block blobs instead append
2) append blobs
	1) required for scenarios u need to keep adding data to logs
	2) whereas block blob
Stream Analytics does not support adding content to an existing blob file. Stream Analytics will view each file only once, and any changes that occur in the file after the job has read the data are not processed. Best practice is to upload all the data for a blob file at once and then add additional newer events to a different, new blob file.

In scenarios where many blobs are continuously added and Stream Analytics is processing the blobs as they're added, it's possible for some blobs to be skipped in rare cases due to the granularity of the `BlobLastModifiedTime`. You can mitigate this case by uploading blobs at least two seconds apart. If this option isn't feasible, you can use Event Hubs to stream large volumes of events.

Comes down to how you are exporting from log analytics 
Block blobs -> append blobs. Append blobs have different set of behaviors. Stream analytics ability to pick up one or the other. If you stream to an event hub. 
We have our event engine. 


- Figure out how the log anaytic export goes

An event for each block blob 
If u stack these for append blob - it wont be as near real time as bla bla bla
At the whim of whats the thing reading 

API thats firedagainst a blob
- Created a blob, apend apend, ceal
	- Seal this object so i cant append more 
	- Signal that ur done writing to the blob
	- Emit an event for it
	- Is stream analytics polling against it


Next Steps
1) append -> 
2) Stream analytics with append blob 
	1) they only read saw it come in 
	2) He doesnt know how to read the object
	3) Could be do single object 
	4) 
3) Most people work w single object not append blobs

[Service Tree | Services | Azure Stream Analytics](https://microsoftservicetree.com/services/f76c008d-ae81-472a-a6d6-e3f138049cc1)
Start with PM Owners
Here's a problem I have 
Alicia Li
![[Pasted image 20250225082836.png]]

Not a storage thing
- Integration thing
- Either ur export from log analytics 
- Or ingestion from 