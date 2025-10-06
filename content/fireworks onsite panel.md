[[content/fireworks product sense|fireworks product sense]]
**Onsite panel:** Your onsite will consist of:  
- Product Sense - Ray Thai, Director of PM- GTM Partnership - Bardia Shahali, VP Sales
- Technical Partnership - Chenyu Zhao, Cofounder and lead of core infra/virtual cloud infra team

### Product sense:

Fireworks inference stack achieves 1000 tok/sec
Cursor has specialized model on fast apply task


Speculative decoding:
-  Speculative Decoding enables parallelization of the token generation, enables users to speculate a larger number of tokens in parallel and consume them cawithout deviating from the provided context.
- Cursor built a variant of speculative decoding called “[speculative edits](https://cursor.com/blog/instant-apply)”, an algorithm that uses much longer speculations to make code edits substantially faster.
- generates tokens using smaller draft model, then have larger model verify correct
- huge latency gains, risk wasted compute if drafts re rejected often
- adaptive - you can tune how aggro u speculate depending on workload (short vs long responses)
- custom quantization 
![[Pasted image 20250825115857.png]]
### continuous batching + paged kv cache 
- keep gpu busy by admitting/merging requests continuouly - store kv cache in paged blocks so memory doesnt fragment
	- lift throughput while holding p95 steady

### quantization
- reduce precision 
- saves memory, increase throughpu 
- 
### problems with evaluation
- baseline unfairness: comparing my otpimized servers compared to others w subotimal ocnfigs
- unrealistic mixes
- metric drift: ignoring p95 or 99 under load, variance, and user time
- confounded setups

#### Technical Moat
1. E2E LLM serving optimization
	1. full pipeline of model loading -> memory optimization -> inference -> request handling -> scaling across GPUs
		1. others have sports car but Fireworks brings the F1 pit team 
2. custom kernel and quantization synergy 
	1. withou accuracy loss which is challenging
3. multi gpu serving 
	1. common weakpoint for startups

### Fireattention:
- custom CUDA kernel optimized for multi-query attention
- CUDA kernel = program that runs directly on GPU as specialized instructions that tell them how to run a model super efficiency
- highway for model computations: it allows data to flow through the model much faster without getting stuck in traffic
- better memory and precision knowledge by compressing data to fit more lanes on the GPU highway

provides speed boost without quality loss
### Building w LLMs
- data plane - retrieval, context strateg, quality and latenc
- control plane - gateway politices, auth, rate limits, observability
- safety - input output guardrails, misinfo
- cost - track $/k tokens



[vLLM Talk @ CMU (Apr 2025)](https://llmsystem.github.io/llmsystem2025spring/assets/files/llmsys-22-vLLM_woosuk_kwon-1f34697dbb1a1fb5b798daf6eff14b67.pdf?utm_source=chatgpt.com)

- a single A100 GPU can only serve <1 request per second 
- LLM inference is inefficient bc it has a sequential dependency which makes it hard for GPU parallelization 
- batching = better utilize parallel hardware
![[Pasted image 20250825114445.png]]
attention kv cache
![[Pasted image 20250825114458.png]]
- kv cache is huge - each oken is 1MB so one full request is several GBs 


Paged Attention:
- memory paging for attention attention KV cache
- reduce memory fragmentation with paging
request reemption and recovery
- free some requests kv cache to let others run first 
- recomputation is fast bc all tokens in a kv cache can be computed in parallel

in order to consider parallelism u need to minimize communication, minimize waiting from data dependency 
typical data parallelism:
1. load balance routes diff requests to diff engines based on engine load, kv cache memory usage
	1. pro is no communication between engine, ocns is no parametermemory saving which limits kv cache size
	2. no reduction in latency
2. tensor parallelism
	1. partition weights in the linear layers, which reduces serving latency, but heavy communication across TP shards and requires NVL 
3. expert parallelism
	1. set of linear layers aka experts where each token only picks a subset to run on 
	2. distribute diff exprts to diff nodes
		1. friendly for gpu kernels, smaller communication than tp
inference optimization
4. quantization
	1. used reduced precisions to store and compute the model 
		1. native hardware support eg fp8 in hopper and fp4 in blackwell
		2. quantize based on: 
			1. weights (reduced storage)
			2. kv cache (reduce kv cache storage, faster attention)
			3. activation (faster communication)

performance engineering:
- to fully utilize gpu need to pay close attention to everything happening on cpu 


2nd round
- cross functional partnerships
- gpm of partnerships
	- sales team
	- understanding how ud partner w customer strategy
	- how to break down complex customer needs
		- customer partnership w diego
		- context from copilot 
- technical conversation/experience
	- llms/inference
	- optimization levels
	- how r they used 
	- why r they used
	- scheduled w engineeing leadership



[Azure Batch Customer Questionnaire.docx](https://microsoft.sharepoint.com/:w:/r/teams/hpcaisoftecoteam/_layouts/15/Doc.aspx?sourcedoc=%7BD6534A1F-D191-4821-94C4-DF655F3BF30F%7D&file=Azure%20Batch%20Customer%20Questionnaire.docx&action=default&mobileredirect=true&DefaultItemOpen=1&share=IQEfSlPWkdEhSJTE32VfO_MPAU0hYaggPphOhouW7vtai2I) 

The GTM interview will cover your ability to work with GTM functions (account execs, etc) and interface with customers. It'll tackle your ability to break down customer needs and prioritize between customers. The technical interview will cover your ability to interface with technical stakeholders at Fireworks, including how you'd think through potential solutions. I'd be prepared to talk about your past technical work here too. Product sense will address your ability to turn vague scenario into a crisp product definition. Let me know if you have any other questions!

