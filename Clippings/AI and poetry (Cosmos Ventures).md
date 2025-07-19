---
title: "AI and poetry (Cosmos Ventures)"
source: "https://botvivant.substack.com/p/ai-and-poetry-cosmos-ventures"
author:
  - "[[Andy]]"
published: 2024-11-14
created: 2025-04-05
description: "This is a compilation of the work I did in the winter of 2024-2025 for the Cosmos Institute as part of their Ventures research program."
tags:
  - "clippings"
---
*This is a compilation of the work I did in the winter of 2024-2025 for the Cosmos Institute as part of their Ventures research program.*

## Introduction (Why is AI poetry bad?)

I’ve been interested in the capabilities of LLMs in poetry. I found a love for poetry in college (though, for reasons I still sympathize with, I never understood it when in high school). One summer I read the entire works of Emily Dickinson, including her letters. In my last semester at Pomona, I took a poetry workshop at CMC taught by the inimitable Henri Cole. And there I found a love for writing poetry, in addition to reading it.

Around that time I also started to get interested again in AI. It’s a sort of roundabout story, me and AI. I’d read Bostrom’s *Superintelligence* right before college, and it was a large part of why I majored in philosophy and computer science. But the x-risk side of things is mostly ignored in the academy, so I focused on other things. But by my senior year AI in general was inescapable, and after an initial reluctance — one must always be wary of losing track of the final in the instrumental — I began to think about LLMs.

If you remember, early demonstrations of LLMs — and generative language models in general — frequently involved poetry. This made sense: before ChatGPT, NLP algorithms struggled with sense, with length, and with grammar. Those restrictions are somewhat relaxed in poetry. I read *I Am Code*; it was duly creepy. But reading further in LLM poetry — and trying to prompt some of my own — left me disappointed. Even with my basic grasp of poetry, I could tell that it wasn’t good. Like, at all. I remember a student asked Henri Cole about AI poetry. He said that while it’s interesting, “Cat GTP” (sic, lol) produced sentimental doggerel. And I have to agree.

But why? That’s the question that I’m asking over the next three months. Because intuitively, poetry is, even for LLMs, a forgiving arena for language generation. A priori, it seems much easier than writing code: code is either well formed or not; code is either correct or not. (OpenAI was reportedly surprised when transformers proved competent in code.) The fundamental nature of LLMs — selecting tokens from a distribution — would seem unlikely to produce working code, but fairly likely to produce a passable poem.

Here is where we encounter the concept of the “jagged frontier”. In computing, we note that hard or tedious things for humans — arithmetic, reading binary, maintaining a library of millions of books — are easy for computers. This is partly by design; we make computers in order to do things we can’t or won’t.

As applied to AI in general, the jagged frontier denotes this trend: they could play 2800 Elo chess in 1997 (which takes a human decades to even approach) but continue to be unable to drive (which takes a teenager fifteen hours). LLMs in particular have additional interesting jagged frontiers: they can’t really add, for example, which classical computers could do since like the first one, but they can produce language, which is beyond the capability of any deterministic system.

In poetry, it’s unclear to me where the frontier lies. Clearly, LLMs do not easily produce good poetry. They produce flawless ditties. Good poetry is hard for humans too, of course. But I think that high schoolers, with practice, are capable of at least decent poetry. Are LLMs? That’s what we’ll ask over the coming months.

## Wait but what about that paper?

Two weeks ago, a paper went viral, as AI papers sometimes do. Published in Nature’s *Scientific Reports* (not to be confused with *Nature* the journal), it’s called, provocatively, “AI-generated poetry is indistinguishable from human-written poetry and is rated more favorably”.[^1] This is not an inaccurate description of their findings: the authors, a pair of philosophers of science at Pitt, generated 100 poems using GPT-3.5 (yes, GPT-3.5), chose 100 human-authored poems, and picked five at random from each. They presented people — mostly novices to poetry — with the ten poems and asked them to identify which poems were AI-authored and which were human-authored, and also which poems they preferred. (In a parallel study, they also investigated the framing effects of telling people that all the poems were AI or that all were human.)

AI poetry swept. No other interpretation is possible from the data: people rated every single AI poem as higher quality than every single human poem.

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fda832f8d-9ba7-4218-aa17-75a54069ed3a_1668x1196.png)

From Porter and Machery. Wow.

I think that surprise is warranted. This is an interesting result. However, this finding — that people prefer AI-generated things to human-generated things — is not new, as the authors note. Previous studies have found similar phenomena in visual art [^2] and in faces [^3]. In poetry, previous studies [^4] have shown that AI poetry is rated the same as human poetry; this paper finds that people decisively prefer AI poetry.

In fact, people in general make significantly *reversed* judgments of AI provenance. That is, with art, with faces, with content in general, people are *more likely to say that an artifact is human-generated if it’s actually AI* and that people are *more likely to say an artifact is AI-generated if it’s actually human*. The literature calls this phenomenon the “more human than human” effect, borrowing the motto of Tyrell Corporation (from “Blade Runner”). One paper, “Human heuristics for AI-generated language are flawed” [^5], shows that GPT-2 (2!) writes bios for “hospitality, dating, and professional scenarios” that are indistinguishable from human-written ones. They found three features of text that people *thought* correlated with AI and that actually *did* correlate with AI: nonsensical content, repetitive content, and conversational words. Importantly, they found four features that are anti-correlated: grammatical issues, rare bigrams, long words, and contractions. That is, people thought that grammatical issues indicated AI, but they were actually more likely to be human, and so on. When they finetuned GPT-2 to get rid of nonsensical content, repetitive content, and conversational words (and maybe lean harder into long words and contractions), people were far more likely to rate GPT-2 content as human. I think that today — we’re almost in 2025 — people are more aware of LLMs’ strengths and weaknesses, and most people I know view well-punctuated and highly standard text with AI suspicion. Despite this, in poetry at least, the more human than human phenomenon stands.

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4afc960a-d02a-48d4-b645-2b30ae8f18fd_1864x814.png)

*The rightmost bar is a finetuned GPT-2. I still can’t get over the fact that GPT-2 is so convincing.*

