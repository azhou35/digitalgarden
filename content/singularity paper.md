problem: training and running ai models on gpus are very expensive bc gpus are often idle or underutilized
it's hard to share gpus between jobs, pause a job and move it elsewhere, change the number of gpus for a job, or handle failures without restarting entire jobs from scratch

this new system at microsoft allows us to schedule ai workloads across a global fleet of gpus in a flexible manner that allows gpus to be kept much busier

core innovations:
1. device proxy that decouples user code from hardware
	1. usually training code talks direct to gpu via cuda
	2. singularity puts a "middleman" in place
	3. since device proxy lives separately from user code
		1. its easier to checkpoint running programs
		2. u can move programs to diff machines
2. periodically singularity takes a full snapshot of job, ensuring that workers are paused at same safepoint

hyperscalers waste a lot of gpu time because they run jobs in rigid ways, and even if you dont need full gpu power you need to rent full gpus. 

startups allow you to build better tools to make your gpus more efficient by sharing across multiple users.