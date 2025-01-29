// @provengo summon selenium


/**
 * Preparation for our scenario testing - teacher creating the assignment for the student to submit / teacher to delete
 */
bthread('teacherCreate', function() {
    let s = new SeleniumSession('teacherCreate')
    s.start(URLMOODLE)
    bp.sync({request: bp.Event("Creating Assignment")})
    login(s,{username: TEACHER.teacher.username, password: TEACHER.teacher.password})
    goToCourse(s)
    let assignment = choose(Object.values(ASSIGNMENTS)) //choosing an assignment from list of assignment, for now only 1 assignment is available to get a smaller graph
    let assignmentName = assignment.name
    addAssignment(s, {assignmentName: assignment.name, description: assignment.description, instructions: assignment.instructions})
    logout(s)
    
    //storing the assignment name for the student to know what assignment to submit and the teacher to know what assignment to delete
    bp.store.put('assignmentName', assignmentName) 
    bp.sync({request: bp.Event("Assignment Added")})
})


/**
 * Scenario for student to submit the assignment after the assignment was created
 * 
 * NOTE: this thread is blocked in submitting assignment until Assignment Added occurs (the block is in the synchronizing bthread below)
 */
bthread('studentSubmit', function(){
  let s = new SeleniumSession('studentSubmit')
  s.start(URLMOODLE)
  login(s, {username: STUDENT.student.username, password: STUDENT.student.password})
  bp.sync({request: bp.Event("Submitting Assignment")})
  let assignmentName = bp.store.get('assignmentName') //getting the assignment name from stored
  goToCourse(s) //go to course
  bp.sync({request: bp.Event("CourseEnter")}) 
  let submissionText = choose(Object.values(SUBMISSIONS))
  
  goToAssignment(s, {assignmentName: assignmentName}) //go to assignment
  bp.sync({request: bp.Event("AssignmentEnter")}) 
  goToSubmission(s) //go to submission 
  bp.sync({request: bp.Event("SubmissionForm")})
  submitAssignment(s, {assignmentName: assignmentName, submissionText: submissionText.submissionText})
  logout(s)
  bp.sync({request: bp.Event("Assignment Submitted")})
})


/**
 * Scenario for teacher to delete the assignment created
 * 
 * NOTE: this thread is blocked in Deleting Assignment until Assignment Added occurs (the block is in the synchronizing bthread below)
 */
bthread('teacherDelete', function(){
  bp.sync({request: bp.Event("Deleting Assignment")})
  let assignmentName = bp.store.get('assignmentName') //getting the assignment name from stored
  let s = new SeleniumSession('teacherDelete')
  s.start(URLMOODLE)
  login(s, {username: TEACHER.teacher.username, password: TEACHER.teacher.password})
  goToCourse(s)
  deleteAssignment(s, {assignmentName: assignmentName})
  logout(s)
  bp.sync({request: bp.Event("Assignment Deleted")})
})



/**
 * Blocking the teacher from deleting the assignment and student from submitting.
 * Waiting until the teacher creates the assignment
 */
bthread('ValidateSubmit', function(){
  bp.sync({                             
    waitFor: bp.Event("Assignment Added"),
    block: [bp.Event("Submitting Assignment"), bp.Event("Deleting Assignment")]
  });
})


/**
 * Marking the standard event where the student submits and then the teacher deletes the assignment
 */
bthread('SubmittedThenDeleted', function(){
  bp.sync({waitFor: bp.Event("Assignment Submitted")})
  bp.sync({waitFor: bp.Event("Assignment Deleted")})
  Ctrl.doMark("Submitted then Deleted")
})