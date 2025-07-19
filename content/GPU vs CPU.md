---
tags:
  - supercomputing
---
A cpu is like a big truck. You can load it with a lot of different things, some very heavy but you can only drive one single route. That route can be complex with lots of detours. So it can do almost anything but it will be slow.

A gpu is like having 100 race cars. Each of them can only carry 1 small light box. But they can carry them super fast so you can deliver 100 light box all at the same time.

So when we talk about super computers, we are talking about a lot of small "problems" (small math equations for instance) that needs to all run at the same time and not one big single program. So 100 race cars is better suited for this kind of work.

* GPUs do one thing that they do well -- matrix multiplication 
	* bc of massively parallel computation (tf / torch are optimized to run on GPUs)
	* [tensorflow - Why can GPU do matrix multiplication faster than CPU? - Stack Overflow](https://stackoverflow.com/questions/51344018/why-can-gpu-do-matrix-multiplication-faster-than-cpu)
	* as opposed to CPU with 100 threads, today's GPU with 2048 threads can independnetly do 2048 diff operations in constant time
![[Pasted image 20241025104553.png]]