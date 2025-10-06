forked from - https://www.notion.so/maheshmurag/Tecton-Onsite-3-Call-with-Matt-Bleifer-45-min-b1507ef0b01841aaad068dd4c16db7fe?source=copy_link
[Tecton call with Matt Bleifer](https://maheshmurag.notion.site/Tecton-call-with-Matt-Bleifer-a4ad1527e56647579c300e1f998289a7)

### Notes on the question

- Say I’m a PM, want to build X, get to 3-month MVP + long-term vision. Overarching process to breaking down problems, as well as running through the specifics of the example.
- **Problem Statement**: I work at a recruiting software company. Work on ATS (e.g. Lever & Greenhouse). Recruiting team uses this system to keep track of candidates (applying online). Sourcers reach out on Linkedin, add candidates, move them through different defined stages. Interviewers can leave feedback, notes, ratings, etc. Field & sales says that we’re missing interview scheduling functionality — our competitors have interview scheduling, customers have asked about it, etc. We don’t have much of a story for why we don’t have it.
    - Go figure out interview scheduling. Assume we can staff it & we know it’s a priority. Figure out a 3 month plan for this + longer-term vision.
    - Matt can be an internal stakeholder & answer questions I have.
        - Matt worked on this at Workday

1. Define the problem space — who / what / why. State assumptions.
    1. **External Stakeholders**:
        1. Recruiting Team:
            - Recruiting Coordinator — scheduling; booking rooms; travel plans
            - Recruiter + Hiring Manager + Sourcer — “AE for a role”. Overall success, managing sourcing strategies, working with hiring manager, job description. Visibility / monitoring.
        2. Interviewers
        3. Candidates
    2. **Internal stakeholders**: PM, engineers, designers, field / sales who will be communicating to customers, and leadership
    3. **Q:** Is there a particular market that we care about - size or stage of company?
        1. Tend to focus on the SMB market. Full-time roles. Phone screens, onsites, book a day & have a bunch of meetings in a row. Usually 1 big day of interviews.
        2. Tech-forward. Mix of remote / onsite interviews.
        3. Our company size: Series C, ~100ish employees.
    4. **Q:** Do we care about monetization & new customer growth, or mainly targeted at making existing customers happier?
        1. New customer growth is a big priority — getting killed in some sales deals and losing RFPs. Something needs to be built & should be reasonably competitive.
        2. Long-term, we think this could be a significant growth driver. PLG company. Most of our adoption comes from superiority of our product — should be pretty self-serve.
2. Identify customer/business value propositions.
    1. Prioritization of stakeholders:
        1. **1. Coordinator & HR** — if we care about PLG long-term, needs to be easy to onboard & integrate with existing recruiting & scheduling solutions.
        2. 2. Candidate — need a good external-facing experience.
        3. 3. Interviewer — important but probably not going to be involved in a purchasing decision.
    2. Goals & the business case:
        1. Ease of use & integrating with existing systems (making an existing relationship higher-value)
        2. Improving our candidate experience (leaves a good impression)
    3. Metrics:
        1. Number of deals lost with this being a main loss factor — go down
        2. Customer retention — go up
3. Talk about / propose user journey:
    1. User Interview — Recruiting Coordinator:
        1. What are the biggest pain points when scheduling? Where do you see yourself spending the most time in the process?
            1. **A:** When a candidate says they’re interested, that’s when they get involved. Funnel happens where they talk to a recruiter for a phone screen, then they talk to a HM for a phone screen, and then move to all-day onsite. Scheduling happens in initial phone screen scheduling (via calendly or email back-and-forth) — that area isn’t hugely difficult (only scheduling ~2 people).
                1. Tougher part is the all-day onsite. Ask about what day is available — can you clear your schedule for a half or full day. They give a day. Before this happens for a role, hiring manager gives the recruiting team the interview panel (e.g. 1h with role; 45min design with other role; etc.). I need to **take the day candidate is free, pull up all the calendars for everyone I’m scheduling for, and design a schedule that works.**
                    1. [P0] I can’t schedule send out any specific interviews without sending ALL of them out first. Need to make sure the schedule works for the candidate — candidate needs break; order also matters. And then send out the final schedule. This is a huge time sink / super manual process.
                    2. [P1] Leading up to the interview itself, I need to keep track of acceptance statuses. If someone declines internally, I need to see if a meeting needs to be moved. I schedule 6 of these a week — need a good view for which RSVP corresponds to an interview block (which candidate does this correspond to?).
                    3. Also if candidate gets sick.
                    4. **Q:** Do we want to simplify “roles” to “interviewers”? **A:** Yes, good question — do this simplification. Typically, it’s a set of people + a backup set — for this problem, let’s ignore this.
        2. **Q:** What existing software do you typically use?
            1. **A:** Google Calendar & Outlook. Some ATS system for keeping track of notes for everything. Or leaving notes at the role level. Spreadsheets.
        3. How do you typically communicate schedules to the other stakeholders (interviewers & candidates)?
        4. What % of your bookings are in-person vs virtual?
    2. **Define a focus [caveat that this is only 1 interview]:**
        1. [P0] Processing all the different calendars & sending out a block + communication
        2. [P1] Updating a interview block based on acceptance & changes
    3. Crafting a User Journey:
        1. 1. [Setup] When role is opened, interview panel is entered into our system, along with the specific person that needs to take each interview type. In addition, specify some additional constraints e.g. break time (max # of hours in a row we’re ok with the candidate interviewing for; lunch break; 9am-5pm)
            2. [Future] Additional constraints here.
        2. 2. We send candidate a link to our system, and candidate sends us the date(s) that would work for them.
        3. 3. [Backend Logic] For each day the candidate is available, suggest scheduling possibilities. using Google Calendar.
            4. [Future] Allow our system to learn which slots are movable vs not movable
            5. [Future] Focus on other systems besides Google Calendar
        4. 4. Coordinator goes through and picks a date, looks at the suggested time, makes edits, and then clicks “finalize”.
            5. Reviews the selection
            6. Finalize sends out confirmations to everyone, including candidate
                1. [Future] This confirmation has edit options / acceptance / decline.
    4. Matt pushed back about “why do we want to do automated scheduling in the MVP” (which is fair lol). I said it’s because 1) i think it’s a feasible technical problem 2) we can probably focus on building out the flow before we do the automation step and 3) it’s the P0 problem that causes the most timesink. GCal already has the “side by side” calenders feature but it’s still super hard to use.
