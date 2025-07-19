background:
- Hi, appreciate yall making the time
- a little bit about me - im annie 
- ive always been split between my creative side and my technologist side
	- grew up in jersey right by bell labs, and it was a very technical environment, i went to our engineering program for high school 
	- but ive always been a creative at heart
	- high school i spun up our creative arts magazine 
	- college studied data science but freelanced design 
	- and even now after work i design graphics and websites for local businesses
	- and that's actually how i first found out about fal 
	- was making flyers on figma, and saw this project that let me generate images + brainstorm on my ipad at the same time 
	- [jordansinger/livedraw-figma](https://github.com/jordansinger/livedraw-figma?tab=readme-ov-file) 
* i was a bit skeptical bc some of the ai generation apps ive used in the past was clunky or slow but it was quite fast and seamless 
	- and i was baffled - how was it this fast?
	- thats when i rabbitholed into the infra behind the project and i came across fal
- and i think some important context here is during my day job, i work at microsoft on the hpc infra team
	- where i'm intimately aware of the latencies involved in triggering a training and inference job 
	- my day2day as a tpm means im working closely with some of our biggest customers like openai optimizing our internal infra for them and also driving the operational excellence of the supercomputers that power their ai/ml workloads
	- essentially im the glue between the dev team and customers, for some of our smaller customers im prototyping workflows on azure for them
	- and inference has been top of mind for me - we got a shipment of gb200s recently which makes inference so much faster and i've been overseeing the buildout and thinking abot how to set them up and manage things like maintenance and reliability since there qute finnicky
- and thru these experiences ive seen under the hood and how complex the the infra layer is 
- and im amazed at how this complexity translates across the application layer and how customer facing products liek canva can achieve the speed that it does
- so going back to my rabbit hole into fal, everything i read just really resonated with me
- since day 1 ive believed in democratizing creation so everyone feels empowered to make it - 
	- whether its art or it's coding apps 
	- even ppl like my dad making videos in his retirement 
	- anything i can do to abstract away the backend and make it easier for the user
- i see fal driving full speed twards that mission - and id love to lend my skills in any way 
- you know i looked at the careers page and wasn't sure if there was anything there that was a perfect fit for me
- yk i see myself having a blend of technical depth as well as customer obsession, being able to nerd out to technical and nontechnical stakeholders alike - truly living at the intersections, between art and technology, technical and nontechnical 
- but for me its less about the role compared to being able to contribute to this mission 
- of how can we empower ppl to generate personalized images and videos, how can we raise the floor and the ceiling  
questions to ask: 
1. Would be great to understand how the mechanics of the inference engine + compute side work - i assume u dont use ur own gpus and use the cloud, but are you working directly with hyeprscalers or using an ai-focused provider like coreweave or baseten? How do you run things like the FLUX models 4x faster?

fondational labs - 
possibility
curious
wouldntdoremoteforthis role
so reactive


1. Would love to hear more about what brought you to fal and what resonated with you 
2. So if you had to identify any gaps in the personell today - what do you think
	1. TPM for inference optimization - exp optimizing supercomputing infra for Microsoft AI's customers - exp with operational excellence + infra reliability will be valuable as u scale
	2. Partnerships/Strategy - with model labs, cloud hyperscalers, strategic accounts, product marketing
	3. Enterprise Solutions architect 
		1. help innovative orgs adopt their platform, help them implement fal effectively 
	4. sales - pre sales / post sales 
	5. solutions engineering
	6. tpm
3. What do you envision fal being one year from now and 5 years from now. 
4. 2. Watched some videos on how Fal started with the developer community and the enterprise came after that - what are some of the unique challenges when it comes to scaling for them and where do u see fal tackling this


imemdiate needs:
* MLE 
* technical customer facing
* build based on adoptin
* their adotion of our solution
* 
exploratory questions:
* what is the team looking for? 
* if u cant answer turn it back onto them 
* from building data systems to scaling compute

Microsoft background notes: 
 * BlackForest Labs - its our first 3rd party customer for GB200s for Cyclecloud for Slurm 
	 * CC sets up the infrastructure, deploys HPC schedulers, scales infra 
* OAI - manage our largest supercomputer for OAI, H100/H200 
	* Future forward building GB200s 
		* Figuring out things like - how will we run maintenance for these machines with such low utilization and high breakage rates? 
	* First time doing supercomputing at this scale - it rlly pushes the limits of what cloud infra is meant to be bc these companies sit on our gpus and just run workloads endlessly to train 
	* Inference is a different beast 
 * Models: Imagen3, Flux from runway, Firefly from Adobe 
 * Thoughts on training fs inference:
	 * in the fall read the research literature about test time compute
	 * and then deep seek came out with its reasoning 
	 * Training infra is optimized for throughput + computational power - processing large batches of data
	 * Inference infra is optimized for low latency, high availability, cost efficiency 
		* Inference requires elastic scaling. Less storage bandwidth but more efficient memory management. 
	* DIfferent cost structures - inference costs scale with usage and requires careful optimization to maintain performance while minimizing costs. compared to training which involves predictable scheduled utilization.
* Customer engagement 
	* Frequently work closely with smaller customers for their ai/ml workloads
		* Exp prototyping a copilot for genomics researchers to develop their workflows without having know about the cloud 
* Mission alignment - theres this huge divide between the creative community and the technologist community - artists despise the idea of ai automating their lifes work away, and technologists believe in the value of automation and streamlining 
	* and i think we need a nuanced take 
	* how can ai tools help us within the cycle of brainstorming, prototpying, creation
	* we see projects like animation and video be so painstaking - how can we lower the human labor and open the door for more time spent thinking of new ideas
	* i agree that image gen is big now but the next step is multimodal exploration 
	* i value speed + execution + craft and creativity and originality 
* THesis - platform is going to accrue value
* Mission : AI being integral to various industries how do we step up to meet that demand
	* plugged into the creative technologist community here in teh city 
	* 



ideal roles:
* tpm
	* drive inference in a serverless environment 
	* manage compute needs 
* customer success 
* ops&strategy
	* growth
* ai strategist
	* project lead for customer engagements. In collaboration with a technical lead, you’ll drive a motivated team of engineers and researchers focused on solving our customers' most critical problems
	* operational experience 
	* user empathy