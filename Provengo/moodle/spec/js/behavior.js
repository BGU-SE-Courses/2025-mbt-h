/* @provengo summon selenium */


bthread('Teacher Create Assignment', function() {
  let s = new SeleniumSession('teacher').start(URLMOODLE)

  login(s, {username: TEACHER.teacher.username, password: TEACHER.teacher.password})
  // goToCourse(s)
  // let assignment = choose(Object.values(ASSIGNMENTS))
  // addAssignment(s, {assignmentName: assignment.name, description: assignment.description, instructions: assignment.instructions})
  // logout(s)
  // bp.Event("Assignment Added")
})


// bthread('Student Submit Assignment', function(){
//   let s = new SeleniumSession('studentSubmit').start(URLMOODLE)
//   login(s, {username: STUDENT.student.username, password: STUDENT.student.password})
//   //WAIT HERE UNTIL ASSIGNMENT CREATED
//   goToCourse(s, {})
//   let submissionText = choose(Object.values(SUBMISSIONS))
//   submitAssignment(s, {submissionText: submissionText.submissionText})
//   logout(s, {})
  
// })


// bthread('Teacher Delete Assignment', function(){

// })