4. Prioritizing among some of the features we think of + Launch plan
    1. Take 3 minutes. Talk about the go-to-market & launch plan:
    2. 1. Pick a cohort of our most engaged customers, that we can continue to meet with and get feedback from.
    3. 2. Make sure our features are feature-flagged & can be rolled out gradually by specific customer ID, etc.
    4. 3. Add this to our pitch deck as well & pilot it with our existing customers.
    5. Do this for 4 weeks^. Once we’re ready, roll it out to a larger sub group.
    6. After 8 weeks, roll it out fully & start planning out the longer-term roadmap.

### Questions to Ask:

1. **Q:** Mentorship is something I’m prioritizing a lot & appreciating at Tecton (and I’ve heard great things about Matt). How do you see your role evolving at Tecton?
    1. **Goal**: Scaling the product organization — new challenge is the amount of scope & # of direct reports. He is extremely hands-on with all of this stuff — hire a rock-star & down the road he & his direct report are friends doing big things in industry. Being collaborative & being in-the-weeds. Collaborate a lot with Mike & Kevin on product strategy.
        1. Also really hates the explicit levels between people — product leader shouldn’t just focus on strategy. Make the product successful at all costs.
    2. **Follow-up Q:** What’s your future with Tecton / potential exit?
        1. **A:** Being at Tecton for the long-haul. Sticking around. Happy with how his career is gone. Would feel like unfinished business to leave. It’s his pride & joy. Ideally see this through to an IPO (or a successful exit), die trying along the way. Wants to accomplish “the thing”.
        2. Next step for him is starting his own company — Mike knows this.
        3. Came to Tecton to get something done start-to-finish and gained all the knowledge possible.
2. **Q:** I appreciate the value of hard work, but at Scale it sometimes felt like we were working hard without a concrete direction. I also know there are only 3 PMs at Tecton. What do you think the work-life balance will be like in this role & what is your philosophy towards that?
    1. **A:** Nightmare scenario is “working hard without a specific direction” (i.e. Scale). When it’s time to work hard, work hard. When it’s time to play & relax, do that. This summer, did a 3-week honeymoon & lived in Europe for the summer while he worked. Worked a lot at night — 5pm-3am in Europe. In morning, explored Prague & run around Barcelona. Don’t like things in the middle (half-ass things).
    2. Crunch time, buckle down & figure out how to get things done. Don’t want someone to feel that there’s no reason to work hard. Do it in sprints — usually one thing a quarter that’s super grindy.
        1. If I’m grinding on something, it should be because I’ve identified that i need to get over the line & critical for success. e.g. Doc system & documentation sucks — he worked 80-90h / week. He just figured that this was necessary. Spent 2 weeks on this and then took a couple days off.
        2. Should grind because I’m passionate about it.
3. [Skipped] Open-source (Feast) vs Tecton strategy. Who are Tecton’s competitors? & Growth?
4. **Q:** Advice for the presentation tomorrow?
    1. **A:** Chance to show humility & self-awareness. Don’t sugarcoat fake failure. Here’s a thing that I swung for the fences & might have totally missed. Here’s where things went wrong along the way. Swinging hard enough to have some failures. “If i’m not failing, i’m probably not trying hard enough”. Kevin has some hilarious failure stories — bought a house in Detroit in 2008 before the crash, while working on a startup.
5. **Q:** I know y’all prefer SF — can you elaborate more on the hesitations & philosophy around that?
    1. **A:** Kevin is usually in NYC; although SF / nomadic right now. Mike’s preference in SF given new office, Matt & Derek are there. Having someone that can be around would be good for absorbing culture & knowledge. That being said, NYC is the second-best case — senior engineers here, and office, and Kevin.
        1. Matt’s mentality: Admittedly less ideal than SF full-time. But would be open to me spending chunks of time in SF. Just need to find a way to get decent chunk of in-person time.
        2. Kevin & Matt have a more remote-friendly mentality than Mike. Matt wants to move home (LA) eventually & start a family eventually. Kevin is fine with it, Mike will eventually be fine with that.
    2. Things I shared to mitigate these:
        1. Willing to travel - my family is from San Jose. I’m there a lot.
        2. I started the NYC office, and it grew to 50 people. I totally understand the value of office culture.
    3. He was open to these mitigations (he didn’t know my family is in San Jose) but caveated that Mike is admittedly a bit more hesitant and they’ll talk about it internally later in the process.

- Questions to Prep for:
    - What’s my favorite product? Arc Browser & Gig
    - [Product Execution Prep](https://www.notion.so/Product-Execution-Prep-54ce59fb9edc4c8f883259cea391e63b?pvs=21)
    - [Product Design Prep](https://www.notion.so/Product-Design-Prep-7c993fa3c6d54202b0a6fd28903ba800?pvs=21)
    