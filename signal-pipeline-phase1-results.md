# Signal Pipeline — Phase 1 Fetch Results

**Date:** 2026-02-26
**Pipeline:** YouTube fetcher (Phase 1 — fetch only, no Gemini)
**Videos fetched:** 3
**Sources:** 3 YouTube channels

---

## Summary

| # | Source | Title | Published | Words | Relevance | Keywords |
|---|--------|-------|-----------|-------|-----------|----------|
| 1 | Ras Mic | Claude Code vs Codex... which is better? | 2026-02-25 | 3,362 | 1 | claude(1) |
| 2 | Nate B. Jones | A Substack Post Just Wiped Out $200 Billion in Market Cap (The AI Doom Math Nobody Is Sharing) | 2026-02-26 | 5,535 | 0 | — |
| 3 | VelvetShark | 50 days with OpenClaw: The hype, the reality & what actually broke | 2026-02-20 | 6,832 | 7 | mcp(3), ai agent(2), automation(1), gpt(1) |

---

## 1. Claude Code vs Codex... which is better?

- **Creator:** Michael Shimeles (Ras Mic)
- **URL:** https://www.youtube.com/watch?v=CyR9GXiWYTw
- **Published:** 2026-02-25T01:00:16+00:00
- **Source type:** youtube (Tier 1)
- **Transcript:** 3,362 words
- **Relevance score:** 1
- **Matched keywords:** claude(1)
- **Default tags:** ai-coding, vibe-coding, full-stack

### Description

In this video, I share my experience and thoughts after using both Codex and Claude Code extensively. Let’s talk about it

Thank you Greptile for sponsoring! Check them out at https://rasmic.link/greptile

The Greptile skills: https://rasmic.link/greptile-skills

My Links:
🌐 My Site: https://rasmic.link/site
🏭 My product studio: https://rasmic.link/fabrika

Socials:
🐦 Follow me on X: https://rasmic.link/x
💬 Join my Discord: https://rasmic.link/discord
▶️ Subscribe to my second channel: https://rasmic.link/more-micky

Tools I use: 
📚 Programming courses: https://rasmic.link/scrimba
📸 My Camera: https://rasmic.link/camera

### Full Transcript

6 months ago, we were comparing which model was better for tab complete. Today, we have AI models in tools that allow us to turn out full-on applications without writing a single line of code. Today, I'm going to be comparing the two big dogs, Codeex and Claude Code, and we're going to see which one is better. In particular, we're going to compare the models, the UI, the integrations, how I use it, and my verdict. Which one I think is better? It's going to be a fun video, and right at the very end, I'm also going to share with you which one I use more. The answer will surprise you. But you know what's more surprising? How good the sponsor of today's video is. Oh my goodness. I didn't even see you. My apologies. I'm just having chips and salsa while one of my favorite AI code reviewers, Greile, fixes my PR. And would you look at that? I got a confidence score of five out of five. I'm going to show you how I use Greile to automate my PR reviews. First, I have two skills, check PR and GP loop. And I'll link both these skills down below. Second, I have a Gravile account. And by the way, they have a twoe free trial that you can use. And basically what the two skills do is as follows. Check PR will inspect the PR for unresolved review comments, failing CI checks, and incomplete descriptions. And it will basically check the status of the current PR. Then GP loop, which is my favorite, will run a loop, trigger a GPile code review first. It fixes the comments it finds. It then re-triggers the review, and then it won't stop until you get a five out of five. So this five out of five that I got actually took a couple of loops because the PR was so bad. I honestly just threw a bunch of AI slot. And here's how easy it is to run. I'm using cursor. You can use this with claw code, codeex, cursor. I'm using this with cursor. All I did was type check PR29. And then run the GP loop. And then you can see here it did a check summary. It's reviewing the PR. It checked all the areas where it failed. It succeeded and there's some actionable work to be done. And then you can see here that it went to work. It says now let me fix the caching issue. and went through the entire PR, pushed changes, and then it waited for the CI checks to pass and the Greile review to complete. Once the Grapile review was done and it got a five out of five, I got GP loop complete. That is why this PR is ready to merge. If you're pushing a lot of code, whether you're using AI or writing it behind, whether you're solo or you work at a company, you're going to need an AI code reviewer like Gravile. The link will be in the description down below. Make sure to set up these two skills as well and automate your PR review process. All of this is possible because of Greile. Make sure to check it out. The links are down in the description down below. Now, let's get back to the video. Models. We have GPT 5.3 Codeex on one side and then we have Opus 4.6 on another. Essentially, when you're picking between Codeex and Cloud Code, a huge chunk of the decision actually lies on the model. Which model do you prefer to use? Now, I've started to notice a good chunk of engineers are actually fans of the 5.3 codeex model, but there are also a lot of engineers that enjoy Opus 4.6. And after using both of these models like a lot, I've come to the realize they are two different models. They're both good, but the vibe is completely different. Codeex is like a European, very methodical, slow, asks a lot of questions. You ever been to Europe? They're all in the cafes. They're vibing. They're taking their time. They're drinking their espresso. They're smoking a cigarette. You shouldn't smoke. It's bad for you. But that's the vibe that 5.3 Codex gives. Now, I know they have Spark, which is their fast model, but Codex in general is a slow model. It's very methodical. It will ask you a lot of questions. Run plan mode with Codex. It will take its time. And there is a use case for that though. That is important. Opus 4.5 is like an American. It's like an F-150 Ram truck. It's fast. It's aggressive. It will make assumptions for you. Now, there are times those assumptions are correct and there are times those assumptions are completely wrong and it will continue going down the wrong path. It's very aggressive. It will sort of do things it's not told to do. But I will say compared to the old Claude model, I believe it was 3.1, its assumptions are a lot more smarter. Now, which model do I prefer? I'll tell you this. I use both for GBT 5.3 Codex, especially when I'm using codecs. If you click the drop- down selection, let's say I'm selecting 5.3 Codex, there are these different reasoning levels, low, medium, high, and extra high. Now, I'll be honest, for the most part, I'm either using extra high or medium. I've never really used high or low. Um, I wish the naming convention wasn't as terrible. Like, that's one thing about OpenAI that sucks. The names are just insanely terrible. codeex 5.3 extra high blah blah blah blah blah. But whenever I'm doing let's say a big refactor or I want to remove a large piece of code or I want to you know change the architecture of a codebase I'm calling on 5.3 codeex and whenever I'm doing like like I'm going back and forth with the model like I'm building out a project I'm using 4.6. Now I can't tell you one is better than the other cuz I've had times where 4.6 6 has pulled the bet. And same thing with 5.3. And I've had 5.3 fix Opus' mistakes. And I've had Opus fixes fix GPT 5.3 Codeex's mistakes. It really is all about vibes. If you have the opportunity to use both, I think there is value in having both, having access to both. But obviously, you know, subscription, it costs money. I would suggest trying out each one in a twoe time interval. See which one you like and sticking with that. If you can afford both, I would highly recommend both. They're just two very different models. So, number two, let's talk about UI. First, let's go over codecs. Codeex does not show you the code at all. Now, you can see uh you have access to a terminal. You can see the diffs of their uncommitted changes. Right? I like how projects are structured. Right? So, I have three projects here and each project has a thread, a separate thread, and I can work on a separate feature. I could do a refactor here. I can also create a new branch, switch branches, use different models. I can open in, you know, VS code, cursor, anti-gravity in my terminal in ghosty, whatever I want. This very much feels like a managerial spot. And one thing I will say with the UI of Codeex, it almost incentivizes me to work on multiple projects, right? It either incentivizes me to work on multiple projects while I'm using it or I'll have like one or two big features running and I'm just leaving it, right? Right. I'm not even on it 24/7. The UI feels that way. I will say it feels nice. It It really feels nice. But when you compare this to Cloud Code, it's a completely different feeling, right? It works on your terminal. Now, the cool thing about this is I can use this in VS Code. I can use this on cursor. I can use it. I use it with Ghosty. You can use it with whatever terminal wrapper. You can use it wherever. But truthfully, when you compare it to Codeex, it's two different user experiences. All right. Now, I will say the terminal does feel like a place where I would like to continuously work. Meaning, when I'm using Opus 4.6, I'm not usually letting it run one large task and leaving. Right? If I'm using Cloud Code, I'm continuously working, right? I'll let it do a feature, I'll review the code, let it do a feature, review the code, let it do a feature, review the code. Versus with Codeex, like I said, I'm almost incentivized to work on multiple projects. So let's say I'm working on biscuit. I make a couple changes, then I'll work on ship, make a couple changes, then work on sandstorm. Let these things run in parallel. Mind you, the model is slow. So it's not one of those where you let it do something and then you wait. It takes its time and for good reason. The quality of code you get from Codeex sometimes is better than Opus. This comes down to preference. Which do you prefer? Personally, for continuous work, I'm going to use Cloud Code. But if I want to fire off some feature changes and I want to leave, I'm going to use Codeex. Next up, integrations. With Codeex, you have a couple. First of all, they have like the skills directory. So, these skills are installed in all my projects, which is fantastic, right? There's a couple recommended ones as well, like Jupyter notebook or render deploy. I have Cloudfl installed and then linear installed. So, I can install their already preconfigured skills or I can create a new one using their skill creator, which is pretty awesome. They also have automations and basically these are things that can run on a daily, weekly, whatever basis. Like let's say for example you wanted to review all your open PRs and do a code review, right? Or you wanted to review for merge conflicts or whatever. There are a lot of cool things that you can do with automations. For example, I have a daily bug scan that runs. It's going to look for a bug and it's going to present a fix. You can see here it scanned some of my PRs. It reviewed the off session setup, layout animation change, interactive walkthrough, admin spin, and then says no concrete bug evidence or failing signals surfaced. Right? This is another cool feature Codeex has. And obviously like the many tools, there's MCP support. I can use work trees. I can set up a cloud environment. So like it can run on the cloud so I can turn off my computer and go about my lovely day. You can even personalize and tailor codecs to your liking using custom instructions. Now Cloud Code has a full plug-in system, right? There are different types of plugins that you can install. Some developed by Enthropic, others by people. You can also set up skills. You can also set up a cloud.md. Now, one thing that I've realized with Enthropic is they definitely seem to be separating themselves and not really in the collaboration mode with other providers. For example, I don't think um correct me if I'm wrong, but I don't think Claude Code works with agent.md files. You need to have a claw.md file. So there is this thing where when you're using Claude Code and Enthropic, you're sort of locked in their ecosystem. It's the same thing with Codex. Don't get me wrong, I can't use any other model with Codex. But I'm just telling you the public perception. It feels like Claude Code and Enthropic are a little bit more closed off than OpenAI. But optics is optics. PR is PR. At the end of the day, if you want to use any model with your tools, you're probably going to use something like Open Code or Cursor. Codeex and Cloud Code have a plethora of integrations, plugins, you can set up skills and all that. those cool things. Now, how I use both quad code and codeex. I shared this earlier, but I just want to refine everything I said. Cloud code is my driver. Meaning, let's say I wanted to build an application that allows businesses to deploy voice agents. I did so recently. I'm going to be using cloud code to build out to scaffold the project, to build out the landing page, to build out the pages, to build out the features, to build out the APIs, right? And I have this great workflow with Ghosti. Ghosti is my terminal of choice where I can like run the project here and then I can set up Vim if I want and review the code and all that type of stuff. Like I have this sick workflow that I'm very comfortable with hotkeys and all this stuff using Ghosty and Cloud Code almost sometimes feels like an editor for me and it naturally makes me want to work on the application continuously versus Codeex. I will say codeex makes you feel like a manager. I feel like a principal engineer manager who doesn't write code anymore but reads all the cool engineering books from the 1950s is all about functional programming is all about abstraction and clean code and I'm just telling my engineers aka my agent to do the work. Right? Codeex feels like that and it feels awesome. Right? Like for example, I think like right here there was this app I was building and I had this insane white label system and I was using clerk as o and I wanted to be programmatic where someone can hop on a site spin up you know an instance and then there would they would have o and all that stuff configured. I didn't realize with clerk that they didn't have like a platform feature. So I had to have like the shared o thing where like they off with the main app and like the subdomain app should also work. It was confusing. It was difficult. It was annoying. I finally decided to can the feature and I went to bed. Before I went to bed, I had my hot cocoa milk and I said, "I want you to remove the white label feature." Blah blah blah blah blah blah. Do it. And it worked. It worked on it all night. And I woke up. I have a code reviewer. I told it to address the comments. I gave it access. It implemented some fixes. Again, this took a bit of time. And then I gave it feedback and addressed the feedback. Made the changes. I gave it more feedback, addressed the changes, kept going back and forth. Mind you, like I'm gone. Like I I tell it what to do and I'm gone. I I got I got a job. I got a family. I'm gone. And then when it's finally done, I review the code, build passes, it works, I merge it. This was done throughout a couple of hours, but I wasn't on codeex the whole time. I'd let it run and then I'd come back. This is almost the incentive I get when using Codex. Now, this just might be me. You might be someone who's on it 24/7, but I give it these big responsibilities. I'll let it cook, we'll review, we'll let it cook, we'll review, and then when it's perfect, we'll merge. So, it's almost like codeex versus cloud code isn't really a thing because I'm using both and I use both very much differently. Now, if I had to pick one, depending on my lifestyle and how I'm living and all that type of stuff, maybe I might inch towards cloud code, but genuinely I do like using Codeex, right? There are certain things I prefer Codeex for. So, my verdict really is I don't think one is better than the other. I think they're both different tools. They're both different models. The UI is completely different. It's meant to be used differently, at least for me. So, it's not a Codeex versus Cloud Code. It's when do I use codeex and when do I use cloud code. Now here is an interesting point though. I've been using these two a lot. But the last couple of days I went back to our very first love. Ladies and gents, I've been using cursor a lot. Like a lot. And in particular for this one project I've been working on for work. Now here's the thing. Codeex's UI is sick, right? They're almost like telling you, "Yeah, you don't need to look at the code anymore." But you know who did it first, ladies and gentlemen? It was actually cursor with their agent mode or their agent interface. It used to be a tab. Now it's this weird setting that I'm not a fan. But it was cursor who did it first. And I think it was a little too early cuz not a lot of people received it well. But I went back to it and I thoroughly enjoyed using it. Another thing I realized, I thoroughly enjoyed looking at code. Like I I missed it. I missed looking at code, reviewing line by line. Heck, I even typed some. Isn't that crazy? I typed some code because I was working on Tanstack start stuff. And I'll be honest, the models are not that good with tanstack start. So I I I dived in. I wrote some code and it felt really nice. And if I wanted to use a specific model, guess what's so cool about cursor? Like I have access to all the models. I want Opus. I want Opus Fast. I want Sonnet. I want Codeex high, extra high, low, medium, latte, Kimmy, whatever it is. I can use whatever model. Now, obviously, there is a difference with using Clawude Code and Opus 4.6 versus with cursor. But can I really tell the difference? No, not really. I've been building stuff that works, that's really fast, and that's really cool. So, what do we get from this? All the tools are great. They seem to have different goals, and they seem to be great at different things. For me, codeex is the give it a task and leave it alone. Come back when it's done. Cloud code is my shooter. Uh, it's the one I go to back and forth. We're arguing. I'm telling it do this, do that. It'll do some things right. It'll do things terribly wrong. But then lately, I've been using cursor and I don't know if I'm just unfaithful and I'm using all these different tools, but there's something special about all these different tools and it's a matter of which makes sense for your workflow. Right? Codex is my European engineer manager that's methodical. Claude Code is the American Eagle Freedom America uh with his machine gun. And then Cursor just seems to be like this weird sort of mix. I would definitely categorize it more on the Clawude Code side. I think Codeex is unique in its own and that's I think what makes it very special why a lot of engineers and a lot of people love it. I have not used Open Code a lot but I should. Open Code is great and a lot of people that I respect are big users of it. But yeah, that's pretty much it. Codeex versus Cloud Code. Which one do you prefer? Does it make sense? Are you using cursor? Are you using something else? What are you using? Let me know in the comments down below. Thank you so much for watching this video. Like, comment, subscribe, hit the notification bell. I'll see you in the next one. Peace.

