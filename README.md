# Software Quality Engineering - System Testing
This is a repository for the system-testing assignment of the Software Quality Engineering course at the [Ben-Gurion University](https://in.bgu.ac.il/), Israel.

## Assignment Description
In this assignment, we tested an open-source software called [Moodle](https://sandbox.moodledemo.net/).

Moodle is a website that is generally used in an educational scope by students and teachers/professors. Teachers upload material for specific
courses, create assignments and many other functionalities/features, and the courses are accessible to the students that are eligible for the 
courses.

## Installation
We didn't perform any installations to use the sandbox as we used the one available online by the course.

## What we tested
We tested the assignment module that allows for creating and uploading solutions to assignment. We chose to test the following user stories:

*User story:* a student submits a solution to an assignment and the teacher deketes the assignment

*Preconditions*: there is an assignment in the course

*Expected outcome*: the student successfully submitted and teacher successfully deletes the assignment


*User story:* while the student is in the submission form of an assignment, the teacher deletes it.

*Preconditions:*  there is an assignment in the course

*Expected outcome:* the student fails to submit the assignment


*User story:* the teacher deletes an assignment while the student is about to add a submission

*Precoditions:* there is an assignment in the course

*Expected outcome:* the student fails to add a submission to the deleted assignment


*User story:* the teacher deletes an assignment while the student is about to enter the assignment

*Precoditions:* there is an assignment in the course

*Expected outcome:* the student fails to enter to the deleted assignment


*User story:* the teacher deletes an assignment prior to the student entering the course

*Precoditions:* there is an assignment in the course

*Expected outcome:* the student enters the course without seeing an assignment


## How we tested
We used two different testing methods:
1. [Cucumber](https://cucumber.io/), a behavior-driven testing framework.
2. [Provengo](https://provengo.tech/), a story-based testing framework.

Each of the testing methods is elaborated in its own directory. 

## Results

2. $$Provengo$$: The test suites we generated were largely successful, although we found it hard to create the two-way coverage criterion due to the lack of guidelines/explanation on what we are supposed to do. We didnt really understand how to create a two-way coverage criterion and we performed this section largely based on our intuition (we created a new make-goals that basically creates every possible pair combination excluding ones that are not legal). We hope this was the correct implementation. We also witnessed that the sandbox moodle was being updated while we were working, which sometimes would make issues to the xpaths as different version were virtually a different website, so we then fixated on the sandbox moodle version 4.4 so that we would be working on a stable version that have static xpaths that do not change.
