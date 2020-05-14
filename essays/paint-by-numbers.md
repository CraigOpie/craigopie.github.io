---
layout: essay
type: essay
image: images/paint-by-nums.jpeg
title: Paint By Numbers - Coding Standards For Corporate Profit
# All dates must be YYYY-MM-DD format!
date: 2020-02-13
labels:
  - Technical
  - Coding Standards
---

<img class="ui medium right floated image" src="../images/paint-by-nums.jpeg" alt="" width="100%" />

### The first bug trap

Thomas Edison first coined the term ‘bug’ when troubleshooting the first quadruplex telegraph system in 1873.  Today, nearly every software engineer uses the term on a daily basis and corporations have dedicated substantial amounts of time and money to prevent bugs from happening to begin with.  Lint, named after undesirable bits of fiber and fluff in sheep’s wool, was created by Stephen C. Johnson at Bell Labs in 1978 to prevent software bugs and portability issues.  Over the years, many variants of Lint were released to especially assist software development for interpreted languages that do not have a compiling phase; moreover, lacked errors and warnings prior to execution.  ESLint is a modern day variant of Lint that incorporates identifying software bugs and portability issues, but also warns engineers about syntax errors, uses of undeclared variables, calls to depreciated functions, misuse of scope, dangerous language features, and spacing and formatting conventions known as coding standards.  Coding standards have made an impact to the software development community that is comparative to the invention of the assembly line for modern manufacturing.

### The coding revolution

In 1965 the basic computer cost $28,500.  Companies could only afford computers for essential personnel and a software development team’s largest expense was equipment.  Employers enforced policies and guidelines to protect their equipment; indeed, employers focused on ensuring their computers were not broken.  Electricity to power their computers was also very costly and so developers were expected to use the most efficient code that used the least amount of resources to accomplish the job.  Fast forward fifty-five years and the basic computer now costs less than $1,500 and nearly every employee and student has, at least, one.  The paradigm has shifted to where a software development team’s largest expense is salary.  Instead of trying to optimize runtime algorithms, developers are encouraged to use ‘pretty’ coding techniques and styles that are consistent to make their source code more portable and readable by other developers.  As corporations realized that most of a programmer’s time was spent trying to understand another employees modules, they decided to standardize how the code was organized, what type of functions to create, how to declare and initialize variables, and much more.  Coding standards were born out of a necessity to minimize overall application development cost.

The Industrial Revolution led to a proliferation of manufacturing and invention.  One of the most important developments for manufacturing, during this time, was the production line.  Each station perfected the manufacturing of parts under their care to create a quality product which was installed by the most experienced person available.  The production line was later improved by the Portsmouth Block Mils, the Bridgewater Foundry, and Richard Garret & Sons until Henry Ford mastered the assembly line for the Model T in October, 1913.  The principles used by Ford were simple: place tools and workers together in a sequence that each station can build upon the last, use belts or slides so that after one worker is finished the part will automatically be brought to the next worker, ensure each station and the transportation method uses the same amount of time to ensure the parts keep moving throughout the line.  Similar principles are now used in the development of software by large multi-contributor corporations.

### Coding standards are the assembly line of software

Software developers use coding standards to create generic modules that can be used by programmers to perform the same function on multiple projects, similar to workers having all necessary tools on hand to assemble a product.  In fact, senior developers typically assign programmers tasks that are related so that the process is streamlined and efficient.  Coding standards combined with effective Linting tools increase the effectiveness of the programmer by providing dynamic feedback indicating potential bugs or errors.  Likewise, all functions and modules are to be written the same exact way each time.  Coding standards reinforce first time code execution to ensure it works - the first time.  Coding standards also create a pseudo quality assurance process for the end user or customer by requiring a coding process that has demonstrated proven reliability and security.  Additionally, having code written to specific standards ensures that it can be compiled or ported over to other systems for use.

However, coding standards often times requires programmers to use less efficient methods to accomplish a task to ensure readability in the future.  Often times recursion is favored over iteration because for loops are often considered difficult to trace.  For example: 
```java
// Iteration to produce a factorial
public long factorialForLoop(long number){
   long result = 1;
   for(; number > 0; number--){
       result *= number;
   }
   return result;
}
 
// Recursion to produce a factorial
public long factorialRecursive(long number){
    return number == 1 ? 1 : number * factorialRecursive(number - 1);
}
```
Restricting programmers in this way depreciates the artistic creativity that programmers enjoy and take pride in; furthermore, coding standards have been linked to a lack of interest or self worth by even the most skilled developers.  Many highly regarded software engineers have left fantasy jobs at Google, Facebook, Microsoft, and Air-BnB because they felt their creativity was not able to be expressed through their work. 

### Depreciation of artistic creativity

Coding standards have clearly increased workflow and maximized profit for large corporations due to streamlining how the workers assemble the program.  However, the improved efficiency and reliability comes at a deep rooted cost that has a potential negative effect on future generations of software developers.  Diminishing creativity and promoting assembly line code builds complacency amongst some of the most brilliant minds responsible for innovation.  When was the last time you saw a painting by Salvador Dali that was paint-by-numbers?

#### Work Cited

Computer History Museum (2020) Timeline: 1965. [https://www.computerhistory.org/timeline/1965/](https://www.computerhistory.org/timeline/1965/).  Retrieved 2020-02-10

Ford, Henry & Crowther, Samuel (1922). My Life and Work. Garden City, NY: Garden City Publishing. Retrieved 2020-02-10

Johnson, Stephen C. (25 October 1978). "Lint, a C Program Checker". pp. 78–1273. Retrieved 2020-02-10

Musson & Robinson (1969). Science and Technology in the Industrial Revolution. Toronto: University of Toronto Press. Retrieved 2020-02-10
