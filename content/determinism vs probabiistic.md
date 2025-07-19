- we cannot guarantee deterministic behavior from llms 
	- it's based on stats: LLMs dont follow strict set of rules but predict the next word based on probabilities
	- they output a probability distribution over all next possible tokens 
		- from that distribution, the actual next token is sampled randomly
		- -> introducing non-determinism 
- perhaps we can control the entropy of prediction
- pros/cons
	- pros:
		- good for creativity/diversity/emergence
		- exploring possibilities
	- cons: 
		- less reliable and ill-suited for high-stakes situation (e.g. finance, medicine)
		- difficult to debug
- ways to constrain behavior:
	- setting a random seed 
	- greedy decoding
- randomness in LLM can come from temperature - influences stochasticity during inference
- llms are like rolling dice weighted by possibility

[The non-deterministic nature of LLM’s : r/singularity](https://www.reddit.com/r/singularity/comments/1c2c9hr/the_nondeterministic_nature_of_llms/)


> shouldn't it be in my world, two events with the _exact_ same circumstances will always have the same results?

> case study: two twins, same circumstances, still end up differently 