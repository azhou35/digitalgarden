Introduction Supercomputers are highly complex systems used in high-performance computing, characterized by their large size and ability to perform massive computations at high speeds. Nodes in supercomputers span multiple clusters, data centers, availability zones, and regions within the fleet. This unique distribution across physical and logical boundaries makes supercomputers special within the fleet. During maintenance, every node in the supercomputer is considered down, which can extend downtime if traditional SDP isolation patterns and bake times are followed, given their geographically distributed nature.

The goal of supercomputer maintenance is to have minimal and predictable maintenance windows. This is achieved by updating all nodes simultaneously, safely, and reliably through a customer-driven approval process, ensuring platform safety and minimal impact on customer workloads. This document outlines a proposal for a maintenance experience to handle both planned (regular software and firmware updates) and unplanned (repairs) maintenance activities across supercomputer nodes, aiming to reduce impact, ensure backward compatibility, and maintain high safety standards.

Modeling of the Supercomputer in the Inventory

Currently, after the build-out, clusters are assigned to various customers, and different teams in the company manually track and coordinate the various maintenance activities. To provide better experience for customers, the first change needed is to enhance the platform’s capability to discover and catalog the list of nodes and GPUs associated with the supercomputer, including their customer associations. This process should be like how other resource types (VMs, ADH nodes, Containers, etc.) are managed in Azure.

During the provisioning of resources through Azure control plane, the platform needs to automatically populate the supercomputer inventory and propagate this information across all systems in the platform. This step is a common building block and is not specific to maintenance needs. It will streamline operations and improve the accuracy and efficiency of inventory management and maintenance coordination.

Current Maintenance Experience

OpenAI wants predictability and speed when taking updates. We currently leverage existing OneDeploy infra to provide safe, reliable and time bound maintenance while working towards the north star maintenance control experience.

Scenario E2E flow

Impactless and

impactful payloads 1. Open AI is on dedicated clusters which are under NFZ 2. Open AI drains their workloads, so the entire cluster is empty. 3. NFZ is lifted for periodic maintenance. 4. Once NFZ is lifted, all impactful updates (> 0 sec) will be deployed in a coalesced manner within 36-48h. The impactful train will adhere to FDG isolation guarantees for additional safety. 5. Once impactful updates are applied, the nodes are returned to OpenAI. Impactless updates will then be deployed in a coalesced manner within the next 24 hours while training workloads continue to run on the OpenAI clusters. Work is in progress to coalesce the impactless and impactful updates to further reduce the total maintenance duration.

Rebootful payloads

1. Open AI is on dedicated clusters which are under NFZ 2. Open AI drains their workloads, so the entire cluster is empty. 3. NFZ is lifted for periodic maintenance. 4. Once NFZ is lifted, all pending rebootful updates are applied together using percentage-based isolation (5% of empty nodes at a time) within 24 h. Work is in progress to support deploying SoC based firmware updates for Fairwater Overlake 2.0. This will be extended for other SKUs and OVL generations as agents support out of band updates.

Note: for critical non-rebootful payloads, currently HPC team coordinates a small-time window with the customer to do the deployments.

Proposed High Level Maintenance Experience

Once the supercomputer is provisioned with the necessary information, the platform blocks all maintenance activities by default. Maintenance actions are driven by a customer-approval process to prevent unexpected downtimes. 1. Blocking from Maintenance Activities

· All updates or repairs, regardless of their impact, are treated as impactful and blocked by default.

· However, customers will have the option to configure maintenance type & impact to block o Block only impactful repairs

o Block all repairs

o Block only impactful deployments

o Block all deployments (excluding critical security fixes) 2. Pending Maintenance Notification · Outside VM Maintenance Scheduled Events using Event grids will be used to notify customers.

· Customers receive notifications about pending maintenance activities, such as software updates, firmware/hardware updates, unexpected hardware repairs, hardware decommissioning, and the impact of those maintenance activities.

· For hardware/firmware updates, the notification will also tag if the version is production ready or flight ready.

· Notifications include the Maintenance Due Date (NotBefore field), which varies based on the criticality of the update, nature of the repair, and SLAs. · Notifications should be grouped by supercomputer level thereby providing customers the ability to approve at various levels. · Customers receive comprehensive details about pending maintenance activities, including both fully tested updates and those ready for early flighting. 3. Approval Process · Customers decide when and in what order to approve pending maintenance requests.

· Customers get full visibility into pending maintenance activities and their impacts at the supercomputer/container/node level for their own analysis and approval decisions.

· Customer can choose to approve the maintenance at supercomputer level, or cherry pick partial or all containers/nodes. · Default host updates o Upon approval, the platform applies all production-ready pending updates, regardless of their due dates, to minimize overall impact time. Customers should expect a node reboot by default.

· Flighting firmware

o Customers can include flighting updates in their maintenance requests during the approval process.

