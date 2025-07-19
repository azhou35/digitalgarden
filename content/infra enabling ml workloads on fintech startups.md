- background in batch processing for fintech 
- batch is a vm management and job sheduling platform
- finance bg:
	- nonexistent infrastructure (schedulers) to lift and shift 
	- bursty workloads, large-scale 
	- tend to move away from ISV's and run algorithms by themselves 
	- workloads: ETL, ADF, montecarlo 
	- determinism / reproducability 
	- low latency (for fraud, trading, underwriting)
	- real-time inference 
		- still immature
	- compliance visibility as regulators require full transparency on why a decision was made for this customer
	- conservative buyers - need bulletproof governance, SLAs, compliance guarantees 
- pain points:
- strategic customer cases
	- Bank of America
	- Milliman
	- pricing models 
## Infra Setup
a) Compute layer
	On prem HPC clusters
		high security
	Cloud compute
		elastic burst capacity / pecialized chips
	hybrid
b) Data layer
	Data Lakes (S3, azure data lake)
	Data warehouses (Snowflake)
	Streaming data 
c) Orchestration layer
	Training orchestration:
		Kubeflow, AzureML 
	Inference orchestration
		NVIDIA Triton - low-atency, highly reliable serving infra 
## Workload types:

|Workload Type|Description|Example Use Case|
|---|---|---|
|**Model Training**|Building models on historical data|Credit risk scoring, fraud detection models, algorithmic trading models|
|**Batch Inference**|Running models on large datasets in batches|Monthly portfolio risk assessment, transaction flagging|
|**Real-Time Inference**|Serving models in low-latency production|Credit card fraud detection, loan approval decisioning|
|**Fine-tuning / Transfer Learning**|Adapting models on smaller specialized datasets|Client-specific LLM|
![[Pasted image 20250624193541.png]]