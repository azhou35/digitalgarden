
* high-level abstraction of using foundation models
* customizable, conversable agents which integrate LLMs, humans, via automated agent chat
* automat()ing chats among multiple capable agents -- collectively perform tasks 
![[Pasted image 20240809153151.png]]

* agents can communicate w other agents and perform actions 
* assistantagent = acts like an ai assistant, using llms by default but not requiring human input or code execution
	* can write python code for user to execute when a message needs to be resolved 
	* can receive execution results and suggest corrections
* userproxyagent = a proxy agent for humans, solicity human input as the agents repl'y at each interaction by default -- capability to execute code and call functions or tools
	* triggers code execution automatically when it detects an executable code block in the received message 
* conversableagent == auto multi-agent communication, retains possibility of human intervention 