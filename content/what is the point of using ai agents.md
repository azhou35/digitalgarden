9 am- drink 1 
11 am - drink 2
2 pm - drink 3
5 pm - drink 4
7 pm - drink 5
9 pm - drink 6
* agents: software program that can interact w environment, collct data, and use data to perform self-determined tasks to meet human-set goals
	* e.g. a contac center agent that wants to resolve customer queries -- will ask customer diff questions to guide what it should  do 
* components:
	* architecture (textprompt/api/databases), agent function, agent program (implementation)
## autogen docs
* multi agent framework that abstracts on top of foundation models
* simplifies orchestration, automation, and optimization of a complex LLM workflow 
*![[Pasted image 20240812100349.png]]
* agents in autogen are *conversable* and *customizable
example:
* generic conversable agent class for agents that converse w each toerh to finish a task 
* two subclasses:
	* assitant agent uses LLMs by default to write python code for a user to execute when a message is received
	* user proxy agent (proxy agent for humans) that receives human input as the agent's reply at each interaction by default -- has capability to execute code and call functions or tool 
`

```
import os
from autogen import AssistantAgent, UserProxyAgent
from autogen.coding import DockerCommandLineCodeExecutor

config_list = [{"model": "gpt-4", "api_key": os.environ["OPENAI_API_KEY"]}]

# create an AssistantAgent instance named "assistant" with the LLM configuration.
assistant = AssistantAgent(name="assistant", llm_config={"config_list": config_list})

# create a UserProxyAgent instance named "user_proxy" with code execution on docker.
code_executor = DockerCommandLineCodeExecutor()
user_proxy = UserProxyAgent(name="user_proxy", code_execution_config={"executor": code_executor})
```

```
# the assistant receives a message from the user, which contains the task description
user_proxy.initiate_chat(
    assistant,
    message="""What date is today? Which big tech stock has the largest year-to-date gain this year? How much is the gain?""",
)
```
![[Pasted image 20240812102116.png]]


1. user_proxy -> assistant w task descirption
2. assistance writes python code to solve the task
3. user_proxy either solicits human input or prepares auto generated reply
4. assistnat generates further response for user_proxy

conversations w diff levels of autonomy / human-invovlement patterns
1. human in the loop problem solving by configuring human invovlement and patterns

## enhanced inference
[Enhanced Inference | AutoGen (microsoft.github.io)](https://microsoft.github.io/autogen/docs/Use-Cases/enhanced_inference)
* tunable hyperparameters: model, prompt, max tokens, temp, top_p, n, stop, pensance penalty
tuning w autogen:
.1. validation data: instances stores in dicts
	each instance dict contain a problem as a key and a description str of a math rpoblem as a value
2. evaluatoin function
	1. take in a list of responses, and output a dict of metrics
3. metrics to optimze: aggregated metric over all tuning data instances
	1. success as metric, max as optimization mode
search space
1. model -- either a constant str, or multiple choices
2. prompt
3. max_tokens, n, best_of
4. stop
5. temperature
6. presence penalty
how to tune 
```
import autogen

config, analysis = autogen.Completion.tune(
    data=tune_data,
    metric="success",
    mode="max",
    eval_func=eval_func,
    inference_budget=0.05,
    optimization_budget=3,
    num_samples=-1,
)
```

![[Pasted image 20240812134426.png]]


* import agent, config, and then generate a response to a question 
* autogen you can also assign roles to agents and have them cha w each other
	* assign roles - initial prompt
human intervention:
* human in theloop component sits in front of auto reply components 
	* intercepts incoming messages adn decide whether to pass to autoreply components or provide uhman feedbkc
ai agents can also perform tasks via code executors (component that takes input messages, performs execution, outputs messages with the results)
* command line code executor and jupyter executor
in autogen, coding is a convo between a code writer agent and a code executor agent, mirroring the interaction between a programmer and a code interpreter 
![[Pasted image 20240812135120.png]]

create *tools*, aka regular python functions