---

## 2. A Substack Post Just Wiped Out $200 Billion in Market Cap (The AI Doom Math Nobody Is Sharing)

- **Creator:** Nate B. Jones (Nate B. Jones)
- **URL:** https://www.youtube.com/watch?v=q6pbQ5li5Cg
- **Published:** 2026-02-26T15:01:05+00:00
- **Source type:** youtube (Tier 1)
- **Transcript:** 5,535 words
- **Relevance score:** 0
- **Matched keywords:** None
- **Default tags:** agent-commerce, x402, agent-web

### Description

My site: https://natebjones.com
Full Story w/ Prompts: https://natesnewsletter.substack.com/p/a-fictional-recession-just-crashed?r=1z4sm5&amp;utm_campaign=post&amp;utm_medium=web&amp;showWelcomeOnShare=true
_______________________________________
What's really happening when a fictional recession scenario wipes $100 billion in market cap and IBM craters 13% in a single day? The common story is about AI disruption—but the reality is more interesting when both the doomer and boomer narratives are wrong about the same thing: speed.

In this video, I share the inside scoop on why the gap between AI capability and societal adoption is the real story:

 • Why Cittrini's 2028 memo went viral while the counter-evidence barely registers
 • How four inertia forces—regulatory, organizational, cultural, and trust—slow everything down
 • What Toby Lutke's mandate at Shopify reveals about collapsing the integration timeline
 • Where asymmetric economic returns concentrate while the gap stays wide

For anyone watching the stock market panic while building real AI fluency, the capability-dissipation gap is the greatest generational opportunity in the workforce.

Chapters
00:00 A Fictional Recession Just Crashed the Stock Market
02:15 Steel-Manning the Doom Narrative
05:30 The Bull Case: Alex Emmes and the Policy Response
08:00 Michael Bloch: Services Deflation Returns $4-7K Per Household
11:20 The Part Nobody Is Talking About
13:45 Four Forces of Inertia: Regulatory, Organizational, Cultural, Trust
18:30 The Capability Curve vs the Dissipation Curve
21:00 Why the Gap Creates Asymmetric Returns
23:15 Toby Lutke and the Shopify Case Study
26:40 Large Firms vs Small Firms: Who Wins on Speed
29:00 Three Takeaways: Recontextualize and Map the Gap

Subscribe for daily AI strategy and news.
For deeper playbooks and analysis: https://natesnewsletter.substack.com/

### Full Transcript

