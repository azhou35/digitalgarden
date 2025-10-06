## 🔹 1. Clarify the **User & Workflow**

- Who is the end-user? (Dev, enterprise team, consumer, infra operator)
- What is their current workflow? (Step by step)
- Frequency: Is this daily, weekly, real-time?
- Scale: How big is their dataset, traffic, or workload?
- **IF** the user is defined, you skip “who is the user?” and go straight to pain points:
    - What does _this_ user do today?
    - Where are the bottlenecks in their flow?
    - At what scale do they operate (datasets, model calls, concurrency)
👉 **Goal:** Understand the _job-to-be-done_ and baseline pain points.
## 🔹 2. Clarify the **Inputs & Constraints**

- What data / context do they bring in? (structured, unstructured, streaming, etc.
- Is it standardized or fragmented?
- What are the **tech expectations**? (Latency, throughput, accuracy, security)
- Compliance / guardrails needed? (HIPAA, SOC2, GDPR)
👉 **Goal:** Bound the problem by what’s feasible and what matters most.
## 🔹 3 Propose **Solution Directions**

- MVP: What is the leanest solution that solves 80% of the workflow?
- Longer-term: How could this evolve to cover more?
- Trade-offs: Cost vs. speed, flexibility vs. reliability.
👉 **Format:**  
“If data comes from **X**, we enable user to **Y**, so the system can reliably **Z**.”
## 🔹 4. Anticipate **Failure Modes**

- **System failures:** What happens if inference is slow, wrong, or inconsistent?
- **Human failures:** What if user misconfigures, uploads wrong data
- **Business failures:** What if the solution doesn’t scale or doesn’t get adoption?
- How will you detect, surface, and recover from these?

👉 **Goal:** Show you think about reliability, observability, and safeguards.

---

## 🔹 5. Define the **Output & Success Metrics**

- What does “good” output look like to the customer?
- Metrics: latency, accuracy, cost, trust/satisfaction, adoption
- How will you validate that the solution solves their pain point

👉 **Goal:** Close the loop with measurable outcomes.


Things to say if stuck:
1. - - “Can you walk me through how the user currently runs this process?”
2. “Are there performance or reliability constraints I should be aware of?”
3. - - “I’m going to assume the user has X data and the system does Y; if that’s not correct, I can adjust.”
4. > “I want to make sure I understand the workflow correctly—my assumption is X, Y, Z. With that in mind, here’s how I’d approach proposing a solution…”