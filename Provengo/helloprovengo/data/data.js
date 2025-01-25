/*
 *  This is a good place to put common test data, project-wide constants, etc.
 */

const URL = 'https://sandbox.moodledemo.net/';


function user(username, password) {
  return {
    username: username,
    password: password
  }
}

function assignmentDetails(assignmentName, description, instructions){
  return {
    name: assignmentName,
    description: description,
    instructions: instructions
  }
}

function submissionDetails(submissionText) {
  return {
    submissionText: submissionText
  }
}

const TEACHER = {
  'teacher': user('teacher', 'sandbox24')
}

const STUDENT = {
  'student': user('student', 'sandbox24')
}


const ASSIGNMENTS = {
  'assignment1': assignmentDetails(
    'Lecture 1 Review',
    'A review of how our universe works',
    'Write a summary of the main concepts discussed during the first lecture  (Specifically how dark matter and antimatter behave in our cosmos). As a bonus, whoever proves that wormholes exist gets a 0.5 point bonus to their final.'
  ),
  
  'assignment2': assignmentDetails(
    'Programming Challenge',
    'Prove that NP = P and submit your solutions.',
    'Your proof will be credited to be mine, there will be no discussion in this matter and I can submit your proof as my own. Whoever also proves that life on venus is possible will get a bonus of 1 point to their final grade'
  ),
  
  'assignment3': assignmentDetails(
    'Group Project Proposal',
    'Draft a proposal for your group project.',
    'Submit a 40 page proposal outlining the goals, objectives, and methods for your group project aiming to solve global warming in the next 10 months. Mention the team members and their respective roles.'
  ),
  
  'assignment4': assignmentDetails(
    'Research Paper Draft',
    'Submit the first draft of your research paper.',
    'Upload the first draft of your research paper, including a title, abstract, and bibliography. The paper will be credited to me, I will not be accepting any personal emails on this matter, 2 points bonus if you finish your research and submit it to a top research conference (+0.1 points if it is IEEE)'
  ),
  
  'assignment5': assignmentDetails(
    'Weekly Journal Entry',
    'Reflect on your learning experience from the week by writing a 150 page book.',
    'Write a book, if you publish the book at the end of the semester, I get 10% royalties.'
  ),
  
  'assignment6': assignmentDetails(
    'Lab Report',
    'Document the results of the mini darkhole in our lab experiment',
    'Submit a report including the hypothesis, methods, results, and conclusion from the lab experiment. NOTE: there will be no delays to writing this assignment, even if the rest of your team got sucked into the blackhole and never came back.'
  )
}


const SUBMISSIONS = {
  'submission1': submissionDetails('Sorry teacher, I give up 👍'),

  'submission2': submissionsDetails('Humpty Dumpty was a big, round egg with a cheerful face and a love for adventure. One sunny day, Humpty decided to sit on a high wall in the middle of the village square. He enjoyed the view of the bustling town and felt like he was on top of the world. As Humpty sat on the wall, children played nearby, and townsfolk went about their day. Humpty waved at everyone who passed by, spreading smiles wherever he went.  But then, a strong gust of wind blew through the square. Humpty wobbled a little on the wall and laughed nervously. "I should probably climb down soon," he thought. But before he could, a second, even stronger gust of wind knocked Humpty Dumpty right off the wall! *CRACK!* Humpty fell to the ground and broke into pieces. The villagers gasped and quickly gathered around him. The kings men and all the kings horses rushed to the scene, determined to put Humpty Dumpty back together. They tried every trick they knew—glue, bandages, and even magic spells—but sadly, they couldnt fix poor Humpty. Though Humpty couldnt be put back together, the villagers didnt let that stop them from helping their friend. They collected his pieces and gave him a proper resting place, planting a beautiful garden around him as a reminder of his joyful spirit. From that day on, the townspeople remembered Humpty Dumpty not for his fall but for the way he brought smiles to everyones face. His story was told for generations as a lesson to stay safe—and to always look for the beauty in life, even when things go wrong.'),

  'submission3': submissionDetails('I forgor'),

  'submission4': submissionDetails('pls give 100'),

  'submission5': submissionDetails('Hi teacher! I apologize for the inconvenience, but while I was gone to buy some catfood, my cat opened my computer, correctly inserted the passkey and then deleted all my files that are related to this assignment, I dont even know how because everything else on my computer is intact, except for my files for submission! Am I able to get a 1 month extension? If not I understand but atleast like 2 months? really? You would give me 4? Thanks teacher that is amazing! I will give you 5 stars in the satisfaction survey :>')

}

const xpaths = {
  login: {
    loginTab: '//*[@id="usernavigation"]/div[5]/div/span/a',
    userNameInput: '//*[@id="username"]',
    passwordInput: '//*[@id="password"]',
    loginButton: '//*[@id="loginbtn"]'
  },

  courses: {
    myCoursesTab: '//*[@id="moremenu-6793ad99511f7-navbar-nav"]/li[3]',
    myFirstCourse: '//*[@id="course-info-container-2-4"]/div/div/a'
  },

  
  add_submission: {
    editToggle: '//*[@id="6793add3e69426793add3d22f48-editingswitch"]',
    addActivityButton: '//*[@id="coursecontentcollapse0"]/div[2]/div/button',
    addAssignment: '//*[@id="all-7"]/div/div[1]/div/a'
  },
  
  assignmentForm: {
    assignmentName: '//*[@id="id_name"]',
    description: '//*[@id="id_introeditor_ifr"]',
    instructions: '//*[@id="id_activityeditor_ifr"]',
    submissionTypeMenu: '//*[@id="collapseElement-2"]',
    onlineTextCheckBox: '//*[@id="id_assignsubmission_onlinetext_enabled"]',
    submitButton: '//*[@id="id_submitbutton2"]'
  },

  deleteAssignment: {
    toggleDropDownMenu: '//*[@id="action-menu-toggle-8"]',
    menuDeleteOption: '//*[@id="action-menu-8-menu"]/a[8]/span',
    confirmDelete: '//*[@id="page-course-view-topics"]/div[8]/div[2]/div/div/div[3]/button[2]'
  },

  submitAssignment: {
    assignmentButton: '//*[@id="module-12"]/div/div[2]/div[2]/div/div/a',
    addSubmission: '//*[@id="single_button6793b75705db98"]',
    submissionTextBox: '//*[@id="id_onlinetext_editor_ifr"]',
    submitButton: '//*[@id="id_submitbutton"]'
  },

  logout: {
    openUserMenu: '//*[@id="user-menu-toggle"]',
    logoutButton: '//*[@id="carousel-item-main"]/a[9]'
  }
};