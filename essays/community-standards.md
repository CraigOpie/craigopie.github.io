---
layout: essay
type: essay
title: StackOverflow is Littered with Garbage Questions
# All dates must be YYYY-MM-DD format!
date: 2020-01-30
labels:
  - Technical
  - Smart Questions
  - Community Standards
  - Sustainability
---

<img class="ui large left floated image" src="../images/sustainable-future.jpg">

## The three ‘R’s of sustainability take on a new meaning for software engineers

Reduce, Research, and Re-attempt is crucial to effective questioning techniques necessary to save efficient engineers countless hours scouring through the landfill that StackOverflow has become.  Reduce by not posting repeated topics that have already been asked or answered.  Research by going to official software documentation or man files.  Re-attempt the problem after researching the issue and searching for similar questions on StackOverflow and your favorite search engine.  Community enforcement of the three ‘R’s to questioning techniques should be the only acceptable climate change in today’s technological society.

## The sustainability proclamation to overcome temptation

Sustainability is defined as “serving the needs of the present without jeopardizing the needs of the future.”  In technology, this directly relates to storage requirements, also referred to as memory, and time.  As scientific knowledge improves, the ability to store information in a more dense form factor increases; however, this often results in more data that must be sorted and searched to find results to a specific query.  Therefore, time has become the most valuable resource for engineers and employers and it is our generations responsibility to protect time for ourselves and our successors.

Reducing repeated posts for a topic improves search results by returning questions that are specific, have been solved, and are readily identifiable by search engines.  Our generation often seeks instant gratification and resolution because the advent of the internet has enabled us to have world-wide communication with professionals and people experienced in any topic - without having to disclose our own identity to the public.  As a result, we suffer temptation to ask ‘garbage’ questions and aren’t considerate to how others experiencing similar or identical problems may find resolution using our own questions.

It is rare that we come across an issue that has not been experienced by someone else, but there are times that unknown issues are more susceptible to engineers and usually follow software updates, upgrades, or changes.  It’s important that we are cautious and deliberate when asking new questions.  The title should be short and to the point while summarizing the specific problem.  The best way to do this is to pretend like you are talking to a busy colleague or professor and try to describe your issue using keywords or error messages while highlighting how your issue is different from others.  Additionally, just as you would want to impress a colleague or professor, your spelling, grammar, and punctuation should be remarkable.  Each aspect of writing the title and body of your question should be focused on streamlining the readers experience and maximizing the effective use of their time.

## Complicated problems deserve deliberate resolution

Most complicated problems will not be solved by spending a few seconds performing a Google search.  Sometimes, problems stem from a lack of understanding syntax or proper use of libraries.  Issues regarding a lack of knowledge should be resolved through research.  Reading the applicable documentation and frequently asked questions can usually solve most difficulties.  Other times, clarification from co-workers or interacting with pertinent google groups may be necessary to fill in knowledge gaps but should not be over used.  Lastly, reading available source code can be very beneficial and allow you to fully understand how a library is executing specific functions.  Becoming the subject matter expert is usually ideal but impractical; instead, become knowledgeable enough to have confidence and proficiency with the issue at hand.

<img class="ui medium right floated image" src="../images/sustainability.jpg">

Confidence and proficiency means that you are able to identify relevant information necessary to solve the problem.  This means identifying the appropriate community, and community expectations, to submit your question.  Ensure your question is on topic and posted in the correct portion or subsection of the forum or site.  An example of asking a question in the wrong forum can be seen <a href="https://stackoverflow.com/questions/59980621/need-ideas-in-developing-a-script-to-extract-links-from-a-website">here</a> as the author asked an opinion based question on a focus driven forum.  Start your question off by explaining the environment, your process, steps you took while trying to debug, and any related websites or documentation to support your research.  Afterwards, providing relevant portions of your code where issues present itself is extremely helpful, but including expectations and results about your code will result in more accurate and timely assistance.  Be sure to include applicable line numbers and error messages when describing your problems.  A great example of proper code insertion can be observed <a href="https://stackoverflow.com/questions/15118057/crazy-behavior-in-jquery-date-picker">here</a> as the user asks for assistance with a jquery date-picker. 
```javascript
$(".date-picker:not('#act_event_ends_on')").datepicker(); 
$('#act_event_ends_on.date-picker').datepicker({ startDate: '0', endDate: '+180d' });
```
The author identifies a snippet of applicable code and includes it with text describing how it is handled before including the handlers code.
```javascript
<input class="required date-picker input-small align-center" id="act_event_ends_on" name="act_event[ends_on]" size="30" type="text">
```

Understand that what may be urgent for you is not urgent for others.  Treat others with courtesy and respect and never assume you are entitled to an answer; indeed, community support is free support and it is important to understand you are not paying for a service.  Overconfidence and rudeness will most likely result in harassment and could escalate to moderators banning your participation or usage of the site.

## If at first you don’t succeed…

Thomas Edison is widely known for saying, “I have not failed.  I’ve just found ten-thousand ways that won’t work.”  Edison analysed, researched, and reattempted his projects until they worked.  Similar to Edison, we must take a critical approach to our own work, process, and indications to succeed.  To do this, we must first visualize the goal of the project and communicate that goal to everyone involved.  Having a common goal allows participants to apply diverse perspectives towards accomplishing milestones and fully understand a vision towards the end result.  This is extremely helpful for someone reading source code and allows a macro understanding of the function, class, or module.

Next, describe the symptoms of the failure and not the failure itself.  This allows you to have a broader perspective of what may be causing the issue; moreover, this prevents having a misguided approach to solving the problem.  Furthermore, chronological descriptions of the symptoms allows understanding as a story.  This enforces a visual breakdown of the issue which allows comparison between what actually happened versus what was supposed to happen.  The best approach to accomplish this when dealing with compilation or debugging is utilizing verbose mode or other diagnostic options available for with the program.  Having a log that steps through each piece of a program will paint the clearest picture allowing comparison before and after changes in the source code.

Most importantly, when the solution is found, be sure to identify the solution to so that everyone understands the solution exists.  This is very helpful in forums such as Stack Overflow because the solution is clearly moved to the top of the suggested resolutions and allows others to identify the process that corrected the symptoms.  Having a brief failure analysis allows everyone to review the symptoms, understand how the identified failure would correct those symptoms, and stress the importance of the solution for other projects.  This may include a process to prevent a similar failure from occurring again.

## Community standards do not maintain themselves

Enforcement of the three ‘R’s to questioning techniques is the only way to ensure the future generations’ time and space will not be jeopardized or wasted by unintelligible questions that have a high search engine index due to the number of people repeatedly visiting a forum thread to a common problem with no useful information.  Community enforcement demands each of us to become familiar with community standards, demonstrate community standards, and educate others about community standards.  A'ohe hana nui ke alu 'ia is a Hawai'ian phrase that translates as “no task is too big when done together by all” and is a demonstration that sustainability is the responsibility of a community.  Our community’s climate change beings with you.


### Work Cited

Raymond, E. & Moen, R. (2014, May 21). How To Ask Questions The Smart Way. Retrieved January 30, 2020, from http://www.catb.org/esr/faqs/smart-questions.html

Stack Overflow. How do I ask a good question?. Retrieved January 30, 2020, from https://stackoverflow.com/help/how-to-ask
