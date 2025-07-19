#microsoft 
[[OAI Doc]]
[HPC Planned Maintenance.docx](https://microsoft-my.sharepoint.com/:w:/p/seanse/EfYoPyiGdX9No3MWIJi_hkgBNzdgxFFpBJyMFXxzytoMCQ?wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1730747928113&web=1)
## Context
From OneDeploy team and covers planned maintenance from broad spectrum of customers 
OneDeploy team *manages change management* for all machines in Microsoft-hosted datacenters. 
They have a Planned Maintenance (Batching) division, which controls the mainenance and deployment of Azure sevices, OS/BIOS/firmware, and non-Azure fleets. 

## Terms
* stateless / idempotent 
### HPC Training workloads
AI training workloads utilize all GPUs, communicate in synchrony, and are tightly coupled

## Content 
- High end AI Training: Customers training large models using [data and model parallelism](https://nam06.safelinks.protection.outlook.com/?url=https%3A%2F%2Ftowardsdatascience.com%2Fdistributed-parallel-training-data-parallelism-and-model-parallelism-ec2d234e3214%3Fgi%3Dbe9469f89f7c&data=05%7C01%7Cwesleh%40microsoft.com%7C189cb74de71840ba170308db5131f1e6%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C638193047182880327%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=LnN8qBHyVcOrWu5mPqCsU9Iqe645p0r0scymdPA544g%3D&reserved=0). AI Innovators are driving this segment. E.g., OAI, Meta, 1P Alexander team, MSR, Inflection, Character.ai 
- P0: Performance at scale + TTM. Quick access to large scale GPU clusters and supporting storage. Customers generally want dedicated infrastructure, expect high utilization and want white glove engineering support with strong SLAs around capacity and issue resolution.  


- Performance tuned architecture across compute, interconnect, and storage. 
    

- Product: ND series e.g. ND v4 A100 80G with InfiniBand back-end NW. TTM is very important. 
    

- Storage: Typical needs are very high read throughput of datasets to keep GPUs from being IO bound, high throughput for node recoverability and very low latency and high IOPS for repeated read access of very small objects (think billions of 4KB text files, images). For instance, Meta needs 20m IOPS per namespace and 3 namespaces and Open AI at 400PB by early CY23. 
    

- Software Stack: AI Innovators are moving from just needing core infrastructure services to platforms that efficiently allow experimentation, deployment, and online learning with compliance controls on data.  While Kubernetes is widely used among some early Innovators with platform experience who like the flexibility to build their own optimized stack, with PaaS, Singularity + AzureML, there is an opportunity for a managed and optimized stack as new entrants from other domains like medicine, biology, genomics become AI Innovators.   
    

- Mid-range turnkey Training & Inference: More traditional enterprise customers developing business critical AI applications (e.g., smart inventory management, drug discovery customers) and tending to focus on training or fine-tuning smaller or more classic models, and hence have lower GPU compute requirements across training and inferencing. Customers also use the same infrastructure for batch inferencing.  Many customers have custom data with compliance requirements on managing the data and models. 
    

- P0: Optimized performance with sustained TCO budget, need GPUs globally 
    

- AI Natives are concentrated in this segment E.g.: 1P Office team, Walmart, Chevron, Synopsys, Nuance, Bing 
    

- Product: NC4 Series using a PCI E version of the high-end GPU's, some will also need IB fabric 
    

- Software Stack: AI Natives as well use IaaS infrastructure available in Open Source heavily Databricks, AKS, Synapse. As with high-end training they prefer end-to-end consistent stack supporting their MLOps workflows. This is a huge opportunity for Azure.  There is also an opportunity to bring together HPC and AI software stacks with HPC being a mature workload segment and autonomous driving being an emerging workload to provide optimized turnkey solutions.  
    

- Storage requirements typically are low latency, high IOPS, and medium/ high throughput. There is also a need to provide integrated compliant storage and compute services with workload aware caching for RO and RW data (model checkpoints). 
    

- Real time Inference: Customers that do real-time inference as part of their new ML service globally 
    

- P0: absolute cost/inference stream, global footprint, latency sensitive 
    

- AI Natives and AI Aware drive this segment E.g., Samsung’s text to speech service, Github copilot, Cruise inferencing each road scenario (which today falls here but could tomorrow be another swim lane), Adobe 
    

- Product: NC3 series based on Nvidia inference SKU (e.g., T4), some high-end for large models but cost optimized. 
    

- Storage needs are very low latency; typically collocated with compute – local disk / very low latency block storage is preferrable given the real time requirement. Over time, if regression analysis is to be performed based on inferencing, that could further influence choices.  
    

- Software Stack: Model sharing across tenants with layered customization, responsible AI filtering, distillation and quantization to reduce model footprint.  We have Cognitive Services for simpler models and AOAI for GPT-x models.  AOAI is a 3-layer architecture with Singularity, AzureML and Skyman layers.