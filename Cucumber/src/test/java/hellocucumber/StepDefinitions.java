package hellocucumber;
import io.cucumber.java.en.*;
import org.junit.jupiter.api.Assertions.*;
import org.openqa.selenium.WebElement;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class StepDefinitions {
    private static List<MoodleHomePage> All_open_Moodle_page ;
    private static MoodleHomePage MoodleHomePage;
    private String webDriver = "webdriver.chrome.driver";
    private String path = "C:\\Users\\omrym\\OneDrive\\Desktop\\2025-mbt-h\\Selenium\\chromedriver.exe";
    public void Open_Moodle_page_Teacher()
    {
        if(All_open_Moodle_page == null){
            All_open_Moodle_page = new ArrayList<>();
        }
        MoodleHomePage = new MoodleHomePage();
        All_open_Moodle_page.add(MoodleHomePage);
        MoodleHomePage.start_the_moodle_web(webDriver,path);
    }

    @Given("the teacher logged in to the Moodle system with username {string} and password {string}")
    public void home_page_of_moodle (String username, String password) {
        Open_Moodle_page_Teacher();
        MoodleHomePage.login_Teacher(username, password);
    }
    @And ("the teacher is teacher of the course")
    public void teacher_has_course () throws InterruptedException {
        MoodleHomePage.have_the_course();
    }
    @When("the teacher deletes an assignment")
    public void delete_assignment() throws InterruptedException {
        MoodleHomePage.delete_assignment();
    }
    @Then("the assignment is deleted")
    public void the_assignment_is_added_to_the_assignment_list_in_Moodle() {}


}
