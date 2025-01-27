/* @provengo summon selenium */


function login(session, data){  
  session.click(xpaths.login.loginTab)
  session.writeText(xpaths.login.userNameInput, data.username)
  session.writeText(xpaths.login.passwordInput, data.password)
  session.click(xpaths.login.loginButton)
}


function goToCourse(session){
  with(session){
    click(xpaths.courses.myCoursesTab)
    click(xpaths.courses.myFirstCourse)
  }
}



function addAssignment(session, data){
  /* adding the assignment */
  session.click(xpaths.add_submission.editToggle)  
  session.click(xpaths.add_submission.addActivityButton)
  session.click(xpaths.add_submission.addAssignment)

  session.writeText(xpaths.assignmentForm.assignmentName, data.assignmentName)
  session.writeText(xpaths.assignmentForm.description, data.description)
  session.writeText(xpaths.assignmentForm.instructions, data.instructions)
  
  /* allowing text submissions, assuming the submissionTypeMenu was closed */
  session.scrollByAmount(0, 150)
  session.click(xpaths.assignmentForm.submissionTypeMenu)
  session.click(xpaths.assignmentForm.onlineTextCheckBox)
  session.scrollToBottom()
  session.click(xpaths.assignmentForm.submitButton)
}


function submitAssignment(session, data){
  session.click(xpaths.submitAssignment.assignmentButton)
  session.click(xpaths.submitAssignment.addSubmission)
  session.writeText(xpaths.submitAssignment.submissionTextBox, data.submissionText)
  session.click(xpaths.submitAssignment.submitButton)
}


function deleteAssignment(session){
  with(session){
    click(xpaths.deleteAssignment.toggleDropDownMenu)
    click(xpaths.deleteAssignment.menuDeleteOption)
    click(xpaths.deleteAssignment.confirmDelete)
  }
}


function logout(session){
  with(session){
    click(xpaths.logout.openUserMenu)
    click(xpaths.logout.logoutButton)
  }
}
