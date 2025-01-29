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

const makeGoals = function(){
    return [ [any(/CourseEnter/), any(/AssignmentEnter/), any(/SubmissionForm/), any(/Deleted/)], //Assignment deleted while student in form
             [any(/CourseEnter/), any(/AssignmentEnter/), any(/Deleted/)], //assignment deleted while student in assignment
             [ any(/CourseEnter/), any(/Deleted/) ], //assignment deleted while student in course
             [ any(/Deleted/) ], //assignment deleted before anything
             [ Ctrl.markEvent("Submitted then Deleted")]]; //student submitted then teacher deleted assignment
}


const makeTwoWayGoals = function() {
    let events = [any(/CourseEnter/), any(/AssignmentEnter/), any(/SubmissionForm/), any(/Submitted/), any(/Deleted/)];
    let pairs = [];

    for (let i = 0; i < events.length; i++) {
        for (let j = i + 1; j < events.length; j++) {
            if (!(events[i].toString().includes("Deleted") && events[j].toString().includes("SubmissionForm"))) {
                pairs.push([events[i], events[j]]);
            }
        }
    }

    pairs.push([Ctrl.markEvent("Submitted then Deleted")]);
    return pairs;
}


/**
 * Ranks test suites by how many events from the GOALS array were met.
 * The more goals are met, the higher the score.
 * 
 * It make no difference if a goal was met more then once.
 *
 * @param {Event[][]} ensemble The test suite to be ranked.
 * @returns Number of events from GOALS that have been met.
 */
function rankByMetGoals( ensemble ) {
    const unreachedGoals = [];
    for ( let idx=0; idx<GOALS.length; idx++ ) {
        unreachedGoals.push(GOALS[idx]);
    }

    for (let testIdx = 0; testIdx < ensemble.length; testIdx++) {
        let test = ensemble[testIdx];
        for (let eventIdx = 0; eventIdx < test.length; eventIdx++) {
            let event = test[eventIdx];
            for (let ugIdx=unreachedGoals.length-1; ugIdx >=0; ugIdx--) {
                let unreachedGoal = unreachedGoals[ugIdx];
                if ( unreachedGoal.contains(event) ) {
                    unreachedGoals.splice(ugIdx,1);
                }
            }
        }
    }

    return GOALS.length-unreachedGoals.length;
}

/**
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
    // What percentage of the goals did `ensemble` cover?
    const metGoalsPercent = metGoalsCount/GOALS.length;

    return metGoalsPercent * 100; // convert to human-readable percentage
}
