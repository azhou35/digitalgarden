Challenges with Operating GB200s 

GB200 GPU systems pose several operational challenges that make them significantly more complex to operate. These issues range from the GPU and blade design to challenges posed by the facility these machines are hosted in. 

High failure rate 

GB200s have a high failure rate of around 30% as reported by Nvidia. To counter this we have implemented a node-as-a-spare strategy, where we’ll be swapping out nodes needing repair with new nodes from a validation rack or from storage - depending on the datacenter. 

Connector pins 

The GB200 blades have a new pin configuration which are highly prone to breakage/being bent when sliding the blade into a rack. The pins sit on a back plane shared between node blades. Once a pin is damaged, the entire back plane needs to be replaced, resulting in having to power down the entire rack. Based on feedback from lab techs, this process would take an average of 4 hours. This is further compounded by our nodes-as-a-spare strategy that relies on swapping nodes in and out.  

Lack of large-scale testing 

We do not have large-scale GB200 canary clusters to validate updates and deployments on before they go to OAIs production clusters. This will likely result in unexpected failures during planned maintenance windows as well as during steady state operations. 

No UPS power 

As we have already seen with PHX61, clusters with no UPS power are significantly more susceptible to outages. In addition to unplanned outages, many DC operations (e.g., switching utility lines) can also result in 10-12 hrs of downtime due to the lack of UPS backup. Most upcoming GB200 clusters across Inglewood and Fairwater will not have UPS backup. 

Lack of experience with liquid cooling 

This is one of our first steps into liquid cooling at scale and there are some open questions that remain around DC maintenance for Callans and how these activities would interact with maintenance for GB200 racks, UPS maintenance (for PHX12 clusters) etc.  

Dense packaging of