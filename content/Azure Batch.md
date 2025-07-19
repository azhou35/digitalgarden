#microsoft 
Azure Batch is the service I (technically) PM at Microsoft. While I'm pretty far from directly managing the roadmap for BatchVNext, I assist in GTM, Special Projects ([[HPC Assistant for Workflow Orchestration]]), data reporting, and security. 

**Azure Batch** is designed for running large-scale parallel and high-performance computing batch jobs efficiently in Azure. It automates the creation and management of a *pool* of compute *nodes* (which are VMs), as well as scheduling jobs to run on those nodes. It eliminates the need to install, manage, or scale cluster or job scheduler softwares. Batch APIs/Azure portal can be used to configure / manage / monitor jobs. 

A batch job is a regularly automated process that groups similar tasks and performs them automatically. 

Multiple VMs/nodes for a pool. Jobs, made up tasks, are submitted to the pool. Each task uses an application / algorithm user-defined. Batch distributes each task across all nodes in our pool. 

### Use Cases
Batch is a fit for ETL or AI use cases, aka anything where multiple tasks can be executed in parallel independent from each other.
* Simulations
* Deep Learning
* Image processing 
### Glossary
* **A job***: collection of tasks that would be parallelized 
* **Task:** Individual run of the job