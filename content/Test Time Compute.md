#work 
# Test time compute

Specialized reasoning for specific domains — specifically those that require “deep think” — ones where HOW you think about the problem is just as important as WHAT O1s example is AIME math problems Other domains w deep thinking:

- life sciences
- Quantum shit

Implication for hyperscalers:

- AWS/microsoft already plan heavy investments in SC clusters for training - if step function gains come from inference r they going to be left w overbuilt machines??
- Ik microsoft fs isnt prioritizing inference in the same way as raw compute for OAI - their reasoning is they can reuse their clusters for Azure AI efforts
- Microsoft plans to just take the computers used for training and flip them for inference
- Hyperscalers arent optimizing for inference, esp longer inference, the way their infra is set up - its optimized for long training runs, short inference runs, predictable times, batch processing
- Memory hierarchy: training optomized, batch oriented, short term state management
- Pay per gpu per hour
- Companies obv recognize importance of inference: CFO of Nvidia, has [stated](https://www.magzter.com/stories/Newspaper/Mint-Mumbai/How-A-Shifting-AI-Chip-Market-Will-Shape-The-Future-Of-Nvidia) that 40% of Nvidia’s data center revenue now comes from inference rather than training

Ideal infrastructure:

- efficient state management
- Something that facilitates multiple reasoning attempts in parallel
- Sustained reliable performance vs peak — aka have resources available the entire time, vs js prioritizing a lot at a spexific window - which is prob why podcast says AWS has advantage for reliability

Is this something gpus are even optimized for? Theyre good for training cuz matrix multiplication, but can they store multiple answer attempts and chains of thinking? Prob wont replace gpus but software will see better frameworks optimized for reasoning, resource management, scheduling

Pure computation → reasoning based hardware What is apple doing Implications for market:

- democratization of ai bla bla
- “Align usage w compute resources” is interesting - pay per thinking time and not just # of inference calls? Tier system where deep thinking is more $$ and quick inference calls is cheaper? Can AI models “cache” commonly ran queries to save costs or is it amortized across

Companies: Groq - language processing units EtchedAI - transformer based models

  

Sent from my iPhone