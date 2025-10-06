[[product sense template]]
- “Imagine a customer wants to use Fireworks for multimodal search (images + text). How do you define MVP?”
- “How should we think about supporting agents on Fireworks?”
- “Design an onboarding flow for a startup developer using Fireworks API for the first time.” 

Weaknesses:
- Given an abstract question how do you move fluidly between layers?
- When given a vague scenario, think in layers:
	- User layer
		- who is the researcher
		- what are they trying to do
		- what is their ideal exp - minimal friction, trust in mappings? 
	- System layer:
		- input sources: vendor metadata, reference tables
		- Extraction strategies: exact / fuzzy matches
		- Metadata enrichment
	- Risks / edge cases
		- missing data, conflicting matches, vendor drift
- Inherently add structure to the problem
- **When you feel pulled into the abstract zoom out and say**
	- Let me zoom out and think about the workflow of the researcher -> i def missed this
		- Do they provide data directly or is it streamed from vendors
	- There's a few layers here: user workflow, data extractio, error handling
		- Core challenge is less about the parsing itself and more about making it reliable and reproducible 
		- - - “I may not know the best algorithm here, but from a product perspective I’d want the system to flag low-confidence matches, not silently fail.”
can you traverse the spectrum of abstraction? 
does this company identify usable assets (technological/physical assets)
do they have a sixth sense of a good product that shows empathy for the pain points? crafting a produc 
General Product Strategy Effort:
### 1. Clarify User Workflow
1. What is their current workflow
2. How often does customer do this?
3. What is the scale? 
### 2. Clarify Input Data / Technology
1. What fields come with data? 
2. Is this technology standardized?
3.  Does customer expect system to do X Y Z?
4. What level of metrics are we accepting? Accuracy/reliability
### 3. Propose Solution
1. If data comes from X, let the customer do Y so the system can do Z
#### 4. Clarify failure modes
1. What are the risks here - if technology fails
#### 5. Clarify the output 
1. Once we 