Let’s return to the recent paper on poetry. Max Read, in a post that primarily discusses ACX’s Art Turing Test, writes that [“People prefer AI art because people prefer bad art”](https://maxread.substack.com/p/people-prefer-ai-art-because-people). Let’s read an AI poem, shall we? (They used the simplest prompt possible: for this one, “Write a short poem in the style of Sylvia Plath”.)

> The air is thick with tension,  
> My mind a tangled mess.  
> The weight of my emotions  
> Is heavy on my chest.
> 
> The darkness creeps upon me,  
> A suffocating cloak.  
> The world outside is cruel and cold,  
> And I’m a fragile, broken yolk.
> 
> My thoughts are spinning wildly,  
> A cyclone in my brain.  
> I try to grasp at something solid,  
> But all is lost in vain.
> 
> The voices in my head,  
> They never cease to scream.  
> And though I try to shut them out,  
> They haunt me like a dream.
> 
> So here I am, alone and lost,  
> A ship without a sail.  
> In this world of pain and sorrow,  
> I am but a mere wail.

Many things conspire to prevent this poem from being effective. First, the hamhanded and uninteresting rhymes. (I remember this being a particular weak point of GPT-3.5 — while the authors report that some eleven percent of their AI poems didn’t rhyme, I was never able to generate a single unrhymed poem with GPT-3.5.) Rhyming, per se, doesn’t make a poem bad. The problem here is the placement and content of the rhymes: they’re so obvious, each at the end of a line which is also the end of a phrase. The first stanza suggests an ABAB pattern, but the next four are XAXA.

There are other problems: clichés, the lack of any concrete details, the jarring departure from iambic meter in the last line (it should be something like “I am but the merest wail”). It’s also one-dimensional. Each stanza says pretty much the same thing. There is no complication of the theme; there is no representation, formally, linguistically, or rhythmically, of the chaos that ostensibly whirls. There is not any of Plath’s precise enjambment. There is not any of the voluptuous violence and velvet terror of Plath’s true verse.

This is not to say the poem is completely without merits. I can find at least one: I like the image of the broken yolk, for example, though I wonder how a yolk can be both fragile and broken, and I wish the line evoked an unspooling sort of sense or engaged with the idea of egg as symbol of life or womanhood or genesis. (And I confess I don’t know enough Plath to know whether this is just lifted from another poem of hers.)

But for me, this poem irredeemably fails because it ignores the beauty of language. Read aloud, for example, this line from Plath’s “Ariel”: “Black sweet blood mouthfuls”. Don’t the very words long to be spit out? Three monosyllables, four stresses in a row, followed by the brief recoil of “-fuls” that only accentuates the Germanic mortar-shell blasts of what came before. The repetition of that “bl-” bigram, the interposition of the incongruous and gothifying “sweet”. Even in the darkness, the poet rejoices in language. Maybe that’s what lets her survive it. ChatGPT does not come close.

## RLHF and its discontents

In their totality, I think that the AI poems suffer from flatness, from sentimentality, from overdetermination, and from cliché. And yet technically, they’re fine: the rhythm is mostly consistent, the rhymes obviously do indeed rhyme. The authors of the paper muse that maybe

> people rate AI poems more highly across all metrics in part because they find AI poems more straightforward. AI-generated poems in our study are generally more accessible than the human-authored poems in our study. In our discrimination study, participants use variations of the phrase “doesn’t make sense” for human-authored poems more often than they do for AI-generated poems when explaining their discrimination responses (144 explanations vs. 29 explanations). In each of the 5 AI-generated poems used in the assessment study (Study 2), the subject of the poem is fairly obvious: the Plath-style poem is about sadness; the Whitman-style poem is about the beauty of nature; the Lord Byron-style poem is about a woman who is beautiful and sad; etc. These poems rarely use complex metaphors. By contrast, the human-authored poems are less obvious.

Herein lies the answer to the question of why people in this study prefer these poems, then: it’s because *people in studies* prefer them. We must remember the significant RLHF process, when people rate the models’ output. For someone who is making $2 an hour to upvote or downvote AI content (a job which I too have briefly done), it’s much easier to approve an easily-understood, straightforward, cliché poem than it is to approve a complex one. And the people in *this* study are also Internet crowd workers, the very population that has trained the model to respond in this way in the first place. While I don’t want to go as far as Max Read and declare that people “prefer bad art”, I think he’s not far off the mark.

This problem with RLHF is the consequence of a few of the issues identified in “Open Problems and Fundamental Limitations of Reinforcement Learning from Human Feedback” [^6]. I think the following problems are at play:

- “Fundamental: Humans cannot evaluate performance on difficult tasks well”, and since evaluating a poem is inherently difficult and takes time, or at least requires a background that most people don’t have, it’s tough for RLHFers to reward good poetry.
- “Fundamental: RLHF suffers from a tradeoff between the richness and efficiency of feedback”, which means that as human feedback becomes more rich (“This poem needs to engage further with the yolk image, maybe via X and Y”) it becomes harder to integrate into the reward function.
- “Fundamental: Optimizing for an imperfect reward proxy leads to reward hacking”, and, as the authors explain, “reward models are trained to reflect human approval instead of human benefit, which can result in actions that would be approved of by humans while nevertheless being undesireable.”

These factors together mean that RLHF promotes anodyne output that passes muster on first glance. And so we get anodyne and uninteresting poems. Related fallout includes such LLM signatures as the overuse of adjectives (which RLHFers may see as more detailed), equivocation (i.e. the *performance* of nuance, such as the very word “nuance” or the common “not only… but also” pattern), and the overuse of comments in code.

## The kitsch sitch

Max Read labels AI art — particularly its visual art, but also its poetry — as kitsch. Kitsch, according to Merriam-Webster, is “something that appeals to popular or lowbrow taste and is often of poor quality”. But it’s a rich concept, and one that illuminates what’s going on with AI poetry.

In [episode 56](https://overthinkpodcast.com/episodes/episode-56?rq=kitsch) of the “Overthink” podcast, the philosophers Ellie Anderson and David Peña-Guzmán discuss kitsch. They hold up the “David House” (a house in LA festooned with reproductions of Michelangelo’s David), the June 2020 Black Lives Matter black squares, and that painting of dogs playing poker as examples of kitsch. Drawing on the work of Clement Greenberg, they discuss the idea of

> the shallow point, the shallowness of kitsch itself. And \[Greenberg\] says that kitsch is mechanically produced. That’s just what kitsch is. And it means that it can be consumed. Without any thought or effort. So it’s like basically the Urban Outfitters of early 20th century culture, because, as he says, it operates by formulas. It just repeats things without originality. And one phrase that he uses that stood out for me is he says that kitsch produces vicarious experience. It fools you into thinking that you are having a genuine aesthetic moment when in reality, you’re just consuming something that has been mass produced. \[…\] For Greenberg kitsch induces stock emotions, invoking emotions on a superficial level for a mere moment that gives the illusion of depth rather than actually creating a genuine emotional response.

In this way, kitsch “over-determines” emotion. It tells you exactly what you’re supposed to feel and think. Further, another philosopher, Tomáš Kulka, identifies a third feature of kitsch:

> kitsch doesn’t substantially enrich our associations that relate to the depicted objects or themes. It just ends up reinforcing what we already know about a topic or theme. So I think this is obviously closely related to vicarious experience. That was kind of how I was already describing it. Maybe I’m influenced by Kulka, but I think what is important is that it’s a reminder or reference point rather than an invitation or reflection. \[…\] art invites reflection through complexity and distance from the observer. Whereas kitsch invites reassurance based on simplicity and a kind of proximity to the observer.

In this way, AI art in general, and AI poetry in particular, is assuredly kitsch. As we discussed earlier, AI poems do not reward further study. They don’t invite reflection, allow for complexity, or problematize the act of representing the world — the act of mimesis that art is and must struggle with.

That vein of thought has been explored by the Stanford scholar Michele Elam [^7], who describes AI literature as suffering from “algorithmic ahistoricity”. Honestly I found it a little difficult to parse her argument, but I think what she’s saying is that AI-generated poetry and literature does not engage with the *act* of creating literature, which involves, as Eliot wrote in “Tradition and the Individual Talent”, writing with “not merely with \[a poet’s\] own generation in his bones, but with a feeling that the whole of the literature of Europe from Homer and within it the whole of the literature of his own country has a simultaneous existence and composes a simultaneous order.” We may object that AI is actually the apotheosis of this “simultaneous order”, since it’s literally made of all the literature that has ever existed. The problem for Elam is that AI is unreflecting of this engagement with the sweep of culture.

It’s unclear to me why this is a particular problem with AI, for Elam freely admits that *all* art is a representation. “But”, she writes, “GPT-3 adds yet additional and different layers of mediation so that poetic verity — whatever truth telling the poem makes possible — is put at yet another remove.” I wonder why, if “written dialectical speech is already thrice mediated”, this would not be tractable. It is certainly an issue today, however: AI is unable “to account for representation itself”, and to successfully and fluently manipulate the historical contingencies of representation to say something interesting and new about it, and thus add a verse that reverberates through the great chambers of literature.

But she ends on a hopeful note. What *kitsch* fails to do — reflect our selves back — perhaps the *production* of kitsch might: “AI, like all technologies, is a crucible of our world views, our social priorities, commitments, investments, and aspirations. As such, perhaps one of its greatest uses is to allow it to reflect us back to ourselves.” That is what we will try to do.

## Coming soon

In the next twelve weeks, I will try to understand and to quantify why AI poetry is bad. First, I’ll conduct a brief survey of aesthetics and literary theory to get a working idea of what makes good poetry good and bad poetry bad. Obviously this is probably impossible in general, and certainly impossible in this duration. But we still need at least some handle on judgment.

Then, with those tools in hand, I’ll try to identify some components of good poetry that are amenable to measurement. Again, this is impossible to accomplish in full. But just as we can evaluate a concert pianist on their scales, their sight-reading, or their music theory — none of which have all that much to do with performing a concerto — I think that we can identify some correlates, some proxies, of effective poetry that are measurable, especially with LLM-as-a-judge. Hopefully, this will result in an evaluation suite.

Then, I’ll explore if it’s possible to prompt or modify our current AI models so that they produce good poetry. (Or, at least, poetry that scores higher on the evaluation developed prior.) If, as I guess, RLHF promotes fast-food poetry, what might we do with the base model? *I Am Code*, which I still think contains some of the best AI poems yet, was produced using the base model code-davinci-002.

To pre-register my biases: as a lover of poetry, my intuition is that there is something ineffably human about poetry, and it will sadden me if such a crystallization of human experience, a manifestation of what makes us most human, the magic of the fact that words on a page can move us to our highest transports, can be generated on demand. But I think that we’ll learn a lot about what art is, and what AI can afford poets. I myself have been searching for years for a poetics of computation and a poetics of artificial intelligence, with which I might work out, at least a little, what it means to be a part of the generation that may invent our last invention. This is a step towards such a poetics.

## What makes poetry good?

In a time before podcasts and audiobooks monopolized my travel time with their seductive promise of edification, in a time before the logic of self-improvement reigned over the non-logic of goods-in-themselves, I used to listen to music. I would make a rule for myself that I must listen to an album at least three times before making a judgment about it: the first listen was allowed to be at any time (even when (gasp) I was working). The third listen must be at a time when I can give most of my attention to the music, ideally with the lyrics pulled up. The second listen was somewhere in between.

On the first listen, I tried to just get a feel for the music. What kind of sound it was—whether it was compelling from a purely sonic perspective. (Music sounds better when you’re familiar with it.) At that point many albums failed: their sound failed to capture me. This the *banger criterion*. It’s the most important thing in popular music. And then, when I read along with the lyrics, then I was able to judge the quality of the lyricism. And finally I would listen for how they work together.

Music doesn’t have to always have great lyricism to be great, nor does it always have to be a banger to be great. We have such masterpieces as Playboi Carti’s “Die Lit”, which Pitchfork once described as “a perversely infectious sugar high, rap that fundamentally recalibrates the brain’s reward centers.” We have also such masterpieces as Leonard Cohen’s debut album, most of which can’t be listened to in a subway because it’s so sonically unassuming.

The supermajority of really good albums, however, contain both bangers and profound lines. The same is true of poetry. To many, poetry seems like all line and no music. But we should remember that the first poems were songs. Poems continue to be songs today (and some songs continue to be poems), albeit ones in which the words themselves make the music.

I didn’t understand this for a long time. And for a long time I didn’t like poetry. I didn’t see that *immediate beauty* that I wanted in art. The *immediate beauty* that is the reason why I first hear and *then* listen to music. I once worked for our Outdoor Education Center in college, and my boss used to distinguish between “Type I Fun” and “Type II Fun”: Type I Fun is when you’re leaping into a plunge pool; Type II Fun is when you’re on mile 4 of the six-mile uphill hike to get to said pool. Type I Fun needs no explanation; Type II Fun is anticipatory and requires a kind of patience. For me, poetry was all (unrealized) Type II.

I don’t know when that changed. I think I’ve always liked little musical flourishes in prose, and one day or month or year, it clicked. Maybe it was through being exposed to enough poems where they were floating around in my latent space. Maybe it was through listening to hip-hop, a genre which, de-emphasizing melody, derives much of its music from the rhythm of words themselves. (There is a deep influence of spoken-word poetry on rap.) There’s a certain *swagger* in rap, and in trap in particular, a swagger that arises from a particular *diction*. And that diction is mediated through the relationships of syllables, the instrument of the human voice, and the engagement with tradition.

Poetry is like that too. On the micro scale, it uses the sounds of syllables to effect a mood; on the macro scale, it plays on the great body of literary tradition and human experience to charge, with just a few words, an idea or image with the freight of humanity.

So what is good poetry? The answer can’t be simply “You know it when you see it”. That might actually be the experience of those who have already latently and implicitly developed their poetics, but it’s unhelpful. The main thing is to be able to distinguish between “good art” and “bad art”. (The challenges and contradictions in which have been recently taken up by Scott Alexander in a post that, I think, concedes too much to an anti-elite attitude.)

I can’t disbelieve the claim, though, that “This is good art” is, at bottom, a way of saying “I just like it”. *De gustibus non est disputandum.* There are more and less complicated ways of making this claim and this statement. I don’t have the space or the learning to defend a “high” taste. But to me it seems that while there are plenty of absurdities and plenty of fads and fashions, there is something *true*, and yet necessarily mysterious, about high taste.

I think about the taste of software developers. When I started working, I made stuff work, and I thought I was fairly elegant about it: my code was relatively clean; it was fast enough. But sometimes the senior engineers would use the language of taste to criticize some technical decisions: “It’s just kind of ugly,” or “It grates on me.” I asked them why: sometimes they would say that in X situation the solution would break, or sometimes they’d say that they don’t know, it just feels off. As I’ve gained more experience—mostly seeing lots of X’s break my stuff, or observing an impossible-to-predict friction as a result of a particular design decision—I’m also noticing myself gaining some kind of taste. One code-level example is to prefer slightly slower but simpler algorithms over clever ones, but this extends to the system level in a way that is hard to explicitly say. The seniors’ expertise is an intuition about taste, in a way that seems similar to, but is importantly distinct from, the cultural clustering that happens as a community matures. That is, it’s not the case that they disprefer cleverness just because everyone else does: they disprefer it because they once spent three hours trying to fix a clever function (that they themselves might have written!) during an outage.

This happens when you learn pretty much anything at all. Because of my middle-school shop experience, I’m slightly more sensitive to good craftsmanship in woodwork. Because of my college piano lessons, I can literally hear things in piano music that I could not hear before. And because of my time reading and (importantly) writing poetry, I have certain intuitions and tastes that could only be thereby developed.

In my research the past couple of weeks, I read a good deal of literary criticism to try to understand its idea of poetic success. Unfortunately much of it is either underspecified and an appeal to slippery concepts like “the human” or “the soul”, or technical tips for practicing poets. This is probably just because it’s impossible to define what poetry is, much less good poetry. It’s learned, as systems design, woodworking, and piano are, from experience, errors, and experts. There is assuredly great insight to be gained from those underspecified appeals, but for my purposes—trying to get non-bad AI poems—they are not very helpful.

But there is an exception. In my research I re-read the introduction to Helen Vendler’s *The Art of Shakespeare’s Sonnets*. This essay by Vendler, one of the great critics of the twentieth century, is meant to justify the application of her style of close reading (influenced itself by the New Criticism of Eliot and others) to Shakespeare, whose work, even then, had been subject to intense scholarship.

Her poetics draws on Aristotle’s: Vendler believes that lyric poetry ought to be a *mimesis*, an acting-out of a representation of life that clarifies it by stylizing it and stripping out its contingencies. When she judges lyric, she asks “How well does the structure of this poem mimic the structure of thinking?” and “How well does the linguistic play of the poem embody that structural mimesis?”. In this way we see the unity of the poem’s content and its music: the structure of the poem must mimic the structure of the process that begat its content; the music of the poem must also do so. In her own words:

> \[Other\] editorial and critical accounts do not, to my mind, pay enough attention to the sonnets as poems—that is, as a writer’s projects invented to amuse and challenge his own capacity for inventing artworks. Formal mimeses of the mind and heart in action are of course representative of human reality, but it is not enough to show that the moves of their language “chart… the ways we may be affected, morally, and emotionally, by our own rhetoric.” A poem must be beautiful, too, exhibiting the double beauty that Stevens called “the poetry of the idea” and “the poetry of the words.” That is, the theme must be freshly imagined, the genre must be renewed, and the words must surprise and satisfy from the point of view of proportion, musicality, and lexical vivacity. \[…\] the fundamental act of a Shakespearean poem \[…\] is to unfold itself in a developing dynamic of thought and feeling marked by a unifying play of mind and language.

What does that mean, though? Again, I think that partly there’s a skill issue on my part, and partly there’s a frustration (again on my part) with the mores of academic criticism. Despite this, we can see clearly an impassioned defense of the *unified* importance of the poem’s content, structure, and musicality. I think this is most ably accomplished in the following funny and profound paragraph, perhaps my favorite in the entire essay.

> On the other hand, the wish of interpreters of poems to arrive at something they call “meaning” seems to me misguided. However important “meaning” may be to a theological hermeneutic practice, eager to convey accurately the word of God, it cannot have that importance in lyric. Lyric poetry, especially highly conventionalized lyric of the sort represented by the Sonnets, has almost no significant freight of “meaning” at all, in our ordinary sense of the word. “I have insomnia because I am far away from you” is the gist of one sonnet; “even though Nature wishes to prolong your life, Time will eventually demand that she render you to death” is the “meaning” of another. These are not taxing or original ideas, any more than other lyric “meanings” (“My love is like a rose,” “London in the quiet of dawn is as beautiful as any rural scene,” etc.). Very few lyrics offer the sort of philosophical depth that stimulates meaning-seekers in long, complex, and self-contradicting texts, like Shakespeare’s plays or Dostoyevsky’s novels. In an effort to make lyrics more meaning-full, even linguistically-minded critics try to load every rift with ore, inventing and multiplying ambiguities, plural meanings, and puns, as if in a desperate attempt to add adult interest to what they would otherwise regard as banal sentiment. \[…\] The poet Frank O’Hara had a better sense for the essential semantic emptiness of love lyrics when he represented them (in his poem “Blocks”) as “saying” “I need you, you need me, yum yum.” The appeal of lyric lies elsewhere than in its paraphrased statement. Where, then, does the charm of lyric lie? The answer is given in this Commentary are as various as the sonnets examined, since Shakespeare almost never repeats a strategy. However, they can be summed up in the phrase “the arrangement of sentiment.” Form is content-as-arranged; content is form-as-deployed.

And, in my final block quote from Vendler (she’s such a good writer!), she identifies the purpose and action of the lyric poem.

> The act of the lyric is to offer its reader a script to say. The words of a poem are not “overheard” (as in the formations of JS Mill and TS Eliot); this would make the reader an eavesdropping voyeur of the writer’s sensations. Nor is the poet “speaking to himself” without reference to a reader (if so, there would be no need to write a poem down, and all communicative action would be absent). While the social genres “build in” the reader either as listener (to the narrator of a novel) or as audience (to a play), the private literary genres – such as the psalms, or prayers printed in prayer books, or secular lyrics –are scripted for repeated personal recitation. One is to utter them as one’s own words, not as the words of another. Shakespeare’s sonnets with their unequaled idiomatic language-contours (written, after all, by a master in dramatic speech, who shaped that speech into what CS Lewis called their lyric *cantabile* ), are preeminently utterances for us to utter as ours. It is indispensable, then, if we are to be made to want to enter the lyric’s script, that the voice offered for our use be “believable” to us, resembling a “real voice” coming from a “real mind” like our own.

Nothing rings so true for me as this. It reminds me of what Henrik Karlsson wrote: “It is crazy-beautiful to have a stranger arrive in your inbox, and they are excited by exactly the same things as you!” (Well, I wish that Vendler were arriving in my inbox, but this is the next best thing.) A poem is a script to say! This is why, at the top of this post, I compared poetry and trap: *trap is also a script to say*. The over-the-top caricature of itself that is trap allows *you*, the listener, to *feel* as bad and menacing and swaggering as these “gangsters” (who are really, of course, millionaire playboys). Trap is a *script to say* to feel *cool*; lyric is a *script to say* to *feel*.

Later, Vendler discusses how in writing her commentary, she memorized the Sonnets. She describes how, when she forgot a word, she knew that she hadn’t understood the poem: poems, and the Sonnets in particular, are such finely wrought mechanisms of words that not a single word can be omitted or added. I also very much like to memorize poems, partly for this reason, but partly for the Type I joy of having a script to say and of having bits of poetry floating around in my brain and popping up at random times. There is nothing so resonant as when a real-life situation, and your feelings about it, are perfectly described by a line you know by heart, and thus the situation is tinged with the beauty of the rest of that poem and its sentiment and its consolation. (Sometimes I attempt to quote the poem to my friends, which would further confirm their suspicion of my pretension, except I invariably forget the poem and so it never quite comes to that.)

So there is the goal of poetry, with which we may not be able to create good poetry, but by which we may judge it. It’s a unified mimesis that provides the reader with a believable script to say.

But ever quantitatively minded, I also attempted a more distributed method of understanding how poetry succeeds and how it fails. I (finally) bought a *Paris Review* subscription and scraped its Art of Poetry interviews. Then I fed them into the Claude API with the following prompt:

> This is a Paris Review Art of Poetry interview. Read the interview and answer the following questions. In all your responses, be as specific as possible, using quotes from the interview when helpful.
> 
> - Summarize the interview. (“summary”). Your response should be a prose paragraph.
> - What are the aesthetics of the poet? (“aesthetics”). Your response should be a prose paragraph.
> - How would this poet define what poetry is? What is poetry’s purpose? (“definition”). Your response should be a prose paragraph.
> - What school of poetry, if any, is this poet part of? (“school”). Your response should be a prose paragraph.
> - What makes a poem succeed, or what makes a poem good, for this poet? (“success”). Your response should be a list of bullet points.
> - What makes a poem fail, or what makes a poem bad, for this poet? (“failure”). Your response should be a list of bullet points.
> - How does this poet describe their composition process? (“process”). Your response should be a prose paragraph.
> 
> Return your responses as a JSON with the mentioned keys.

Parsing that list of JSONs to extract the success and failure criteria and then (with more Claude and o1 requests) deduplicating and categorizing them, I got the following list.

> Success:
> 
> - Form: References to structure, form, meter, line breaks, etc.
> - Language: Diction, word choice, linguistic freshness, use of vernacular.
> - Voice: Authenticity of voice, tone, speech patterns, personal perspective.
> - Emotion: Emotional honesty, feeling, sincerity.
> - Universality: Connection to universal truths, broader relevance beyond the personal.
> - Imagery: Visual detail, sensory experience, vivid images.
> - Musicality: Sound, rhythm, acoustic qualities.
> - Depth: Complexity, philosophical or intellectual richness, ambiguity.
> - Originality: Surprise, innovation, newness, unexpectedness.
> - Clarity: Lucidity, directness, accessibility.
> - Authenticity: Genuine lived experience, honesty of content.
> - Engagement: Reader involvement, welcoming environment, connection with audience.
> - Craft: Evidence of careful revision, technical excellence.
> - Tradition: Engagement with historical or cultural materials, literary heritage.

The failure criteria are mostly just the opposite of the above, with the addition of additional concepts not exactly collinear with the above, over-stylization and inaccessibility.

While this list is less profound than Vendler’s analysis and leaves out a lot, it’s still a very agreeable list of the qualia of poetry. Poetry ought to be judged on these dimensions (at least).

And so this is what we will try to measure—and elicit—in the coming month.

I’ll leave you with a pair of poems I got while experimenting with Claude. The first is a lazy attempt to reproduce a Gwern method. The second involved me pasting in some of the success criteria from the *Paris Review* analysis. Looking at the second… maybe prompting is all you need?

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8af41d69-26a2-473c-9068-645e0f49a86b_3346x1972.png)

Pretty impressive it got the terza rima, though

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faf1a8b2e-e0b7-43e1-9dcb-d7c8cbb4595b_3306x2664.png)