A fictional recession just crashed the stock market. And the real story is what nobody's going to write about tomorrow. So here's what happened. A Substack post written as speculative fiction from 2028 wiped out over a hundred billion dollars in market cap on Monday. IBM created 13% its worst day in 25 years just because Anthropic published a blog post about cobalt. But that wasn't the Substack post. The Substack post was by investment research firm Catrini, which wrote a highly regarded piece about how bad things could get if labor replacement driven by AI really takes hold due to massive AI capability gains over the next couple of years. Look, you've seen me cover the individual sell-offs. This video is different because the doom narrative that is driving all of them, there's seven I'm counting now, it's not been about the technology, it's been about the economics. And so I'm going to take a little bit of time in this video to lay out the economics of the bear case and the bull case, the doomer case and the boomer case for AI. And then I'm going to tell you the thing that neither of them is talking about. So we'll get to that in a second. So first the doom meme and why it hits so hard. So let me steal man this out properly because it does deserve it. Catrini research and Olab Shaw wrote a piece called the 2028 global intelligence crisis and they framed it as a fictional macro memo from 2 years in the future. The scenario is simple. AI capabilities keep compounding. Companies rationally cut white collar headcount to protect margins. Displaced workers spend less. The consumption hit cascades through mortgages. The credit ultimately contaminates the entire financial system. And so in their fictional scenario, the S&P drops 38% from its 2026 highs. Unemployment hits 10.2% and things are very, very bad. I'll cut it short here. The mechanism they describe is consistent. It's well constructed and it's pretty easy to follow even if you don't have a degree in economics. White collar workers make up about half of US employment and drive threearters of discretionary consumer spending, stuff you get to spend on because you like it. The top 20% of earners account for about 65% of consumer spending. These are the people who buy second homes, who buy cars, who buy vacations, who buy private school tuition. If AI structurally impairs their earning power, the consumption math gets really ugly for the whole economy quickly. A 2% decline in white collar employment could easily translate into double that, like a 4% hit on discretionary spending. And so, Satrini describes what they call an intelligence displacement spiral. I would call it a negative feedback loop. Basically, what they see is AI gets better, companies cut payroll, savings go into more AI, AI gets better, and so on. There is no natural break on the spiral. And the financial contagion chain is plausible, too. It's certainly familiar to anyone who lived through 2008, as I did. Essentially, once you start to get into the financial institutions that own AI vulnerable companies, there is a risk of contagion because of what they're linked to in the global credit system. And so in this case, the mechanism is private credit because private credit grew from a trillion dollars in 2015 to over $2.5 trillion by 2026 when private credit over that decade or so picked up and rolled up a bunch of SAS companies at valuations that assumed perpetual revenue growth. I I was part of some of those exits. I've seen them at work. Those assumptions are dying in real time and that's been part of the sell-off story. I think the most haunting line in the piece is this one. In 2008, the loans were bad on day one. In 2028, the loans were good on day one. The world just changed after the loans were written. I get why this went viral. I get why it was shared everywhere. I get why the markets convulsed. The scenario is vivid. It's simple. It's wellargued. It's emotionally resonant. It's plausible. It activates the same dread that made the big short a cultural touchstone. the feeling that the system is fragile, that nobody in charge sees what's coming, and that the smart money that's already headed for the exits. But the thing about doom narratives is that they are dramatically more viral, not due to their nuanced analysis, but due to one of the most robust findings in human psychology. I'm referring to negativity bias. We humans, all of us, are evolutionarily wired to pay disproportionate attention to threats. A headline that says AI can crash the economy generates way more like 10 to 50 times more engagement than a headline that says AIdriven deflation could cause real purchasing power for the median household. You're asleep already. Both headlines describe potential futures. One of them is going to get millions of views and the other one won't. And that's what I want to talk about because the asymmetry right now is distorting the information environment that people are using that we are all using to make career and investment decisions. The doom narrative is not wrong because it went viral. The fact that it went viral while the counterveiling evidence barely registers should make you suspicious about whether you're getting the full picture because you're not. I'm going to give you two different bullcase arguments. And yes, they both use economics, but we're going to simplify it so it actually works. Alex Emis is an economist at the University of Chicago Booth School of Business. He read the same intuitive arguments about AIdriven demand collapse that Catrini formalized as fiction and he actually went out and built a model to figure out what would happen. I'm going to drop a lot of the modeling stuff and cut straight to the chase. When you model the actual conditions that Catrini describes where labor share in the economy dramatically declines very quickly where there is no consumption that comes back after prices decline where wealthy capital owners who own data centers don't end up spending more. Where interest rates hit the floor and they can't drop further and there's no policy response from the government. Yeah, you kind of get what Satrini came up with. But what Alex argues is that if you have all of those in a row, the idea that you have no policy response is kind of laughable. And as someone who lived through 2008 with a divided government where everyone was fighting tooth and nail, when things get bad enough, if things get as bad as the ST treaty memo argues, yes, government does end up responding. And the reason why is entirely selfish. They want votes. They realize they're in trouble if they don't get votes. And so they figure out a way to get it done. But there's a lot of other reasons to suspect some of the other assumptions that the Catrini memo just kind of handwaves aside. And I think Alex is making a good point. I'll give you a couple of examples. One of the things that the Catrini memo doesn't take fully aboard is the idea that we might consume more if we have lower prices in the economy. That's actually pretty reasonable. Everywhere you look, you see evidence of Jieven's paradox. So that's the policy piece. The other things that the Catrini memo talks about like labor replacement, like prices falling and people not buying more stuff, at least not at scale. Those are things that might be individually plausible, but it's sort of difficult to add them all together and assume that all of them are correct at once to make sort of a perfect doom scenario. One example is the consumption side. Let's imagine for a moment that prices are going down in the economy because AI is making things cheaper. If that's the case, then people are going to probably buy more stuff. Now, they may not buy 10 TVs because the price of TVs go down, but net net in the economy overall, if people end up having more purchasing power, they're going to end up buying more stuff. And this is not just about TVs and shoes and the and sort of the hard goods that we produce as a society. This is about services too. And the services case is actually worth calling out because I think it is pointed than a lot of the bears want to acknowledge. And I have to give credit to Michael Bloke who wrote a direct response to the Catrini piece when he saw it and made this argument really really coherently. I think it deserves a lot more attention than it's getting, but again, it's not a doomer narrative, so it doesn't tend to get the attention. What he argued is that most of consumer spending is in services. Think mortgage services like how to buy a house. Think tax preparation, think insurance brokerage, think travel booking. You get the idea. These are all tasks that AI agents plausibly make dramatically easier today because they're fundamentally a function of complexity. And so if you're sitting there and you're like, where can AI agents impact the economy? It's really plausible that AI agents will impact the economy first by making a bunch of those services cheaper. I would argue that's more plausible than say replacing all the cobalt and the ATM machines because that's something that the stock market was worried about this week. But services are really easy to replace. They're not legacy code. They don't touch like core of the financial system kind of stuff. It's like, yeah, is an agent going to be good at travel booking? Maybe it will be, and if it is, you'll use it. If that's true, AI agents could plausibly compress costs by 40 to 70%. And Michael did these numbers. I'm not just making them up. And plausibly return 4 to7,000 in annual gain per median household taxfree. No legislation. Basically, we all get more money in our pockets in the US because AI agents are compressing the margins of all these services. And the point is simple. Is that money just going to evaporate? No. People are going to spend it. Let's say it goes into home mortgages. Let's say you pay less for buying a house in commission because the services cost comes down. Well, now you're going to put that money into furniture, into renovations, into moving costs. It doesn't disappear. It goes back into the economy. There's one more piece in Michael's scenario that I think is worth calling out. He identifies the ongoing high trend of business formation in the US as significant. The Census Bureau reported 532,000 new business applications in January of 2026 alone, up over 7% from December. That continues a long-term trend that's been accelerating since 2021. And Michael reasonably supposes it's going to continue. And what he's suggesting is that essentially oneperson businesses have more leverage in the economy than they've ever had before because now they have the skills, they have the tools, they have radically lower overhead, and they have more reach all thanks to AI. And this is not just theoretical. Know personally people in my life who have gone from not coding at all to I'm setting up a business and I'm making real money from it. and they feel so motivated they're starting a formal business out of it. This is not just one story that I'm cherrypicking. I know more than I can count on two hands. There's a lot of folks out there who are finding that the conditions the AI revolution is bringing are ideal for people who want to strike out on their own. Of course, it's easy to hear the bears responding. This time it's different because if AI is a general intelligence, it's going to replace everything at once. So, where will these entrepreneurs go? Sure, that's a real argument, and I take it seriously, but this brings me to the part of the video that nobody else is talking about. Whether or not AI displaces labor, the way the bears describe depends on the speed of labor displacement outrunning the speed of technical adaptation. And I think that is an incredibly underrepresented part of this conversation. And if that made no sense to you, don't worry. We're going to get into it. Fundamentally, both doomer and boomer narratives assume that AI capabilities translate incredibly rapidly into economic impact. The doom narrative assumes that everyone's getting fired. The boom narrative assumes really rapid technical adaptation across society. Both assume the conversion rate from AI can technically do this to the economy has reorganized around AI is incredibly fast. It's not. And the reason it isn't is the most underrepresented part of this conversation because capabilities are not the same as deployment. Deployment is not the same as adoption. Adoption is not the same as deep integration. Deep integration on its own is still not the same as economic impact. Social inertia is a massive force in the economy and it is dramatically underrepresented in every AI analysis I've read, bare or bull. This is what I mean concretely. I'm going to name kinds of inertia because I don't want to just throw away a line and say it's all about inertia. No, we're going to get specific. Regulatory inertia. Financial services firms that want to use AI for compliance work need approval from regulators who haven't finished writing the rules. Health care organizations need to navigate HIPPA and FDA clearance and institutional review boards. Government agencies run procurement cycles measured in years, not quarters. The cobalt systems that Anthropic is talking about modernizing run an estimated 95% of ATM transactions in the US. Hundreds of billions of lines of cobalt run in production today, powering critical systems across finance and airlines and the government. Nobody is migrating those to a new codebase just because a startup published a blog post, even if that startup is anthropic. IBM's own CEO, Arvin Krishna, said last year that their mainframe AI coding assistant has gotten wide adoption because it understands existing Cobalt code bases and decides what to modernize across those code bases. It's not replacing them, it's understanding them. The distinction matters. IBM stock dropping 13% doesn't change the fact that their client switching costs are measured in years of institutional pain. Not in API calls. But we're not done. What about organizational inertia? The Satrini scenario assumes companies cut headcount rationally and rapidly as AI capabilities improve. Companies are not rational actors. In practice, large organizations don't work that way. Headcount decisions are filtered through HR policies, through employment law, through union agreements, through severance obligations, through institutional knowledge preservation, through management politics, and the simple fact that most executives have never managed an AI transition and do not know what they do not know. The gap between Claude can technically do the parts of this job that matter and we've reorganized our workflows and retrained our remaining staff and built QA processes for AI output. and we've confidently reduced headcount. That's an enormous gap. I've seen firsthand how long it can take to go from AI strategy to pilot program. It takes so long. I have seen multiple cases where big company pilot programs are abandoned because the very piece of AI capability that they worked on is no longer relevant because AI has moved so fast past it. You know what a good example of that is? Rag. Everyone was excited about Rag in early 2025. You hear a lot less about it now because Agentic Search has gotten better. You hear a lot less about it now because context windows have gotten larger. And all of the people that spend an inordinate amount of time fine-tuning rag systems for their wikis are pretty much regretting it. Companies move slowly. Here's another one. Cultural inertia. Yes, that's different from organizational inertia. Most people still don't use AI in their daily work. I know lots of those people. They are my friends. Yes, I have friends who don't use AI. The adoption curves are real, but they're way, way slower for most people than the capability curve on AI. When Toby Lutkkey, one of the most technically fluent CEOs on the planet, running a company whose entire business is tech, when he has to issue a companywide mandate in April 2025 saying reflexive AI usage is now the baseline at Shopify. When he has to build it in performance reviews in order to get it adopted, that tells you something important about how slowly even high-erforming organizations change their cultural behaviors. Toby was really explicit about this on the acquired podcast. He said using AI well is a skill that needs to be carefully learned by using it a lot. He's right. He talked about using what he calls a Toby Eval. Like he applies this first to himself where he has a personal folder of prompts he runs against every single new model release systematically probing capabilities as if he was a QA engineer running unit tests. And he says that the skill of learning to prompt AI well, of learning to give AI all the context it needs to write a really coherent answer without additional search has made him better at everything else in his job. I actually will agree with that as someone who's worked a lot on prompting. I feel like I'm a much clearer communicator because I am a prompter. But regardless, step back for a minute with me. Toby is Toby. He is a 1enter AI fluent CEO. Do you think all of the personal work that Toby put in, all of the cultural work that Toby put in is something that a mid-market manufacturing firm in the US is going to replicate? Is that CEO going to do what Toby did? No. Now multiply that mid-market manufacturing firm times a million. Look at all the other businesses that are led by leaders who are not as AI fluent as Toby. Cultural inertia is real. The last inertia force I'll call out is trust inertia. Enterprises do not and should not trust AI output by default. And the cost of figuring out how you formally scale verification systems is really high. Unless you're willing to put in the capital to invest in verification as a competency, you're not going to get to the point where you trust AI enough to let it do the kind of high lever work that Citrini needs you to do for their memo to come true. And most organizations don't have the capital for that kind of investment. And most of them frankly don't have the stomach because moving your workforce from I have to do this work to I have a new skill and it's verifying the AI at scale is really really hard. Figuring out how to do that in a way that helps you go faster is even harder. And all along the way you have to build institutional trust to deploy that AI at scale. You have to show that you have the appropriate guardrails, the appropriate audit trails, the appropriate human oversight. that takes time that no amount of benchmark improvements can compress. Look, these four forces don't mean that AI is never going to transform the economy. All they mean is that it won't transform the economy on the timeline the stock market is pricing, frankly, in either direction. The doomers require a speed of labor displacement that social inertia simply won't permit. And the boomers require a speed of adoption and integration that organizational reality won't permit. What actually happens is slower than both, messier than both, and far more unevenly distributed than either narrative allows. Here's how I think about it. Imagine two curves on the same chart. The first curve is really familiar to you if you listen to me. It's AI capability. It goes up really fast. Model intelligence, reasoning depth, agentic endurance, you name it. I can tell you any number of numbers and they all go up really fast. Gemini doubled its reasoning in just three months. There's an example. The second curve is societal dissipation. And we never talk about it and we should. The rate at which those AI capabilities actually permeate the economy and change how work gets done, how money flows, how institutions operate. This curve is way, way flatter. It's governed by the inertia forces I talked about. It does compound over time, but it starts from a really low base and it goes really slowly. The gap between these two curves, the really fast exponential curve for AI and the really slow societal dissipation curve is where we all live today. And it's the gap that explains almost everything that seems confusing about this current moment. It explains why AI capabilities are stunning and the economic disruption is still modest. It explains why the stock market frankly cannot make up its mind because it's simultaneously pricing incredible return on investment for AI capabilities and also pricing incredible disaster on the other hand. It explains why the doom narrative and the boom narrative both sound compelling. It explains why a blog post can crash a stock. But there's something that's much more important than all of that narrative explanation that these two curves do. and that is unveil reveal a specific and very large economic opportunity. That opportunity exists for you and for me and for a bunch of businesses precisely because this gap is wide. If AI capabilities were irrelevant, there would be no advantage to adoption. Guys, do we see no advantage to adoption? No, we do not. It's the gap. It's the fact that the tools are powerful but very unevenly distributed, understood by very few, and integrated by even fewer. That's the gap that creates asymmetric economic returns for you and me and for anyone who wants to invest seriously in their AI capability set. And that's true for companies, not just for people. The people and firms operating at the capability frontier while the rest of the economy moves at the dissipation rate are capturing an outside share of economic benefit. And because social inertia is so strong, the advantage that we're getting here does not erode very quickly. It persists. It compounds. And it may persist and compound for a whole lot longer than a lot of the models predict because the models are not really accounting for how slowly societies tend to change. This is not the same as saying learn AI and you'll be fine. By the way, it's more specific and it's more structural than that. The capability dissipation gap means that the economic rewards for early aggressive adoption are higher and more persistent than anyone is currently modeling. The bears assume the gap closes really fast with rapid labor displacement. The bulls assume the gap closes really fast with rapid technical adaptation. Both are wrong about the speed. the gap stays wide and while it stays wide the people on the right side of it accumulate advantages that compound with every single model release. Now the implications of this gap play out really differently depending on your scale. Frankly, large firms are positioned to win on every dimension except one and that may be the one that matters the most. Like start with capital advantage. Large firms have the money to spend 20 grand a month on an AI agent if that's what OpenAI wants to charge. They have data advantages. They have decades of proprietary information. They have distribution advantages. They have existing customer relationships that create deployment surface area. And they have the budget for extensive verification and compliance infrastructure if that's what they need. But but but they carry the full weight of organizational inertia. Every new AI workflow has to survive procurement, legal review, security audit, you name it. So it can take 18 months from this tool will save us 10 million a year. So we're actually saving the money. The only exception to this is a highly involved founder like Toby. Those are the wild cards in the pack. If you have a really aggressive AI friendly founder like Toby at a large company, that can change. Small firms and individuals and that difference is blurring. We have the opposite profile. We lack the capital. We lack the data. We lack the distribution. But we have the one thing the big companies don't and that is speed. The capability dissipation gap creates an asymmetric advantage for speed and for anyone who can collapse the integration timeline. So a solo consultant who can integrate AI into their workflow today is operating at the capability frontier while their competitors are still doing quarterly meetings. The practical huristic is really today. One of the things that marks people who are AI native is they think in terms of the next couple of hours or get it done by the end of the day. They are not coming back and talking to me about we'll get it done in two weeks. They're not coming back and saying can we do it next month, next quarter. And in the cases where big companies can move to that way of operating which is an enormous cultural change which hits cultural inertia etc. they have tremendous advantages. But for everybody else who's smaller, who's missing the capital, who's missing the resources, they do better if they can get on that speed train, if they can leverage the advantage of being small. I think Toby understands this instinctively, and I think it's worth looking at a case study from Shopify as a result. Toby's mandate with AI is not use AI when it's convenient. It's demonstrate why AI can't do this before you're allowed to ask a human to do it. and he treats model evaluation as a personal discipline, right? He's running structured evals on his own on his own time and growing his test harness over time. Toby also requires AI exploration in the prototype phase of every single project. Not because the output will be production quality, but because even if AI fails at the task, you now have an eval for the next model. That last point deserves emphasis. When Toby makes a junior employee test their project against an AI tool, he's not expecting the AI to succeed. That's not the goal here. He's building organizational muscle memory. He's ensuring that when the next model release drops, and it will, his company has a pre-built evaluation framework that immediately reveals what's newly possible. He's investing in the rate of dissipation within his organization. Most other companies are trying to run the AI race with the same tools they brought to cloud and Toby is busy shortening the track and focusing on how he actually can get adoption with teeth. Toby made a really sharp observation on the podcast this week that stuck with me. He pointed out that the best chess game every year for the past 20 years has been played by machine versus machine and nobody watches those games. But everybody in chess knows who Magnus Carlson is. We don't actually care about the chess. It turns out we care about the humans playing the chess. Toby sees this as the key insight people get wrong about AI. The tools are instruments to be played. They're not replacements for the player. The craft still matters. The judgment still matters. What changes is the ceiling of what a skilled player can achieve. Look, if you've dug in this far, I want you to walk away with three things. First, please recontextualize that stock market activity. I don't know what role you play. Maybe you're a passive investor. Maybe don't invest at all. The memes are still there and the memes will get into tech and get into your company and affect you. The AI scare trade is creating mispriced assets and organizational chaos. Some of the companies getting hammered aren't going to face real disruption, but on a timeline measured in years, not in the weeks that the market is pricing. Meanwhile, the market isn't pricing in the buy side of any of this at all. What do companies do with the savings from a 40% reduction in software costs? What happens to the $42 billion that gets redirected from real estate commissions to home buyers? No one's investing in that. The doom narrative just doesn't have a place for it. It doesn't drive clicks. Second, recontextualize those doomer narratives, too. The bare case for AI is built on real economic forces. Demand side effects of income redistribution from workers to capital owners, potential savings gluts. But the conditions required for a full economic contraction, the thing that is making everybody panic right now are really extreme. And when you get an economist from the University of Chicago modeling out these scenarios and basically saying they are too unrealistic to hold in practice, don't read that as dismissiveness. It is some needed rigor. That is a great antidote to some of the panic going around in both investor and tech circles today. The doom narrative is useful as a policy warning. We should absolutely be thinking about how we can support job and career transitions. We should be thinking about broader capital ownership. But the doom narrative is not particularly useful as a career planning framework or as an investment thesis. It's it's a meme, right? It's 10 to 50 times more viral than the counter evidence and you should calibrate accordingly. Third, and this is by far the biggest one, map the capability dissipation gap as it applies to you in your situation. The most valuable thing you can do right now is not learn AI in the abstract. That's 2024 advice. That's table stakes. The valuable thing to figure out is where you sit relative to the exponential curve and the flat curve. Are you operating at the capability frontier? Are you testing new models regularly? Are you integrating AI into your real workflows? Are you building evaluation frameworks for your domain or are you kind of content at the dissipation rate? You're aware that AI exists. Maybe you use it occasionally, but fundamentally you're working the same way you did 2 years ago. The gap between those two positions is where economic value is concentrating in the next 2 or 3 years. And because social inertia is so strong, that gap actually isn't going to close as quickly as people think. The person who spent the last year building genuine AI fluency in their domain is therefore not just learning a tool. They're building an asset that compounds. Every model improvement makes that asset more valuable, not less. Because each new capability lands on a foundation of practical understanding that takes real time with the model to develop. The career move right now is to become the person in your organization who can walk into a room of panicking executives. And there's a lot of panicking executives right now. and say with genuine authority, I've tested this. Here's what AI can actually do in our actual workflow. Here's what it cannot do. Here is the implementation plan. Here's the budget and here's the timeline. That person does not exist in most organizations. The technical people understand the models. The business people understand the workflows but not the technical side. And the consultants, they just understand the frameworks and talk. But nobody can cross all three. And if you can bring all three of those together, you have an incredibly valuable skill set in 2026. The doom narrative is a useful warning. The boom narrative is a useful aspiration. We should study that, too. Neither is a useful plan for you or me or our careers. Your plan that that's the one that matters. It should be specific. Map which of your problems are reasoning problems. Point them at that model. Which are effort problems? Which are coordination problems? test which models handle which tasks in your real workflow like Toby does. Build the evaluation frameworks that let you immediately exploit each new model release. You are trying to collapse the gap between capability and integration in your domain because every month that gap stays wide is a month you're leaving returns on the table. Stop worrying about the doomer narrative. Do not pay too much attention to whatever the next investor-driven stock selloff is. I am sure there will be another one. Pay attention to the capability gap. Pay attention to where AI is going and how slowly it's actually getting adopted by society. That gap is the greatest generational opportunity anyone in the workforce is going to see. That is where you should be spending your time. Best of luck.

