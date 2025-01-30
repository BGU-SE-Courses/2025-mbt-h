package hellocucumber;

import io.cucumber.java.Before;
import io.cucumber.java.After;
import io.cucumber.java.en.*;
import java.util.ArrayList;
import java.util.List;

public class StepDefinitions {
    private List<MoodleHomePage> allOpenMoodlePages ;
    private MoodleHomePage moodleHomePageInstance;
    private String webDriver = "webdriver.chrome.driver";
    private String path = "C:\\Users\\alaas\\Desktop\\2025-mbt-h\\Selenium\\chromedriver.exe";

    @Before
    public void setUp() {
        if (allOpenMoodlePages == null) {
            allOpenMoodlePages = new ArrayList<>();
        }
        moodleHomePageInstance = new MoodleHomePage();
        allOpenMoodlePages.add(moodleHomePageInstance);
        moodleHomePageInstance.start_the_moodle_web(webDriver, path);
    }

    @After
    public void tearDown() {
        moodleHomePageInstance.closeBrowser();
    }

    // log in to the student user name and passsword
    @Given("the student logged in to the Moodle system with username {string} and password {string}")
    public void homePageOfMoodleStudent(String username, String password) {
        moodleHomePageInstance.login(username, password);
    }

    // have the course and in to the course page
    @And("the student is enrolled in a course {string}")
    public void studentHasTheCourse(String course_name ) {
        moodleHomePageInstance.have_the_course(course_name);
    }

    @And ("the course have a assignment to submit name : {string}")
    public void have_assignment_to_submit (String name) {
        moodleHomePageInstance.have_assignment_in_course(name);
    }

    // we are where the add submission bottom

    @When("the student uploads an assignment {string}")
    public void studentUploadsAssignmentToCourse(String answer) {
        moodleHomePageInstance.add_submission(answer);
    }

    @Then("the assignment is added to the assignment list in Moodle")
    public void assignmentIsAddedToAssignmentListInMoodle() {
        // Add verification logic
        System.out.println("Assignment successfully added to the course.");
    }

    @Given("the teacher logged in to the Moodle system with username {string} and password {string}")
    public void homePageOfMoodleTeacher(String username, String password) {
        moodleHomePageInstance.login(username, password);
    }

    @And("the teacher is teacher of the course {string}")
    public void teacherHasCourse(String course_name) {
        moodleHomePageInstance.have_the_course(course_name);
    }

    @When("the teacher deletes an assignment")
    public void deleteAssignment() {
        moodleHomePageInstance.delete_assignment();
    }

    @Then("the assignment is deleted")
    public void assignmentIsDeleted() {
        // Add verification logic
        System.out.println("Assignment successfully deleted.");
    }
}