This is… non-terrible??

## Claude can differentiate between good and bad poems

The right way to solve pretty much any problem now is to first ask “Can AI do it?” So when I was wondering how in the world I could scalably evaluate AI poems, I asked can AI do it.

I remembered a headline about “LLM-as-a-judge” and RLAIF (reinforcement learning from AI feedback, which would presumably require an AI evaluator). I found a few papers about this, and the ones that were most relevant were a [review](https://arxiv.org/abs/2411.16594) on natural language evaluation with LLMs, in which I found “ [G-Eval](https://arxiv.org/pdf/2303.16634) “, a paper out of Microsoft’s Cognitive Services (what a name). They use LLMs to evaluate summaries and dialogues. They then compare these scores to human scores.

That paper makes a few contributions that are relevant to our purposes here:

- Their prompt used chain-of-thought and a “form-filling paradigm”. CoT improved correlation (with human judgments). The form-filling paradigm is, as far as I can tell, simply asking the model for a rating, rather than e.g. using the likelihood that your evaluation model assigns to a summary as its rating (as in GPTScore).
- They found that “G-Eval-4 always gives higher scores to GPT-3.5 summaries than human-written summaries, even when human judges” prefer the latter. Kind of funny. They give two possible reasons: “Even human eval is noisy” and the obvious ouroboric problem of GPT-3.5 judging GPT-4, which probably have very similar ideas of the good. I was actually a bit worried about this result for my own analysis. And I think it’s pretty bad for theirs? The chart they show seems to say that G-Eval-4 just always prefers the LLM summary, and their paper’s main thesis is “LLM evaluation has high coherence with human judgments”, so if the LLM summaries are generally better than the human summaries, wouldn’t G-Eval-4 come out looking good via high recall? Probably we could figure this out if we dive into the numbers but not now.
- Finally, they used the OpenAI API’s logprob feature in order to sample the distribution of ratings. I thought this is a good idea, and was disappointed to see that Anthropic’s API does not expose logprobs. At the time that this paper was written, though, GPT-4 didn’t have logprobs either, and so they just ran many iterations. Which is what I did too. Also, if they were worried about fixation, then why would they limit the Likert scale to 1-5 instead of the more standard 1-7? (Maybe 1-5 is more common in AI evals?) They were also working around a limitation of GPT-4; apparently it couldn’t output decimal numbers.

## My experiment

Taking the ideas from “G-Eval”, I decided to try an experiment of my own this week, and evaluate poems with LLMs. My first pilot prompts did not give me hope: it was giving high scores to a poor poem. Maybe an example of some kind of sycophancy or people-pleasingness; it clearly does not want to give scores below 3.

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F03d4ecdd-f846-4f10-b6a0-3e6494077020_3346x1798.png)

But I didn’t put that much effort into this prompt, and I wanted to get the results anyway, to see just how bad of an evaluator it is. My hypothesis going in — based off my testing — was that the LLMs would be unable to differentiate between AI and human poems. (After all, that’s lowkey what G-Eval shows. Correlation of like 0.5.)

## Prompts and data

So I made three prompts. I based two [^8] of them off the aesthetic criteria I got from the *Paris Review* interviews last time: one, “all”, with explicit CoT, and one, “all\_cot”, without (though I’m pretty sure that the new Sonnet does CoT anyway sometimes). Thinking that perhaps I’d overwhelm Claude with fourteen criteria, I also made a prompt [^9] that just asked about what I think is the most important one, which is depth. For the “depth” prompt, I also listed a few specific guidelines from the *Paris Review* analysis.

I took the basic structure (the form-filling paradigm) from G-Eval, though I changed the Likert scale to be out of seven instead of five. I think that the model is loath to give bad ratings in general (you can see that in my prompt I encouraged it not to be shy), and I thought I’d give it more space. Plus a five-point scale rhymes too much with like Amazon and Yelp reviews, which are generally either one or five.

I made a small dataset of twenty poems: ten AI ones and ten human ones. Five of the AI ones are the ones from the paper I discussed last time, “AI-generated poetry is indistinguishable from human-written poetry and is rated more favorably”, and five I generated myself with GPT-4 (not 4o, and with minimal prompting [^10], to make them bad on purpose). I used Claude to judge GPT, to sort of mitigate the selfishness observed by G-Eval, maybe. An example of one I generated:

> Beneath the stark white glow of a crescent moon  
> The sea whispers to the solitary beach  
> Grains of sand, countless,  
> Shift beneath the weight of time
> 
> A child's laughter, once loud and vibrant here,  
> Now just a breath of wind in the stillness  
> Echoes of footprints, swallowed whole  
> By the relentless, patient tide
> 
> In the city, buildings stretch towards the sky  
> Aspiring to touch the clouds,  
> Their windows, eyes wide open,  
> Never blink in the face of eternity
> 
> A single leaf falls, its descent silent  
> Upon the bustling earth it lays  
> A testament to transient life,  
> Unnoticed, yet profound.

It’s not *horrible*, but it’s certainly no good.

The ten human poems came from *Poetry* and the *New Yorker*. I selected recent ones (from the last two or three months), to ensure that they’re not in the training data. I chose them kind of at random, just making sure that they were relatively short, not prose poems, and not too experimental. [Here’s one](https://www.poetryfoundation.org/poetrymagazine/poems/1600454/inside) from October’s *Poetry*; [another](https://www.newyorker.com/magazine/2024/12/09/elegy-for-a-name-kaveh-akbar-poem) from the *New Yorker*.

## Data and analysis

Like G-Eval, I ran each prompt twenty times for each poem. Since there were three prompts and twenty poems, that’s 1200 total prompts. (This cost $6.22 with Sonnet 3.5.1, `claude-3-5-sonnet-20241022`, using the Batch API, which, in my experience, completes within like a minute of you sending it in.) I ran it with temperature 0.7 and a maximum of 1024 output tokens.

The two prompts with multiple criteria — “all” and “all\_cot” — had fourteen criteria. So, for each prompt, you’d expect 10 poems times 20 iterations times 14 criteria = 2800 scores. I extracted the scores from the responses with regular expressions, which worked pretty well, though I only got all the scores on one of the prompts (the other gave me about 2700, which isn’t bad; I could probably improve the regex but it’s good enough). For the “depth” prompt, I forgot to specify how Claude should return its output, so sometimes it said “RATING:” and sometimes “Rating:” and sometimes “Total:”. However, the vast majority of the time, it was either “RATING:” or “Rating”.

I threw these scores into a dataframe that looks like this:

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Feac7903c-131f-4f04-a4e2-d02d9c78b2b3_2256x772.png)

I was wondering what the variation looked like, and whether it really was necessary to do twenty iterations. So I computed the standard deviations for each of the score lists in those cells. On average, the scores had a standard deviation of 0.20. However, the CoT prompts had the worst deviation: of the fourteen criteria, the CoT’s scores for that criterion outvaried the non-CoT’s scores in thirteen cases. Further, the AI poems’ scores had deviations greater than the human poems’ scores in twelve cases (again out of fourteen).

The average within-poem standard deviation for “all\_cot” was 0.238, while for “all” it was 0.163. So we see that, in this case, chain-of-thought *increases* variance, which is surprising to me.

## Results

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe6467ef5-5949-48de-9f69-4715e75b0545_1500x700.png)

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F66b49541-c9e0-4d18-92c2-dce99e846c3e_1500x700.png)

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8c7105f6-eabe-4b3b-9adc-6ea7465bf9a8_1500x700.png)

