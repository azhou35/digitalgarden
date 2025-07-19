- **Agent 1** is responsible for suggesting software and tools for specific genomics problems.
    
- **Agent 2** creates workflows to solve these problems, utilizing data from NF core, bio WDL, and snake.
    
- **Agent 3**, which Anthony is working on, takes the workflow and its description to create an Azure executable script for running on Azure Batch. This agent uses a RAG model for retrieval, grounded on Azure documentation, batch documentation, and Biostars question-answer pairs. 3:27 3:59 4:04
- Nikita mentioned the idea of using Autogen as a framework to think about the project's conversational framework, specifically discussing whether there could be an equivalent to an assistant agent and user proxy within the project's setup. They suggested that the project's agents might align with Autogen's structure, although it wasn't mandatory. The discussion also touched on the possibility of using Autogen for validation purposes during the development of the agents, indicating an interest in exploring Autogen's infrastructure and notebooks for implementing the project's agents 11:45. Additionally, the conversation included considerations for the user interface and how users would interact with the agents, with a web app and code spaces mentioned as potential platforms for user interaction 15:14.
AutoGen's infrastructure, which is already set up with notebooks for different personas. This could make the development and demonstration of the agents more seamless and efficient 12:07. Additionally, Anthony mentioned that while his current environment is based on Python executables, AutoGen could be beneficial for agents one and two, suggesting that integrating AutoGen could streamline the process and make it more user-friendly 13:56.

Copy

autogen for agents 1 & 2 