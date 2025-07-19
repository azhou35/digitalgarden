---
tags:
  - supercomputing
---
- Semiconductors are manufactured on silicon _wafers_ — older nodes used 200mm diameter wafers and newer nodes (after ~2000) use 300mm diameter wafers.
- Each wafer can hold one or more _chips_ — these are the discrete units that comprise electronics.
- Chips are made of many _devices_ that the manufacturing process embeds in silicon through many steps of subtraction (etching via **photolithography**) and addition (**chemical deposition, etc.) The** primary device people talk about in computing is the transistor, but devices can also be sensors, resistors, capacitors, etc.
- The _node size_ refers approximately to the smallest device feature (like the gate of a transistor) that a specific process can create. As node sizes get smaller, you can make transistors more dense, so you can have more transistors per mm^2 and thus have more transistors per wafer, and thus make single chips with more transistors. This exponential growth in transistors/chip is what Moore’s law is referring to. As of 2022, the 5nm process is the most advanced node in production. The most advanced node in the mid 1990s was 180nm, which is notable because it was the first node that was smaller than the wavelength of light used to make it.

There are several numbers at play when we’re talking about the economics of chips:

- The capital expenses (capex) of creating the production line. (The production line + building that houses it are collectively referred to as a “fab”). These are one-off costs of building the building, buying the machinery, training people to operate it, and (this one often gets left out) figuring out how to get everything working.[1](https://blog.benjaminreinhardt.com/semiconductors#fn:1)
- The recurring costs to the manufacturer — these occur per _wafer_ and include consumables like ultra-pure water, chemicals, and electricity as well as labor. (Also known as operational expenses or opex.)
- The one-off costs associated with creating a new chip — design, creating the masks, testing them, and iterating.
- The price that the manufacturer can charge to manufacture a wafer.
- The price that a chip designer can charge for a chip. (Sometimes the manufacturer and the chip designer are the same, as in the case of Intel, and sometimes they are different as in the case of “fabless” companies and say, TSMC.)