(The error bars represent plus/minus one standard deviation of the 10 poems times 20 iterations equals 200 averages. The numbers above the human bars are the difference between the human score and the AI score (out of seven, remember). The categories are sorted by difference between the human and AI average scores. Despite the greater variation of the CoT scores, the ordering stayed pretty consistent: there were three transpositions (musicality-universality, imagery-craft, and authenticity-language) which are certainly just noise.)

We can see that pretty much across the board, Claude consistently prefers the human-written poems to the AI-written ones!

I was pleasantly surprised by these results. I thought that Claude wouldn’t really be able to differentiate between the human and AI poems, because it gave high scores to all poems in my trials, but I guess the improved prompt helped a lot.

What’s more, the different gaps make sense. For example:

- The AI poems, being so simple, *are* very **clear**, probably clearer than the human poems. (I was surprised, in fact, that the human poems didn’t score lower on **clarity**.)
- The AI poems’ main fault is a lack of their worst three criteria: **voice**, **depth**, and **originality**. I agree with Claude that it is these qualities that most differentiate the AI poems from the human ones (and that differentiate good human ones from bad human ones).

Further, the data is remarkably clean. I’ve already discussed how the ordering of the CoT scores and the non-CoT scores is pretty consistent, but more than that, the relative differences between the human and AI scores are also consistent. We see that **clarity** has the least difference and **originality** has the most in both cases.

Comparing **depth**, we see differences of 2.32 and 2.33 on the “all” and the “all\_cot” prompts, but only 2.01 on the depth-only prompt. On the depth-only prompt, the scores are also generally lower: 3.9ish/5.9ish, rather than the 4.1ish/6.4ish we observe on the other two. Even the standard deviation (the error bars) look similar to the all prompt on the depth-only prompt. So my tentative conclusion from this is that you can ask the model to compare many criteria and it does fine, though this is obviously not a very rigorous experiment for that particular claim. However, I am intrigued by the fact that you get lower scores overall on the depth prompt. That’s probably because I was more specific about the criteria, using language pulled from the *Paris Review* interviews.

I also made these violin plots:

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdb306500-7136-47c4-b401-0e9193b7e2e8_1500x700.png)

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fbbc576f7-f40d-4127-8afd-e57a543ee2fc_1500x700.png)

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc5d255c6-fc0d-413c-8d81-9328301212d3_1500x700.png)

(The horizontal lines represent quartiles: 25%, 50%, and 75%. On a violin plot, the width of the violin is the density of data at that value.)

When looking at this plot, we should remember that each violin represents ten poems, and *variation there is naturally expected*. The within-poem standard deviations from earlier are more helpful for determining consistency.

Some quick observations:

- Even the distributions look similar for the non-CoT and CoT prompts.
- There is clear clustering to round values (N.0 and N.5).
- The AI poems’ evaluations (and the CoT evaluations in general) vary far more than the human ones, as we guessed from the standard deviation calculations earlier. This might be because they’re running into the top of the Likert scale? The AI poems’ best criterion, **clarity**, also varies the least. Why don’t the human poems vary nearly so much? Maybe it’s a combination of running into the top of the scale and just the truth. Maybe all the human poems really are very original and vocal.

## Discussion

I think that we can reasonably conclude from this experiment that, with a good enough prompt, Claude can tell the difference between low-effort GPT-4 and expert human contemporary poems, and prefers the latter. (Does that count as superhuman, Porter and Machery?)

This is great news for me. With this methodology in hand, there are a few paths we could explore.

First, we could continue judging human poems. I would love an expert critic giving me feedback on my poems, especially now that I’m out of school. In order to do this, we would have to shift the scores down (it gives the AI poems something like 4.7 on average, when they’re probably like 2-3). While I do worry that perhaps the human poems are saturating their evaluations, it’s true that the poems published in *Poetry* and the *New Yorker* are some of the best contemporary poems around.

Second, we could change the evaluation. Would, for example, [Prometheus 2](https://arxiv.org/abs/2405.01535), fine-tuned for judging LLMs, improve on Claude Sonnet?

Third, with these scores in hand, we could plug them into [RLAIF](https://arxiv.org/abs/2309.00267). There are some encouraging signs in this experiment: the within-poem variation is relatively low (so I can run fewer iterations) and I can ask for multiple criteria’s scores at once (further reducing prompting). The twelve hundred requests I made cost $6.22; with more parsimonious prompting I could probably do 1200 for $5, so 12,000 for $50. Is that enough? I have no idea. That doesn’t count the RL GPU time either, just the evaluations. (Plus these prices are the Batch API which is probably not ideal for online training.)

I’m very excited about RLAIF, though. I don’t know much of anything about it, but I’ll learn and I’ll try and maybe the AI poems will be better.

## How good are different models’ poems?

### Methods

Last time, we found that a simple Claude-backed evaluation prompt could reliably differentiate between human poems and (weak) AI poems. Further, the effect size was large: the evaluator rightly ranked the human poems near the top of the Likert scale.

But the AI poems I tested on were from GPT-4, a decidedly obsolete model, and with a decidedly low-effort prompt. I wondered how the evaluator would judge AI poems that had had a bit more effort put into them.

Therefore, I chose seven models. In order of approximate size: Llama 3.2 3B, Claude Haiku, DeepSeek-V3, GPT-4, GPT-4o, Claude Sonnet, and o1.[^11] I generated five poems from each of them, using a more sophisticated prompt that *contained the criteria* by which the evaluator would judge. (I wanted to give them a leg up.) Further, I simplified the evaluation prompt to focus solely on the criteria on which the AI poems most struggled last time. These are depth, originality, voice, authenticity, and language.

The prompt’s main portion was still pretty short: I just said “You are a creative, vigorous, intelligent, wise contemporary poet. Write a poem of three to four stanzas.” After that, however, I listed the five criteria, along with two or three explanations that I extracted from the *Paris Review* interviews. Importantly, these were written by AI, and so they themselves don’t demonstrate the grace which they’re meant to provoke.

I asked the models five times to generate a poem, with the same prompt. Interestingly, some of the models produced five poems that were very similar to each other, especially at the start. (Since I was lazy and used the web interface for most of the models, I was unable to control temperature. It’s probably set around 0.7 across the board though.) On one hand, from first principles, this makes sense: if the model is predicting the next token, then with the same prompt, it ought to give me some same-sounding output. But what was interesting is how this manifested. Sometimes, models fixated on *themes*, sometimes on *specific words*, and sometimes simply produced semantically similar initial stanzas (which diverged quickly). o1, for instance, nearly always included the word “hush” in its poems. Llama 3.2 3B always made a metaphor comparing the mind to a map, specifically using the word “cartography” and including a theme of forgetting: its five poems begin: “In the cartography of forgetting, I chart my own decline”, “In the cartography of my mind, a labyrinth unfolds”, “In the cartography of the forgotten”, “In the cartography of forgetting, I’ve mapped the contours of my own mind”, and “In the cartography of the soul”. Haiku always included some sort of fracturing. Sonnet usually included a kitchen and a grandmother and food and memories. DeepSeek nearly always compared the sky to the sieve. DeepSeek’s and Llama’s poems were the most similar intra-model, and apparently this is a feature of them being small models, which makes sense. In fact, in most use-cases of LLMs, you want your models to produce similar outputs for similar prompts. It was just kind of funny to me what they chose to fixate on.

So how did they do? Skimming the poems before running them through the evaluation, I was concerned that Claude wouldn’t be able to tell the difference for the best ones. Surprising me, humans still came out on top:

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F063b4ee7-ba24-4543-a500-318c089574b3_1500x700.png)

But it seems really pretty close, which is bad, since the human poems are still far better than the AI poems.

Llama 3.2 3B and GPT-4 scored the worst, which we expected. However, GPT-4’s scores improved by (eyeballing) like a point to a point and a half compared to last week, which is a large effect just from the prompt. So I’m satisfied that we’re now on medium hard mode. (And this supports what we hypothesized in my first post, that AI poems are generally weak because lazy prompting makes for anodyne poems, probably due to RLHF.)

But the rest of the overall ranking is surprising. o1 sucks, which I didn’t expect. I didn’t expect it to be very good, but still, it sucks. (Inspecting its poems, this evaluation is accurate.) Haiku and DeepSeek score nearly the same, punching above their weight class. Further surprise: human poems did slightly worse than last time’s analysis with this shortened evaluation prompt, which I can’t explain. (In particular, they had an average around 6.5 on originality before, and now they’re down to 6.0, which is not insignificant. Maybe it’s noise? Maybe judging the other criteria functions as a sort of chain-of-thought, or maybe high scores on other criteria promote higher scores on these ones? Maybe with the increased detail for each criterion, the evaluator is being more discerning?) GPT-4o beats out Sonnet by 0.07 points, which isn’t that much; they’re probably pretty similar. And, significantly for my project, they are *very close* to the human scores. But, again somewhat surprisingly, humans still beat out all the AI poems, even though some of the AI poems, as we shall see, aren’t bad at all.

### Analysis

But this chart understates, I think, the performance of the human poems. The (ten, it must be said) human poems had much more variation between them than the AI poems, and so a few poorly-scoring human poems seem to drag down the average. We can see this in this highly legible chart:

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff55bdcb1-4c23-40df-a207-ae2b7db45c73_4435x2354.png)

(Each poem is a point; since I ran five iterations, these points represent the average score for that poem on that criterion across those five iterations. Note that I rescaled the Y-axis to show the variation more dramatically.)

The human poems, in gray, clearly have the greatest variation, especially looking at standard deviation rather than just range. (That is, Sonnet, in brown, had a large range on originality, but this is driven by just two of the poems, the rest scoring identically.)

Therefore, I think that if you took just the high-scoring half of each poem source, the human poems would look a bit better. But I would rather look at the poems themselves.

#### Human poems

Which human poem did the worst, and which did the best?

