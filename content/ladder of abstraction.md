---
publish: true
---
[Up and Down the Ladder of Abstraction](https://worrydream.com/LadderOfAbstraction/) 
Abstracting Over This Example
**my thoughts**: data vis a perfect way to go up and down the ladder of abstraction
writing as well - finding the right metaphors
metaphors/data vis are textual/visual ways of translating dense information into discernable insights
is there a next-gen way of imagining networks

## **Summary**
So far, we've been looking at a toy example. Real-world systems may be more complex, but they all share the same general anatomy: an independent variable (such as time), a structure (such as an algorithm), and a dataset (such as an environment).

- The **independent variable** is usually time. This is our way of thinking about _causality_ — a system's state depends on its previous states in time. Even for systems that are normally expressed with multiple independent variables, such as heat diffusion or wave propagation, we typically _think_ of the system as evolving over time.
    
    "Time" needn't be real time. Time might be discrete unitless steps, as with our car example above, or the stages of an industrial process, or a sequence of messages in a communications system. Backtracking and divide-and-conquer algorithms have their own peculiar notions of branching time, which may be useful to visualize.
    
- The **structure** is the set of rules that the system obeys. In a board game or legal system, the rules are in prose. In software, they form an algorithm. In a physical system, they are typically equations implied by coupled components, according to the laws of the governing theory such as Kirchhoff's laws or Maxwell's equations. If the system evolves over time, these are often differential or difference equations. If the system varies over space, they may be partial differential equations or cellular automaton rules.
    

- The structure is what we control. Typically, there are two levels of control. We can _rearrange_ the structure — add a line of code, or connect two transistors. We can also _adjust values_ within the structure, such as our car's turning rate, or the value of a resistor. Value changes lend themselves more readily to interactive control and abstraction. But structural changes usually have more impact, and it's important to consider how they can be explored and abstracted over.
    
- The **data** gets fed to the rules. Sometimes this data is a one-time delivery — a sorting algorithm is given an array to sort; the differential equations of a closed system only need an initial state. But many systems aren't closed, and respond continuously to an environment (such as our car example, or a thermostat) or a stream of input data (such as a speech recognizer). In systems that interact with people, that input data can be notoriously unpredictable.
    
    Designing a system requires designing a model for the input data. This can be as much art, and as much challenge, as designing the structure itself. Sometimes we can use real-life data — a stock market predictor has plenty of historical data to scoop up. But if we want to _understand_ how the data influences the behavior, we need to be able to _control_ it. We need dimensions, like our road's bend angle, where we can try "more of this" and "less of that". Sometimes we can get these dimensions by organizing real-life data in some way. Sometimes it's easier to synthesize our data, so we can control its characteristics precisely.