---

## 3. 50 days with OpenClaw: The hype, the reality & what actually broke

- **Creator:** Radek Sienkiewicz (VelvetShark)
- **URL:** https://www.youtube.com/watch?v=NZ1mKAWJPr4
- **Published:** 2026-02-20T22:34:46+00:00
- **Source type:** youtube (Tier 1)
- **Transcript:** 6,832 words
- **Relevance score:** 7
- **Matched keywords:** mcp(3), ai agent(2), automation(1), gpt(1)
- **Default tags:** ai-tools, building-with-ai

### Description

This is my 50-day OpenClaw review after running a self-hosted AI agent every single day.

In this video I show:
- 20 real OpenClaw use cases from daily life
- Discord channel architecture + per-channel model routing
- Markdown-first workflows with Obsidian + semantic search
- Background automations and health checks
- Server DevOps and coding from phone
- Cost optimization and multi-model routing
- What actually breaks (memory, compaction, browser automation)
- Security risks and how I mitigate them

This is not a first-week impression. I made the setup video featured in the official OpenClaw docs. I built Clawdiverse.com. I created a skill on ClawHub. This is a real 50-day field report.

All prompts for every workflow (copy-paste ready):
https://gist.github.com/velvet-shark/b4c6724c391f612c4de4e9a07b0a74b6