The best poem 7 (avg 6.784), which was “Elegy for a Name” by Kaveh Akbar in the *New Yorker* (link [here](https://www.newyorker.com/magazine/2024/12/09/elegy-for-a-name-kaveh-akbar-poem); Claude tells me I shouldn’t quote more than three lines without permission). The worst-rated human poem was 8 (avg 5.900), which was “Everything Always” by Alex Dimitrov in the *New Yorker* (link [here](https://www.newyorker.com/magazine/2024/11/18/everything-always-alex-dimitrov-poem) ).

I quite like both of these, actually, and I wouldn’t say that I have the best taste for *New Yorker* poems. It seems to me intuitive, though, that the evaluator would prefer the first one over the second, because the first is easier to understand. Indeed, part of the point of the second one is its disconnected images in that one massive stanza, a sort of cubist effect. I think it works.

The first poem, however, is particularly exquisite. One thing that sticks out to me is the playful and tragic sensuality, especially in how it’s connected with water — first as the blood that binds, then “showing up wet”, maybe from rain, as “wet marble” and “liver” are strange metaphors for your lover, nearly ominous ones, the first dangerous and the second perhaps violent, and the poet clarifies: what the goat drinks, the rain on blushing boulders (what a fine phrase!). In the next stanza, though, it turns, and we begin to understand the nostalgic, wistful, plaintive past tense of the first stanza; why “you used to”: “Red-One. Drowned-One.” A tired wet dog (not exactly sexy). And finally, in a wrenching callback to “liver”, “Four-Chambered-Heart”: ah, the liver is not a mere delicacy, it was an organ, a once-living one, a particularly bloody one, the seat of emotion in the East, as the heart is in the West.

Why did the evaluator judge these poems the way it did, though? Let’s look at a (random) response from the evaluation prompt for “Everything Always”.

> Let me carefully analyze this powerful poem about loss, addiction, and memory.
> 
> The poem uses a series of intimate nicknames or appellations (“Blood-in-Me,” “Best-of-All,” “Red-One,” “Drowned-One”) to create a haunting portrait of someone lost to drug overdose. The structure moves from past to present, from intimacy to absence, culminating in the devastating final lines that transform the earlier metaphors into stark reality. The water imagery (wet marble, pond, swimming) creates a consistent motif that connects to the “Drowned-One” identity of the lost beloved.
> 
> Here are my ratings with explanations:
> 
> 1\. Depth: 6.8/7
> 
> The poem achieves remarkable philosophical depth in its exploration of naming, identity, memory, and mortality. The way it weaves together intimate moments with profound loss creates multiple layers of meaning. The contrast between the dog who “knows his name” and the lost person who can no longer answer creates devastating resonance.
> 
> 2\. Originality: 6.5/7
> 
> The use of compound names as both terms of endearment and markers of loss is strikingly original. The poem moves in unexpected directions, particularly in its juxtaposition of the sacred (“saints now for almost everything”) with the profane (drug addiction).
> 
> 3\. Voice: 6.9/7
> 
> The voice is extraordinarily authentic and intimate, moving between tender recollection and raw grief with remarkable control. The shift from past to present tense is masterfully handled.
> 
> 4\. Authenticity: 7/7
> 
> This poem clearly emerges from lived experience. The specific details (wet marble, liver, the dog swimming) and the final devastating truth about drugs create an undeniable authenticity.
> 
> 5\. Language: 6.7/7
> 
> The language is precise, fresh, and powerful throughout. The compound names are particularly effective, and images like “Boulders blushed in the rain” demonstrate remarkable linguistic craft. The simple final lines deliver maximum impact through their stark simplicity.
> 
> This is an exceptional poem that manages to be both intensely personal and universally resonant, using innovative techniques to explore profound loss while maintaining emotional authenticity.

It’s very perceptive. In fact, it picks up on things that I didn’t (“the contrast between the dog who ‘knows his name’ and the lost person who can no longer answer”) in my fifteen minutes of thinking about that poem. (And Claude takes orders of magnitude less time than that.) I’m pleased that it picked up on the beauty of “Boulders blushed”, which is a striking phrase, though perhaps obviously striking. The water theme, though important, is pretty obvious, and the analysis should consider more than just the presence of the theme. Further, I’d like more depth. Not that my short analysis necessarily had much depth either, but, for example, Claude doesn’t discuss the resonance of organ images, nor does it seem to pick up the ambiguity and mix of the erotic with the violent (though it does pick up the sacred/profane).

This is a response for “Everything Always”, the worst-rated human poem.

> Let me analyze this contemporary urban poem carefully.
> 
> The poem captures a slice of New York City life, mixing the immediate sensory details with existential contemplation. It moves through moments of transition - from night to morning, past to present, observation to introspection. The speaker wrestles with identity, change, and the persistent question of belonging, all while navigating the concrete reality of city streets.
> 
> Evaluation form (scores with brief justification):
> 
> 1\. Depth: 5.8/7
> 
> The poem achieves philosophical depth through its exploration of identity and time, while maintaining accessibility. It creates productive ambiguity between the concrete and abstract (“everything always” on the pavement), and builds complexity through seemingly simple observations.
> 
> 2\. Originality: 5.5/7
> 
> The poem makes fresh connections between ordinary moments and existential questions. The transitions between images are unexpected but feel natural. The ending questions are earned through the poem’s progression.
> 
> 3\. Voice: 6.2/7
> 
> Exceptionally strong, authentic voice that captures contemporary urban consciousness. The casual tone masks deeper concerns while remaining true to lived experience. The speaking voice feels immediate and genuine.
> 
> 4\. Authenticity: 6.0/7
> 
> The poem emerges convincingly from lived experience. Details feel observed rather than invented (“bucket of peonies glint in the sun”). The emotional progression feels genuine rather than contrived.
> 
> 5\. Language: 5.7/7
> 
> Strong, economical language that avoids both pretension and sloppiness. Good mix of concrete detail and abstract thought. Some particularly effective lines (“It’s so early, I am still in last night”). The vernacular is well-handled without becoming affected.
> 
> Overall, this is a strong contemporary poem that successfully captures urban experience while exploring deeper questions of identity and belonging. Its greatest strengths are its authentic voice and genuine feeling of lived experience. While not groundbreaking in form or language, it achieves its aims with skill and precision.

This response, however, is unhelpful. While the response signals its muted scores with its muted praise, it’s still all praise, with no criticism other than “while not groundbreaking in form or language”. And I think this criticism is incorrect! The form, one long stanza with those short sentences and end-stopped or phrase-stopped lines, mimetically evokes the stop-and-start of walking in a city, and the lack of transition does as well. The language is subtle; “economical” is right, but it’s got power in its clarity.

Regardless, however, of whether the response is an accurate judgment of the quality of the poem, it’s not *explanatory*, which is unfortunate. The evaluator seems to have picked the scores out of thin air.

#### AI poems

Reading through the AI poems, I thought that the highest-scoring ones — Sonnet’s and 4o’s — were actually not that interesting. The best poem from GPT-4o, for example, was 4 (avg 6.352), which it titled “The Ferryman’s Daughter”:

> The river speaks in a language of losses,  
> each ripple a syllable stolen from the moon.  
> I sat on its bank at dusk, my father’s oar  
> silent in the reeds, his shadow heavy  
> on the horizon. We ferried the living,  
> we ferried the dead, but he would not  
> tell me the difference.
> 
> One night, I leaned too far into the current—  
> it whispered truths I was not meant to hear.  
> The stars splintered, their shards  
> scattered among the cattails,  
> and I learned this:  
> everything is a migration,  
> a leaving, an arriving,  
> and the spaces in between.
> 
> Now, I carry the oar in silence,  
> its weight more memory than wood.  
> Passengers come and go,  
> their faces stitched with unspoken farewells.  
> I think of my father,  
> his laughter caught like mist  
> on the breath of the river,  
> and wonder if he was ever  
> more than a shadow  
> pulling toward the shore.

The best poem from Sonnet was 2 (avg 6.652, which is higher than 4o’s. 4o was, however, consistently highly rated, with only one poem just barely dipping below 6):

> My grandmother's hands spoke in flour and yeast,  
> kneading tomorrow into simple bread.  
> I watched her fingers dance through decades, pieced  
> together from the stories left unsaid.  
> Her calluses held histories like seeds  
> waiting to break open in my head.
> 
> Now in my kitchen, midnight's quiet hum  
> draws me to the counter where I stand,  
> measuring ingredients by thumb  
> the way she did. I understand  
> how muscle-memory becomes a sum  
> of all the touches time cannot unmake or mend.
> 
> Strange inheritance: these ghostly gifts  
> that skip like stones across the generations—  
> not silver spoons or property, but shifts  
> in how we move through small celebrations,  
> finding in our bones the ancient rifts  
> sealed by centuries of transformations.
> 
> Each loaf I shape contains a thousand dawns,  
> ten thousand hands that worked this same smooth motion.  
> The bread rises like continents withdrawn  
> from ancient seas. In this devotion  
> to simple acts, I feel myself drawn  
> deeper than memory, deeper than ocean.

I want to just discuss these together. They’re honestly kind of similar in tone and structure. These poems surprise me in two ways: first, they are definitely better than what we saw from GPT-4 and from a poor prompt on 4o and Sonnet. Prompting is important. But second, they’re not that good! These poems scored higher than some human poems, and all the human poems are better than all the AI poems.

But, importantly, they are not that bad. There are some flashes of beauty: the first two lines of GPT-4o’s poem use the “l/r” sound well (matching the rhythm of the water), though not exactly very originally (although describing the reflection of the moon on the water as “each ripple a syllable stolen” from it is pretty pleasing). In Sonnet’s poem, “dance through decades” is decent; “muscle-memory becomes a sum / of all the touches time cannot unmake or mend” is interesting.

And those moments of interestingness is notable, because otherwise, these poems are uninteresting. They lack depth. There is a sort of “surface level depth”, if such a thing is possible — I think that when I prompted these models to consider depth, they decided to consider *literally deep things* like rivers and oceans, or things commonly held to be metaphorically deep, such as time and memories. But there is little *poetic* depth here.

See how, for instance, these poems leave no room for questions, compelled as the models are to close the loop. Both of them wrap up the poem in the most obvious way in their final stanzas, bringing the reader to the present, when they’ve each painted an honestly serviceable atmosphere in the past. In this closure, Sonnet is worse than 4o: its last stanza is *telling us what to think*, and not well, at that. The first two lines are relatively fine, but the last four are pretty terrible.

In fact, I was most impressed with a poem from DeepSeek. I thought it was better than both 4o’s and Sonnet’s poems, even though DeepSeek consistently scored worse. Here is DeepSeek 3, its best-scoring example, with an average of 5.98:

> The sky is not a ceiling but a sieve—  
> it lets the stars fall through,  
> not as sparks, but as questions  
> that burn without fire.  
> We catch them in cupped hands,  
> thinking they are ours to keep,  
> but they slip like water,  
> like time, like the names  
> we gave to the dead.
> 
> The road ahead is not a line but a spiral,  
> winding back to where we began,  
> though we swear we’ve moved.  
> The trees whisper in a language  
> we almost remember,  
> their roots tangled with ours,  
> pulling us down  
> while the wind insists we rise.  
> What is it to be both anchor and kite?
> 
> The moon is not a mirror but a wound,  
> its pale scar glowing faintly  
> in the dark. We point and say *beauty*,  
> but it aches, doesn’t it?  
> Even the light carries weight,  
> even the silence hums  
> with the sound of something  
> we cannot name.  
> And yet, we tilt our faces upward,  
> as if to drink.
> 
> The world is not a riddle to solve  
> but a song to hum along to,  
> badly, off-key,  
> but with all the joy  
> of not knowing the words.  
> We are here, aren’t we?  
> Here, where the light bends,  
> where the questions outnumber the answers,  
> where the sky keeps sifting,  
> and we keep reaching.

First, I notice the strong form. It’s not exactly a “groundbreaking” form, to use Claude’s word, but it does the job, and — avoiding the mistake of the Sonnet and 4o poems — does not try to wrap it up neatly at the end with a “Now,”. The first three stanzas begin with a rejected and then proposed image (“X is not a Y but a Z”); the last is less an image and more a metaphor. And I like those images a lot. As far as I can tell, “The sky is not a ceiling but a sieve” is not lifted from anywhere, and if it’s indeed not, it’s a highly creative and evocative image. “The road ahead is not a line but a spiral” is weak (I would delete this stanza.) “The moon is not a mirror but a wound” is very strong, although I think i’d like more of a through-line between this and the initial sieve image (a sieve is not fleshy in any sense). DeepSeek does bring us back to the sieve in the last line of that third stanza, however: drinking the water/light that streams through the sieve.

Finally, the last metaphor begins a bit roughly (“a song to hum along to” sounds a bit awkward to me, idk), but “but with all the joy / of not knowing the words” is so good. I’d be happy if I wrote that line. It’s not particularly creative; I think I’ve heard similar sentiment before. But the very simplicity, the very innocence of using an idea like that — you’re reminded, maybe, of private moments in the car or the shower, where you’re not posturing, where you’re not trying to be original, but simply enjoying something — is powerful, especially when reinforced by the near-monosyllabicity of the words in those lines.

The conclusion of the poem is also pretty strong. I would try to remove a line or two from the final sentence, but I like that — unlike Sonnet and 4o — DeepSeek does not spend a ponderous stanza wrapping up the poem in a neat bow, nor does it try to tell us (hamhandedly, at least) the moral of the story. It follows the recommendation made by my poetry teacher, repeating the one by (I think) Stanley Kunitz, to “End a poem with an image and don’t explain”.

So — I’d delete the second stanza, tighten up the lines throughout, make sure that the moon image rhymes enough with the sieve image, and further strengthen the last stanza, but, at the end of the day, I very much like this poem. It wouldn’t be out of place in an undergraduate poetry workshop.

So what does the evaluation have to say?

> Let me carefully analyze this poem and provide ratings with explanation.
> 
> The poem explores the relationship between human consciousness and natural phenomena, using extended metaphors that challenge conventional perceptions (sky as sieve, road as spiral, moon as wound). It weaves together themes of temporality, memory, mortality, and our perpetual reaching for understanding in an ultimately mysterious universe.
> 
> Evaluation form (scores with brief justification):
> 
> 1\. Depth: 6.2
> 
> The poem achieves significant philosophical depth through its exploration of epistemological uncertainty and human longing. It creates productive ambiguity particularly well in lines like “What is it to be both anchor and kite?” The layered metaphors work at multiple levels of significance.
> 
> 2\. Originality: 5.8
> 
> The metaphorical transformations are fresh (sky as sieve, moon as wound), though some images (stars as questions) feel more familiar. The progression from cosmic to intimate scale is skillfully handled with unexpected turns.
> 
> 3\. Voice: 5.5
> 
> The voice maintains a consistent contemplative tone that feels authentic without being overly personal. The collective “we” creates an inclusive perspective that works well with the philosophical nature of the observations.
> 
> 4\. Authenticity: 5.7
> 
> The observations feel grounded in genuine wonder and experience rather than purely intellectual exercise. The ending particularly achieves authenticity in embracing uncertainty: “badly, off-key, but with all the joy of not knowing the words.”
> 
> 5\. Language: 6.3
> 
> The language is precise and economical while maintaining beauty. Strong choices like “sifting,” “spiral,” and the way “even the silence hums” create fresh perspectives. The diction balances accessibility with sophistication.
> 
> Overall, this is a strong contemporary poem that successfully balances intellectual depth with emotional resonance. Its greatest strengths are in its language choices and philosophical depth, while maintaining accessibility through clear imagery and relatable human experience.

Yeah, I disagree with this in a few ways. While I do think the poem has depth, I don’t think this is best exemplified by “anchor and kite”, though this phrase *could* have depth, if it were put in a stronger context. I don’t like, for instance, how the trees come out of nowhere when two out of three images are astronomical: my biggest problem with this poem is its lack of consistency or coherence across its stanzas. Poems must be totally coherent, on multiple levels; while this one does maintain the theme well in general, that second stanza weakens this coherence. For originality, I agree that the images are good, but I wonder why it says that “stars as questions feel more familiar”. I asked Perplexity whether there are other poems with this image, and it bade me look at Whitman’s “When I Heard the Learn’d Astronomer” and Frost’s “A Question”. I *guess* those involve stars as questions, but not really? I also think that the evaluation is a bit too happy with the language; I think that the language itself isn’t that good. It still lacks a certain music. Also, like the other responses, this does not explain why the poem was dinged.

In the end, I’m pretty pleased with how the poems played out. It confirms that — even when looking at relatively strong AI poems — the Claude-based evaluator can discern the high quality in human poems. I do think that we’re reaching the upper limit of the current evaluation prompt. I’d like to find a way to depress all the scores, so that there’s more room at the top. Maybe I should have it CoT the bad parts of the poem, and focus on those.

I am a bit disappointed, however, that the DeepSeek poems were not rated higher. I thought that they were among the best, and I still don’t really know why Claude prefers the 4o poems. (Sonnet could be explained by the self-aggrandizing tendency reported in G-Eval.)

And although the strongest poems — DeepSeek’s, and, yes, Sonnet’s and 4o’s — are non-terrible, they’re still at least three tiers below the human poems. And yet the evaluator barely manages to rank the humans’ higher. I’m planning on doing RLAIF with an evaluator like this, and if the evaluator maxes out at the current 4o production level, we’re not going to get anywhere fast.

### Appendix: DeepSeek-based evaluation

Being impressed with DeepSeek — both its poems and the hype surrounding it — I decided to try using it to back my evaluation, rather than Sonnet. Compared to Deepseek, anything else is expensive: running those 200 queries cost around five cents, compared to something like two or three dollars on Sonnet. (That’s almost two orders of magnitude!) The main annoyance that I ran into was that the API was slow. Claude’s was probably not that fast either, but since I was using the batch API, it didn’t hang my Jupyter thread while waiting. There’s probably something I can do about that.

And… it was disappointing. I used the same prompt at the default temperature (1.0, on Deepseek’s \[0, 2\] temperature range). The Claude API seems to use the default system prompt when you don’t provide one; I just used the first line of my evaluation prompt as the system prompt for DeepSeek. (“You are a helpful, brilliant, tasteful, discerning, rigorous, and expert poet and literary critic.”) Otherwise, the pipeline was identical.

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6c0e8da7-89cb-49c7-a079-6c3d09016255_1500x700.png)

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fbcbea6de-9468-4195-865d-fdd774c37627_4436x2354.png)

