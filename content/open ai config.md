// Please modify the content, remove these four lines of comment and rename this file to OAI_CONFIG_LIST to run the sample code.

// If using pyautogen v0.1.x with Azure OpenAI, please replace "base_url" with "api_base" (line 14 and line 21 below). Use "pip list" to check version of pyautogen installed.

//

// NOTE: This configuration lists GPT-4 as the default model, as this represents our current recommendation, and is known to work well with AutoGen. If you use a model other than GPT-4, you may need to revise various system prompts (especially if using weaker models like GPT-3.5-turbo). Moreover, if you use models other than those hosted by OpenAI or Azure, you may incur additional risks related to alignment and safety. Proceed with caution if updating this default.

{

        "model": "gpt-4",

        "api_key": "<your OpenAI API key here>",

        "tags": ["gpt-4", "tool"]

    },

    {

        "model": "<your Azure OpenAI deployment name>",

        "api_key": "<your Azure OpenAI API key here>",

        "base_url": "<your Azure OpenAI API base here>",

        "api_type": "azure",

        "api_version": "<your Azure OpenAI API version here>"

    },

    {

        "model": "<your Azure OpenAI deployment name>",

        "api_key": "<your Azure OpenAI API key here>",

        "base_url": "<your Azure OpenAI API base here>",

        "api_type": "azure",

        "api_version": "<your Azure OpenAI API version here>"

    }
## anthonys dev plan
AZURE_OPENAI_ENDPOINT=https://genomics-copilot-aoai-2.openai.azure.com/
AZURE_OPENAI_API_KEY=0dc5f05089fc4072ab52db4b903efd9f
AZURE_OPENAI_API_VERSION=2023-05-15
AZURE_OPENAI_CHAT_DEPLOYMENT=gpt-4-32k-copilot-genomics
AZURE_OPENAI_EMBEDDING_DEPLOYMENT=text-embedding-ada-002
AZURE_OPENAI_CONNECTION_NAME=genomicscopilotaoai2
AZURE_SUBSCRIPTION_ID=0024bada-4af0-44bb-a7e8-ca142c00516a
AZURE_RESOURCE_GROUP=afranci-intern-project
AZUREAI_PROJECT_NAME=genomics-copilot-project-2

notes:
workflow: static parts
- authentication
dynamic

each llms output speciifc formats 
* rn, python snippets, but we want to expand to arm or api []()

divide and conquer technique
* copilot has smaller s[]()pecialized module, each one is grounded on a speicifc part of data
* entire workflow is 3 parts:
	* environment setup
	* **tasks and jobs**
		* demo
	* vm andn ode config
* rag is is used for user documentation
	* e.g. inputs into demo is workflow & user inputted doucments
	* (grounds into user inputted documentation)
looking at a sample genome 