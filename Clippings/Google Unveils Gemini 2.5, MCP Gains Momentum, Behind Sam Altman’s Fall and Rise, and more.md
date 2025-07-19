---
title: "Google Unveils Gemini 2.5, MCP Gains Momentum, Behind Sam Altman’s Fall and Rise, and more..."
source: "https://www.deeplearning.ai/the-batch/issue-297/"
author:
  - "[[Google Unveils Gemini 2.5]]"
  - "[[MCP Gains Momentum]]"
  - "[[Behind Sam Altman’s Fall and Rise]]"
  - "[[and more...]]"
published: 2025-04-16
created: 2025-04-17
description: "The Batch AI News and Insights: I’ve noticed that many GenAI application projects put in automated evaluations (evals) of the system’s output..."
tags:
  - "clippings"
---
Dear friends,

I’ve noticed that many GenAI application projects put in automated evaluations (evals) of the system’s output probably later — and rely on humans to manually examine and judge outputs longer — than they should. This is because building evals is viewed as a massive investment (say, creating 100 or 1,000 examples, and designing and validating metrics) and there’s never a convenient moment to put in that up-front cost. Instead, I encourage teams to think of building evals as an iterative process. It’s okay to start with a quick-and-dirty implementation (say, 5 examples with unoptimized metrics) and then iterate and improve over time. This allows you to gradually shift the burden of evaluations away from humans and toward automated evals.