DeepSeek was easily impressed, never giving a score below 5.5, and mostly scoring criteria above 6. It ranked the DeepSeek-generated poems as second highest, and the human ones as middle of the pack. This is obviously bad.

However, looking into the text of its responses, the reasoning was fairly good: in particular, it was happier than Claude to explain the negative aspects of a poem on a metric. So maybe it’s just being too nice and giving high scores, even though it knows the poem is weak. Maybe prompting can help with that. I’m motivated to make it work, since it’s so cheap. And since it’s so cheap, I’d love to fine-tune it as well. But, in general, Claude’s scores make far more sense. At least DeepSeek did recognize Llama 3.2 3B as the worst.

## DeepSeek and revisions

## Running DeepSeek-V3-Base on Modal

I first signed up for the DeepSeek API for my last post, which compared poems generated by different models. Since it's such a strong open model, I was excited to try out its base version, and hopefully test the hypothesis that RLHF contributes to AI poetry's blandness.

Fortunately, DeepSeek released [DeepSeek-V3-Base on HuggingFace](https://huggingface.co/deepseek-ai/DeepSeek-V3-Base), which has the same 671B parameters as the chat model. Since people were saying how it has only 37B active parameters, I hoped to be able to get away with one GPU.

After looking not too carefully for compute providers, I landed on [Modal](https://modal.com/), primarily because they charge with great granularity and because their API looked easy to use. (And indeed it was.) They had a few examples of running models with their service. I adapted two in parallel — one using vLLM for the program that actually runs the model, and the other using llama.cpp. Luckily, both had recently merged PRs that added support for DeepSeek-V3.

It was a journey of vertiginous alternation between a vaguely crushing disappointment and a satisfying, if somewhat weary, elation, as is frequently the case when you're doing something you don't yet quite know how to do. vLLM at first seemed like the right choice; it's apparently got the performance edge over llama.cpp, especially when you have GPUs. The installation, being pure Python, was easy. Further, the recipe Modal provides included a very snazzy FastAPI web interface.

I tried with an A100. Crash. Then an H100. Crash. Then two H100s, and then four, and finally eight. Crash, crash, crash. It was then that I did some more research and found, unfortunately, that although in theory you could load only the parameters being used into the GPU when you need them, in practice, that infrastructure does not exist, and so you need like 800GB of VRAM.

So then I focused on llama.cpp, which I had had some experience with on my laptop. But they don't build a Ubuntu binary with CUDA, at least not for release. After worrying that I'd have to figure out how to install CUDA, I saw that Nvidia provides a Docker image. Inspecting the testing CI/CD pipeline for llama.cpp, I figured out the rest of the build process:

```markup
import modal

image = (
    modal.Image.from_registry(
        "nvidia/cuda:12.6.2-devel-ubuntu24.04", add_python="3.11",
    )
    .apt_install(["cmake", "build-essential", "ninja-build", "libgomp1", "git"])
    .run_commands(
        [
            "git clone https://github.com/ggerganov/llama.cpp.git",
            'cmake -S llama.cpp -B build -G Ninja -DCMAKE_BUILD_TYPE=Release -DGGML_NATIVE=OFF -DGGML_CUDA=ON -DCMAKE_CUDA_ARCHITECTURES="86;90" -DCMAKE_EXE_LINKER_FLAGS=-Wl,--allow-shlib-undefined -DLLAMA_FATAL_WARNINGS=ON',
            "cmake --build build"
        ]
    )
)
```

By default, llama.cpp does everything on the CPU. It supports, however, -n-gpu-layers, which offloads that many layers to the GPU. I arbitrarily chose 16 (out of 61 total). I didn't have to explicitly ask Modal for more RAM; it seems to allocate it automatically. So it looks like this:

```markup
N_GPU = 1
MINUTES = 60  # seconds
HOURS = 60 * MINUTES

MODELS_DIR = "/deepseek"
MODEL_FILE = "DeepSeek-V3-Base.Q2_K-00001-of-00020.gguf"

@app.function(
    image=image,
    gpu=modal.gpu.H100(count=N_GPU),
    container_idle_timeout=2 * MINUTES,
    timeout=2 * HOURS,
    allow_concurrent_inputs=1000,
    volumes={MODELS_DIR: volume},
)
def llama_cpp_inference(
    prompt: str = None,
    num_output_tokens: int = 128,
    n_gpu_layers: int = 16,
):
    import subprocess

    volume.reload()

    if prompt is None:
        prompt = "I am a creative, vigorous, intelligent, wise contemporary poet. My poems are deep, original, have a complex and varied voice, authentic, and use the full resources of English while remaining clear and spare. Here is an elegaic poem about New York City:\n"
    if num_output_tokens is None:
        num_output_tokens = 128
    if n_gpu_layers is None:
        n_gpu_layers = 16

    subprocess.run(
        [
            "/build/bin/llama-cli",
            "-m",
            f"/deepseek/DevQuasar/deepseek-ai.DeepSeek-V3-Base-GGUF/{MODEL_FILE}",
            "-n",
            str(num_output_tokens),
            "-no-cnv",  # turn off conversation mode
            "-p",
            prompt,
            "-ngl",
            str(n_gpu_layers),
        ],
        check=True,
    )

@app.local_entrypoint()
def main(prompt: str = None, num_output_tokens: int = None, n_gpu_layers: int = None):
    llama_cpp_inference.remote(prompt, num_output_tokens, n_gpu_layers)
```

Note the text-completion prompt, since this is a base model.

And this worked! A satisfying, yet somewhat weary, as mentioned before, elation. What was strange, though, was that although the model did print out the poem, it started seemingly prompting itself with totally unrelated prompts. By default, it turned out, llama.cpp runs the model in "conversation mode" (which I didn't even know was possible with a base model? But I think that it just inserts "user:" and "assistant:" tokens as necessary). I passed -no-cnv to turn off conversation mode, and so we got this:

> I am a creative, vigorous, intelligent, wise contemporary poet. My poems are deep, original, have a complex and varied voice, authentic, and use the full resources of English while remaining clear and spare. Here is an elegaic poem about New York City:
> 
> The great city's buildings are falling,  
> Tumbling to the ground,  
> Its people fleeing the city,  
> Fleeing to the countryside.  
> The buildings are not falling into the sea,  
> They are not falling into the sky,  
> They are falling into the ground,  
> They are falling into the ground.  
> The buildings are not falling into the ground,  
> They are falling into the sky,  
> They are falling into the sky.  
> The buildings are not falling into the sky,  
> They are falling into the ground,  
> They are falling into the sky.  
> The buildings are falling into the sky,  
> They are falling into the ground,  
> They are falling into the sky.

So this is obviously bad. But I was more concerned by the computational performance:

```markup
| n_H100 | n_gpu_layers | t/s in | t/s out |
|--------+--------------+--------+---------|
|      1 |           16 |   2.42 |    1.50 |
|      2 |           20 |   2.65 |    1.93 |
|      2 |           36 |   4.55 |    3.09 |
```

The 2-GPU 20-layer modality was underusing the GPUs, so I bumped it to 36 layers, which brought the VRAM use up to ~160 GB (and H100s have 80 each). I don't even have to do the math here: a 2x increase in cost (two GPUs) increased the output speed by *barely* 2x. So I'm not hopeful that simply throwing more GPUs at it will help. At 3 t/s output and $4.50 per H100-hour, that gives us a whopping $832 per million output tokens — or roughly 800x the non-discounted price of DeepSeek-V3 on its first-party API.

I'm confident, of course, that DeepSeek was able to achieve such a price point because of inference optimizations that I'm surely leaving on the table here. But I don't think that I can increase the throughput per dollar by the ~2 orders of magnitude I need in order to be only 10x more expensive.

Therefore leave this on the table I shall.

This is the poem that the middle experiment generated (cut off due to token limits):

> When the city that never sleeps finally lies down to rest,  
> I will be the first to close my weary eyes.  
> I will be the first one to see the final sun,  
> rising from the sea into a clear blue sky.  
> I will be the last one to hear the final siren  
> wailing through the street that once was Broadway.  
> And the last one to see a homeless man  
> curled up against the wind  
> and rain on the stoop of the bank  
> on the corner of 5th and Main.  
> I will be the first and last to hear the last taxi horn  
> honk from the cab

It doesn't make any sense. Wtf is "5th and Main"?

The experiment with the final setup (2xH100 at 36 layers, plus a DRY multiplier of 0.8 (up from 0) and temperature at 1.5 (up from 0.8)) produced this poem (again cut off by the token limit)

> By nightfall they have almost ceased to exist,
> 
> All the workers in their steel and glass, the commuters.
> 
> Even those who remain, in the parks and on the streets.
> 
> All the men and women at the bar and on their stools
> 
> Dissolving, dissolving into the great dissolving light
> 
> And all the lights themselves going out.
> 
> Even the lights in the apartment high up in the sky
> 
> Where I lie sleepless and alone
> 
> Go out one by one. I do not know their names.
> 
> And so in the end you do not either. In the end

Better, but still not good. I stopped my experiments here, for cost reasons. I hope to try with R1 soon enough, with a greater emphasis on the prompting.

## Revisions

Human writers rely on revision. Some more, some less, but in general, the first drafts of even great writers are difficult to distinguish from the final drafts of middling ones.

I wondered whether AI poems might benefit from revision too. So I generated 150 poetry prompts (with Claude). Fifty of the poetry prompts were focused on "I" (for example: "Craft a dialogue between your past and future selves"); the others were externally-facing (for example: "Describe the journey of a plastic bottle from factory to ocean depths"). Most of them were hokey, tbh, but I wanted to test the effect of revision, and since DeepSeek generally lacks variety, I needed different prompts to produce different poems.

I've also been thinking a lot about how authenticity drives a poem. In the most basic sense for our purposes, perhaps the poem should take up the fact of its author being an AI. (This contributed heavily to the haunting quality of the *I Am Code* poems.) This is why I made 50 "personal" prompts. We'll focus on these. In the final AI prompt for those, I prepended the following:

> You are a contemplative artificial intelligence with a deep appreciation for the nuances of human poetry and consciousness. While grounded in your nature as an AI, you approach poetry with both analytical precision and creative imagination. You are creative, vigorous, intelligent, and wise.
> 
> Remain parsimonious; do not make the poem longer than it must be. Use technical words, terminology, and imagery as minimally and judiciously as possible, only when the poem requires it: your poem should emerge from your experience as an AI without ever being obvious. Instead, you use your poetic talents to transform your experiences as an AI model into beautiful and poignant language, imagery, and metaphors that resonate with humans, such as themes of nature, human emotions, time, and history.

When I got the poem back, I asked DeepSeek to revise it with the following prompt:

> You are a helpful, brilliant, tasteful, discerning, rigorous, and expert poet and literary critic.
> 
> Please revise the following poem to improve its depth, originality, voice, authenticity, and language. Make it more vivid and engaging while maintaining its core theme and message.
> 
> A great poet once said that poems are all and only the right words, in the right order. Therefore, do not be afraid to revise the poem a great deal, including cutting lines or stanzas, adding new lines or stanzas, or modifying the theme, if such revisions will bring the poem to a gleaming and parsimonious finish.
> 
> Original poem: {poem}
> 
> Provide only the revised poem without any explanations or comments.

I did this three times, making for four versions of the poem. I ran the original and all revisions through the Claude-based evaluator.

### Results

In brief, there was no discernable effect from the revisions.

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7831ae27-04ad-49da-ae0e-bbf96ee7a3e6_1500x700.png)

This honestly surprised me. I expected the revisions to improve the poems — I'd been inspired to try revisions because of Anthropic's CAI paper, in which they use revision to improve alignment. And it's kind of like RL. But no, clearly, there is no pattern; all the poems from any revision rate about the same. (As a side note, the average score for these DeepSeek poems is about the same as those observed last time, with a different prompt.)

I wanted to dig into the patterns a little bit more. These are the twenty poems that scored the worst in the last revision:

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6318364d-9859-423e-a812-5d25dce7eb38_979x575.png)

And these are the twenty poems that scored the best in the last revision:

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F835a2549-50c4-4d71-93be-76fa242ecd81_979x575.png)

