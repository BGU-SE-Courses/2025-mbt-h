/* @provengo summon selenium */



/**
 * region HighLevel - Login
 * @param {Session} session - the session to use
 * @param {object} data - An object with the user's username and password
 */
defineAction("login", function (session, data) {
  with(session) {
    click(xpaths.login.loginTab)
    writeText(xpaths.login.userNameInput, data.username)
    writeText(xpaths.login.passwordInput, data.password)
    click(xpaths.login.loginButton)
  }
})


/**
 * region HighLevel - goToCourse
 * @param {Session} session - the session to use
 * @param {object} data - nothing
 */
defineAction("goToCourse", function (session, data) {
  with(session){
    click(xpaths.courses.myCoursesTab)
    click(xpaths.courses.myFirstCourse)
  }
})


defineAction("addAssignment", function (session, data) {
  with(session){
    /* adding the assignment */
    click(xpaths.add_submission.editToggle)  
    click(xpaths.add_submission.addActivityButton)
    click(xpaths.add_submission.addAssignment)

    writeText(xpaths.assignmentForm.assignmentName, data.assignmentName)
    writeText(xpaths.assignmentForm.description, data.description)
    writeText(xpaths.assignmentForm.instructions, data.instructions)
    
    /* allowing text submissions, assuming the submissionTypeMenu was closed */
    scrollByAmount(0, 150)
    click(xpaths.assignmentForm.submissionTypeMenu)
    click(xpaths.assignmentForm.onlineTextCheckBox)
    scrollToBottom()
    click(xpaths.assignmentForm.submitButton)
  }
})

defineAction("submitAssignment", function (session, data){
  with(session){
    click(xpaths.submitAssignment.assignmentButton)
    click(xpaths.submitAssignment.addSubmission)
    writeText(xpaths.submitAssignment.submissionTextBox, data.submissionText)
    click(xpaths.submitAssignment.submitButton)
  }
})


/**
 * region HighLevel - deleteAssignment
 * @param {Session} session - the session to use
 * @param {object} data - nothing
 */
defineAction("deleteAssignment", function (session, data){
  with(session){
    click(xpaths.deleteAssignment.toggleDropDownMenu)
    click(xpaths.deleteAssignment.menuDeleteOption)
    click(xpaths.deleteAssignment.confirmDelete)
  }
})



/**
 * region HighLevel - Logout
 * @param {Session} session - the session to use
 * @param {object} data - nothing
 */
defineAction("logout", function (session, data) {
  with(session){
    click(xpaths.logout.openUserMenu)
    click(xpaths.logout.logoutButton)
  }
})
