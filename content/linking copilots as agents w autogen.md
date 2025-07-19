
```
import autogen

# Define the configuration for the two agents
config_list = [
    {
        "model": "gpt-3.5-turbo",
        "api_key": "your_api_key_here"
    }
]

# Create the two agents
agent1 = autogen.AssistantAgent(
    name="Agent1",
    llm_config={
        "config_list": config_list,
    }
)

agent2 = autogen.AssistantAgent(
    name="Agent2",
    llm_config={
        "config_list": config_list,
    }
)

# Create a user proxy (this simulates the user's input)
user_proxy = autogen.UserProxyAgent(
    name="User",
    human_input_mode="TERMINATE",
    max_consecutive_auto_reply=10,
)

# Initiate a chat between the two agents
user_proxy.initiate_chat(
    agent1,
    message="Let's solve a problem together. Agent1, please start by proposing a task.",
)

# Set up the conversation flow
def conversation_flow():
    agent1.send(
        "Hello Agent2, I propose we work on optimizing a sorting algorithm. What do you think?",
        agent2,
    )
    agent2.send(
        "That sounds like a great idea, Agent1. Let's start by discussing quick sort. What aspects should we focus on?",
        agent1,
    )
    # Continue the conversation as needed

# Run the conversation
conversation_flow()
```