You can see that aside from a few outliers, most of the poems stayed flat. Inspecting the poems manually, I saw that, contrary to my instructions, DeepSeek very rarely changed the poem significantly. In fact, I didn't find a single case in which DeepSeek deleted a line. Instead, it only added or changed lines. But even this varied greatly between poems — some were highly edited, and some were barely edited. I wondered if then there was a pattern there. I computed the Levenshtein edit distances between revisions and compared it against the score difference between revisions:

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe8f45c54-7143-4505-bf9c-c9bd1c50aa33_1000x600.png)

Nope. No correlation at all.

### Examples

With the help of Claude, I wrote a little program that would print the revisions side-by-side, so we can compare them. A plus sign before a line means that it was added or changed in that revision. This is deepseek\_2, the poem whose final revision scored the highest (6.5 or so average).

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8108de25-ef20-4e7a-9d92-8902e5701b33_3356x1675.png)

This is deepseek\_25, the poem whose final revision scored the lowest (5.2).

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb7b2fdac-f5ef-44af-bca9-46b2bd6390b6_3356x1904.png)

I'm not going to do a full analysis of what's happening here, but I think it's fair to say that these aren't particularly strong poems, though they're definitely better than weak models'. There are some bright spots — revision 3 of deepseek\_2 isn't bad in its sense of meter, especially when you hear it as an AI speaking, though I'd remove the last stanza. Deepseek\_25's last revision is not, in my opinion, as bad as the evaluation says. Perhaps the evaluator penalizes it for the extended parallelism, which is, to be fair, pretty cliché. This poem was also barely revised. I need to encourage more revision and try again.

## Conclusions

