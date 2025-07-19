Data engine, the process of improving models via data, was a fairly deterministic lever to perfecting neural networks and we were able to plot model performance metrics against the growth of training datasets.

LLM Evaluation Process at Scale:
evaluate a baseline model -> identify model weaknesses -> set up data collection campaigns -> train on new data -> confirm model improvements -> rinse and repeat

Data collections: targeted data collection ensures that resources are used to tackle model weaknesses rather than easier task types. Updating models in LLM data collection campaigns is crucial to collect the most up to date preference data and the best model’s responses should be used to seed rewrite pipelines for the most efficient corrections.

LLMs require a diff infra to eval LLM - what is the ground truth for a generated essay? 

Scale’s eval approach is to use its human expert network for quality in addition to LLM as a judge and auto evals based on human generated rubrics for speed. Accumulating valuable eval prompts across an expert network, running auto evals on many model candidates and then deploying the human network on the best release candidates to verify and probe results provides efficient high-quality evals for labs to determine their next model for release.

This is because good evals are very difficult to build - at Tesla I probably spent 1/3 of my time on data, 1/3 on evals, and 1/3 on everything else. They have to be comprehensive, representative, of high quality, and measure gradient signal (i.e. not too easy, not too hard), and there are a lot of details to think through and get right before your qualitative and quantitative assessments line up. My goto pointer for some of the fun subtleties is probably the Open LLM Leaderboard MMLU writeup: [https://github.com/huggingface/blog/blob/main/open-llm-leaderboard-mmlu.md…](https://t.co/Ns1hfEct4k)

Preventing test sets from seeping into training sets is difficult 

Having the right guardrails for agentic workflows is crucial.
Scale Has SEA Leaderboards:
Evals are critical incentives for researchers, and we need 3rd party evals
How do we produce produce evals that are impossible to overfit.
*Humanities Last Exam*

generative ai is similar to self driving cars - its a clear unlock to data

indication from user base that sometihng needs to be looked at
source more failure examples 
unit test
look at more automated curation methods
e.g. computer vision is self-consistency
self-consistency: response u get will differ - how do u account for general temporal inconcistency 
for llms, sample gpt4 multiple times and if its very varied it meas the model is not confident
1. identify failure mode
2. label data
	1. for LLMs you could create both prompt + response urself
	2. dont rely on customer to send u something thats baked within their data (aka their data)
3. retrain their data
4. evals
	1. evaluating models - ideally u have amazing human ground truth 
	2. for llms a lot of responses could be good
		1. instead we see 
			1. preference ranking 
			2. model a vs model b
		2. lots of experiments and research to see if humans can write a rubric

instructgpt - what data looks
scale providing supervised fine tuning data
human would write question and resopnse
now we see a lot of preference ranking (after the fine tuning stuff) - abeler would get model responses and weight which one
manual creation for evals isnt fast enough
benchmark tasks - honey pot examples we know that we know are right
how do we create benchmarks scalably?
- convert stellar tasks from labeling into benchmarks
- synthetic generated benchmarks

trend for llms is the data u need is very expert reliant
u need to recruit different ppl
network of experts to recruit 
cant get away with inhouse labelers
dynamic recruitment
white collar gig community
moving towards a wikipedia writing community
ppl motivated by the mission


mechanistic interpretability reveals the how of AI, evaluations provide the what – measuring the distance between a model’s intended purposes and its behavior
evals are achieved thru automated scoring & expert human review, measuring perf, capabilities, safety limits, and potential harms
how do u capture behavioral ground truth reliabily at scale?

insights