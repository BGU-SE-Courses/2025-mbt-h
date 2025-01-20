package hellocucumber;
import io.cucumber.java.en.*;
import org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

public class StepDefinitions {
    private static List<MoodleHomePage> All_open_Moodle_page ;
    private static MoodleHomePage MoodleHomePage;
    private String webDriver = "webdriver.chrome.driver";
    private String path = "C:\\Users\\alaas\\Desktop\\assignmnet4\\chromedriver-win64\\chromedriver.exe";
    // $$*TODO* explain what this step does$$
    @Given("an example scenario")
    public void anExampleScenario() {
    }
    // $$*TODO* explain what this step does$$
    @When("all step definitions are implemented")
    public void allStepDefinitionsAreImplemented() {
    }
    // $$*TODO* explain what this step does$$
    @Then("the scenario passes")
    public void theScenarioPasses() {

    }
    public void Open_Moodle_page_Student ()
    {
        if(All_open_Moodle_page == null){
            All_open_Moodle_page = new ArrayList<>();
        }
        MoodleHomePage = new MoodleHomePage();
        All_open_Moodle_page.add(MoodleHomePage);
        MoodleHomePage.start_the_moodle_web(webDriver,path);
    }

//    public void OpenCartInitAdmin() {
//        System.out.println("--------------- INITIALIZING MOODLE TEST - OPENING WEBPAGE ---------------");
//        if(allopenCartsA == null){
//            allopenCartsA = new ArrayList<>();
//        }
//        opencartManager = new OpenCartActuatorAdmin();
//        allopenCartsA.add(opencartManager);
//        opencartManager.initSessionAsAdmin(webDriver, path);
//    }


    @Given("the student logged in to the Moodle system")
    public void home_page_of_moodle () {
        Open_Moodle_page_Student();
        MoodleHomePage.login_Student();
    }
    @And ("the student is enrolled in a course")
    public void moodle_page_of_Student () {
        MoodleHomePage.login_Student();
    }
    @When("the student uploads an assignment to the course")
    public void  the_when_part_of_student_system() {}
    @Then("the assignment is added to the assignment list in Moodle")
    public void the_assignment_is_added_to_the_assignment_list_in_Moodle() {}


}