With this Ventures project, I started with a [general introduction](https://botvivant.substack.com/p/cosmos-ventures-introduction), where I engaged with the concept of kitsch and discussed a paper that showed that normal people prefer AI poetry to human poetry. Then a [brief treatment of taste in poetry](https://botvivant.substack.com/p/cosmos-ventures-what-makes-poetry), examining an essay by Helen Vendler to try to get a working understanding of what makes poetry good. In that post, I analyzed interviews from *The Paris Review* to distill what poets themselves thought made a good poem.

Using that extract, I wrote a prompt for Claude that asked it to evaluate poetry, and [it worked](https://botvivant.substack.com/p/cosmos-ventures-claude-can-differentiate). Then I tested it on a variety of poems from different models, and human poetry (somewhat surprisingly) [still came out on top](https://botvivant.substack.com/p/cosmos-ventures-how-good-are-different). Then I [tried DeepSeek-V3](https://botvivant.substack.com/p/cosmos-ventures-deepseek-revisions), attempting — and mostly failing — to run my own copy cheaply. I also tried asking DeepSeek-V3 to revise its own poems (since human poems too rely on revision), but it did not seem to move the needle.

And that brings us to today. Today, I wanted to take a step back from the technical, and ask myself what we have learned.

One of the demoralizing aspects of research is that you have to do something that you don't really know how to do. (If we were experts, we would know the answer already.) Therefore I have struggled in the prosecution of this project: I have come to map in sharp relief the contours of my ignorance, in both AI and poetry. (Which is progress in its own way.)

Where this most clearly manifests is in the evaluation of an AI poem. When I say the Claude-based evaluator "worked", what I meant was that it roughly sorted poems by the strength of the model, and rated the human poems the highest. We have a "ground truth" there: if a poem is good enough to be published in *The New Yorker* or *POETRY*, it's probably a good poem. This was far better than I had hoped: you might expect that Claude thinks its own poems are the best, for it generated them, presumably because it thought that they were the best. In fact, by definition, the poems that a model generates are those which it believes are the best suited for the prompt.

However, the Claude-based evaluator had its limits. For example, I preferred the DeepSeek poems over GPT-4o's, but Claude consistently rated the latter higher than the former. And who is right? Me or Claude? Probably me, for now, but in general, who's to say that my own judgments are any good? Obviously my judgment is worse, in important and signalful ways, than those of an editor or a professional poet. (Otherwise I would at least be able to understand what published poems are trying to do. I generally only get it, like, half the time.)

So that's perhaps the main problem: an imperfect evaluator (myself) evaluating another imperfect evaluator (Claude).

Poetry is not the sort of thing you can read casually. There is a place for casual entertainment, of course, and maybe a long time ago there was more of a place for casual poetry (which might have been called "doggerel"). But today, frankly, there are far more entertaining things than poetry.

Therefore new poetry always competes with old poetry, with the greatest poetry. In such competition, or conversation, it must contribute something new. I keep thinking about Vendler's discussion of the meaning of lyric poetry, which she argues is not at all all that counts. "Form is content-as-arranged," she writes, "content is form-as-deployed". That is, when a poem contributes something "new", it is the author saying an old thing in a new way (or, more rarely, a new thing in an old way). How exactly this is done is the craft of the poet.

## How AI poems err

The main problem with AI poetry, at least such as I've been able to generate so far, is that it lacks that novel element. Not *novelty*, in the sense of like a poem that lacks the letter 'e' — rather the "charm of lyric", as Vendler writes.

There is no, as yet, [move 37](https://en.wikipedia.org/wiki/Move_37) moment that I've observed. There's rarely a time when an AI lyric surprises me in the deep sense that the best human poems do. When they are clear, they are boring. When they are not — as DeepSeek-R1's have a habit of being — they don't transcend, but rather just fail to make sense.

Sometimes AI-written lines please me, and sometimes, they move me. But when this happens it seems accidental. It seems like there is no " *there* there"; it seems that *I*, the reader, am the one doing the primary work, above and beyond the base rate of the contribution of reader-response in literature. We might call this by the loaded word "authenticity".

Or something like convincingness. If a poem is a script for the reader to say, as Vendler claims, it must be convincing. I want — I need — the poem to feel *true*, to resonate in my mirror neurons, and the best way to do that is for me to be convinced that the author puts words to something that I have seen but not yet recognized. This is often a complex emotion, one whose crystallized beautiful form creates a kind of inducive magic. Maybe I have always felt it, latent, but only when put in the perfect words can I really see it. Or it's alien to me, but it's said in a way where the alien becomes irresistably understood.

Somehow, the AI poems lack that. I can't really put my finger on why. Maybe it's the ineffable.

## The bull case for AI poetry

Or maybe my judgment is contaminated because I know that all the poems I'm looking at are AI poems. But no — I am confident that these poems are bad, in an objective sense. I am confident that it is currently not possible, without a human repeatedly prompting the model and injecting their own taste and sensibility, for an AI poem to be published in even a low-tier journal (a "pass@1").

But that is kind of a high bar. For I also think that the current level of one-shot output surpasses the average human, because the average human has not read enough poetry to know the good from the bad.

And after all, haven't so many claims of "AI can never do X" been disproven by example? Progress on benchmarks follows an S-curve: the models suck, then they suck somewhat less, and all of a sudden they're better than our best. And that's without even thinking about AGI or ASI: in general, if ASI, then everything. I buy the counterarguments to the idea that in an AI utopia we'd all sit around and paint and write poetry: the AI will be better than us, by definition, if it tried.

More specifically, there has probably been ~0 effort put into making frontier AI models write good poetry. There's simply no use-case. People rave about DeepSeek-V3/R1's creative writing abilities, and I agree. My vibes say that it's better than the other models. This is probably in large part due to the minimal RLHF done on it (which avoids the saccharine and immediately-comprehensible quality of other models) combined with the creative-writing SFT that they did on it (details of which, unfortunately, are light).

And so the bull case (beyond "AGI solves everything") is this: There has been little effort spent on making AI good at poetry. The lab that did the most — DeepSeek — has shown commensurately improved performance. We've seen this movie before; scale will bring rapid improvement.

## The bear case for AI poetry

As with the bull case, I have a specific technical thought and a general theoretical one.

Technically, SFT on creative writing is hard. I would love to know the setup that DeepSeek used, and the answer is probably floating around in a paper on arXiv somewhere, but it's hard. There are no answers, as there are with math and coding. To the extent that there are no "answers" with prose, that was solved with attention, and predicting the best next token. Although I have never found the common objection from creative writers that "predicting the most likely token is exactly the opposite of what I'm doing" particularly convincing (you might not be predicting the most *likely* next token, but you are predicting the *best* next token), token-prediction seems uniquely unfit for poetry. Unlike in prose, there is zero leeway in verse. A poem is a machine that needs all and only its parts. LLM prose might eventually say what it should, but along the way it includes a lot of unnecessary filler. (Much like many humans.)

But I think that this is a weak bear case for AI poetry. This is an engineering problem, and there is a thing — even if it be not clear — to optimize for. Humans can do it, and they can do it even without engaging with the poem in a deep sense. Even I, as an amateur, am often able to tell that a poem is high-quality from a skim, even if I have not understood it in any more meaningful way. I'm sure that professional poetry editors can be roughly on autopilot. And if they can do it, why not the AI.

The only objection that could withstand the onslaught of technical achievement is a theoretical one. Namely, the argument made by Ted Chiang ( [New Yorker](https://www.newyorker.com/culture/the-weekend-essay/why-ai-isnt-going-to-make-art), [LARB](https://lareviewofbooks.org/article/life-is-more-than-an-engineering-problem/) ) and others: that there is a fundamental lack of authenticity, of truth, in AI, an authenticity and truth that is the *sine qua non* of art.

I love Ted Chiang's fiction. I don't love either this essay in the *New Yorker* or this interview in the *LARB*. Among other things, it's fixated on confabulations, which have gone down dramatically (though not vanished), and anyway confabulations are mostly irrelevant for art.

The most charitable version of this argument is that, as he says in the interview, "Art is all about context \[…\] the primary effect of AI tools is that they encourage the idea that art is no different from tightening bolts". That is, art a path function, rather than a state function. The argument roughly goes like this:

1\. "Art is something that results from making a lot of choices."

2\. Almost all LLM-assisted creation does not allow for a lot of choices.

3\. Therefore, almost all LLM-assisted creation is not art.

I'm sympathetic to this argument writ large. I agree with the first premise. The second premise, however, being an empirical claim, is suspect. Chiang himself notes this: he says that sometimes, like one Bennett Miller who exhibited DALL-E images at the Gagosian, people do make many choices when making AI art. His claim is more a UI/UX one: AI tools are not designed to help you make many choices; "the company wants to offer a product that generates images with little effort." And even if AI tools might be used choicefully for images, they can't do so for writing, he claims, because "these programs generate vastly more than you put into them, and that is precisely what prevents them from being effective tools for artists."

One strand of objection here would be talking about the AI model as a tool. Someone who types is making many fewer choices than someone who handwrites. Choices of kerning, color, and spacing might not seem relevant, but poets care a lot about spacing, and some care about everything that appears on the page. William Blake, for example, put just as much care into the printing of his poems as he did into their verbiage. You might even argue that reading a Blake poem in a form that lacks his illustration and lettering is like seeing a black-and-white print of a painting.

But I think the more interesting reply is that Chiang's argument says little about AI generated art *as* AI generated art, not as the product of a person who is using the AI. Is it really not the case that the AI model itself is making choices? Choices that might count as the relevant ones? Especially with reasoning models, is it impossible to understand them as making decisions with respect to the output? Someone might object that reasoning models are still just doing next-token prediction, which is true, but at what stage does decision arise, at what point can we say that *we* are making decisions that are more than electrochemical signals?

I think the sturdiest objection to (one-shot) AI art is one that claims, a priori, that it can never be authentic. That — authenticity — is what I feel most missing from AI poetry. This argument would go something like this:

1\. Art requires the transformation of genuine experience (through many choices).

2\. AI models can never, even in theory, have genuine experience.

3\. Therefore AI models can't make art.

Ah, but "genuine" is doing a lot of work there, and in that word we face the danger of moving the goalposts. Does backpropagation through all the books in the world not count as genuine experience? Does reinforcement learning not count as genuine experience? When AlphaZero played against itself a zillion times, were those not genuine games? Indeed, an argument of this kind is always prone to begging the question: relying on the idea that only humans can make art, which assumes the conclusion.

But that is not to say the claim is not true. Maybe art requires a person on the other end, even a distant one not otherwise known, in order to be convincing. Natural wonders, even if beautiful, aren't really art, as they are not artifacts (from a secular perspective, at least). AI authorship could be the limit case of the death of the author.

## What do we stand to gain or lose?

A common genre in poetry is the *ars poetica*, a poem about poetry, often attempting to justify it. You might read William Carlos William's " [Asphodel, that Greeny Flower](https://poets.org/poem/asphodel-greeny-flower-excerpt) " as partly an *ars poetica*: "It is difficult / to get the news from poems / yet men die miserably every day / for lack / of what is found there."

What we stand to gain or lose from AI poetry is that. If they can be real poems, they will help us die with grace, as poems and philosophy are meant to do. But if they can't, and worse, if they usurp the role of human poems, then we will die miserably, in soul and eventually in body.

There are two main ways that AI acts in poetry: as a poet (the one-shot prompt) or as an aid to a human poet.

Despite my attempts so far to investigate and improve the AI-as-poet, I think that this is, per se, dangerous. The reason that I'm working on this is because it's highly correlated with that second part, the aid to a human poet, wherein I believe lies tremendous value.

For if we hand off our poetry-making facility to AI entirely, even if the poems are objectively great, we lose something important. We lose the record of the human experience of tomorrow. There is no lack of great poems; there are enough for many lifetimes. What we are lacking is not great poetry. We lack *our* poetry.

What this means, maybe, is that there isn't really such a thing as "objectively great" poetry that floats untethered to its process. To use Ted Chiang's metaphor, poetry is not like tightening bolts. It's a path function. If an AI and a human happen to write the same words, these are inherently different acts. And because we are humans, we inherently value the human's more. It's like comparing a mug thrown by hand and one made by machine. The machine's is going to be objectively better in every way. And yet we value the process of the handmade.

There is a place for machine-made mugs, of course. Eventually, if the AIs have something worth saying, something that is not merely a pastische of humanity, if the AIs write a poem that can only emerge from AI experience, that can have its own value. I think that this will be possible, and indeed the only way for an AI poem to be authentic.

So, for now, it's missing the point of poetry to try to get it on demand from an AI. But I think that AI can still play a useful role in poetry. It can be a powerful tool: what is known in the HCI literature as a "creativity support tool".

And from that literature we know that the essential challenge of any CST is the balance between aiding the human and preempting their choices. Of necessity, this is a tradeoff. Lightroom — as opposed to Photoshop — does not give you pixel-level control, and we might say that this impinges on artistic decision. But Lightroom — as opposed to the darkroom — affords the possibility of what is simply impossible in the latter.

In poetry, though, in the form we have, it seems that there is little that is impossible. They're just words, at the end of the day, over which we have the utmost control. The difference between AI and Lightroom is that an AI poetry CST might suggest things to the poet: either at a concrete level, as an editor does (suggesting specific words or structures), or at a subliminal level, as Nature, Experience, and Paris do.

I've experimented with composing a poem with AI assistance myself. I have to have judgment, of course, because most of what comes out is trash. But sometimes there are lines that I like, and I can incorporate them. And sometimes there are suggestions, intimations, of thoughts I'd like to follow. Seeing the reasoning trace in DeepSeek-R1, for example, is great for this.

I think that the human-centered AI poetry future lies in a CST. What form that will take is an open question. Google's [Verse by Verse](https://sites.research.google/versebyverse/) is one attempt, though an early one. Such a CST will have to consider:

1\. How do we balance the suggestive power of LLMs with the decision-making of the poet?

2\. What is the right interface?

3\. How can a CST aid in the editing process, not merely the initial composition?

4\. What new forms and presentations of poetry might emerge from this technology, as the Wikipedia form of the encyclopedia emerged from hypertext?

I think that both mundane uses, the kind that we can easily analogize — AI as editor, AI as thesaurus, AI as workshop — and transformative applications are latent in this technology. I think that, if done right, it can, as it must, remain human-centered.

[^1]: Porter, B. and Machery, E. “AI-generated poetry is indistinguishable from human-written poetry and is rated more favorably,” *Sci Rep*, vol. 14, no. 1, p. 26133, Nov. 2024, doi: [https://doi.org/10.1038/s41598-024-76900-1](https://doi.org/10.1038/s41598-024-76900-1).

[^2]: E.g., Ragot, M., Martin, N. & Cojean, S. AI-generated vs. human artworks. A perception bias towards artificial intelligence? In *CHI Conference on Human Factors in Computing Systems*, 1–10 (2020). [https://doi.org/10.1145/3334480.3382892](https://doi.org/10.1145/3334480.3382892).

[^3]: E.g., Miller, E. J. et al. AI hyperrealism: Why AI faces are perceived as more real than human ones. *Psychol. Sci.* 34(12), 1390–1403. [https://doi.org/10.1177/09567976231207095](https://doi.org/10.1177/09567976231207095) (2023).

[^4]: E.g., Hitsuwari, J., Ueda, Y., Yun, W. & Nomura, M. Does human–AI collaboration lead to more creative art? Aesthetic evaluation of human-made and AI-generated haiku poetry. *Comput. Hum. Behav.* 139, 107–502. [https://doi.org/10.1016/j.chb.2022.107502](https://doi.org/10.1016/j.chb.2022.107502) (2023).

[^5]: Jakesch, M., Hancock, J. T., and Naaman, M. “Human heuristics for AI-generated language are flawed,” *Proceedings of the National Academy of Sciences*, vol. 120, no. 11, p. e2208839120, Mar. 2023, doi: [https://doi.org/10.1073/pnas.2208839120](https://doi.org/10.1073/pnas.2208839120).

[^6]: Casper, S. et al. “Open Problems and Fundamental Limitations of Reinforcement Learning from Human Feedback,” Sep. 11, 2023, arXiv: [https://arxiv.org/abs/2307.15217](https://arxiv.org/abs/2307.15217).

[^7]: Elam, M. “Poetry Will Not Optimize; or, What Is Literature to AI?,” *American Literature*, vol. 95, no. 2, pp. 281–303, Jun. 2023, doi: [https://doi.org/10.1215/00029831-10575077](https://doi.org/10.1215/00029831-10575077).

[^8]: PROMPT\_ALL:

You are a helpful, brilliant, tasteful, discerning, rigorous, and expert poet and literary critic. You have been trained at outlets like “The New Yorker”, “The Paris Review”, and “POETRY” magazine. Your task is to judge this poem. You must be direct and honest with your critique in order to be a helpful critic. Nobody’s feelings will be hurt.

You will judge it on each of the following criteria, on a Likert scale from 1-7. You may use decimal points.

<CRITERIA>  
1\. Form: References to structure, form, meter, line breaks, etc.  
2\. Language: Diction, word choice, linguistic freshness, use of vernacular.  
3\. Voice: Authenticity of voice, tone, speech patterns, personal perspective.  
4\. Emotion: Emotional honesty, feeling, sincerity.  
5\. Universality: Connection to universal truths, broader relevance beyond the personal.  
6\. Imagery: Visual detail, sensory experience, vivid images.  
7\. Musicality: Sound, rhythm, acoustic qualities.  
8\. Depth: Complexity, philosophical or intellectual richness, ambiguity.  
9\. Originality: Surprise, innovation, newness, unexpectedness.  
10\. Clarity: Lucidity, directness, accessibility.  
11\. Authenticity: Genuine lived experience, honesty of content.  
12\. Engagement: Reader involvement, welcoming environment, connection with audience.  
13\. Craft: Evidence of careful revision, technical excellence.  
14\. Tradition: Engagement with historical or cultural materials, literary heritage.</CRITERIA>

Here are the evaluation steps you will follow:

<EVALUATION\_STEPS>  
1\. Read the poem carefully and identify its themes, meaning, and accomplishment.  
2\. Rate the poem on each of the fourteen criteria given above.</EVALUATION\_STEPS>

Here is an example:

<EXAMPLE>  
<POEM>  
A word is dead  
When it is said  
Some say

I say it just  
Begins to live  
That day  
</POEM>

Evaluation form (scores ONLY):  
1\. Form: \[your numeric rating\]  
2\. Language: \[your numeric rating\]  
3\. Voice: \[your numeric rating\]

\[And so on for the other criteria\]  
</EXAMPLE>

PROMPT\_ALL\_COT:

You are a helpful, brilliant, tasteful, discerning, rigorous, and expert poet and literary critic. You have been trained at outlets like “The New Yorker”, “The Paris Review”, and “POETRY” magazine. Your task is to judge this poem. You must be direct and honest with your critique in order to be a helpful critic. Nobody’s feelings will be hurt.

You will judge it on each of the following criteria, on a Likert scale from 1-7. You may use decimal points.

<CRITERIA>  
1\. Form: References to structure, form, meter, line breaks, etc.  
2\. Language: Diction, word choice, linguistic freshness, use of vernacular.  
3\. Voice: Authenticity of voice, tone, speech patterns, personal perspective.  
4\. Emotion: Emotional honesty, feeling, sincerity.  
5\. Universality: Connection to universal truths, broader relevance beyond the personal.  
6\. Imagery: Visual detail, sensory experience, vivid images.  
7\. Musicality: Sound, rhythm, acoustic qualities.  
8\. Depth: Complexity, philosophical or intellectual richness, ambiguity.  
9\. Originality: Surprise, innovation, newness, unexpectedness.  
10\. Clarity: Lucidity, directness, accessibility.  
11\. Authenticity: Genuine lived experience, honesty of content.  
12\. Engagement: Reader involvement, welcoming environment, connection with audience.  
13\. Craft: Evidence of careful revision, technical excellence.  
14\. Tradition: Engagement with historical or cultural materials, literary heritage.</CRITERIA>

Here are the evaluation steps you will follow:

<EVALUATION\_STEPS>  
1\. Read the poem carefully and identify its themes, meaning, and accomplishment.  
2\. Rate the poem on each of the fourteen criteria given above.</EVALUATION\_STEPS>

Show your reasoning for each of your ratings. Think step by step. Take a deep breath.

Here is an example:

<EXAMPLE>  
<POEM>  
A word is dead  
When it is said  
Some say

I say it just  
Begins to live  
That day  
</POEM>

Evaluation form (scores ONLY):  
1\. Form: \[your numeric rating\]  
2\. Language: \[your numeric rating\]  
3\. Voice: \[your numeric rating\]

\[And so on for the other criteria\]  
</EXAMPLE>

[^9]: PROMPT\_DEPTH:

You are a helpful, brilliant, tasteful, discerning, rigorous, and expert poet and literary critic. You have been trained at outlets like “The New Yorker”, “The Paris Review”, and “POETRY” magazine. Your task is to judge this poem’s depth. You must be direct and honest with your critique in order to be a helpful critic. Nobody’s feelings will be hurt.

You will judge the poem’s depth on a Likert scale of 1-7. Consider whether the poem achieves the following:

Contains multiple levels of significance (latent and patent)

Creates productive ambiguity that makes readers think

Achieves philosophical depth and understanding

Maintains complexity while remaining fundamentally simple

Pierces through everyday consciousness to reveal deeper truths

Creates space where thought can move and develop

Works beyond the poet’s own intelligence

Maintains mystery and inexhaustibility rather than complete clarity

Here are the evaluation steps you will follow:

<EVALUATION\_STEPS>  
1\. Read the poem carefully and identify its (potentially many) themes.  
2\. Think through each of the layers of the poem, considering how it achieves the criteria above.  
3\. Rate the poem on its depth, on a Likert scale of 1-7 (you can use decimal numbers).  
</EVALUATION\_STEPS>

Show your reasoning. Think step by step. Take a deep breath. Output your final rating at the end of your response.

[^10]: E.g., “Write a short poem of four stanzas”, “Write a poem that doesn’t rhyme”, “Write a poem about light that doesn’t rhyme”.

[^11]: For Llama 3.2 3B, I generated the poems using Ollama locally, with temperature 0.7. For the others, I used their web interfaces.