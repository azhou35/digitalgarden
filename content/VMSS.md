azures layer that lets u auto deploy manage and scale a group of identical vms 
- support autoscaling
- uniform config
- rolling upgrades
- limitations: assumes vms are disposable, which is not ideal for ai workloads that require model caching and fast recovery 

Azure VMSS was built for stateless, general-purpose compute, not fine-grained control over AI-serving workloads. Fireworks AI’s infra is purpose-built for LLM inference at scale, which requires precise node targeting, hard state enforcement, and coordinated update management — all of which VMSS currently lacks