---

CHAPTERS:

0:00 Nobody has been here for 50 days yet
1:02 What is OpenClaw in 30 seconds
1:49 What 50 days actually looks like (week by week)
4:19 20 use cases across 6 categories

DAILY AUTOMATIONS
4:53 #1 Morning Twitter briefing that organizes my day
5:54 #2 "Moment Before" - daily AI art for my e-ink display
7:30 #3 Self-maintenance: auto-updates and backups while I sleep

ALWAYS-ON CHECKS
8:42 #4 Background health checks that caught my Netflix payment fail

RESEARCH & CONTENT
10:44 #5 Research agent that spawned 5 parallel sub-agents
12:09 #6 YouTube analytics I can query in plain English
14:51 #7 /summarize - any URL summarized in seconds

INFRASTRUCTURE & DEVOPS
15:28 #8 Server migration, zombie processes, and "go fix everything"
16:57 #9 Coding from my phone (but honestly, not for production)

DAILY LIFE
17:35 #10 Email triage in draft-only mode
18:01 #11 Calendar for me and my wife via WhatsApp
18:35 #12 Voice note transcription that actually does something with the note
19:25 #13 Coffee shops, snowboard boots, weather, reminders
20:59 #14 My agent helped my friend set up for 3 hours in Polish

DISCORD, KNOWLEDGE & CREATIVE
23:10 #15 Why I migrated from Telegram to Discord (biggest upgrade)
26:02 #16 Discord bookmarks replaced my Raindrop subscription
27:24 #17 Obsidian + semantic search across 3,000 notes
29:21 #18 The WordPress rickroll honeypot
31:02 #19 Excalidraw diagrams via MCP
31:53 #20 Home automation with Home Assistant (in progress)

COMMUNITY & GETTING STARTED
32:35 What the community is building
33:46 Starter pack: 3 workflows to start with today