o In this case, only one flighting update can be chosen to be applied. Also, the platform will only allow choosing nodes running production qualified bits for flighting.

o For flighting, customers can choose to approve the maintenance at supercomputer level, or cherry pick partial or all containers/nodes. However, our recommendation is to choose fewer nodes for flighting. o After validating their workloads with the flighted version, customer can trigger a rollback to bring the nodes back to the previous known good version.

4. Velocity Control and Safety · The scale of approvals and the assessment of maintenance activity safety are managed by the customers.

· It is recommended to approve updates in various stages with sufficient bake times to ensure safe deployment practices. See section for stage maintenance.

Supercomputers SDP

Deploying consistent and well-tested changes across all nodes in a supercomputer, which spans various regions, data centers, and clusters, is a challenging task under the existing SDP practices and infrastructure. The current deployment model relies on progressing updates through various SDP stages to build confidence in their quality. However, since all GPU nodes and clusters are occupied by customers, there are no free GPU nodes available for testing during these SDP stages, hindering the ability to build confidence in changes.

The challenges with the current deployment model include the fact that all GPU nodes and clusters are in use, leaving no free nodes for thorough testing during SDP stages. Additionally, deploying updates to nodes in early SDP stages can lead to less reliable updates, especially when using the cluster LKG concept. This can result in multiple versions

of the same agent being deployed across different clusters in the supercomputer, complicating debugging and troubleshooting due to the heterogeneous nature of the agents. For GPU-specific firmware updates, the challenge is even greater. The SCHIE qualification lab is currently the only way to qualify these changes before customer testing, making it difficult to build confidence until customers try these updates in their environments. To address these challenges, the platform should enable supercomputer customers to flight changes on a small set of nodes within their fleet. This early validation helps build confidence before expanding updates to more nodes and generates signals to build global confidence in the updates. There are two types of updates: flighting updates, which lack global confidence but are ready for customer testing, and production updates, which are ready for wide-scale deployment. To improve the deployment practice for GPU firmware updates within the SDP process, the platform should follow a staged approach. After the SCHIE qualification phase, New/Buildout GPU clusters across the fleet should be updated first. Following the buildout clusters, we should have AI GPU SKU presence in canary/stage clusters for payload qualification. Subsequently, updates should be rolled out to 1P GPU nodes in inference clusters using Singularity, with customers having the option to update partial clusters. The next stages involve updating 1P GPU nodes in training clusters using Singularity, followed by non-Singularity updates for 1P GPU nodes in inference and training clusters. Finally, 3P GPU nodes in both inference and training clusters should be updated. (figure 1)
![[Pasted image 20241031175818.png]]
For customers on dedicated clusters, once a payload has been flighted by the customer, they can work with Microsoft to release the payload for these special clusters. However, to globally release payload for entire fleet needs additional signals from deploying to canary like environments (on AI SKUs) and AzQualify. Whenever flighting or production-qualified updates are available, customers will be notified through an "Outside VM Schedule Event." Additionally, VM-based tenants will receive the notification inside the container as well.

Maintenance Policies Configuration

During supercomputer provisioning, the platform sets default maintenance controls to block any maintenance activity. Customers can customize these settings to preferred maintenance windows, schedule event approval time policies, and flighting requirements during and after provisioning. These maintenance settings will also apply to newly added nodes/GPUs post-provisioning without additional modifications from the customers.

By default, all maintenance activities are blocked upon provisioning, adhering to customer-defined maintenance windows and approval processes. This enhances overall maintenance management and ensures minimal disruption to customer workloads. However, the platform will also allow the customer to set varying policies based on impact, maintenance type and container/node type (test vs prod).

Note: Detailed information on new settings such as flighting and schedule event approval policies will be provided in a detailed design document.

Maintenance Notifications

Customers will be notified of any pending maintenance requests such as software or firmware updates, hardware repairs, and decommissioning requests in advance. The notification timelines vary based on the type of maintenance request, its criticality, and urgency. At the time of provisioning the supercomputer, all necessary notification policies and settings will be automatically configured for the Azure Policy Engine (AzPE) to leverage these settings and notify customers about maintenance requests. Below are the recommended maintenance policies:
![[Pasted image 20241031175831.png]]
Type of Maintenance Frequency Advance Notification (Proposal) Scope of Supercomputer Node Reboot (VM Re-deployment) Possibility Notification Delivery Mechanism

Regular

Software or

Firmware

Updates Frequent (Daily) 90 days Entire supercomputer Yes Inside and outside VM

Regular

Hardware

Maintenance Occasional (Once in 6 months) 30 days Rack or Cluster Yes Inside and outside VM

Critical

Hardware

Repairs Rare 1 day Few Nodes Yes Inside (if hardware is healthy) and outside VM

Critical

(Security or

live site)

Software or