I [wrote](https://www.deeplearning.ai/the-batch/we-need-better-evals-for-llm-applications/?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8_FZ-k139bkaCkF4mFB_yCDFgWpbSutrss2x6jmYppbpKVs6G9jtGyW9TvuC9eQ2s91iOP) previously about the importance and difficulty of creating evals. Say you’re building a customer-service chatbot that responds to users in free text. There’s no single right answer, so many teams end up having humans pore over dozens of example outputs with every update to judge if it improved the system. While techniques like LLM-as-judge are helpful, the details of getting this to work well (such as what prompt to use, what context to give the judge, and so on) are finicky to get right. All this contributes to the impression that building evals requires a large up-front investment, and thus on any given day, a team can make more progress by relying on human judges than figuring out how to build automated evals.

I encourage you to approach building evals differently. It’s okay to build quick evals that are only partial, incomplete, and noisy measures of the system’s performance, and to iteratively improve them. They can be a complement to, rather than replacement for, manual evaluations. Over time, you can gradually tune the evaluation methodology to close the gap between the evals’ output and human judgments. For example:

- It’s okay to start with very few examples in the eval set, say 5, and gradually add to them over time — or subtract them if you find that some examples are too easy or too hard, and not useful for distinguishing between the performance of different versions of your system.
- It’s okay to start with evals that measure only a subset of the dimensions of performance you care about, or measure narrow cues that you believe are correlated with, but don’t fully capture, system performance. For example if, at a certain moment in the conversation, your customer-support agent is supposed to (i) call an API to issue a refund and (ii) generate an appropriate message to the user, you might start off measuring only whether or not it calls the API correctly and not worry about the message. Or if, at a certain moment, your chatbot should recommend a specific product, a basic eval could measure whether or not the chatbot mentions that product without worrying about what it says about it.

So long as the output of the evals correlates with overall performance, it’s fine to measure only a subset of things you care about when starting.

![Cartoon of two coworkers coding; one struggles with evaluations, the other iterates quickly through model updates and test cases.](https://dl-staging-website.ghost.io/content/images/2025/04/unnamed--58-.jpg)

Cartoon of two coworkers coding; one struggles with evaluations, the other iterates quickly through model updates and test cases.

The development process thus comprises two iterative loops, which you might execute in parallel:

- Iterating on the system to make it perform better, as measured by a combination of automated evals and human judgment;
- Iterating on the evals to make them correspond more closely to human judgment.

As with many things in AI, we often don’t get it right the first time. So t’s better to build an initial end-to-end system quickly and then iterate to improve it. We’re used to taking this approach to building AI systems. We can build evals the same way.

To me, a successful eval meets the following criteria. Say, we currently have system A, and we might tweak it to get a system B:

- If A works significantly better than B according to a skilled human judge, the eval should give A a significantly higher score than B.
- If A and B have similar performance, their eval scores should be similar.

Whenever a pair of systems A and B contradicts these criteria, that is a sign the eval is in “error” and we should tweak it to make it rank A and B correctly. This is a similar philosophy to [error analysis](https://www.youtube.com/watch?v=JoAxZsdw_3w&utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8_FZ-k139bkaCkF4mFB_yCDFgWpbSutrss2x6jmYppbpKVs6G9jtGyW9TvuC9eQ2s91iOP) in building machine learning algorithms, only instead of focusing on errors of the machine learning algorithm's output — such as when it outputs an incorrect label — we focus on “errors” of the evals — such as when they incorrectly rank two systems A and B, so the evals aren’t helpful in choosing between them.

Relying purely on human judgment is a great way to get started on a project. But for many teams, building evals as a quick prototype and iterating to something more mature lets you put in evals earlier and accelerate your progress.

Keep building!

Andrew

---

![Promo banner for "Building AI Browser Agents"](https://dl-staging-website.ghost.io/content/images/2025/04/The-Batch-ads-and-exclusive-banners---2025-04-11T162548.680.png)

Promo banner for "Building AI Browser Agents"

Build autonomous agents that take actions like scraping web pages, filling out forms, and subscribing to newsletters in “Building AI Browser Agents.” Explore the AgentQ framework, which helps agents self-correct using Monte Carlo tree search and direct preference optimization. [Start learning today](https://www.deeplearning.ai/short-courses/building-ai-browser-agents/?ref=dl-staging-website.ghost.io)

## News

![AI benchmark comparison chart showing Gemini 2.5 Pro, GPT-4.5, Claude, Grok, and others across science, math, code, and reasoning.](https://dl-staging-website.ghost.io/content/images/2025/04/unnamed--76-.png)

AI benchmark comparison chart showing Gemini 2.5 Pro, GPT-4.5, Claude, Grok, and others across science, math, code, and reasoning.

## Google Unveils Gemini 2.5

Google’s new flagship model raised the state of the art in a variety of subjective and objective tests.

**What’s new:** Google launched [Gemini 2.5 Pro Experimental](https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8-afztMUszJ_VV6AKiEzLFAMzdZhNGggAm8i1kx46WQ-JHHfAq84GquslgvqD9JuJttKDF#gemini-2-5-thinking), the first model in the Gemini 2.5 family, and announced that  [Gemini 2.5 Flash](https://developers.googleblog.com/en/gemini-2-5-flash-pro-live-api-veo-2-gemini-api/?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8-afztMUszJ_VV6AKiEzLFAMzdZhNGggAm8i1kx46WQ-JHHfAq84GquslgvqD9JuJttKDF), a version with lower latency, will be available soon. All Gemini 2.5 models will have reasoning capabilities, as will all Google models going forward.

- **Input/output:** Text, audio, images, video in (up to 1 million tokens, up to 2 million tokens announced but not yet available), text out (up to 65,000 tokens, [212.7 tokens per second, 26.8 seconds to first token](https://artificialanalysis.ai/models/gemini-2-5-pro?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8-afztMUszJ_VV6AKiEzLFAMzdZhNGggAm8i1kx46WQ-JHHfAq84GquslgvqD9JuJttKDF))
- **Performance:** Currently tops [Chatbot Arena](https://lmarena.ai/?leaderboard&utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8-afztMUszJ_VV6AKiEzLFAMzdZhNGggAm8i1kx46WQ-JHHfAq84GquslgvqD9JuJttKDF)
- **Availability/price:** Limited free access via [Google Cloud](https://console.cloud.google.com/welcome/new?pli=1&invt=Abuv_Q&utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8-afztMUszJ_VV6AKiEzLFAMzdZhNGggAm8i1kx46WQ-JHHfAq84GquslgvqD9JuJttKDF),
- [Google AI Studio](https://aistudio.google.com/app/prompts/new_chat?model=gemini-2.5-pro-exp-03-25&utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8-afztMUszJ_VV6AKiEzLFAMzdZhNGggAm8i1kx46WQ-JHHfAq84GquslgvqD9JuJttKDF), [Vertex AI](https://cloud.google.com/vertex-ai/generative-ai/docs/models/gemini/2-5-pro?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8-afztMUszJ_VV6AKiEzLFAMzdZhNGggAm8i1kx46WQ-JHHfAq84GquslgvqD9JuJttKDF), and Gemini app and website. API $1.25/$10 per million tokens input/output up to 200,000 tokens, $2.50/$15 per million tokens input/output above 200,000 tokens.
- **Features:** Reasoning, web search, code execution
- **Undisclosed:** Architecture, parameter count, training methods, training data

**How it works:** Compared to [Gemini 1.0](https://www.deeplearning.ai/the-batch/all-you-need-to-know-about-gemini-googles-new-multimodal-model/?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8-afztMUszJ_VV6AKiEzLFAMzdZhNGggAm8i1kx46WQ-JHHfAq84GquslgvqD9JuJttKDF)  and  [Gemini 1.5](https://www.deeplearning.ai/the-batch/gemini-1-5-pro-a-leap-in-multimodal-ai/?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8-afztMUszJ_VV6AKiEzLFAMzdZhNGggAm8i1kx46WQ-JHHfAq84GquslgvqD9JuJttKDF), Google disclosed little information about Gemini 2.5 Pro Experimental or how it differs from previous versions.

- Like [Gemini 2.0 Flash Thinking](https://www.deeplearning.ai/the-batch/googles-gemini-2-0-flash-thinking-advances-in-reasoning-outperforms-deepseek-r1/?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8-afztMUszJ_VV6AKiEzLFAMzdZhNGggAm8i1kx46WQ-JHHfAq84GquslgvqD9JuJttKDF), Gemini 2.5 Pro Experimental is trained using reinforcement learning to generate reasoning tokens before responding to prompts. It hides such tokens but provides more general reasoning traces.
- Google said Gemini 2.5 Pro Experimental uses a “significantly enhanced” base model and “improved” post-training but didn’t provide details.
- Gemini 2.5 Pro improves on Gemini 2.0 Pro’s coding abilities and performs well on SWE-Bench Verified, a benchmark that evaluates agentic coding. Google didn’t specify details on the coding agent used for these tests, calling it a “custom agent setup.”

**Results:** On a variety of popular benchmarks, Gemini 2.5 Pro Experimental outperforms top models from competing AI companies.

- As of this writing, in the Chatbot Arena, a head-to-head competition in which human users choose the best response between two anonymous models, Gemini 2.5 Pro Experimental (1437 Elo) tops the leaderboard ahead of OpenAI GPT-4o 2025-03-26 (1406 Elo) and xAI Grok 3 Preview (1402 Elo).
- Across 12 benchmarks, on seven of them, Gemini 2.5 Pro Experimental outperformed OpenAI o3-mini (set to high effort), OpenAI GPT-4.5, Anthropic Claude 3.7 Sonnet (64,000 extended thinking), xAI Grok 3 Beta (extended thinking), and DeepSeek-R1.

**Why it matters:** Late last year, some observers expressed [concerns](https://www.cnbc.com/2024/12/11/why-ai-advancement-could-be-slowing-down.html?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8-afztMUszJ_VV6AKiEzLFAMzdZhNGggAm8i1kx46WQ-JHHfAq84GquslgvqD9JuJttKDF) that progress in AI was slowing. Gemini 2.5 Pro Experimental arrives shortly after rival proprietary models GPT-4.5 (currently a research preview) and Claude 3.7 Sonnet, both of which showed improved performance, yet it outperforms them on most benchmarks. Clearly there’s still room for models — particularly reasoning models — to keep getting better.

**We’re thinking:** Google said it plans to train all its new models on chains of thought going forward. This follows a similar [statement](https://x.com/sama/status/1889755723078443244?lang=en&utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8-afztMUszJ_VV6AKiEzLFAMzdZhNGggAm8i1kx46WQ-JHHfAq84GquslgvqD9JuJttKDF) by OpenAI. We’re sure they have their reasons!

---

![Diagram of Modal Context Protocol showing MCP client-server architecture, APIs, and local and remote data sources.](https://dl-staging-website.ghost.io/content/images/2025/04/unnamed--59-.jpg)

Diagram of Modal Context Protocol showing MCP client-server architecture, APIs, and local and remote data sources.

## Open Standard for Tool Use and Data Access Gains Momentum

OpenAI embraced Model Context Protocol, providing powerful support for an open standard that connects large language models to tools and data.

**What’s new:** OpenAI will support [Model Context Protocol](https://modelcontextprotocol.io/introduction?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8-afztMUszJ_VV6AKiEzLFAMzdZhNGggAm8i1kx46WQ-JHHfAq84GquslgvqD9JuJttKDF) (MCP) in its Agents SDK and soon its ChatGPT desktop app and Responses API. The move will give developers who use OpenAI models access to a wide variety of pre-existing tools and proprietary data sources.

**How it works:**[Launched](https://www.anthropic.com/news/model-context-protocol?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8-afztMUszJ_VV6AKiEzLFAMzdZhNGggAm8i1kx46WQ-JHHfAq84GquslgvqD9JuJttKDF)  by Anthropic late last year, MCP connects AI models to a growing ecosystem of plug-and-play resources, including more than 6,000  [community-built servers and connectors](https://mcp.so/?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8-afztMUszJ_VV6AKiEzLFAMzdZhNGggAm8i1kx46WQ-JHHfAq84GquslgvqD9JuJttKDF).

- MCP defines clients and servers. Servers expose tools and data sources that LLMs can use. Clients like Claude for Desktop or agents built using the OpenAI [Agents SDK](https://openai.github.io/openai-agents-python/mcp/?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8-afztMUszJ_VV6AKiEzLFAMzdZhNGggAm8i1kx46WQ-JHHfAq84GquslgvqD9JuJttKDF) interact with servers.
- Servers define tools such as internet search or file system manipulation, and users can download and run them locally or connect to servers hosted by third parties. In their code, users simply tell the client where the server(s) are running. Given a prompt, a model, behind the scenes, will retrieve a list of tools available from all servers, decide which to use, call them, and formulate and return responses.

**Behind the news:** Momentum behind MCP has built rapidly. Last month, Microsoft [integrated MCP](https://www.microsoft.com/en-us/microsoft-copilot/blog/copilot-studio/introducing-model-context-protocol-mcp-in-copilot-studio-simplified-integration-with-ai-apps-and-agents/?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8-afztMUszJ_VV6AKiEzLFAMzdZhNGggAm8i1kx46WQ-JHHfAq84GquslgvqD9JuJttKDF)  into CoPilot Studio, enabling developers to build agents with access to MCP servers. Cloudflare enabled its customers to  [deploy remote MCP servers](https://blog.cloudflare.com/remote-model-context-protocol-servers-mcp/?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8-afztMUszJ_VV6AKiEzLFAMzdZhNGggAm8i1kx46WQ-JHHfAq84GquslgvqD9JuJttKDF). In February, the AI-powered code editor Cursor enabled users to  [add MCP servers](https://docs.cursor.com/context/model-context-protocol?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8-afztMUszJ_VV6AKiEzLFAMzdZhNGggAm8i1kx46WQ-JHHfAq84GquslgvqD9JuJttKDF).

**Why it matters:** OpenAI’s move will make it easier for developers who use its models to connect to a variety of tools and data sources, and it helps to establish MCP as a go-to protocol for building agentic applications. Instead of figuring out manually how to integrate various providers, developers can connect to a third-party server (or download and run it themselves) and tie it into existing workflows with a few lines of code.

**We’re thinking:** Kudos to Anthropic, OpenAI, and other competitors who realize it’s better to solve shared problems together than fragment the industry.

---

![Illustration of a businessman in a blue suit sitting alone at the head of a long boardroom table with black chairs.](https://dl-staging-website.ghost.io/content/images/2025/04/unnamed--60-.jpg)

Illustration of a businessman in a blue suit sitting alone at the head of a long boardroom table with black chairs.

## The Fall and Rise of Sam Altman

A behind-the-scenes [account](https://www.wsj.com/tech/ai/the-real-story-behind-sam-altman-firing-from-openai-efd51a5d?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8-afztMUszJ_VV6AKiEzLFAMzdZhNGggAm8i1kx46WQ-JHHfAq84GquslgvqD9JuJttKDF) provides new details about the abrupt firing and reinstatement of OpenAI CEO Sam Altman in November 2023.

**How it works:** Based on insider accounts, an excerpt from a forthcoming book about OpenAI by Wall Street Journal reporter Keach Hagey describes conflicts, accusations, and shifting alliances that led to Altman’s brief ouster and rapid return.

**Firing and reinstatement:** OpenAI’s board of directors came to distrust Altman but failed to persuade executives and employees that he should be replaced.

- In winter 2022, Altman told the board that the company’s joint safety committee with Microsoft had approved three “somewhat controversial” enhancements to GPT-4. Board member Helen Toner later learned that only one had been approved.
- Altman also failed to tell the board that Microsoft had tested GPT-4 in India without the committee’s approval.
- Board members were surprised to learn that Altman personally owned the $175 million OpenAI Startup Fund, so OpenAI investors wouldn’t see any profits. Altman claimed he didn’t benefit from the fund.
- CTO Mira Murati expressed doubts about Altman’s leadership to other board members. Murati, Toner, and co-founder Ilya Sutskever began to document his actions.
- On November 16, the board voted to fire Altman and appoint Murati interim CEO. The board members were reluctant to reveal why they’d fired Altman. At one meeting, Murati and other executives gave them 30 minutes to either explain why they fired Altman, resign, or watch the executive team quit. Nearly all OpenAI employees (including Murati and Sutskever) signed a letter threatening to quit if Altman wasn't reinstated, and the board reversed its decision.

**Aftermath:** Since Altman’s return, Murati and all but one director who voted to remove him have left OpenAI. The issues that precipitated his departure have given way to commercial concerns as the company considers a shift from its current hybrid nonprofit/for-profit structure to fully for-profit.

- GPT-5 will arrive “in the next few months,” according to [Altman](https://x.com/sama/status/1908167621624856998?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8-afztMUszJ_VV6AKiEzLFAMzdZhNGggAm8i1kx46WQ-JHHfAq84GquslgvqD9JuJttKDF).
- Meanwhile, OpenAI launched [GPT-4.1](https://openai.com/index/gpt-4-1/?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8-afztMUszJ_VV6AKiEzLFAMzdZhNGggAm8i1kx46WQ-JHHfAq84GquslgvqD9JuJttKDF)  (making full, mini, and nano versions available via API) and confirmed it soon would release  [o3](https://techcrunch.com/2025/04/04/openai-says-itll-release-o3-after-all-delays-gpt-5/?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8-afztMUszJ_VV6AKiEzLFAMzdZhNGggAm8i1kx46WQ-JHHfAq84GquslgvqD9JuJttKDF), a new reasoning model.
- OpenAI said it will release its first open model, a new [language model with open weights](https://techcrunch.com/2025/03/31/openai-plans-to-release-a-new-open-language-model-in-the-coming-months/?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8-afztMUszJ_VV6AKiEzLFAMzdZhNGggAm8i1kx46WQ-JHHfAq84GquslgvqD9JuJttKDF), in coming months.
- The company recently [raised](https://www.latimes.com/business/story/2025-04-02/openai-raised-the-largest-fundraising-round-ever-whats-next?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8-afztMUszJ_VV6AKiEzLFAMzdZhNGggAm8i1kx46WQ-JHHfAq84GquslgvqD9JuJttKDF) $40 billion, the largest-ever funding round for an AI company, increasing its valuation to $300 billion.

**Why it matters:** The AI frontier spawns not only technical innovations but also intense interpersonal relationships and corporate politics. Such dynamics have consequences for users and the world at large: Having survived serious challenges to his leadership, Altman has emerged in a strong position to build a path of faster growth as a for-profit company upon OpenAI’s philanthropic foundation.

**We’re thinking:** Given OpenAI’s formidable achievements, Altman’s renewed leadership marks an inflection point in the AI landscape. Without Sam Altman at the helm, OpenAI would be a very different company, with different priorities and a different future.

---

![Diagram of latent transformer model using byte-level encoding, patching, and cross-attention for next-byte prediction.](https://dl-staging-website.ghost.io/content/images/2025/04/unnamed--77-.png)

Diagram of latent transformer model using byte-level encoding, patching, and cross-attention for next-byte prediction.

## Toward LLMs That Understand Misspellings

Researchers built a model that’s more robust to noisy inputs like misspellings, smarter about character-level information like the number of R's in strawberry, and potentially better able to understand unfamiliar languages that might share groups of letters with familiar languages. Their approach: Eliminate the tokenizer and instead integrate a system that learns to group input characters.

**What’s new:** Artidoro Pagnoni, Ram Pasunuru, and collaborators at Meta, University of Washington, and University of Chicago introduced [Byte Latent Transformer](https://arxiv.org/abs/2412.09871?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8-afztMUszJ_VV6AKiEzLFAMzdZhNGggAm8i1kx46WQ-JHHfAq84GquslgvqD9JuJttKDF) (BLT), a system of transformers that processes groups of text characters (in the form of bytes) directly.

**Key insight:** A tokenizer turns bytes (characters) into tokens (a word or part of a word) based on learned rules: Specific sequences map to particular tokens. A large language model (LLM) would be more efficient if its tokenizer considered how easy or difficult it would be to predict the next token, because then it could group tokens that commonly occur together, thus saving memory and processing power. For instance, to complete the phrase, “The capital of the United States is,” a tokenizer may generate “Washington”, then “D”, then “.C”, and finally “.” — even though it’s easy to predict that “D.C.” will follow “Washington” (that is, the number of viable options is very small). Conversely, generating the token after “D.C.” is harder, since many viable options exist. Using a small LLM to estimate the difficulty of predicting the next token enables the model to split difficult-to-predict text into smaller groups while packing easier-to-predict text into larger groups.

**How it works:** BLT comprises four transformers (8 billion parameters total): (i) a small byte-level transformer, (ii) an encoder transformer, (iii) a so-called latent transformer, and (iv) a decoder transformer. The authors trained the system to generate the next token in 1 trillion tokens of text, including tokens drawn from a filtered [version](https://arxiv.org/abs/2406.11794?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8-afztMUszJ_VV6AKiEzLFAMzdZhNGggAm8i1kx46WQ-JHHfAq84GquslgvqD9JuJttKDF) of Common Crawl.

- The authors trained the byte-level transformer to generate the next byte from an input sequence of bytes.
- For an input sequence, the byte-level transformer predicted the probabilities of the value of the next byte. The authors used entropy, a measure of uncertainty, to decide how bytes should be grouped. If the predicted probabilities were concentrated in a particular byte value (low entropy), meaning the next byte was highly predictable, the byte was added to the current group. If the probabilities were more spread out across multiple byte values (high entropy), meaning the model was less certain, it was part of a new group.
- The encoder transformer learned to represent each group as a vector, while attending to preceding bytes for context.
- The latent transformer learned to generate the next group vector from all previous group vectors.
- Finally, the decoder transformer learned to reconstruct a byte sequence from a sequence of vectors.

**Results:** On seven benchmarks that test general language and coding abilities, BLT achieved an average accuracy of 61.1 percent, outperforming [Llama 3](https://arxiv.org/abs/2407.21783?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8-afztMUszJ_VV6AKiEzLFAMzdZhNGggAm8i1kx46WQ-JHHfAq84GquslgvqD9JuJttKDF) (8 billion parameters and a similar number of floating point operations to BLT) at 60.0 percent.

- BLT achieved 80.6 percent on the common-sense question and answer benchmark [HellaSwag](https://arxiv.org/abs/1905.07830?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8-afztMUszJ_VV6AKiEzLFAMzdZhNGggAm8i1kx46WQ-JHHfAq84GquslgvqD9JuJttKDF), while Llama 3 (8 billion parameters and a similar number of floating point operations to BLT) achieved 79.1 percent.
- BLT demonstrated significantly higher resilience to noisy inputs compared to Llama 3, particularly in tasks involving character manipulation, spelling variations, and languages for which relatively little data is available. For example, in the CUTE spelling benchmark, which tests a model’s ability to recognize correctly spelled words, BLT achieved 99.9 percent accuracy while Llama 3 achieved 1.1 percent accuracy.
- BLT outperformed Llama 3 in [translating to English across 26 languages](https://aclanthology.org/2022.tacl-1.30/?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8-afztMUszJ_VV6AKiEzLFAMzdZhNGggAm8i1kx46WQ-JHHfAq84GquslgvqD9JuJttKDF)  (including 20 with little data). It achieved 14.0 average SentencePiece BLEU score (which measures how good a machine translation is compared to a human translation over text tokenized with the  [SentencePiece](https://aclanthology.org/D18-2012/?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8-afztMUszJ_VV6AKiEzLFAMzdZhNGggAm8i1kx46WQ-JHHfAq84GquslgvqD9JuJttKDF) tokenizer), while LLaMA 3 achieved 12.1 average SentencePiece BLEU.

**Why it matters:** By working directly on bytes, BLT is inherently more robust to variations in language, which improves its performance. For instance, when prompted to insert a "z" after every "n" in "not", Llama 3 incorrectly completed it as "znotz". This happened because its tokenizer treats "not" as a single, indivisible token. In contrast, BLT correctly generated "nzot," because it can dynamically regroup bytes and draw new boundaries. In a more practical case, instead of treating "pizya" and "pizza" as different tokens, BLT recognizes that they share nearly identical byte sequences, differing only in the bytes for "y" and "z", and therefore likely mean the same thing.

**We’re thinking:** In some alternatives to traditional tokenization, an LLM might process much longer sequences because the number of bytes in a sentence is much larger than the number of words. This work addresses that issue by grouping bytes dynamically. The tradeoff is complexity: Instead of one transformer, we have four.