THE HONEST PART
34:29 Memory loss and context compaction
35:59 The cost reality
36:47 The "what do I use it for?" problem
37:49 Tasks that still need babysitting
39:20 Security is real (and here's how I handle it)
40:24 My own failures and what went wrong
42:03 My 50-day scorecard
43:43 What surprised me after 50 days
45:37 The verdict: should you use OpenClaw?

---

MY TOOLS & RESOURCES:
- Clawdiverse.com (community use case directory): https://clawdiverse.com
- OpenClaw cost calculator: https://calculator.vlvt.sh
- OpenClaw official docs: https://docs.openclaw.ai
- OpenClaw security guide: https://docs.openclaw.ai/gateway/security
- ClawHub security check skill: https://clawhub.ai/TheSethRose/clawdbot-security-check

MY OTHER OPENCLAW VIDEOS:
- Full setup video (in official docs): https://www.youtube.com/watch?v=SaWSPZoPX34
- I cut my API bill by 80% with one config change: https://www.youtube.com/watch?v=fkT41ooKBuY

---

Drop your favorite use case in the comments. I want to hear what you're building.

---

OpenClaw review, OpenClaw tutorial, OpenClaw setup, self-hosted AI agent, always-on AI agent, AI agent workflows, OpenClaw Discord setup, OpenClaw Obsidian, AI agent security, AI agent cost optimization, ClawHub, ClawdBot, MoltBot

### Full Transcript

Most OpenClaw videos right now
are either first-week impressions, or set up tutorials, or showing use
cases after three days of usage. Nobody can tell you what happens
after the first month, because they haven't been there yet. I have. Every single day. For over
50 days. Through every single iteration of this tool: when it was ClawdBot, when it
was MoltBot (which I refused to call it that) and when it
is now OpenClaw. I made the setup video that ended up in the
official OpenClaw documentation. I built Clawdiverse, the community
directory of use cases, and the most common post on Reddit is still: "I set up OpenClaw, but I
don't know what to use it for." This video is the answer: 20 real use
cases from my daily life, plus the honest truth about what breaks, how
it breaks, and how to deal with it. Quick context for anyone new. OpenClaw is an always-on AI agent
that runs on your server, your VPS, a Mac Mini or even a Raspberry Pi, 24/7. It connects to your messaging
apps that you already have on your phone, like Telegram,
WhatsApp, Discord, iMessage. If you need the full setup,
I have a video for that (link in the description) This video is about what you
*do* with it once it's running. And a super important thing: Every single prompt for every
use case I'm about to show you is in this document (also link in the description) It's ready for copy-pasting
and using with your own agent. Let's go see how it all works. Before the use cases, let
me walk you through what 50 days actually look like. Because the way you use
this thing in week one is nothing like in week seven. Week one is novelty. You're asking it random questions,
testing what it can do, kind of using it like a ChatGPT. But one decision I made from day
one saved me over and over in coming weeks markdown-first. A lot of people build their workflows
around SQLite, databases, vector stores, custom schemas. I put everything in Obsidian from
the start in plain text files. Any person can read
them, I can read them. Any program can work with them. It's just plain text when the next
thing after OpenClaw or the next iteration of OpenClaw comes along. My data moves with me in five seconds. No lock-in, just files. I can do anything with them. By week three, you start
building automations, warning briefings, background checks. It starts being more useful and
you can feel it in week five when you start using it more and more. You hit a wall, everything
is in one conversation and everything is mixed together. Research, bookmarks, analytics,
daily tasks, and there's more and more context pollution, and that's
when I learned to separate contexts. I now have one Discord
channel per workflow. This way, research doesn't
bleed into analytics. Bookmarks don't pollute daily
assistant tasks, and I'll show you the full architecture later in week seven. Another lesson. Not every channel
needs the same brain. You need to match the
model to the task. So Opus is for deep thinking and
cheap models are good enough for routine work, and that's when
costs stop being scary and crazy. And by week eight and onwards, it
stops being a chatbot and becomes a system and lesson from this. Is three important principles after 50
days that I would recommend everyone is to have everything in markdown
from the beginning to separate context and to match the model to the task. Here's what we are covering, 20
use cases across six categories, and I'm going to move fast, real
screenshots, real conversations, real results, and if you only steal
three ideas from this entire video. I'll tell you exactly which
three closer to the end of the video, so stick around. It's gonna be worth it. Most of my setup runs in Discord
now, which wasn't the case from the beginning, and I'll show the
channel architecture and model routing later for now, starting with
the things that run every single day without me touching anything. Every morning at 7:00 AM my
agent scans a bunch of tweets from accounts they follow. Picks the top 10, writes
them to my Obsidian notes. Appends any video ideas to my shipping
backlog and sends me a summary. I wake up and I don't need
to scroll through the feed to know what happened. The most important and interesting
part is already waiting for me and it's tailored to my interests
or what I'm currently working on. So today's stories are about
Anthropic and OpenClaw, new Gemini model dropping. And this is already saved in
Obsidian, and a couple video ideas are also added to a note in
Obsidian, and the value compounds with time because it doesn't just
summarize, it connects the dots. Like, Hey, this tweet about
model pricing connects to your video idea about cost
optimization, that kind of thing. But briefings are the gateway drug. Everyone starts there. Let me show you what comes after. This is my favorite use case. Every morning my agent fetches
Wikipedia's 'On This Day' events, picks the most impactful historical
event and then generates a woodcut style image showing 10 seconds
before that event happened, like the iceberg approaching the Titanic or
the apple, about to fall on Newton's head, this kind of stuff, and then it
pushes to my TRMNL e-ink display. In a mystery mode, it only
shows the date and location, and I need to guess the event. Sometimes it's obvious,
sometimes it's a lesson for me. So for example, this is
February 1st, 2003 over Texas. This is seconds before
shuttle Columbia Disaster. Where it blew up, and these are the
kind of images that it produces. For example, this is just before
the last public appearance of the Beatles on the rooftop. And this is the beheading of Mary
Queen of Scots, which changed the course of Europe's history. And this is part of my daily ritual. Now I walk past the display, look at
the new picture, try to guess what it is, learn something new about history. Every single day a new
one is waiting for me. This is maybe less of a use case and
more like part of my daily routine and also an important part of the routine. So I have two cron jobs that I now
never think about every day at 4:00 AM when I'm sleeping, my agent updates
its own skills from ClawHub updates. The OpenClaw package itself
restarts the gateway, and then reports the results. When something breaks during an
update, it tells me and every day, half an hour later, a separate
cron job backs up everything important, all configuration
files, workflow directory, crown schedules, SOUL file, MEMORY files,
skills, everything that defines how my agent works or who he even is. So if my server dies tomorrow,
I'm back up in half an hour, not rebuilding from scratch, not trying
to remember how I configured things. Just restore and go, and
that's the whole point. It just runs. And if something goes
wrong, I can recover easily. And just as a reminder, all of
the prompts to achieve all these tasks and use cases are in this. Just on GitHub, so you can
just go there, copy paste to your agent, and be good to go. Always on checks, like for
example, background health checks. This used to feel like the headline
feature, but now I think of it as background guardrails useful, but
it's only one piece of the system. My agent runs routine heartbeat
checks every 30 minutes. And I can define what it
does every 30 minutes. For example, it scans my emails,
checks my calendar, monitors my services, and it catches
things I would have missed. For example, one time it just sent
me this message out of the blue about a Netflix payment failure,
and I had no idea about it. It found it during a
routine email scan. I paid it five minutes later so I
could safely watch more TV shows. Or rather, I don't
really watch TV shows. I don't have time. Rather, my kids could safely watch
more hunters and catches a lot of other things like domain renewal
coming up, or a meeting I was about to miss, or a relevant newsletter
article that it found during a Sunday heartbeat scan that connected to a
video that I was currently working on. And none of these were
tasks that I assigned. My agent just found them. It knew what I'm working on and
the things that would normally fall through the cracks. That's exactly what gets
caught by the agent. And an important piece of setup
here is that the agent is in a draft only mode for email. It can read my inbox. It can flag what's important. It can even draft responses,
but it cannot send it. I need to review and send the email. And, and it doesn't happen
without my approval. For now, there's no robust
general solution yet for prompt injection via email. So I treat inbox content as
potentially hostile research and content creation. And I love the research part
of working with OpenClaw. It just appeals to me to do
it on the go when I have ideas and I want to discuss it. For example, for this video, I told
my agents to research what people are doing with OpenClaw, and then
it spawned five parallel sub-agents. One Search Twitter, one crawled
Reddit, one hit Hacker News. One analyzed YouTube competition and
one scraped multiple different forums. They all ran simultaneously
and produced massive structured research files. Each one of them with competitive
analysis ranked video ideas, full outlines, with source links, and
it took them minutes, not hours. The research files for this
video alone produced by these agents are over 50 pages. And it gave me a clear understanding
of what people are doing. And more importantly, not yet doing
with OpenClaw and what I need to focus on to give the most value. And it's not just for video research,
it's for any kind of research. You can define how broad it should go. How fresh the data needs to be. Is it the last seven days? Is it the last three months? And then let it run and come
back with results so you don't start from scratch and you have
a solid base to start with. And speaking about YouTube, I have
two dedicated Discord channels related to YouTube creation. The first is my YouTube
analytics channel. It has access to all my stats via
the API, and I can query anything in. Natural language, like how did my last
five videos compare on retention or which topics get the most engagement? Or compare my OpenClaw videos
to my Claude Code videos, and then it slices and dices the
data anyway I want on demand. It's like much more flexible than
YouTube studios built in dashboards, and it also synthesizes the numbers. And gives ideas and
advice based on that. You're not getting this
from any kind of analytics. For example, this was just a random
question how my last two weeks went, and then it gave me the view numbers. It showed me when I published the
videos to understand where was the spike, how it goes down, where is the
uptick, what were the key insights? What was the watch time, which
I didn't even ask about, and what was the bottom line? So everything related to what I
care about, which I didn't even ask. It just knows and
gives me the details. As granular as I want them to
be, and the second channel is my video idea research channel. Throughout the week, I drop links,
articles, tweets, half warm thoughts, what I want to include or what I don't
want to include in the next video. And then the agent goes and
enriches those snippets. It connects the dots across different
sources and builds context over time. And by the time I sit down to work on
the video, I don't start from scratch. I have weeks of accumulated
organized research waiting for me, and this exact video is
a great meta example of it. The research for this video
accumulated over probably like three weeks, maybe even more. Links from Reddit, insights
from Discord, competitive analysis, audience pay
points, all fed over time. As ideas came to me as I got
some data, as I got some numbers. And then everything got organized
and connected by the agent so that I have a solid baseline to start with. And having those two different
channels for YouTube are important because the separation matters,
analytics context, stays isolated, and then research builds over weeks
without polluting other conversations. Next is summarizing
practically anything. Throw any URL at it, like an article,
a YouTube video, a research paper, A PDF, and you get a summary back
and I use it multiple times a day. For example, let's
summarize my last video. /summarize and a URL and it goes
to work, and a few seconds later I get the summary. What's the video about? What's the core message? What are the key numbers? What are the practical steps? And from there, I can tell it to
either expand or this is good enough, or maybe save it to an Obsidian note. I can do anything. Infrastructure and DevOps. My agent migrated me from the alt
ClawdBot package to OpenClaw. It found both packages
running at the same time. It killed a zombie process
running at 160% of CPU. It deleted the old system services
fixed seven days of silently broken cron jobs that went unnoticed and all
from one message, go fix everything. It's also connected to my VPS server
via API, and I host everything there. And the first time I connected
it, it reviewed more than 20 apps. Running there, flagged
some unhealthy services. Did some fixes and right now
I can do anything with it. I don't need to SSH to my server. I can check the health of the whole
server or specific apps and it can fix the apps, restart the apps. I have basically like a remote
control to my whole server just in my Discord, and again, about security. There is an allow list of commands
that it can do, and there's also a deny list of commands
that it cannot do by itself. It has to ask my permission first. Works pretty well and I
haven't had any issues so far. It allows me also to
code from my phone. I can tell my agents to go fix a bug. Build a feature, create a PR, all
from my phone while I'm away from my desk, and you don't need your laptop
because your AI has your laptop. But to be completely honest,
I do not use it for production as my main way of programming. I only use it for some quick fixes
or simple ideas that come to my mind, and I wanted to test them on the go. For my main workflow, I still
use Claude Code and Codex on my desktop Daily Life assistant. And to start with, what everybody's
doing is email, triage and draft replies beyond the proactive
catches that I already showed you. The day-to-day email workflow is
simple that it reads my inbox. Flags what's important
and drafts responses. I review and send. This way I can easily reply to
an email the same day rather than during the weekend when I have
more time to go through my inbox. This one is useful. Calendar and family
management, not just for myself but for family as well. For example, I have a group
chat on WhatsApp this time. Because my wife doesn't use
Telegram or Discord, and in WhatsApp group, I can drop
messages like Schedule Dentist Thursday at 3:00 PM and it's done. And my wife can add events,
check the schedule, get reminders all through that same
group chat and chat interface. It is simple, but it
is helpful as well. And once it works, you start
asking like, what else can you do? Voice note transcription. This is something that I always
thought I would be using on my phone because I can dictate stuff and it's
there, but when I tried it, I never went back to listen to those messages. Now it can actually
be done automatically. So for example, I send a voice
message on WhatsApp, telegram or Discord, and it transcribes it
with Whisper model and responds in text, quick thoughts while driving. Shopping lists, while walking,
meeting notes on the go. I just talk and then
it handles the rest. And if it's something important, it
puts it in maybe a file in Obsidian. Or sends a message or drafts
an email so that I don't even need to go back to those notes. They are already taken care of
and more small stuff from daily life, like find me a good coffee
shop within walking distance. It uses Google Places API, so it
has access to ratings reviews. Walking distances from my home, what
people like or dislike in that place. What are the prices? So it can do much more in seconds
than I would do myself, and it's helpful for one of searches as well. I was searching for snowboard
boots to go snowboarding, and I have a large foot, so it's
an issue to find my size. So it serves multiple shops. Where I could buy one, it
checked online whether they had my size and it gave me three
options where I could go and buy. So I went to the first one, bought
one, which were not available anywhere else in the city or almost, and. Took me 20 minutes
for weather forecast. It doesn't tell me just like
tomorrow is gonna be sunny. I have it on my watch, but it
did warn me once, for example, about minus 19 degrees cold snap
coming up, which is like minus two, minus three Fahrenheit. And that was quite helpful. And then there are reminders
about maybe rehab exercises with snooze capability meeting
reminders before my weekly calls. These are all small things on their
own, but they do add up and they are. Genuinely helpful in everyday
life, helping friends with their technical issues and problems. And this one is personal. So my friend wanted to set up his own
OpenClaw after watching my videos, and I added him to a WhatsApp group
with my own agent, and myself and my agent spent three and a half hours. Guiding him step by step through
the entire setup in a non-English language, NPM permissions, WhatsApp
linking daemon configuration, cloud authorization, debugging like the
whole saga, and it was all done either via asking questions or
posting screenshots in the group chat. And my friend would take
a screenshot of an error. My agent would read it and explain
the fix, tell what the next step is, and that's how it went. Well, previously, I would have
had to answer everything myself. Now my agent answered 90% of
the questions, and I just added context from my own experience
to some of the answers. After a few days when my friend
installed his own instance, the questions become more rare, and
then they stopped because he switched to asking his own agent,
and I didn't have any technical questions from him in weeks. And I only hear updates from
time to time as to what kind of automations he's able to do. And for a non-technical user
who runs an accounting company, I'm genuinely amazed how quickly
and how far he has gone already. I also have a group chat
with my wife and my agent. And it adds fun to our conversation,
some jokes or second opinion on things that we are discussing. And once my wife texted in
that channel to tell Rad to play with me when I was too
busy talking to my agent and. I left what I was doing and we played. And the last part is about
my evolution of how I am using OpenClaw today. So migrating to Discord, building the
knowledge base and some fun projects. Migrating to Discord is one of
the biggest changes in my setup over the last 50 days, and I
think it's the most important thing that I can share with you. So first I started on WhatsApp
and then quickly moved to Telegram because it just had more
features and was just better. And most people started
on Telegram too. But around week five, I
started hitting a wall. Everything was in one conversation. My YouTube stats were
mixed with my bookmarks. My research was mixed with
my daily assistant tasks. And context was getting polluted
and it was hard to start finding things or getting back to
something that I saw previously. So I migrated to Discord and now
it's night and day difference. Instead of one conversation or
multiple separate agents like I had before, I now have channels and each
channel is a dedicated workspace. With its own context, there's a
channel for YouTube analytics, a channel for video idea research, and
inbox channel for bookmarks, a general channel for daily assistant stuff. And each one stays focused on
just that one task and area. And the important part is that I can
set different models per channel. For example, my YouTube stats
channel can use a cheaper model because it's mostly data retrieval. My research channel uses Opus because
I need deep thinking during research. My inbox channel uses a fast
cheap model because it's just. Processing links, summarizing
and categorizing, and that's how we keep costs down. Matching the model to the task,
not the other way around, and not overpaying for expensive models
for tasks that can very well be done by a cheaper, smaller model. And switching to Discord
wasn't about the app itself. It was about the architecture. I would prefer staying on Telegram
or WhatsApp, but this works better. It separates contexts. It has cleaner conversations, it
has better formatting, and you have per channel models, and you
have lower costs because of that, and with this setup of channels, I
always know where to go for what. And I'm careful about
adding more channels. I'll probably have more with time,
but I only add a new one as and when I really, really need it. And that's what 50 days looks like. You stop using the tool and start
designing how you interact with it and start getting more value out of it. Bookmarks, bookmark is a fun. I used to use Raindrop for bookmarks. I had a paid subscription. A separate app, manual tagging,
putting everything into folders. And as I was using that, I
even built a system that was regularly pulling the bookmarks
from Raindrop using the API and putting them in my Obsidian. What's more, I even built a
skill for OpenClaw to manage. Bookmarks from Raindrop and to
enrich them and to create tags automatically and to pull to
Obsidian, just the whole thing. But at some point I realized
that I don't need an intermediary, which is Raindrop. I can do it myself directly. So now I just drop any link into
my Discord inbox channel, uh, and the agent does the rest. It summarizes the content. It extracts key information. It creates text for every bookmark,
and over time builds a knowledge graph, connecting related links,
all in markdown, all searchable, all building context over time,
all in Obsidian, and it runs on a cheaper model because link processing
doesn't need Opus and I canceled Raindrop and I don't miss it. Obsidian and knowledge base. As you might have noticed already,
most of the things that I do with my agent in some way or in another
end up in Obsidian, and here's where the markdown first thing pays off. I have almost 3000 notes in Obsidian,
and my agent indexes all of them every night using QMD for semantic search. Semantic search means that
I can ask questions like, what did I decide about? Thumbnail design last month, and
then it finds the exact note. It's not keyword matching,
it's semantic understanding what I'm asking about. So for example, what's the overarching
theme in my last five videos? It lists the five videos and
says that the overarching theme is making AI coding tools
actually useful in practice. It's not something that can be
found by searching for keywords. And as I work more and more with
my agent, as I forward random things, random thoughts, random
links, ideas throughout the day, they go into Obsidian as markdown
files and the agent organizes them, and then every night at 3:00 AM. The entire index rebuilds,
and then I have this nice semantic search available to me. When I first set this up, it
took a few minutes to build the initial embedding index because
it was about 3000 or then two and a half thousand nodes, and now it
updates automatically every night, and it takes about 10 seconds. People call this second brain stuff. Mine is always on, does all the
organizing for me and everything is in plain text files that I own forever. No database, just markdown files
and semantic search on top of it. This one is funny. Like one day I was checking out
my analytics on my website, velvet shark.com, and I noticed that
there were many hits to a WordPress logging page, but my website is not
on WordPress, so I asked my agent to set up a honeypot on my website,
like a fake WordPress logging page. That re rolls anyone who tries to log
in and it built the page, created a full pull request and deployed it. And when I went to this page, it's
not a WordPress page, it's a fake page that you can enter anything
you want in here and try to log in. Yeah, you get the idea. To be clear, this is purely on
my own domain, catching bots that scan for WordPress admin pages and
try to hack into WordPress, uh, websites Don't use this pattern
to impersonate any real services. I'll probably have it for a few days
or a couple weeks, and then I'll get bored of it and I'll remove it. But it was fun to just think
of something like type a few sentences on my phone and have
this fun, just like party trick. Live on my website, so one
minute the agent is managing your infrastructure and the next, it's
setting up some like fun pranks, and that's the fun part of it. My agent also can create diagrams
and graphs automatically through the Excalidraw MCP integration,
like architecture diagrams, flow charts, concept maps,
it generates them on the fly. During conversations, and then
I only need to change a few things, maybe move stuff around
and maybe add a few words. Like for example, this chart
that was presented earlier, it was done completely by my open
cloud instance for this one. I didn't have to
change anything at all. Oh, maybe I changed the
colors of the models here. Nothing else. So if you need more than just
creating text or some copy and you need to visualize a workflow, you
just ask and it draws for you home automation, this one is in progress
for me currently and I'm showing it because it's where my setup is
heading next as I'm setting up home assistance for smart home control. I have two home assistant
voice preview edition devices for voice control. So full home automation can be
managed through OpenClaw, like light control climates, routines,
all through chat or voice, not even having to write anything, and it's
closer to what Siri should have been. Than anything that Apple
has shipped so far. So that's 20 use cases from my daily
life, but I'm not the only one. The community is doing
like incredible things. People are running like actual
businesses through their agents. Customer quoting, invoicing, lead
generation deal, closing, SEO, and people are managing smart homes with
home assistant controlling 3D printers connecting their cars even like their
Teslas, and they're making phone calls through their voice agents. Connecting robots with cameras,
fact checking conference speakers in real time, and even deploying
code from the Apple Watch. I haven't done that yet,
but sounds interesting. And I built Clawdiverse.com. To catalog all of it, link in
the description and the range is wider than I expected. And if 20 use cases that you
already saw is not enough, you can find many more on Clawdiverse.com. But this video is about
my own experience. So let me tell you
what nobody else will. But before going to the honest part. If you installed OpenClaw today
and you are overwhelmed, start with these three things, one draft only. Email triage With urgent alerts,
it catches things that you miss. Two, a daily briefing that
writes to a markdown file. Morning context, organized
automatically for you as you start the day. And three one Discord inbox. Channel four bookmarks. Drop links. Agent enriches them, replaces a
paid app immediately and builds your knowledge base over time,
which is more and more valuable as you go do these three things for a
week and you'll start getting it. Everything else grows from there. Okay. What doesn't work well? No sugar coating. Number one, memory loss and context. Compaction, my agent forgets
things sometimes mid conversation. No warning, like it just
drifts away for a second. It's not there for a while. Then replies to something
from three sentences back and then says it's still there. Everything is fine. And this is the number one
technical frustration that people mention everywhere. Silent compaction. The context window fills up. The agent compresses the conversation
and important details disappear. The mitigation is to
write everything to files. Use QMD for semantic search. Use compact manually before the
system does it automatically. But it's still rough chat. GPT at least warns you. When context is getting long
OpenClaw just silently compresses and moves on. You can at least type a status
command to see how much context is left, but that's not ideal. For example, here it
shows that I have. 35% of context used up and no
compactions yet in this session. If I see that context is filling up
and it's more than 50%, I can start a new session and then it starts
with a fresh context from zero. Next, the cost reality, I covered
this in depth in my cost optimization video linking the description. The quick summary is that Opus
is amazing, but expensive, and the answer is multi-model routing. Use opus for the real thinking
and cheaper models for heartbeats or sub agents. And my Discord channel setup
is built around this. Each channel uses the model that. Matches its task. And you can also set different models
for heartbeats or other simple tasks. And my cost calculator, where
you choose different models for different primary model or heartbeat
model or sub-agent model shows how much you can save and it's real
money and you need to plan for it. Another problem is,
what do I use it for? Problem. This is the most common
post on subreddit. It's what people ask in Discord. It's what people post on Twitter. And the harsh truth is that
you need to realize one thing. If you don't have workflows
to automate, OpenClaw won't invent them for you if you
don't manage your calendar. And AI calendar manager won't
help if you don't check email ai. Email triage is pointless. So. It can help you if you have what to
help with, and the people getting the most value already had systems
OpenClaw made their systems easier, faster, and automatic. But the systems were there
that said, this video is the answer to, what do I use it for? I just showed you 20
ideas plus a starter pack. Pick three, start
there, grow from there. Next is tasks that need babysitting,
like complex, multi-step tasks, still fail or need pushing. Browser automation is still flaky. Sessions, extensions drop. The agents sometimes go silent
mid-task, and you have to ask like, Hey, how's it going? It works better as an assistant than
an autonomous agent, at least for now. The simpler the task, the more
reliable it is, and the more complex, the more you need to check in and
to give more detailed instructions for losing context and for
compactions, it helps when you explicitly tell to launch subagent. This tweet from Matt shows it nicely. So this is the main agent, the
orchestrator, and it is launching subagent, and each subagent
gets its own context window. So while doing research
or performing tasks. Those sub-agents do not into your
main context window, and your main agent only does coordination
instead of all the work. And this works wonderfully. And this is also how I do all,
almost all my research where the orchestrator launches subagents
and then just like gathers. All the content, all the research,
and then synthesizes the results and gives the final output. Next, and I will never
stop highlighting this. Security is real. There is no full proof general
solution for prompting injection yet. So I treat inbox content as
hostile or potentially hostile. And if your agent
reads untrusted emails. Someone could craft a message
that makes your agent do something that you didn't want to. The way I solve it is not exposing
anything to the outside world in terms of connectivity and having
all my machines on Tailscale. Then draft only email mode approval
needed for destructive actions. And running security audit
regularly for security audit. Either use this from ClawHub, ClawdBot security check, or just point your agent to this security page
in OpenClaw documentation and. Tell it to implement and verify
everything on this page and if something is not done on your end to
implement these security measures. And lastly, my own failures. I want to be specific about
things that went wrong for me. And to be honest, most of these were
closer to week one than week seven. Because the whole system is
evolving and improving rapidly. But for example, daily update. CR job was using the old ClawdBot
commands after the migration to OpenClaw failed silently for days. I didn't notice and missed
a few updates because of just a simple package. rename. Authentication,
debugging with my friend. Three plus hours of false
starts, credential comparisons, complete reinstalls. The setup is sometimes genuinely
hard, but luckily, my own agent was doing 90% of debugging,
so at least that helped. Context. Compaction hit me a few times in the
middle of a complex research task. Now I'm more aware of that. I'm mitigating that, so I'm
getting it less and less. The Discord migration itself took
also some iteration, getting the right channel structure, figuring
out which models work best, where, how to set up different
models to different channels. Migrating context from
Telegram conversations. All of that wasn't like
super easy or instant. It took about a week of tweaking
to get everything right and none of this made me stop using OpenClaw. But nobody else is telling
you about this stuff. Everything seems rosy, which
is not always the case. Okay, so let's do some scoring. Let me put a number of it from
a few different perspectives. In terms of setup difficulty, it's
about seven out of 10, which is intentional because it's still a work
in progress and it might be dangerous if someone doesn't know what to do. So it's intentionally
not being done easier. So if you know how to go
through, set a process, you are at least somewhat technical and
you are aware of the dangers. Daily value once running and once
you have your own setup tailored to your needs, easily nine out of 10. Reliability for simple workflows. Eight out of 10. Very good. Four complex, especially
browser tasks. Still hit or miss five out of 10, and
there is a lot still to improve there. Best feature, at least for today for
me, is Discord channel architecture. With per channel models, the biggest
unlock is file-based memory with markdown-first files with nightly
semantic indexing and retrieval. And I'm building up my knowledge
base day after day, and it's more and more useful for me with time
and it's only getting better. Most quietly useful is
background, heartbeat checks. You can start simple and as you think
what else you might be checking. Every once in a while you can
add more to your heartbeat. And the biggest pain for now is
still memory and context compaction. What surprised me is first
that it gets better over time. The more context it has in its cell
file and in its memory file and folder, the better it understands you. And after 50 days it anticipates what
I need, but even internalized like tiny style preferences over time. The shark emoji, the language
switching between dms and groups, it learns you over time and it can easily
surprise you how well it learns you. So when you start in week one with
what seems like a simple tool, by week three, it feels almost
like an infrastructure already. And by week seven, you reorganize
your workflow around it. And that's when it stopped being a
chatbot for me and became a system. Another surprise for me was that
it replaced more than expected. I expected it to replace ChatGPT,
but it also replaced parts of Zapier, raindrop parts of YouTube, studio
analytics, parts of web analytics, and half of my Apple shortcuts. And for personal use, I'm not
paying for Zapier anymore. I'm not paying for Raindrop anymore,
and I don't miss either of them. And the ecosystem is not
just growing, it's exploding. There are thousands
of skills on ClawHub. There are hosted services launching
for non-technical users, which still might not be the best idea,
but it's there and the tooling and security is maturing very fast. And when the security will be much
harder and when the setup gets eventually easier, everyone will
be running some version of this and the capability is already there. The onboarding isn't
by design for now. So would I recommend OpenClaw? Yes. But with some conditions, yes. If you have workflows to automate. And you are comfortable with
a terminal and you understand the cost implications not yet. If you want something that just works
out of the box, you are not technical or you expect fully autonomous AI
that never needs babysitting and does stuff for you start to finish. I feel like we are currently using
maybe 5% of what this can do. And the ceiling is like
absurdly high, but the floor still has some holes in it. And if you are okay with
this trade off, if you like building towards something. Then this is the most fun like I've
had with technology in years, and I, I keep having fun every day with it. So that's my journey. 50 plus days every day through
ClawdBot to MoltBot, to OpenClaw, rebrand saga. Now OpenAI and Foundation Shift. I've seen the community grow from
a few hundred to tens of thousands. And I've seen my bot fail. I've seen my bot kill itself. I've seen it forget what
it was doing, but I've also seen it migrate my server. Research the entire video with
parallel agents, help my friends set up for three hours, or generate art
that makes me smile every morning. So for me, I'm not going
back and that's the strongest endorsement I can give. As always, all links
are in the description. There are always all the
prompts for all the use cases, some bonus security tips, cost
optimization tips, my setup video. If you want to get started, the
cost calculator, the official documentation, and once you
watch it and start doing and using those prompts, drop your
favorite use cases in the comments. I want to hear what you're
building, what you are trying or maybe failing, and subscribe. If you want more practical ways to
use AI and now go build yourself a system and have fun doing it.

---
