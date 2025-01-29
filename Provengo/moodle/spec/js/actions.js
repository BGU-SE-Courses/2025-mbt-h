// @provengo summon selenium

function login(session, data){  
  session.click(xpaths.login.loginTab)
  session.writeText(xpaths.login.userNameInput, data.username)
  session.writeText(xpaths.login.passwordInput, data.password)
  session.click(xpaths.login.loginButton)
}


//Go to the first course, as it is the only course that the student has access to.
function goToCourse(session){
  with(session){
    click(xpaths.courses.myCoursesTab)
    waitForVisibility(xpaths.courses.myFirstCourse)
    click(xpaths.courses.myFirstCourse)
  }
}

//adding an assignment with name, description and instructions.
function addAssignment(session, data) {
  //going to add assignment form
  session.click(xpaths.add_submission.editToggle);
  session.click(xpaths.add_submission.addActivityButton);
  session.waitForVisibility(xpaths.add_submission.addAssignment);
  session.click(xpaths.add_submission.addAssignment);
  
  session.writeText(xpaths.assignmentForm.assignmentName, data.assignmentName);

  //Writing into a TinyMCE textbox for the description
  session.runCode({editorID: 'id_introeditor', text: data.description}, function(){
      try{
        const editor = tinyMCE.get(pvg.params.editorID);
        editor.setContent(pvg.params.text);
      }catch(error){
        pvg.error('Error writing to TinyMCE description editor: '+ error.message);
      }
    });
  
  //Writing into a TinyMCE textbox for the instructions
  session.runCode({editorID: 'id_activityeditor', text: data.instructions}, function(){
      try{
        const editor = tinyMCE.get(pvg.params.editorID);
        editor.setContent(pvg.params.text);
      }catch(error){
        pvg.error('Error writing to TinyMCE instructions editor: ' + error.message);
      }
    });

  //assuming the submissionMenu subsection is already opened
  session.moveToElement(xpaths.assignmentForm.submissionTypeMenu);
  session.click(xpaths.assignmentForm.onlineTextCheckBox);

  session.moveToElement(xpaths.assignmentForm.submitButton);
  session.click(xpaths.assignmentForm.submitButton);
}


function submitAssignment(session, data){
  //dynamic Xpath to assignment since name varies depending on chosen assignment
  let assignmentXpath = `//a[contains(@class, "aalink") and contains(span[@class="instancename"]/text(), "${data.assignmentName}")]`;
  session.click(assignmentXpath)
  session.click(xpaths.submitAssignment.addSubmission)

  session.waitForVisibility(xpaths.submitAssignment.submitButton)
  
  //Writing into a TinyMCE textbox for the assignment text
  session.runCode({editorID: 'id_onlinetext_editor_ifr', text: data.submissionText }, function(){
      try{
        const iframe = document.getElementById(pvg.params.editorID);
        const iframeDocument = iframe.contentDocument||iframe.contentWindow.document;
        const editor = iframeDocument.querySelector('#tinymce');
  
        editor.innerHTML = pvg.params.text;
      }catch(error){
        pvg.error('Error writing to TinyMCE editor in iframe: ' + error.message);
      }
    });  
  session.click(xpaths.submitAssignment.submitButton)
}


function deleteAssignment(session, data) {
  session.click(xpaths.add_submission.editToggle);

  //dynamic Xpath to toggle menu for specific assignment
  let toggleXpath = `//div[contains(@class, 'activity-grid')]//span[contains(@class, 'instancename') and contains(text(), '${data.assignmentName}')]/ancestor::div[contains(@class, 'activity-grid')]//a[contains(@class, 'dropdown-toggle')]`  
  session.waitForVisibility(toggleXpath)
  session.moveToElement(toggleXpath)
  session.click(toggleXpath)

  //dynamic Xpath to delete option in menu for specific assignment
  let deleteOptionXpath = `//div[contains(@class, 'activity-grid')]//span[contains(@class, 'instancename') and contains(text(), '${data.assignmentName}')]/ancestor::div[contains(@class, 'activity-grid')]//a[contains(@class, 'editing_delete')]`
  session.waitForVisibility(deleteOptionXpath)
  session.moveToElement(deleteOptionXpath)
  session.scrollByAmount(0,xpaths.deleteAssignment.confirmDeleteScrollCorrection)
  session.click(deleteOptionXpath)

  session.waitForVisibility(xpaths.deleteAssignment.confirmDelete)
  session.click(xpaths.deleteAssignment.confirmDelete)
}


function logout(session){
  with(session){
    click(xpaths.logout.openUserMenu)
    click(xpaths.logout.logoutButton)
  }
}
