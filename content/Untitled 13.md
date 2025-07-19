for each unique combo of these of these columns, we're summaizing

hour_timestamp=bin(timestamp, 1h)
//getting all the ones that fall into the bin 
//could be change 
generally hourly timestamp 
something going on w hour timestamp
projects=tostring(customDimensions.Projects),
cluster_id=tostring(customDimensions.ClusterId),
machine_size=tostring(customDimensions.MachineType),
region=tostring(customDimensions.Region),
site_id=tostring(customDimensions.SiteId),
subscription_id=tostring(customDimensions.ProviderId),
is_low_priority=tobool(customDimensions.LowPriority),
