* the world data comes in the form of graphs
	* inherently deals w hierarchial relationships
* neural networks are good on inherently structured data (eg sentences, images, etc) but not as much on graphs 
	* first layer of cnn was so successful bc layers extract reason on a region
	* can identify relative 
	* an image is a grid graph - each node is a to a diff graph 
	* layers of message passing <> each layer in an image procesed by cnn
	* node embeddings, within an embedding space of all the posivle nodes
* LLMs lack explicit mechanisms to model **3D spatial data**, **dynamic graphs**, or **multi-hop relational reasoning** (e.g., "A is friends with B, who works at C, which competes with D").
* GNNs model arbitrary graph topologies, which are "higher-dimensional" in terms of relational complexity. LLMs process flattened sequences with attention-based approximations of relationships.
	* **key unlock is they learn from features of individual nodes AND relationships**
* types:
	* ConvGNNs
		* spectral-based approaches like vibrations of a drum looking at how info resonates
		* spatial-based approahces aggregates infos from nearest neighbors
	* Graph Autoeconders
		* compressionalgos for graphs - takes a graph and compresses into compact representation, decoder that reconstructs the og graph from compressed version
		* good for drug discovery
	* Spatial-temporal GNNs are good for traffic flow or looking at patterns during diff times of day
		* application to hardware: nodes represent individual hardware components, edges represent physical/logical components, node features would be telemetry metrics ove time
GNNs are **not** inherently higher-dimensional in the _vector embedding_ sense compared to LLMs. However, they **are** higher-dimensional in **structural/relational modeling**, making them better suited for spatial, graph, or hierarchical data. To truly transcend 2D token-based LLMs, integrating **GNNs with hyperdimensional representations** could unlock:

- 3D-aware language models.
    
- Symbolic reasoning over complex systems.
    
- Robust fusion of text, graphs, and physical spaces.
The Future of Spatial AI in Supercomputing
Translate academic research (e.g., HDC papers from UCSD/MIT) into Azure product roadmaps.
### **Example Project Pitch**

_Title_: **“Spatial Intelligence for Azure Hyperscale”**  
_Goal_: Use GNNs to model data center networks as dynamic graphs and HDC to predict failures/optimize workloads.  
_Steps_:

1. Partner with Azure Hardware Systems to collect sensor/network data.
    
2. Prototype a GNN-based anomaly detector using AML.
    
3. Integrate HDC for energy-efficient edge inference.
    
4. Scale across Microsoft’s supercomputing infrastructure.
#### Startup unlocks
1. Neuromorphic Chips for Hyperdimensional GNNs: Training GNNs on hypervectors is computationally expensive on traditional hardware.
2. 2. 3D-Aware Generative AI for Design: GNNs + HDC for 3D Generation:. Hyperdimensional 
3. Knowledge Graphs for AGI Problem: LLMs hallucinate facts; knowledge graphs (KGs) are rigid and brittle. Solution: 
4. HDC-Enhanced KGs: Represent entities/relationships as hypervectors (e.g., "Paris ⊛ capital ⊛ France"). GNNs for Reasoning: Traverse the hyperdimensional KG to answer complex queries. Unlocks:

#### Current Startups
1. https://www.linkedin.com/company/relationalai/
2. 

