facts about microsoft:
* delivering three phases of a supercomputer exp
	* IW-lite
		* H100
		* Production: from Jan 2024
	* IW-heavy
		* H200
		* Production: buildout from Nov-Dec 2024 
		* Production: by Apr 2025
	* FW (unsigned)
		* GB200
		* Canary: Mar-Apr 2025 
		* Production: Oct 2025
interesting points:
* wait i keep getting confused by test-time compute until i realized its just additional compute for inference haha
* we dont just need raw compute power -- also more efficient, specialized ones
* commoditization / race to the bottom is helpful for the ecosystem bc it lowers the barrier to entry, reduces costs across the board (e.g. lower cost per inference) -> incentivizes usage 
	* align compute w usage, making it similar to usage
* hyperscaler breakdown
* their advantages: obv have the infastructure (GPU clusters), the auto-scaling capabilities for spiky/changing inference loads, the network infra for low-latency inference, interlink to optimize gpu processing
* common trends: moving towards custom specialized AI chips (Maia, MTIA, Titanium, TPUs)
	* microsoft - 13B play into OAI in exchange for up until "AGI," investing in their own supercomputer and even if OAI partnership tethers will use for their own Azure OAI use cases
	* aws - 20K GH200s, new Project Rainier  
	* meta - open source
	* gcp - focusing on internal usage for their llms
