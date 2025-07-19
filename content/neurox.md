questions - i wonder if this will help 
gpu observability startup

helps monitor your AI workloads running on your Kubernetes GPU cluster

What's happening: Metrics (like DCGM_FI_DEV_GPU_UTIL) told us what was happening, but not why. Underutilized GPUs? Maybe the pod is crashlooping, stuck pulling an image, or misconfigured, or the application is simply not using the GPU.

Who's using the compute: Kubernetes metadata such as namespace or podname gave us the missing link. We even traced issues like failed pod states, incorrect scheduling, and even PyTorch jobs silently falling back to CPU.

How much is this gonna cost: Calculating cost isn't easy either. If you're renting, you need GPU-time per pod and cloud billing data. If you're on-prem, you'll want power usage + rate cards. Neither comes from a metrics dashboard.

---

Most teams are duct-taping scripts to Prometheus, Grafana, and kubectl.

So we built Neurox - A purpose-built GPU observability platform for Kubernetes-native, multi-cloud AI infrastructure. Think:

1. Real-time GPU utilization and alerts for idle GPUs

2. Cost breakdowns per app/team/project and finops integration

3. Unified view across AWS, GCP, Azure, and on-prem

4. Kubernetes-aware: connect node metrics to running pods, jobs, and owners

5. GPU health checks

Everyone we talked to runs their compute in multi-cloud and uses Kubes as the unifier across all environments. Metrics alone aren't good enough. You gotta combine metrics with Kube state and financial data to see the whole picture.

Check us out, let us know what we're missing. Curious to hear from folks who've rolled their own, what did you do?

![[Pasted image 20250622205710.png]]