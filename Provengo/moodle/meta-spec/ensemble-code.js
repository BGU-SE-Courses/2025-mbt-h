// @provengo summon ctrl
// @provengo summon selenium


/**
 * List of events "of interest" that we want test suites to cover.
 */
const GOALS = [
    any(/CourseEnter/),
    any(/AssignmentEnter/),
    any(/SubmissionForm/),
    any(/Submitted/),
    any(/Deleted/),
    Ctrl.markEvent("Submitted then Deleted")
    
];


//Illegal pairs that cant occur in that order!
function isLegalPair(event1, event2) {
    return !(
        (event1.match(/AssignmentEnter/) && event2.match(/CourseEnter/)) || 
        (event1.match(/SubmissionForm/) && event2.match(/AssignmentEnter/)) ||
        (event1.match(/SubmissionForm/) && event2.match(/CourseEnter/)) ||
        (event1.match(/Submitted/) && event2.match(/SubmissionForm/)) ||
        (event1.match(/Submitted/) && event2.match(/AssignmentEnter/)) ||
        (event1.match(/Submitted/) && event2.match(/CourseEnter/))
    );
}


//Two-Way
const makeGoals = function () {
    let events = [any(/CourseEnter/), any(/AssignmentEnter/), any(/SubmissionForm/), any(/Submitted/), any(/Deleted/)];
    let pairs = [];

    for (let i = 0; i < events.length; i++) {
        for (let j = i + 1; j < events.length; j++) {
            let event1 = events[i];
            let event2 = events[j];

            if (isLegalPair(event1.toString(), event2.toString())) {
                pairs.push([event1, event2]);
            }
        }
    }
    return pairs;
};


//Two Way
/**
 * Ranks test suites by how many events from the GOALS array were met.
 * The more goals are met, the higher the score.
 * 
 * It make no difference if a goal was met more then once.
 *
 * @param {Event[][]} ensemble The test suite to be ranked.
 * @returns Number of events from GOALS that have been met.
 */
function rankByMetGoals(ensemble) {
    const unreachedPairs = makeGoals();
    for (let test of ensemble) {
        let testEvents = new Set(test.map(e => e.toString()));
        for (let i = unreachedPairs.length - 1; i >= 0; i--) {
            let [event1, event2] = unreachedPairs[i];
            if (testEvents.has(event1.toString()) && testEvents.has(event2.toString())) {
                unreachedPairs.splice(i, 1);
            }
        }
    }

    return makeGoals().length - unreachedPairs.length;
}

/*
* Ranks potential test suites based on the percentage of goals they cover.
* Goal events are defined in the GOALS array above. An ensemble with rank
* 100 covers all the goal events.
*
* Multiple ranking functions are supported - to change ranking function,
* use the `ensemble.ranking-function` configuration key, or the 
* --ranking-function <functionName> command-line parameter.
*
* @param {Event[][]} ensemble the test suite/ensemble to be ranked
* @returns the percentage of goals covered by `ensemble`.
*/ 
function rankingFunction(ensemble) {
    // How many goals did `ensemble` hit?
    const metGoalsCount = rankByMetGoals(ensemble);
    const totalGoals = makeGoals().length;

    // What percentage of the goals did `ensemble` cover?
    return (metGoalsCount / totalGoals) * 100; // Convert to percentage
}

//Domain specific
// const makeGoals = function(){
//     return [ [any(/CourseEnter/), any(/AssignmentEnter/), any(/SubmissionForm/), any(/Deleted/)], //Assignment deleted while student in form
//              [any(/CourseEnter/), any(/AssignmentEnter/), any(/Deleted/)], //assignment deleted while student in assignment
//              [ any(/CourseEnter/), any(/Deleted/) ], //assignment deleted while student in course
//              [ any(/Deleted/) ], //assignment deleted before anything
//              [ Ctrl.markEvent("Submitted then Deleted")]]; //student submitted then teacher deleted assignment
// }


//Domain specific
// /**
//  * Ranks test suites by how many events from the GOALS array were met.
//  * The more goals are met, the higher the score.
//  * 
//  * It make no difference if a goal was met more then once.
//  *
//  * @param {Event[][]} ensemble The test suite to be ranked.
//  * @returns Number of events from GOALS that have been met.
//  */
// function rankByMetGoals( ensemble ) {
//     const unreachedGoals = [];
//     for ( let idx=0; idx<GOALS.length; idx++ ) {
//         unreachedGoals.push(GOALS[idx]);
//     }

//     for (let testIdx = 0; testIdx < ensemble.length; testIdx++) {
//         let test = ensemble[testIdx];
//         for (let eventIdx = 0; eventIdx < test.length; eventIdx++) {
//             let event = test[eventIdx];
//             for (let ugIdx=unreachedGoals.length-1; ugIdx >=0; ugIdx--) {
//                 let unreachedGoal = unreachedGoals[ugIdx];
//                 if ( unreachedGoal.contains(event) ) {
//                     unreachedGoals.splice(ugIdx,1);
//                 }
//             }
//         }
//     }

//     return GOALS.length-unreachedGoals.length;
// }



//Domain-specific
/**
//  * Ranks potential test suites based on the percentage of goals they cover.
//  * Goal events are defined in the GOALS array above. An ensemble with rank
//  * 100 covers all the goal events.
//  *
//  * Multiple ranking functions are supported - to change ranking function,
//  * use the `ensemble.ranking-function` configuration key, or the 
//  * --ranking-function <functionName> command-line parameter.
//  *
//  * @param {Event[][]} ensemble the test suite/ensemble to be ranked
//  * @returns the percentage of goals covered by `ensemble`.
//  */
//  function rankingFunction(ensemble) {
    
//     // How many goals did `ensemble` hit?
//     const metGoalsCount = rankByMetGoals(ensemble);
//     // What percentage of the goals did `ensemble` cover?
//     const metGoalsPercent = metGoalsCount/GOALS.length;

//     return metGoalsPercent * 100; // convert to human-readable percentage
// }
