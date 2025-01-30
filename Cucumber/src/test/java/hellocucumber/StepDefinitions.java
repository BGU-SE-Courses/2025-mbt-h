package hellocucumber;

import io.cucumber.java.Before;
import io.cucumber.java.After;
import io.cucumber.java.en.*;
import java.util.ArrayList;
import java.util.List;

public class StepDefinitions {
    private List<MoodleHomePage> allOpenMoodlePages;
    private MoodleHomePage moodleHomePageInstance;
    private String webDriver = "webdriver.chrome.driver";
    private String path = "C:\\Users\\alaas\\Desktop\\2025-mbt-h\\Selenium\\chromedriver.exe";

    @Before
    public void open_moodle_page () {
        if (allOpenMoodlePages == null) {
            allOpenMoodlePages = new ArrayList<>();
        }
        moodleHomePageInstance = new MoodleHomePage();
        allOpenMoodlePages.add(moodleHomePageInstance);
        moodleHomePageInstance.start_the_moodle_web(webDriver, path);
    }

    @After
    public void turn_off_the_moodle_web() {
        moodleHomePageInstance.closeBrowser();
    }

    @Given("the student logged in to the Moodle system with username {string} and password {string}")
    public void homePageOfMoodleStudent(String username, String password) {
        moodleHomePageInstance.login(username, password);
    }

    @And("the student is enrolled in a course {string}")
    public void studentHasTheCourse(String course_name) {
        moodleHomePageInstance.have_the_course(course_name);
    }

    @And("the course have a assignment to submit name : {string}")
    public void have_assignment_to_submit(String name) {
        moodleHomePageInstance.have_assignment_in_course(name);
    }


    @When("the student uploads an assignment {string}")
    public void studentUploadsAssignmentToCourse(String answer) {
        moodleHomePageInstance.add_submission(answer);
    }

    @Then("the assignment is added to the assignment list in Moodle")
    public void update_status() {
        moodleHomePageInstance.update_the_status_of_the_submition();
    }

    @Given("the teacher logged in to the Moodle system with username {string} and password {string}")
    public void homePageOfMoodleTeacher(String username, String password) {
        moodleHomePageInstance.login(username, password);
    }

    @And("the teacher is teacher of the course {string}")
    public void teacherHasCourse(String course_name) {
        moodleHomePageInstance.have_the_course(course_name);
    }

    @When("the assignment status updated")
    public void deleteAssignment() {
        moodleHomePageInstance.delete_assignment();
    }
}