Firmware

Updates Occasional (Probably once in 3 to 6 months) 1 day Entire supercomputer Yes Inside and outside VM

Software or Firmware Updates (Regular & Critical)

Given that SLAs to approve maintenance requests can span multiple months, there will be numerous pending updates waiting on the node and supercomputer. To minimize overall maintenance time, the platform will apply all pending updates simultaneously upon customer approval of the maintenance request. Customers will be notified with a cumulative impact schedule event, with the earliest update time among all updates set as the "Not Before" time.

· Notification Process: Customers will receive a notification when the first update is surfaced, detailing the update-specific impact and due dates. Subsequent updates will lead to the existing notification being updated with the revised impact and due dates. If a critical update arises, the "Not Before" time will be adjusted according to its urgency.

Hardware Repairs or Maintenance Requests

All hardware maintenance and repair requests will be presented as scheduled maintenance requests, awaiting customer approval to proceed. If multiple requests are pending simultaneously, they will be consolidated and executed together upon customer approval.

· Shared Devices Maintenance: Certain hardware maintenance activities (e.g., ToR, RM, CM, Cluster-Decom) on shared devices can impact multiple nodes in the supercomputer. All nodes associated with such maintenance will be grouped together, allowing customers to approve the shared maintenance request with a single approval.

· Notification Process: Customers will receive notifications about pending hardware maintenance and repair requests, and all requests will be performed once approved.

TBD: Handling Concurrent Maintenance Requests of different kind: Need to flush out on what will happen to the existing software or firmware update maintenance request if there is a new hardware repair or maintenance request. Specifically, whether the system supports multiple concurrent maintenance requests of several types.

Discoverability of Pending Maintenance Requirements

Customers will have the opportunity to understand all pending maintenance activities on each container instance (linked Node, GPU) with necessary details such as the type of maintenance (test vs. prod), criticality, due time, impact, change details, etc. Along with the

maintenance activity, customers will discover all linked resources with pending maintenance activities. For example, if a ToR gets updated, they will see which other nodes will be impacted if the maintenance request is approved, initiating the requirement for bulk requests approval. Given the nature of the scale with supercomputers, the mechanism to discover pending maintenance requests in each instance needs to be enabled through a programmatic way (API) as well as a bulk query store (such as ARG). This enables customers to strategize the order of taking updates with minimal impact on their workloads.

Approving Maintenance Requests

As the platform informs customers about pending maintenance requests in advance, customers have full control over which nodes to update, when to update them (within SLAs), and in what order. The number of nodes to be updated at any given time is fully under the customer's control. Customers also have the option to flight some pre-release updates during the Flighting or Qualification phase.

For maintenance activities pending on shared devices such as ToR, RM, or CM, customers must initiate approval for all impacted nodes together to complete the maintenance. Given the complexity of this activity, a programmatic approach to executing these approvals is necessary. The platform will provide APIs to approve one or more maintenance requests together, including the option to include or exclude any pre-release updates while approving the maintenance requests. This inclusion or exclusion option is available only during the Flighting or Qualification Phase.

Customers have full control over the pace of applying updates, meaning that most nodes can be updated in a short time span. Therefore, the platform must ensure that all updates are thoroughly tested and meet the highest quality standards. Additionally, the platform should provide customers with the ability to revert to the "Last Known Good" changes in case of critical issues.

To reduce the risk of impacting the entire supercomputer, the following phased approach is recommended for approving maintenance requests on various nodes (fig 2):

· Flighting/Qualification Phase: This initial phase allows customers to test pre-release updates on a small set of nodes to validate performance and impact early. Once tested, customers can request select updates to be qualified.

· Control Phase: A preliminary production phase where a small, controlled group of nodes (suggesting no more than 5%) undergoes maintenance to assess the health

and workload impact of the updates. This phase is only applicable for production ready updates.

· Full Throttle Phase: Upon successful evaluation in the Control Phase, the remaining nodes in the supercomputer are updated. Customers can choose to update all remaining nodes at once or in groups. This phase is only applicable for production ready updates.

· Recovery Phase: If customers identify any issues in any of the above phases, they can recover their nodes to a previously known good state. However, the eligibility of which nodes can be recovered depends on the current node/SoC/deployment platform status.

TBD – Determine how to understand the status of node/SoC/platform and surface the eligible recovery phase options to customer.

o Rollback eligible changes: In this case, customers have the option to roll back the changes to the "Last Known Good Version." This includes the ability to revert specific changes as well.

o Rollback non-eligible changes: In this case, the customer cannot trigger rollback, the only option is to roll forward all changes or specific change to the new stable version.

o In-operable changes: In this case, the deployment platform is in-operable (e. loss of networking), hence neither rollback nor roll forward is possible.

This phased approach ensures that updates are applied safely and efficiently while minimizing disruption to customer workloads.