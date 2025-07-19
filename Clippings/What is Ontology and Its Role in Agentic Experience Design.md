---
title: "What is Ontology and Its Role in Agentic Experience Design?"
source: "https://www.salesforce.com/blog/design-what-is-ontology/"
author:
  - "[[Madonnalisa Chan]]"
published: 2025-04-23
created: 2025-04-30
description: "An ontology is a system for organizing information so computers can understand and use that data to make decisions about what it outputs."
tags:
  - "clippings"
---
61%

## Share article

When you stream music or movies and get suggested playlists or genres based on your habits, you’re benefitting from a type of knowledge organization system called ontology. Maybe you’ve come across this term recently. It’s a hot topic because agentic AI relies on a map of metadata relationships – the data about the data – in order to make decisions.

So, what is ontology, how does it work, and why does it matter? Let’s dig into the basics of this discipline and its role in agentic experience design.

### What we’ll cover:

[What is ontology?](https://www.salesforce.com/blog/design-what-is-ontology/#h-what-is-ontology)  
[Ontologies structure concepts and information](https://www.salesforce.com/blog/design-what-is-ontology/#h-ontologies-structure-concepts-and-information)  
[Anatomy of an ontology](https://www.salesforce.com/blog/design-what-is-ontology/#h-anatomy-of-an-ontology)  
[Invisible but crucial to innovation](https://www.salesforce.com/blog/design-what-is-ontology/#h-Invisible-but-crucial-to-innovation)

## What is ontology?

In the world of AI, ontology is a system for organizing information so computers can understand and use that data to make decisions on the output. To state this more formally, an ontology structures concepts and information through the description of classes, properties, attributes, relationships, and logical axioms. Ontologies form data models for knowledge graphs, ensuring consistency and understanding.![An illustration of an AI assistant chat interface, an stock image of a keyboard and the Salesforce character Astro.](https://www.salesforce.com/blog/wp-content/uploads/sites/2/2024/06/A11y_AI_BlogImage-01-1.png?w=128&h=96&crop=1&quality=75)

An illustration of an AI assistant chat interface, an stock image of a keyboard and the Salesforce character Astro.![A side-profile illustration of a head covered with colorful sticky notes.](https://www.salesforce.com/blog/wp-content/uploads/sites/2/2024/10/SLDS_neurodiversity_Hogan.png?w=128&h=96&crop=1&quality=75)

A side-profile illustration of a head covered with colorful sticky notes.

![](https://www.salesforce.com/blog/wp-content/themes/salesforce-blog/dist/images/justforyou-bushes.png)

If that feels academic, it’s because it is. Ontology actually evolved from a philosophical discipline — basically, categorizing things in the universe to understand how they relate to one another. Today, it’s a practical tool for structuring knowledge. It’s now related to information and [library science](https://locallyoptimistic.com/post/the-five-laws-of-data-enablement-how-the-father-of-library-science-would-make-his-data-team-indispensable/), or the study of how to manage, organize, access, preserve, and share information. (Ask a librarian about ontology and watch them light up.)

Without ontologies, your experience using any number of digital platforms would be chaotic. Here are two familiar examples of well-designed ontologies that shape your user experience (UX) and enjoyment:

- Spotify has ontologies for music genres, with lots of metadata about albums, artists, and how they’re organized in various playlists. These ontologies help power so many rich playlists and stations where they can dynamically generate these experiences purely based on what music you’ve already engaged in.
- Netflix optimizes its recommendation engines with the richness of their ontology of genres, actors, producers, and more. You likely have discovered a new show or movie thanks in part to Netflix’s ontology.

You can imagine how personalization and recommendation systems rely heavily on an optimal ontology to serve up content according to who you are and what you’ve engaged with in their systems.![](https://www.salesforce.com/blog/wp-content/uploads/sites/2/2025/04/Mindset-shifts-team-collab-1.png?w=889)

[

#### 5 Mindset Shifts that Transformed the Agentic Experience of Salesforce Help

](https://www.salesforce.com/blog/agentic-experience-salesforce-help/)![illustration depicting metadata](https://www.salesforce.com/blog/wp-content/uploads/sites/2/2024/04/041924_How-Can-Metadata-Make-Your-AI-Better_.jpg?w=889)

illustration depicting metadata

[

#### What is Metadata in AI?

](https://www.salesforce.com/blog/what-is-metadata/)![Illustration of SLDS 2 components on a gradient background of deep blues and purples.](https://www.salesforce.com/blog/wp-content/uploads/sites/2/2025/02/Blog-Banner-2.png?w=889)

Illustration of SLDS 2 components on a gradient background of deep blues and purples.

#### [What is SLDS 2 (Beta)? It’s a Path to the Future](https://www.salesforce.com/blog/what-is-slds-2/)![An illustration showing different mouths with empty word balloons: taxonomy](https://www.salesforce.com/blog/wp-content/uploads/sites/2/2022/09/common-vocabulary-blog-img_09_2022.jpg?w=889)

An illustration showing different mouths with empty word balloons: taxonomy

[

#### Your Employees Need a Common Vocabulary — A Good Taxonomy Helps

](https://www.salesforce.com/blog/what-is-a-taxonomy/)

## Ontologies structure concepts and information

There’s a spectrum of types of knowledge organization systems that you may already know about. A simple system might be a pick list, which consists of a list of controlled values. A taxonomy is a variation that includes some hierarchy. Both of these data types are already available in Salesforce.

![Types of knowledge organizing systems from simple to complex: picklist, taxonomy, thesaurus, and ontology.](https://www.salesforce.com/blog/wp-content/uploads/sites/2/2025/04/Screenshot-2025-04-15-at-10.04.37%E2%80%AFAM.png?strip=all&quality=95)

\[Chan |Salesforce\]

As we move along the spectrum, we get systems with more richness. A thesaurus has a similar structure as a taxonomy, but contains a parent-child structure and generic associated relationships to other parts of that structure. Finally, we have an ontology, which consists of a graph or network structure that describes a combination of classes. It has more robust and extensive descriptors for the relationship types.

But what pick lists, taxonomies, and thesaurus systems don’t have is the flexibility to grow as your systems grow and evolve. There is more complexity in reorganizing hierarchies as you introduce new instances. That’s where ontology comes in as a graph or network structure — nodes and relationships that can expand easily. The complexity of these concepts and their relationships become a broader representation of a domain that includes richer rules for inference and [reasoning](https://www.salesforce.com/agentforce/what-is-a-reasoning-engine/atlas/).

No doubt, this is a heady subject that gets technical really fast. But if you’ve ever played the [Six Degrees of Kevin Bacon](https://oracleofbacon.org/graph.php) game and had to explain how a given actor is directly or indirectly connected to Kevin Bacon, you have a high-level sense of how an ontology works.

## Anatomy of an ontology

What makes an ontology? Let’s explore the anatomy of an ontology with an example that comes from healthcare:

### Class

![What is a Class: person, disease, test. Person can be a patient or oncologist. Disease might be glioblastoma or medulloblastoma. Test might be MRI or CT scan.](https://www.salesforce.com/blog/wp-content/uploads/sites/2/2025/04/Screenshot-2025-04-21-at-2.58.49%E2%80%AFPM.png?strip=all&quality=95)

\[Chan | Salesforce\]

A class is a collection of related objects, individuals, or instances. Assign metadata attributes at the class level so that any class or subclass can inherit those attributes. We can define a person, a disease, and a test in a medical setting. The classes we define serve as the organizing metadata framework for the scope of all our ontologies.

### Individual

![What are Individuals. A person who might be a patient (John Doe) or an oncologist (Jane Smith).](https://www.salesforce.com/blog/wp-content/uploads/sites/2/2025/04/Screenshot-2025-04-21-at-2.52.56%E2%80%AFPM.png?strip=all&quality=95)

\[Chan | Salesforce\]

Individuals are instances of the class or subclass. In this example, a person is the higher order class, a patient is a subclass, and John Doe is an instance, or an individual or patient. From a machine perspective, you can infer that John Doe is a patient and a person. Likewise, Jane Smith is an oncologist and person. If there’s any metadata about Jane Smith, like an honorific, we know that her title is Dr. Jane Smith.

### Axiom

![What is an Axiom? Disease to cancer. Patient to primary care physician. Amoxicillin which comes in different forms, strengths, brands, interactions, uses, storage, side effects.](https://www.salesforce.com/blog/wp-content/uploads/sites/2/2025/04/Screenshot-2025-04-21-at-2.53.29%E2%80%AFPM.png?strip=all&quality=95)

\[Chan | Salesforce\]

Axioms codify in the structure what is the truth about the domain being modeled. It can be expressed in the attributes of the classes or directly in the relationships. In this example, cancer is a subclass of disease. It’s a subclass because we also know there are many types of cancer which could be considered instances.

A patient can have at most one primary physician. This type of metadata could be expressed as an axiom directly on the relationship. Another type of axiom would be the expression of dosage for medication that can be expressed as additional nodes in the structure related to medications.

### Relationships

![What is a Relationship (object properties). Patient goes to hospital, employs doctor who can order tests and send to specialist, who diagnoses disease, which is the cause of headaches.](https://www.salesforce.com/blog/wp-content/uploads/sites/2/2025/04/Screenshot-2025-04-21-at-2.54.15%E2%80%AFPM.png?strip=all&quality=95)

\[Chan | Salesforce\]

Relationships convey meaning. For instance, we haven’t:

- identified any of the durable medical equipment,
- modeled the health insurance benefits that would cover for this condition,
- or itemized all the symptoms or all the body systems involved in this snapshot.

So those relationship connections without context provide no meaning. Once you apply the object properties or relationships, you get content, and you get a new level of understanding of how things are related.

Optimizing the hidden power of ontologies is the race within the race to create the best-in-class agentic AI technologies. There are numerous decisions an agent has to make based on the information it can access. All of that information needs to be labeled and connected accurately and consistently in a machine-readable format.

Ontology helps to create a common vocabulary and related terms to describe types of information, which helps with natural language processing. It makes information reusable and enables AI to answer questions. Ontologies also work with other ontologies, collectively powering agentic AI to do its best to deliver what you ask of it.

It’s daunting but crucial work to harness metadata. Knowing how to organize troves of information so that your digital workforce can use it to make decisions means better personalization and more precise results.

## Share article

![Madonnalisa Chan](https://www.salesforce.com/blog/wp-content/uploads/sites/2/2025/04/Madonnalisa_Chan.jpg?w=150&quality=60)

Madonnalisa Chan

Madonnalisa Chan Director, User Interface/User Experience

For more than 20 years, Madonnalisa has worked with product teams to build innovative products in fast-paced environments and achieve measurable results. She's focused on content, user experience, strategic design for brands and applications, and building platform services around content and [Read More](https://www.salesforce.com/blog/design-what-is-ontology/#)

![](https://www.salesforce.com/blog/wp-content/themes/salesforce-blog/dist/images/justforyou-cloud-one.png) ![](https://www.salesforce.com/blog/wp-content/themes/salesforce-blog/dist/images/justforyou-cloud-two.png) ![](https://www.salesforce.com/blog/wp-content/themes/salesforce-blog/dist/images/justforyou-cloud-three.png) ![](https://www.salesforce.com/blog/wp-content/themes/salesforce-blog/dist/images/justforyou-cloud-two.png)![Clara Shih, David Schmaier, Kat Holmes holding a mic and talking, Khushwant Singh, and Param Kahlon. Leaders on stage during True to the Core at Dreamforce 2024.](https://www.salesforce.com/blog/wp-content/uploads/sites/2/2024/10/tttc_kholmes_df24-1.png?w=128&h=96&crop=1&quality=75)

Clara Shih, David Schmaier, Kat Holmes holding a mic and talking, Khushwant Singh, and Param Kahlon. Leaders on stage during True to the Core at Dreamforce 2024.![Colorful illustration of side profiles of a group of people. Designers stuyding human-computer interaction learn about the human side of the equation.](https://www.salesforce.com/blog/wp-content/uploads/sites/2/2022/12/profiles_folks.png?w=128&h=96&crop=1&quality=75)

Colorful illustration of side profiles of a group of people. Designers stuyding human-computer interaction learn about the human side of the equation.![Trailblazers walking around Platform Park design and development demos during Dreamforce.](https://www.salesforce.com/blog/wp-content/uploads/sites/2/2024/08/DF23-230912-JM2_4420-1.jpg?w=128&h=96&crop=1&quality=75)

Trailblazers walking around Platform Park design and development demos during Dreamforce.![Illustration of a paint brush with color splatters](https://www.salesforce.com/blog/wp-content/uploads/sites/2/2024/07/paint.jpg?w=128&h=96&crop=1&quality=75)

Illustration of a paint brush with color splatters

![]()

![]()