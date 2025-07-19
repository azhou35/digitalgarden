---
title: "Insights from AI Ascent 2025"
source: "https://inferencebysequoia.substack.com/p/insights-from-ai-ascent-2025"
author:
  - "[[Inference by Sequoia]]"
published: 2025-05-07
created: 2025-05-26
description: "Here’s a speed-readout of the key themes that emerged from eight hours of talks in 12 minutes of text!"
tags:
  - "clippings"
---
### Here’s a speed-readout of the key themes that emerged from eight hours of talks in 12 minutes of text!

![](https://substackcdn.com/image/fetch/w_424)

```markup
Post methodology: Dust custom assistant @AIAscentEssay using Claude 3.7 with system prompt: Please take the supplied transcript text and write a substack-style post about the key themes in the talk at AI Ascent 2025. Style notes: After the initial mention of a person, use their first name for all subsequent mentions; Do not use a first person POV in the posts; please use all of the attached [transcripts] to generate an essay that captures the key themes from the whole event; can you go deeper and write an essay that closer to 3000 word length. Light editing and reformatting for the Substack editor.
```

Leading AI builders and researchers gathered for Sequoia’s AI Ascent 2025 in a space that housed OpenAI's first office. The event offered a glimpse into a future that's arriving faster than most anticipated. From passionate defenses of open source to Sam Altman's reflections on OpenAI's journey, the summit revealed a technology ecosystem at an inflection point: moving from novelty to necessity, from assistants to agents, and from isolated tools to an interconnected AI economy.

## The Great Acceleration: Why Now?

Pat Grady, partner at Sequoia, set the stage with a compelling framework for understanding the AI revolution. "Why does it matter? Why now? It may be inevitable, but is it imminent? And then finally, what now? What do we do?"

The "why now" question received particular attention. More so than previous technological transitions, AI's adoption is happening at unprecedented speed. Pat explained this acceleration through the physics of distribution: "You just need three things. People have to know about your thing. They have to want your thing, and they have to be able to buy your thing."

When the cloud transition began, awareness was limited—Marc Benioff had to resort to guerrilla marketing tactics to get attention for Salesforce. By contrast, "November 30th, 2022, ChatGPT comes out. The entire world is paying attention to AI." Social platforms with billions of users accelerated information flow, and the internet's massive reach (5.6 billion people compared to 200 million during the early cloud days) provided ready-made distribution rails.

"The physics have changed," Pat emphasized. "Train tracks are in place." This infrastructure allows innovations to spread at previously impossible speeds, creating intense competition. "You are in a run like heck business right now."

Sequoia partner Sonya Huang highlighted a dramatic shift in user engagement with AI tools. Two years ago daily-to-monthly active user ratios for AI applications lagged far behind traditional apps—ChatGPT is now approaching Reddit-level engagement. "This is extremely good news," Sonya noted. "It means that more and more of us are getting value out of AI." She pointed to several breakthrough areas, including advertising, education, healthcare and most notably, coding.

## The Value Chain: Where Will the Trillions Flow?

A central debate throughout the event focused on where value will accrue in the AI stack. Pat presented historical evidence that the application layer has typically captured the most value during technological transitions. "We don't care about unicorns," he explained. "We care about revenue and free cash flow." During previous transitions, companies that reached billion-dollar revenue milestones were predominantly at the application layer.

Bret Taylor, co-founder of Sierra and chair of OpenAI, elaborated on this perspective by outlining three distinct markets in AI:

1. **Foundation models**: Capital-intensive with likely consolidation, similar to cloud infrastructure—"a handful of players, relatively low margin, but very high scale."
2. **Tools** (the "pickaxes in the gold rush"): Companies like Databricks and Snowflake, but also new entrants building AI infrastructure.
3. **Applied AI**: Which Bret believes will manifest as agents. "I think the applied AI market will be the way software should be consumed. Companies will purchase an agent that does a job."

Bret was particularly bullish on the third category: "If you look at the total addressable market of all these vertical-specific, domain-specific agents, the market is gigantic." He noted that while the top software-as-a-service companies like Salesforce and ServiceNow have reached $200-300 billion market caps, none have reached the trillion-dollar club dominated by infrastructure players like Microsoft and Amazon. "You wonder, in this new world of agents, will we see our first trillion-dollar sort of applied enterprise software company? And I think the answer is yes."

Jensen Huang, whose NVIDIA has become the undisputed king of AI infrastructure, framed the market opportunity in even more expansive terms: "The world of data centers is probably hundreds of billions of dollars. The world of AI factories is probably trillions and trillions of dollars, because ultimately the market that we serve is some fraction, some percentage of $100 trillion."

Jensen made a crucial distinction between previous technology waves and the current AI revolution: "This is the first time in technology we're not creating a tool. We're displacing labor budget. We're augmenting labor. And so the question is, how big is the labor pool? And it's measured in trillions, not hundreds of billions."

## From Assistants to Agents to an Agent Economy

Konstantine Buhler of Sequoia mapped out the evolution of AI: from assistants to agent swarms to the agent economy. "An agent economy is one in which agents don't just communicate information," Konstantine explained. "They transfer resources. They can make transactions. They keep track of each other. They understand trust and reliability. And they actually have their own economy."

This progression requires solving three critical technical challenges:

1. **Persistent identity**: Agents that maintain consistent personalities and memory. "If you're doing business with someone and they change day to day, you probably won't be doing business with them for very long."
2. **Seamless communication protocols**: "Imagine personal computing without seamless communication protocols. No TCP/IP, no internet. We're just now building that protocol layer."
3. **Security**: "If you can't meet the person you're doing business with palm to palm, face to face, that importance of security and trust is even further elevated."

Harrison Chase, co-founder of LangChain, introduced the concept of "ambient agents"—AI systems that "listen to an event stream and act on it accordingly." Unlike chat agents that require direct human interaction, ambient agents work in the background, potentially handling thousands of events simultaneously.

"Why ambient agents? I think they're interesting for a few reasons," Harrison explained. "First, they let us scale ourselves. So if you interact with a chat agent, it's generally 1 to 1. You're doing one thing at a time. When you have these ambient agents, there can be thousands of them running in the background."

However, Harrison emphasized that "ambient does not mean fully autonomous." Human oversight remains crucial through various interaction patterns: approving or rejecting actions, editing suggestions, answering questions when agents get stuck, and "time travel"—the ability to go back to earlier steps in an agent's process and modify its trajectory. He also introduced the [agent inbox](https://github.com/langchain-ai/agent-inbox) (now available open source) as a new UX pattern for working with these ambient agents.

## The Infrastructure Revolution: From Data Centers to AI Factories

Jensen framed the current moment as nothing less than the birth of a new industrial revolution. "This industry is going to be an intelligence generation industry," Jensen said. "We're going from data centers to AI factories."

He drew a powerful historical parallel: "A long time ago, in the last industrial revolution, we poured water into this machinery, we light it on fire, and then this invisible thing comes out called electricity. And that's monetized at the time, completely impossible for most humans to understand. Dollars per kilowatt hours, megawatt hours, whatever it is. And now what comes out? We take that dollars per kilowatt hours. We apply it to this new machine called AI supercomputers. And what comes out of it are tokens that we monetize dollars per million tokens."

Jensen pushed back against narratives that paint AI as an energy glutton, reframing the conversation: "Every industrial industry that results in growth requires energy. If you want to produce something, you have to have energy. We would rather produce intelligence over producing cement, wouldn't you?"

He continued: "The world has to plan for infrastructure further out... At the moment we feel good about this click, we're working on the next click. The next one is Blackwell. We're ramping Blackwell ultra. The one that is after that is Ruben. We're finishing Reuben ultra. We're working on Feynman. Got to figure out Feynman. And so that's now six years out."

## The New Economics of AI: From Seats to Outcomes

The shift to AI is fundamentally changing business models. Bret highlighted how Sierra has moved to "outcomes-based pricing" where customers pay when the AI agent resolves issues autonomously. "If you're selling software that completes a job, what is the secular business model for that?" Bret asked. "It felt like, let's pay for a job well done."

This represents a significant evolution from traditional software business models. "We went from box software with a perpetual license to software-as-a-service, subscription-based business," Bret explained. "And we just thought from first principles and said, if you're selling software that completes a job, what is the secular business model for that?"

Bret argued that this shift in business models presents a major opportunity for startups. "If you look at the history of software, Salesforce beating Siebel Systems, ServiceNow beating the plethora of ITSM companies that came before—closing a technology gap in your product is hard, but not impossible. Changing your business model is really hard."

Pat echoed this sentiment, advising founders to be cautious about "vibe revenue"—early customer interest that feels good but doesn't represent sustainable adoption. "Is it tire kicking or are you actually creating durable behavior change? Inspect the adoption, the engagement, the retention."

He also emphasized the importance of trust over product perfection: "Your customers have to trust you. And you have to earn that trust. Trust is more important than your product. At this point in time where we are in the cycle, the product will get better. If they trust you to make it better, you're in good shape."

## The Race for Reasoning: Scaling Beyond Pre-Training

Dan Roberts from OpenAI shared insights on the breakthrough of reasoning in AI models. Last September, OpenAI released o1, which demonstrated an important new capability: "The model improved also with test time compute. We taught it to reason and it would spend some time thinking. And then the more time it spent thinking, the more it would improve."

This represents a fundamental shift in how AI models work. Previously, improvement came primarily from training—more data, more compute during the model creation phase. Now, models can improve their performance at inference time by "thinking longer" about problems.

Dan explained that this is opening a new frontier in AI development: "This is like a totally new dimension for scaling. That's not just training. It's also at test time." He illustrated this with the example of o3 solving complex physics problems that would take a human expert hours to verify.

Looking ahead, Dan suggested that OpenAI is shifting its focus from pre-training (the traditional approach of training on massive datasets) to reinforcement learning (RL): "A year ago, we put out GPT-4. There was compute used, and it was all pre-training compute. And as you can imagine, then we started doing this thing that led to test time compute. So we added some reinforcement learning compute."

He projected that future models might be "totally dominated and crushed by RL compute," inverting the traditional view that pre-training is the primary component with reinforcement learning as just "the cherry on top."

The ultimate goal? Models that can make "major contributions to the state of human knowledge and science." Dan illustrated this with a thought experiment about Einstein: "Einstein would get the right answer, and it would take him about eight years.… he discovered general relativity.… Our models think for a minute now, and they can reproduce textbook calculations. But we want them to make major contributions to the state of human knowledge and science."

## Physical AI: The Next Frontier

Jim Fan, Director of AI at NVIDIA, introduced the concept of the "physical Turing test"—a benchmark for physical AI that asks whether a robot could clean up a messy room and prepare a candlelit dinner indistinguishable from human work.

Jim highlighted the unique challenges of physical AI, particularly the data bottleneck: "LLM researchers complain a lot... the internet is the fossil fuel of AI, and we're running out of data. Well, just spend one day with roboticists and you'll know how spoiled the LLM researchers are. We don't even get the fossil fuel."

Unlike language models that can train on internet data, robotics requires physical data collection—a slow, expensive process limited to "at most 24 hours per robot per day." To overcome this limitation, Jim described NVIDIA's approach using simulation: "We've got to leave the physical world and then do something. Simulation."

Their breakthrough came through two key innovations: simulating at "10,000 times faster than real time" with thousands of parallel environments, and "domain randomization"—varying parameters like gravity and friction to create diverse training scenarios. The principle is that "if a neural network is able to control the robot to solve a million different worlds, then it may very well solve the million and first world, which is our physical reality."

Jim outlined an evolution from "Digital Twins" (precise simulations of specific environments) to "Digital Cousins" (generated environments that capture essential characteristics) to "Digital Nomads" (AI wandering through the dreamspace of video diffusion models). This progression enables robots to learn increasingly complex behaviors that can transfer to the real world.

The ultimate vision? A "physical API" that would do for atoms what language models have done for bits: "Just like LLM API moving around chunks of digits of bits, the physical API moves around chunks of atoms. You basically give your software a physical actuator to change the physical world."

## The Open Source Imperative

One of the most passionate discussions at AI Ascent centered on the importance of preserving open source AI models. Many speakers emphasized that the AI industry is still in its early stages and needs the innovation that open source enables.

A dedicated panel featuring leaders from Ollama, Fireworks, and Open Router expanded on this theme. Alex Atallah of Open Router articulated the core argument: "A fundamental principle behind open source is that human genius can still come from anywhere around the world, and that centralizing it behind model labs is very risky."

Jeffrey Morgan of Ollama added practical considerations: "On two fronts. One is a lot of the open source models are deployed on non-data center hardware. And so it ends up the customer has access to it anyway... The second is when a lot of these enterprises are really excited about customizing the model. And if these things are banned, but enterprises still want this, there's probably a way that that could still work."

Dmytro Dzhulgakov of Fireworks added: "If you view AI as like general purpose technology, right, even from global kind of benefiting the society, like you can try to regulate electricity or something, right? Like you can try to regulate applications and distribution how the market works. But like you shouldn't bend the basic technology. And I feel from that perspective it's just like developing of scientific progress."

The panel debated the current state of open models (behind closed ones but gaining ground) and the prospects for the future. When asked what percentage of inference tokens would run through open versus closed models in five years, the consensus hovered around 50/50—a significant shift from today's landscape.

Many speakers also highlighted the international dimension of AI research, noting that restricting open source models would primarily disadvantage American companies and researchers while failing to stop global development. The consensus was that open collaboration is not just beneficial but essential for maintaining a healthy AI ecosystem.

## The Changing Nature of Work and Business

Throughout the event, speakers reflected on how AI is changing the nature of work itself. Konstantine introduced the concept of the " [stochastic mindset](https://www.sequoiacap.com/article/stochastic-mindset-perspective/) " for dealing with the inherent variability of AI outputs. "The stochastic mindset is a departure from determinism," Konstantine explained. "A lot of us fell in love with computer science because it was so deterministic, right? … Now we're entering an era of computing that's going to be stochastic."

This shift requires a new management approach: "This management mindset is going to be all about understanding what your agents can and can't do for you. Everybody knows that being a really good IC engineer is pretty different from being a great engineering manager. And this is going to be the transition that most of the economy is going to make."

Sam observed how different generations are adapting to AI tools: "Older people use ChatGPT as a Google replacement. Maybe people in their 20s and 30s use it as a life advisor. And then people in college use it as an operating system."

This generational divide extends to organizations too, with Sam noting that established companies often struggle to adapt to AI's rapid evolution: "People get incredibly stuck in their ways. Organizations get incredibly stuck in their ways. If things are changing a lot every quarter or two and you have an Information Security Council that meets once a year to decide what applications you're going to allow... It's so painful to watch what happens here."

## Building for the AI Future

For founders and builders, the conference offered practical guidance on navigating the AI landscape. Pat advised focusing on three key areas:

1. **Revenue quality**: "Don't delude yourself into thinking you have real revenue when you have vibe revenue, because it'll bite you."
2. **Margins**: "We don't necessarily care where your gross margin is today... If you are successfully marching from selling a tool to selling an outcome, and you're going up that value chain and you can capture more of that value, your price point is probably going to go up too."
3. **Data flywheels**: "If the data flywheel doesn't move a metric, either you don't have a data flywheel or it just doesn't matter. It needs to tie to a business metric."

Bret emphasized the importance of customer empathy: "One of the things I see a lot with entrepreneurs is they'll go into a meeting and sell their product. If you ever see a really good sales person, the first thing you'll see them do is ask a lot of questions. But then the next thing you need to do is actually listen and understand what they're saying."

Sam shared insights on building a high-velocity organization: "I think a mistake that a lot of companies make is they get big and they don't do any, they don't do more things... I am a big believer that you want everyone to be busy. You want teams to be small, you want to do a lot of things relative to the number of people you have."

## The Path Forward

As the conference concluded, a clear picture emerged of both the challenges and opportunities ahead. The AI revolution is accelerating, with foundation models becoming more capable, agent frameworks evolving, and applications proliferating across industries.

For founders and builders, the message was one of urgency mixed with strategic clarity. Pat put it bluntly: "Nature hates a vacuum. There is a tremendous sucking sound in the market right now for AI... you are in a run-like-heck business right now."

But success requires more than speed. It demands building trust with customers, developing genuine data flywheels, and creating solutions that deliver measurable outcomes rather than just technological novelty.

The coming years will see the emergence of new AI-native companies, the transformation of established enterprises, and potentially the creation of entirely new categories of business. As Sam predicted, we're on the cusp of a world where AI moves from assisting humans to actively creating and discovering alongside us, and eventually into the physical realm.

For those gathered at AI Ascent 2025, the revolution isn't just coming—it's here, and the race to shape its future is already well underway. The question is no longer whether AI will transform our world, but how quickly and in what ways—and who will lead that transformation.

> **[YouTube Playlist: AI Ascent 2025](https://youtube.com/playlist?list=PLOhHNjZItNnMEqGLRWkKjaMcdSJptkR08&si=-yHjvWBLNGOEaupP)**

A