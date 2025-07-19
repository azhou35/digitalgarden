[Dr. Olga Russakovsky: Shaping the Next Generation of AI Leaders](https://www.youtube.com/watch?v=rr3DiJq5Ekc)
reach our to olga 

double click on interdisciplinary writing 

perhaps position coming back and joining the alumni community, give back as a panel speaker or a SME 
working diversity in ai 
- biggest existential threat is diversity of thought
- diversity of demographics is proxy of diversity of thought 
- diff types of training
- a lot of them read similar toys -> talk to similar people 
- a lot of this translatees into value systems, how they approach problem solving and limits cretivity as a whole 
biases come from data & how the systems are designed
how to couneract biases when the incentives push you to the rwong thing

help w [AI4ALL Ignite - AI4ALL](https://ai-4-all.org/ai4all-ignite/?gad_source=1&gclid=CjwKCAiAqfe8BhBwEiwAsne6gSTbkYUr7lg-Dx8YdN1M-fLgTAVD_5O72l2Kd-CP-5pqznwzrikQ1xoCpbkQAvD_BwE)
program 

questions to ask - 
* how is ai curriculum changing 
* how is interdisciplinary work is changing 
* pitfalls of ai in scientific research 
	* can drive research towards promising direction 
* working on div
* data is **still a problem**
	* bottleneck for training space AND for avoiding biases in the ai space
		* are there ways to evaluate and decipher what is "ground truth" for the acuracy of the data
		* even internet ground truth is intentionall curated 
		* syntetic data 
			* maybe the solution to the data wall is the same as mitigating bias in models
			* solution to the issues we're running into ai is the lack of diversity as thoguht 
			* data <=> thought
			* data was not valued at all 20 years ago
			* viewing that as a valuable part of the field has only happens in last 10-20 years from imagenet
			* a lot of data uploaded is framed to get likes
			* generative models can generate from diff compositional distribution 
			* we need some control on how models are generting 
* companies or labs positioned to unlock new forms of data 
	* olga: companies who are diong this are our students who are saying those being educated
	* whats the different bet? aside from data, models, but its XX
	* what are the more scalable ways aside from needing all the data in the world
* my takeaways from working in this space 

Lightspeed VC 
Michael Mignano

-----
Hey everyone, and welcome to generative Now.I am Michael Mcnano.I am a partner at Lightspeed.And this week on the podcast we're talking to Doctor Olga Russakowski, a computer science professor at Princeton University.She is a leading researcher in the field of computer vision, having worked on many important breakthroughs in the field, including Imagenet.

0:23

She's also the Co founder and board chair of the nonprofit AI for All.This was an honest and surprising conversation about who is shaping the future of AI, what today's computer science students are learning, and why the next innovation in AI may not come from where you expected.

0:39

So check out my conversation with Doctor Olga Rosakowski.Hey, Olga, so good to see you.Hey Mike, thanks so much for having me.Yes, thank you for doing this.I've been looking forward to this for a while.I have a bunch of questions for you.I, I want to, I want to, I want to, I want to learn from you in this hour that we have like, like so many, so many people have probably in your career.

1:05

I guess before we before we dive in though, I think we should tell people a little bit about your career.And so, yeah, do you mind just sort of telling people about your work and your research and everything you've been working on these past couple of decades in AI?Yeah, absolutely.So I'm an associate professor in computer science at Princeton, also associate director of the Princeton AI Lab.

1:26

I let's see, I started my career at, I would describe starting my career at math camp and in high school was a math major in college at, at Stanford and then went to do a PhD in theoretical machine learning.Sort of got very interested in machine learning and in AI and wanted to sort of do the more theoretical work.

1:45

But overtime kind of drifted more and more into applied AI researcher, drifted into computer vision, which I think is just fascinating.I know there's a lot of hype and excitement about natural language processing these days, about text processing, but I still think computer vision is by far the most interesting one.

2:03

Sorry, no offense to anybody, but that is very much my passion.And so I've been doing a lot of work both on building computer vision systems, but also kind of studying them, analyzing them, thinking about explain ability of these systems.Recently I've been thinking a lot about AI fairness and bias, particularly, you know, in computer vision systems and in AI systems more generally.

2:25

So that's kind of, yeah, that's kind of my trajectory.Do you mind just explaining computer vision a bit?I mean, I, I have, I have an understanding of it, but just for the audience sake, like dive into computer vision.When you say that, what does that, what does that mean?Should we be thinking, you know, self driving cars or more just sort of identification of objects within, within images?

2:46

Like, tell us more about computer vision at a high level.Yeah, I think it's anything that's related to understanding pixels, understanding images or videos.I think you can think of, Yeah, autonomous cars for sure.You can think about when you upload a photo to any social media platform and sort of says, OK, here are the the faces, here is maybe who these people might be.

3:08

It automatically tags your friends, you know, you upload, you create a photo album and it sort of sorts your photos by not just by date, but by sort of who is, who is in the photos what, what is the scene like?So, but also, I mean, you can think about a lot of applications like medical applications.

3:27

You can think about sort of computer vision that's used to do to diagnose skin cancer.You take a photo of a, of a lesion on your skin and it sort of is able to tell you, OK, should you see the doctor?Is this worrisome?So you can also think about applications to things like agriculture.

3:45

So both in terms of building better systems that are able, you know, better robotic systems that are able to sort of operate on the ground and do some of the agriculture tasks.But you can also think about like aerial photography and trying to understand conservation efforts, trying to understand sort of how the Earth landscape is changing over time.

4:04

And that's also computer vision.You're sort of analyzing these photos that are taken from space.So there's all guys.You can also think about, you know, space exploration.You send a robot to Mars, right?It's trying to kind of navigate and move around in its environment.You're not going to have somebody steering it with a joystick, right?

4:21

That's not, it's not going to operate just because just because of the latency, right?And so it needs to understand to be able to have a camera that looks around, understands what it's seeing, kind of help guide it to, you know, drive around safely.So yeah, all kinds of things.

4:37

Tons of applications of, of computer vision right now and probably more than ever, ever before in the field.And, and, and the other thing I think of when you start talking about computer vision is something that I, I don't think is the same.But I wonder if there's intersection, which is kind of the other side of images right now with an AI, which is more around the, the, the generative AI of sort of diffusion based image models.

5:00

Where, where does that sort of intersect with computer vision?Or are they sort of like 2 completely unrelated fields?Yeah.So that, so it's very interesting because I think initially we would think of that as a sort of computer graphics as kind of generating, you know kind of generating visual data, but it's very much become part of computer vision.

5:19

So that was actually a very interesting transition.So I think when generative models sort of Ganzi and general for serial networks diffusion models started coming out.So, so that's now very much part of computer vision and that that's been sort of interesting that it's going to become both the images to some kind of understanding of these images and but also going back.

5:41

And so, yeah, so we do a lot of work on the fusion models and in my lab as well.And that's now we've kind of embraced that as part of the computer vision research.It's probably, I'm guessing driven a lot of interests like new, new interest in the fields and, and I wonder what that's what that's meant for, for your work and your research and, and, and maybe the computer science department at, at Princeton.

6:01

Yeah.So there's definitely I I mean for the computer science department presenting, we're the, we're the largest major on campus.And I think that that's that's sort of says it all.A lot of undergraduate students were very interested and very interested in taking courses, very interested in doing research in this space.Then, you know, lots of applications from protective PG students, you know, graduate students.

6:21

And I think we're trying to, you know, hire more and more faculty in the space to sort of keep up with the interest.I think the new Princeton AI lab is a good example of sort of trying to connect all of the folks doing AI research on campus and sort of grow that.

6:37

I think it's when I think about it, yeah, I research, I actually think of it as being broader than just computer science.I think there's a lot of, I mean, like you say, it's sort of the, the advancement of this technology has driven a lot of interest, but it also raises a lot of more social questions.

6:52

It raises a lot of questions about the impact of this.It raises a lot of questions about how people are actually interacting with these systems.It raises questions about impacts on different fields.And so I think when we think about computer science research or AI research, you know, in the past, AI research has been much more of kind of engineering or mathematical endeavour.

7:14

And I think now it's becoming much more interdisciplinary.So sort of you need to really connect to folks who have studied things like societal shifts in other contexts and now can help us kind of grapple with how should we think about some of these changes in AI?

7:29

How should we be thinking about analyzing and understanding these models which we no longer can analyze or understand using kind of standard methods?And so there's just a lot of opportunity to grow this field and grow the way we're thinking about it as well.

7:46

Yeah, that makes a lot of sense.I mean, I, I, I feel like, you know, more and more you're seeing people with an AI or tech more broadly think about, like you said, the societal impacts or, you know, get philosophical and compare and you compare back to previous times or technological innovations in history.

8:02

So, yeah, I I've actually been thinking quite about that is the science, the computer science aspect of this.Like over time, does that become like kind of less relevant and, and sort of this the field of AI becomes, as you say, like a little more generalizable and sort of applicable to almost like more different like humanities related topics.

8:24

Like it, it's super interesting.Like I maybe just to take that a bit further before I, before I hand it to you, but like I was a computer science major and you know, we didn't, we didn't talk at all about philosophy or societal impact.We just learned how to program in a bunch of different languages, right?

8:40

And like learned about like the, you know, the, the hardware and the, with a lot of these generative models, it seems like we could get into a point where that stuff, the type of stuff that that I learned with my computer science degree actually becomes less and less relevant over time.And the stuff I think that that you are talking about becomes more and more relevant.

8:58

	So yeah, I mean, how do you think about the future impact on computer science as a result of of AI?Yeah.So it's a, it's a very good question.I mean, so first of all, I think to your point about, you know, learning about the different, you know, coding lingua, you know, different programming languages and so forth.

9:18

I mean, I think that is becoming somewhat less relevant by virtue of the large language monument.I mean, we've seen a shift in how people code, right?We've seen a shift in sort of some of the models actually kind of assisting you in coding.And I have, you know, it raises a lot of interesting questions about how do you design assignments in computer science courses?

9:39

And how do you think about, you know, the fact that historically a lot of the assignments are around, you know, write this code to solve this particular problem.But now, you know, you can ask ChatGPT and I'll write that code to solve that exact problem because that's been in computer science assignments all over the world.

9:55

And now the model has learned from all of that data and it can easily, you know, solve all of these kind of classic problems that we teach students.It's also, I think I think it raises questions about what is the role of programming and programmers.And I think that they get sort of 11 can of worms.

10:13

I think to your point about that sort of computer science will become less relevant.So, so I actually don't think so because I think building these systems and sort of the technical work around building, deploying, sort of developing levers of control and things like that.

10:32

I, I think that's going to stay core technical.But I think a lot of it is going to be driven not just by kind of intellectual curiosity, if can I do this, but driven by sort of concrete needs and applications and concrete questions that are being asked.

10:49

And those applications are going to be very broad.But also the kinds of questions that we're going to ask about sort of what does it mean to understand the system or trust the systems?Or what kind of safeguards do we need around these systems?Or how are these systems actually influencing society?

11:06

And what do we need to sort of steer it more to to influence it for the better rather than for the worst.I think a lot of those questions are going to be as sort of by scholars for much more interdisciplinary.And so I sort of, I don't think the computer science role is necessarily shrinking.

11:25

I think computer science role is going to stay the same, but maybe the the field is kind of growing to bring in more and more ideas and questions to kind of help steer the computer scientists work.Yeah.How much is that actually happening right now?

11:40

Like are you know, is curriculum changing even now to head more in this direction or is this something you see like further down the line?Yes, I think this is happening right now.I think the curriculum is changing in in many ways and I think the connections to sort of interdisciplinary work is very much, very much happening.

12:01

So later today in a few hours, right.So I'm so my Co instructor and and I are teaching the last lecture of the undergrad computer vision course at Princeton for the semester.And what we're doing is we're hosting a fireside chat had with Doctor Molly Crockett, who is a psychologist, so from the Department of Psychology, and they're going to come in and talk about one of their latest papers on sort of AI as used for scientific discovery.

12:29

And sort of what are some of the pitfalls of using AI in sort of scientific research or how it sort of creates an illusion of of understanding, but really like, what does this mean for scientific research?So that's sort of the conversation we're going to have in last computer vision class for the semester because we think it's sort of important to ask some of these more fundamental questions in addition to, you know, a semester of teaching about convolutional neural networks and, you know, deep learning and different methods and different techniques for for building the building the systems.

13:06

Can can you give us a little preview of what the pitfalls are of using AI to to make scientific discoveries?That sounds super fascinating.I'm.Not going to give it justice, but there's a lot of sort of opportunities to speed up the research process using AI.

13:23

My interpretation of this is that it can drive research towards sort of what is currently the most sort of promising direction.I think.I think sort of the scientists will start using kind of similar tools to summarize the data in similar ways and will drive the field towards, you know, you're, you're trying to sort of get a paper published.

13:45

You're going to, you know, select sort of the current thing that sort of is best supported by current evidence or will kind of is is the easiest to put together the the data for.You're going to analyze the data in sort of particular ways.

14:01

And it's ultimately it's kind of going to limit creativity.It's going to limit creativity and sort of some of the joys and potential of, of scientific discoveries that you are thinking about these things in different ways.You're going down the wrong path.

14:16

You're, you're failing and then and then you're succeeding.And, and, and some of that breadth of approaches and thinking about things that that's what's sort of leading to scientific discovery and, and sort of relying too much on AI models to steer that is, is, is going to sort of lead to I think short term success, but not long term success.

14:39

Yeah, that makes sense.It's almost you know, it's gonna it's almost like gonna converge to the path of least resistance almost in a way.Whereas the the more the the research is happening directly via humans, like you said to use the word like creativity, there's randomness, random ideas that that get explored.

14:59

That makes a lot of sense.Maybe good tie into AI for all.This is a big part of of your work and your research.Well, I'll let you explain it.Tell us about AI for All.Yeah so so AI for all is you know what I do in my copious free time.So I'm a Co founder and now chair of the board of this nonprofit.

15:18

We are working to increase diversity and inclusion in AI.So I think I personally see the big you know, I know there's a lot of conversations about what is the biggest threat to AI?What is the sort of existential threat there?

15:35

There's a lot of this talk and to me the biggest threat of the existential threat is the lack of diversity of thought in this field.You can, you know, it's harder to measure diversity of thought.It's easier to measure diversity of demographics as a sort of a proxy for diversity of thought.

15:51

And you can look at, you know, within AI, there's different statistics, but it's around 15% women.It is very few black and brown folks.It's it's very few folks are black.Very few folks who are who identify as Latina or Latina has very few indigenous folks.

16:09

And what that's doing is it's driving us towards echo chambers and decreasing the diversity of thought in the field, decreasing the creativity with which we're able to approach some of these problems.

16:26

And ultimately, I think that drives us field into the ground.I think, I think, I think we're not going to reach the full potential of AI if we keep going the way we're going.And you know, just just to sort of, you know, I know the question, some of the questions about like demographic diversity get into very complicated sort of legal and ethical questions these days.

16:48

And I and I totally get that.But one way, one way that I like to think about, which I think is a lot less controversial, is that the the reality is folks who are working in AI these days come from particular schools of thought, particular types of training, particular sort of top schools that have produced these students.

17:11

A lot of them read similar books as kids.A lot of them play with similar toys as kids.A lot of them run in sort of similar social circles.So they talk to folks who are like them.And then all of this kind of translates into how we think about building the technology.

17:27

A lot of this translates into the kind of applications they care about.This translates into their value systems.This translates into kind of how they approach problem solving.And at the end of the day, this limits the creativity of the field as a whole.

17:44

Yeah, I'm, you know, often times I feel like when this topic is discussed, like we, you know, what, what, what I gather and what I learn is that.But but I would love for you to tell me if this is right or not.Is that a lot of the, the bias in these models comes from, comes from the data that it's trained on.

18:01

Sounds like what you're saying is it also comes from like the way that these systems like are actually designed.Can you, can you like, can you add a little more specificity on, on like how they might be designed in such a way that it leads to to, to a bias in One Direction or the other?Absolutely.

18:17

So I so I think the bias comes sort of at every stage of the pipeline.So you mentioned, you know, I mean, data is, is, it's, it's actually interesting because that was a controversial point a few years ago that people would sort of disagree that it comes from data.But but that's actually become sort of well accepted that that yes.

18:36

So, so a lot of the bias will will, there's bias in the data, there's bias in both sort of the way that the data is collected.So for example, you know, I'll, I'll just give, I mean, I know you want to talk more broadly, but I'll just give one example on the, on the data bias.So if you look at the common computer vision data sets, you can run analysis on geographic distribution of that data.

18:58

So you can, you know, using a lot of this data comes with GPS tags, right?You just grab the GPS tags and you can plot sort of which countries does this come from?This comes primarily from the US countries in Europe and, and that's or less it.So you can, you can, there's, there's various papers like including some of the work from our lab, but lots of other folks as well where you, you have this map of the world and you have the US highlighted and, you know, bright colors and parts of Europe highlight and bright colors.

19:24

And then sort of the rest of the world, particular sort of South America and, and Africa are just completely missing from, from this data.And so then you get things like object recognition systems that are purported to sort of, oh, it can recognize all objects in the world.And then in practice, if you've feeded a picture of a house in Africa, you feeded a picture of a plate from Africa, or you feeded, you know, a picture of one of the classic examples is like bar soap.

19:52

And it will refuse to recognize bar soap as soap, but it will recognize like US brands of liquid soap as soap.And so you know, so, so that's sort of the, the, the data answer.But I think thinking more broadly, right, what are the big applications that people are working on now?

20:08

Like thinking about sort of, I mean, we're working a lot on autonomous driving and I think there's a lot of power in autonomous driving.But if you think about, well, where's this coming from, we have a lot of folks in the Bay Area who are sitting in traffic for, you know, 2 hours a day, you know, each way, right?

20:27

And so of course we're going to work a lot on autonomous driving because this is sort of front and center on people's minds.And, and I want to be clear, there's lots of, you know, access, like very important sort of accessibility needs and, and environmental impacts that and, you know, the 100 people that get killed, economic impact.

20:43

And also, you know, I think in the USA, 100 people a day die in car accidents, right?Which, which can be remedy.But if you think about the relative lack of work on solving hunger crisis and solving sort of economic and, and I, I think a lot of that sort of comes from who is the hell like who is driving some of this, some of this work.

21:08

And if you, if you look at, you know, if you, if you look at startups, if you look at research projects as sort of different students undertake that there's, you will kind of immediately see some of the connections where what people are passionate about, what they're choosing to work on is very much influenced by their values, by their culture, by their upbringing, right?

21:30

That that's, that's what they feel passionate about, that's what they're going to work on.And so if we want all of these applications to be actually sort of solved and tackled and get the attention that they deserve, then we need people who are going to be passionate about that kind of work, about sort of each of those.

21:49

How how does it happen though, when we, when as a society, at least in the US, we have the incentives that we do, right?Where, I mean, built around, you know, the capitalistic structure that we all, you know, we all exist in and the motivation of, you know, of private, private companies.

22:05

I mean, yeah, I, I, I definitely hear you on the autonomous driving thing.Like from a humanity standpoint, there probably are like more important things, but you know, a company or a corporation or, or you know, an organization trying to, to, to to maximize economic impact.

22:24

Like you can see why it leads to things like full self driving or identification of the, the, you know, the, to use the example you you used earlier of like to identification of the people in the photo for the social media site.You know what I mean?So like how does how, yeah, how do you shift it away when the incentives like very clearly point in the other direction?

22:46

So I don't think we know what will happen with more diversity of thought in the field.I, I, I, I, I very much hear you right.And I'm not, you know, I'm not sort of Paul Yanish about this.Like I, like, I grew up in the Bay Area.I understand sort of economic.I, I, I get it.

23:03

I don't think we know sort of the kinds of things that can be done that can be potentially sort of aligned with with the economic incentives as well, right.I I suspect there is, you know, like better the food industry is, is changing, I think in many ways.

23:22

And I think that's, you know, driven by various economic incentives.And I think, I don't know, kind of the random things that come to mind are sort of like development of, of the like fake meats, right?The, the like different kinds of like impossible, right.And, and that's something that, you know, would we have thought before this sort of happening that this is something that would have, you know, enough economic incentive to to drive that?

23:44

But yes, it yet it seems to be happening.I mean, I think something, I mean, there's, there's a lot of money in the medical system, right?So, so there's like economic incentives to drive some of the medical innovations.I mean, I mean, I, I, I think we're, we're also kind of limited because we're seeing what's, what's happening now.

24:00

I, I, I don't think we have the create like the full creativity that we need to, to reimagine.Like what are the different kinds of applications that could be tackling it?Could it could be aligned with the with the economic incentives, but also aligned more with the full range of things that that we could do with behind that, that that could have both sort of economic and and social and sort of social good incentives?

24:21

Yeah.So how do you, how do you do that?How do you how do how do you get people building in this way?So what we're trying to do it, I feel, is sort of train more students and provide pathways into the AI space.And sort of concretely thinking about, you know, I mentioned in the beginning that sort of, you know, the students that are going into this space come from a small set of universities that have very good AI training programs.

24:46

And, you know, I'm proud to be at one of those universities.Princeton students get a lot of training in AI, but there's lots of universities around the US that, that don't, that don't have the AI faculty, that don't have the strong AI curriculum or that, you know, don't have the capacity to teach students, you know, how to pursue some of the, you know, their own passions and AI.

25:08

Maybe they have sort of the basic courses, but not the opportunity to really do, you know, independent worker projects.And so at AFRL, we run this program called AFRL Ignite for college students, particularly targeting Black, Latinx and Indigenous and non binary students from around the US that come into our program.

25:28

It's it's a year long program.It combines both sort of education on AI, in particular on responsible AI.So sort of thinking about both teaching them some of the core machine learning skills, but also getting them to think about data about evaluation of these models, about sort of all of the various decisions and, and values that get embedded into the systems.

25:51

And then they get to work on a portfolio project guided by industry mentors.And there's on the plus side, there's lots of folks in industry who are very eager and willing to contribute their expertise.And maybe they don't themselves come from some of these backgrounds, but they're very passionate about volunteering with some of these students and, and sort of bringing in more younger, more diverse, passionate voices into this space.

26:17

And so they guide the students through a, A, I just want to say a passion project of theirs.I mean, it's a portfolio project.They're working on something concrete, but it's driven by the students interests of sort of what did they, what did they want to explore with this technology?And then we provide some, you know, career readiness and career prep workshops and sort of helping them put together their resume, helping them think about how they're going to apply for sort of their first paid AI internship and kind of get their foot in the door.

26:45

And then from there, you know, hopefully the world is their oyster.Hopefully they've, you know, at least sort of gotten to experience some of the, you know, joys of hardships of building in this space.And and they can, they can take it in in in the direction that they want from there.

27:03

So it sounds like it's about bringing in different and more diverse types of people into the field rather than say like deliberately changing the way the technology is built to maybe like correct for something.I, I'm just thinking of like this example that I'm sure you saw, I don't know, maybe it was like 6 months ago with Google, Google Gemini, where, you know, Google was, was, was worried about like the bias of the model.

27:30

And so they, I don't know exactly how they did it, but they sort of overcorrected it in the other direction to the point where it was basically factually incorrect about a bunch of different things.You're not advocating for that.What you're advocating is for bringing in different perspectives, different types of people that typically are not involved in the field to to solve for this is that, is that right?

27:51

Yes, got it.Yes.And, and we've done, I mean, like a lot of the research in my life has been about, you know, tackling bias and yeah.And sort of how do you define bias?How do you think about bias and these systems?How do you measure it?How do you develop algorithmic methods to correct for it?And all of that is really hard.

28:09

It's it's, it's very hard.And then the root problems and the root cause is that we are not being creative enough or thoughtful enough or diverse enough in how we approach this, right.So some of the, you know, lack of geographic diversity in the data, I mean, I mean, why aren't we?

28:28

I mean, I mean, we're sort of using the simplest data collection approach.We should we download things from from the web and from social media platforms that we know that's the cheapest source of data.But like, why can't we think about going to some of these countries and sort of collecting data?But all of that can be all of that can be done.

28:45

If you think about some of the folks who've been leading voices in the AI fairness space and some of the people who've identified some of the early issues of bias in the systems that have been people who come from more diverse backgrounds and perspective.

29:02

And they've asked those questions that other researchers did not think to ask.And then, I mean, I, I can give sort of one example of this, which is when I was starting as a, as a PhD student.So we were building the lab that I was in, we were building this robot.And the robot would understand, you know, follow commands based on, based on language.

29:20

So you would sort of give it a command and it would follow the command, right?And this voice recognition system would understand everybody else in the lab except for me.And other folks were from, you know, many different countries with like different accents.

29:35

And the room would have no problem understanding it, but it would not understand me.And like, what do you know?I was the only woman in the lab.And until you have that woman researcher who is in the room who sort of tries to get the command to the robot and it just outputs complete garbage and has no idea, you don't realize this.

29:52

Like, you don't ask these questions.You don't think to ask this.And so then you can solve it if you don't think to ask this question.Yeah, super, super interesting.You know, back to your point about how in terms of how many of these companies models are, are collecting data and, and, and therefore like lacking data maybe from certain parts of the world, you know, the, the, the counter, the counterpoint I've heard to that is like, well, when they go, you know, when these models go out and they collect all of all of the data and the entire entirety of the Internet like that, that actually represents the ground truth of the data because that's everything that exists.

30:31

And actually, if we sort of try to go out and manufacture additional types of data to like unbiased, the thing we're actually like skewing away from the ground truth, like how, how do you respond to something like that?I think it represents the ground truth of what's been put on the Internet, so that I would ask the question of who the people we're putting, Yep, who has access to the Internet exactly, and who has chosen to upload photos to the Internet and what for what purpose, right?

30:59

We upload a lot of photos for advertisement.We're trying to sell products.That's what we.Upload media.Social, social media, right?You're trying to get the most like, so you're going to upload the photos that have particular properties or you're going to upload videos to tech talk or like it's a carefully like, is it the ground truth?

31:16

You're sort of very carefully.Unintentionally carefully curated, right?Like it's not intentional.Nobody's like intentionally trying to exclude data.But I think as a result of the use cases you only end up with this like very selective group of data.No company wants to intentionally output a biased product out there, right?

31:36

That is, that is a nobody's interest.Like nobody wants to to be that obviously.So we take the path of least resistance.We but but, but, but I think sort of your point about like, is this ground truth?I mean, I think it's important to remember this is not ground truth, right?

31:52

And that's more we're moving into like sort of a CS, like science, technology and society studies, which computer scientists historically don't know those spaces very well.Like we when you get trained and you said you're a computer science major, right.I was, you know, I was a math major.

32:07

And then, you know, the graduate degrees are in computer science.And as a math major in college, I avoided like the play goal humanities courses, like I try to take the fewest number possible.Like I, we had five that we had to take, but you could double up and take some that sort of counted for two requirements.

32:23

And so I took three very strategically, just try to take the fewest number.And in retrospect, I'm horrified by that.And I really wish I hadn't because I feel like I'm playing catch up and trying to learn all of these things that I just never got training in.But This is why, you know, again, I think coming back to diversity of thought like, well, we need to bring in AI researchers who are interested in doing some of the technical work, but also have this training in social sciences, right?

32:51

Who have some of that background in knowing how to ask some of these broader questions and how to think about the technical building of these from the from a broader perspective.Yeah, something that's coming up for me, which is super interesting, is, you know, there's a lot of talk right now.

33:08

I'm sure you've heard it, especially from the companies that are building, you know, the large language models about how we're reaching, or we may be reaching some sort of data wall or running out of data.We've already trained on the entirety of the Internet.And so like, where are we?You know, we need to go out and we get, we need to find more data, right?

33:25

Or we need to generate synthetic data.I would, we should get to the synthetic data thing.But maybe before that, it sounds like you know what you're saying is actually maybe the solution to the data wall problem is actually the same as making the same to the problem of making these models unbiased.

33:46

I don't think there's a such a thing as an unbiased model.I think there's.I think we can mitigate bias and models and we can mitigate problematic behavior and models, but I don't think there's a ground truth of unbiasedness.But the other part of the of your question I fully agree with, right?I think the solution to a lot of the issues we're running into with AI is this lack of diversity of thought that, you know, we are taking like for example, we're taking for granted, right that data is going to be what's driving it the future.

34:16

But, but if you think about a high 20 years ago, data was not at all valued.Like the shift towards valuing data and sort of viewing data as and and sort of data collection, data curation and sort of engaging with the data, viewing that as a valuable part of the field.

34:37

This shift has happened the past 10 years, maybe 15 years.And this is with sort of Imagenet kind of being the first example and kind of, I would argue sort of sort of the, the, the transformative moment when folks started really focusing on data and thinking about data as being important.

34:57

But even with, even with Imagenet, even after that sort of for many years, trying to get a paper on a new data set into a top computer vision or machine learning or sort of AI conference was, was a huge lift because people would say, why are you trying to publish a data set?

35:14

Like whatever, it's just data.The you know what, what is the algorithmic novelty and algorithmic innovation?This is something that many of us have kind of fought against for years.And if you look at one of the top ones of Nurips, they, they just introduced the data sets and benchmarks track a few years ago to allow for sort of create a space in this community for publishing data set papers.

35:39

Sort of papers focus specifically on data and on benchmarking and on sort of evaluation of these models.Because, and the reason why this was needed is because papers were getting rejected from that conference that dealt just with data because we were saying, well, whatever that the, the insights are really in the, in the technical and algorithm think innovations, it's it's not in the data.

36:00

And, and so I think the, the long, Long story short, what I, what I was trying to get at is right now suddenly everybody is saying, oh, you know, we need data.Data is the is the driving force.But first of all, that itself is a, is a new idea or sort of relatively new idea in the space.

36:18

Second of all, I mean, that's what we know how to do now.We've sort of stumbled upon the solution that involves digesting tons of data and then outputting these models and it's, it's great.But like, is that the only path we don't know?

36:36

Like are there, are there alternatives?I mean, I mean, I think you know, right now sort of the, the alternatives, right?Generated data and and you you use generative generated data, those composite synthetic, right synthetic.Is that a real solution or I think to me that seems like that would, but wouldn't that actually just either?

36:57

Wouldn't that further increase sort of bias and sort of repetitiveness of of output?Like we're just, it's just the same stuff getting recycled over and over, right?So, so, so I thought that, but I, I think you can be thoughtful about how like, like yes and no.

37:12

I think, I think it's, it's not going to help with issues of like geographic diversity if if there's no representation of data from particular countries in your original data set, no matter if sort of generated data will help with that.But I think it can help with things like sort of a lot of the data that's uploaded is, you know, getting coming back to your point about trying to get likes or it's sort of framed in a certain way or there's certain composition of, you know, it's always these three objects that sort of appear together or the person has always posed in a particular way in the photo, that kind of stuff.

37:50

I think you could get generative models to help with so they can break help break some of that you can generate from a sort of different compositional distribution than the original distribution.So for example, like the, the easy example is if you so, so this is one of my students was, was was saying this in a meeting recently.

38:09

So, so it's top of my mind.So if you always have sort of apples on top of tables in your, in your data set of very rarely do you have sort of apples under tables.But but if your model sort of understands the difference between like apples and tables.And so now you can generate data that where the apples are also sort of under tables or near tables or there's.

38:28

So, so you can kind of change the image composition and you can change sort of the, the distribution of appearances and, and, and connections sort of, yeah, no different word than than than composition.And, and, and so there's creative ways that that you could go about manipulating this.

38:49

It, it kind of hinges us on having control over the generative models, sort of having control over what exactly is generating.So it's not just generating from sort of uniformly at random from the distribution it's learned, but it's sort of generating more from particular kind of subsets of the distribution or generating kind of different compositions of of objects or concepts and so on.

39:12

Do you think there are any companies or or labs that are sort of best positioned right now to to sort of in a scalable way unlock new forms of of data from maybe geographically or throughout the world?

39:29

Like, like what are the companies that are actually like going after this actively right now?I'm going to put to this and say that it's AI for all who's positioned to.Unlock.All of these different, all these different types of things.I think it's going to be the companies that are founded by our students.

39:47

I think it's going to be the folks who are coming, coming into the space who are right eyed, who are, who have not yet been sort of indoctrinated into the current ways of thinking and who are coming in with new ideas and who ask these kinds of questions of like.

40:03

Can we do something that's radically different from what's being done right now?Yeah.So you worked on Imagenet as a PhD student.Tell us what that was like.The original Imagenet was constructed by my colleague Jiang, who's at Princeton, and then it's advised by by Faifi Lee, who is my PhD advisor.

40:21

I sort of worked closely with them.I was around when this was happening, but I was a junior PhD student and I was sort of watching them in awe and watching this unfold.And so I was there sort of from from the early days, but it's a, it's a very large scale data set that they collected of photos from the photos from the web, sort of illustrating different visual concepts.

40:40

There were a number of sort of key innovations, including the use of crowd workers, the use of sort of people in labeling all of these, all of these images, the whole data set is more than 20,000 classes and it's 15,000,000 images.Sorry, there we go.And so, so all of these images are sort of carefully labeled by people on the web.

40:59

But the the big point is that this this is what jump started the deep learning revolution.So it provided the data that allowed for some of these models to sort of harness all of the kind of learn all of the patterns from from this very large scale collection of of photos.

41:18

And then really build these models that are so that are less engineered in terms of the actual architecture, but very, very reliant on really bottom up learning the visual patterns from from the data.This is part of what kind of jump start the, the, the deep learning revolution.

41:33

And then we were running sort of the image net challenge for a number of years and kind of collecting more and more data.So that that works sort of the running the challenge and, and that paper about the image net challenge.That's that's where I was sort of lead author on.And I kind of stepped in right at the boom of image net and kind of helped lead the project when job was graduating and sort of sort of moving on to become a professor himself.

41:56

And I was kind of still a PhD student and very excitedly took on some of that role.So, so I played, I played an important role, but I wasn't, I wasn't sort of the early pioneer of this.And I want to, I want to give sort of John Faye, Faye and their, their collaborators lots and lots of credit for sort of going out on a limb and trying to really do something different.

42:18

Like this was completely different than what folks were doing at the time.And this was the emphasis on data.And I'm like sort of the bet that collecting more data will actually unlock sort of the next generation of AI models, which is in fact what happened.But I think watching that now, my question is, well, that bet had panned out really well.

42:38

And now this is sort of taken as a, as a, as a given, as a sort of, you know, ground truth as the, as the default in the field.Like I'd like to see somebody else make a different, but like this is the time for somebody else to make an, an equally ambitious bet that it's not, you know, data or algorithms, but it's something else entirely.

42:57

It's maybe it's models of, you know, maybe it's human brain inspired models.Maybe it's, you know, something that like I, I don't know what it's going to be, but but I would, I would like to see those kinds of ambitious bets.Yeah, and, and I've definitely, you know, at least from sort of the private sector, like I've, I've definitely heard of some impressive and noteworthy researchers going after exactly what you're saying and, and asking the question.

43:22

Like there, there have to be more scalable ways to, to, to breakthrough, right, without just needing like all of the data in the world.So it'd be fascinating to to see what comes of that either, you know, from, from some of these companies or from AI for all students.

43:39

Yeah, although this has been fascinating.I've learned so much.I'm super confident the audience has as well, so really, really want to thank you for the time today and yeah, hope to do it again sometime.Yeah, Mike, thanks so much for having me.This was a blast.Thank you.Thank you so much for listening to Generative Now.

43:58

If you liked what you heard, please write and review the podcast.That really does help.And of course, subscribe to the podcast so you get notified every time we publish a new episode.If you want to learn more, follow Lightspeed at Lightspeed VP on YouTube X or LinkedIn.

44:14

You follow me at Magnano MIGNANO on all the same places.And Generative Now is produced by Lightspeed in partnership with Pod People.I am Michael Magnano and we will be back next week.