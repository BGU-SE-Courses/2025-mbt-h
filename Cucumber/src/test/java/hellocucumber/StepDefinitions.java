package hellocucumber;
import io.cucumber.java.en.*;

import java.util.ArrayList;
import java.util.List;

public class StepDefinitions {
    private static List<MoodleHomePage> All_open_Moodle_page ;
    private static MoodleHomePage MoodleHomePage;
    private String webDriver = "webdriver.chrome.driver";
    private String path = "C:/Users/alaas/Desktop/2025-mbt-h/Selenium/chromedriver.exe";
    public void Open_Moodle_page() {
        if(All_open_Moodle_page == null){
            All_open_Moodle_page = new ArrayList<>();
        }
        MoodleHomePage = new MoodleHomePage();
        All_open_Moodle_page.add(MoodleHomePage);
        MoodleHomePage.start_the_moodle_web(webDriver,path);
    }

    @Given("the student logged in to the Moodle system with username {string} and password {string}")
    public void home_page_of_moodle_student(String username, String password){
        Open_Moodle_page();
        MoodleHomePage.login(username, password);
    }
    @And("the student is enrolled in a course {int}")
    public  void student_have_the_course(int id )
    {
        MoodleHomePage.have_the_course(id);
    }
    @When("the student uploads an assignment to the course")
    public void student_uploads_an_assignment_to_the_course(){

    }

    @Then("the assignment is added to the assignment list in Moodle")
    public void assignment_is_added_to_the_assignment_list_in_Moodle(){

    }


    @Given("the teacher logged in to the Moodle system with username {string} and password {string}")
    public void home_page_of_moodle_teacher(String username, String password) {
        Open_Moodle_page();
        MoodleHomePage.login(username, password);
    }
    @And ("the teacher is teacher of the course {int}")
    public void teacher_has_course (int id ) throws InterruptedException {
        MoodleHomePage.have_the_course(id);
    }
    @When("the teacher deletes an assignment")
    public void delete_assignment() throws InterruptedException {
        MoodleHomePage.delete_assignment();
    }
    @Then("the assignment is deleted")
    public void the_assignment_is_added_to_the_assignment_list_in_Moodle() {}


}
