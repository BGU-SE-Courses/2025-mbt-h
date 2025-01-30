package hellocucumber;

import java.time.Duration;

import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class MoodleHomePage {
    private WebDriver driver;
    private WebDriverWait wait;

    // Starts the Moodle website
    public void start_the_moodle_web(String webDriver, String path) {
        System.setProperty(webDriver, path);
        this.driver = new ChromeDriver();
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(40));
        driver.get("http://localhost/");
        driver.manage().window().setSize(new Dimension(700, 800));
    }

    public void login(String username, String password) {
        try {
            driver.get("http://localhost/login/index.php");
            WebElement usernameInput = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("username")));
            usernameInput.sendKeys(username);
            WebElement passwordInput = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("password")));
            passwordInput.sendKeys(password);
            WebElement loginButton = wait.until(ExpectedConditions.elementToBeClickable(By.id("loginbtn")));
            loginButton.click();
            System.out.println("Login Done :) ");
        } catch (Exception e) {
            System.err.println("error with the login function : " + e.getMessage());
        }
    }

    public void have_the_course(String name) {
        try {
            driver.get("http://localhost/my/courses.php");
            wait.until(ExpectedConditions.urlContains("courses.php"));
            WebElement course = wait.until(ExpectedConditions.elementToBeClickable(By.linkText(name)));
            course.click();
            wait.until(ExpectedConditions.urlContains("course/view.php"));
            System.out.println("have_the_course Done :) ");

        } catch (Exception e) {
            System.err.println("error with the have_the_course function : " + e.getMessage());
        }
    }

    public void have_assignment_in_course(String name) {
        try {
            WebElement assignmentLink = wait.until(ExpectedConditions.elementToBeClickable(By.linkText(name)));
            assignmentLink.click();
            wait.until(ExpectedConditions.urlContains("mod/assign/view.php"));
            System.out.println("open the assignment page Done  :) ");
        } catch (Exception e) {
            System.err.println("Error with the have_assignment_in_course function : " + e.getMessage());
        }
    }

    public void add_submission(String answer) {
        try {
            WebElement addSubmissionButton = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//button[contains(text(), 'Add submission')]")));
            addSubmissionButton.click();


        } catch (Exception e) {
            System.err.println("Error with the add_submission function : " + e.getMessage());
        }
    }






    // Deletes an assignment
    public void delete_assignment() {
        try {
            WebElement actionMenu = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//div[contains(@class, 'action-menu')]")));
            actionMenu.click();

            WebElement options = wait.until(ExpectedConditions.elementToBeClickable(By.id("action-menu-toggle-3")));
            options.click();

            WebElement deleteOption = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[contains(text(), 'Delete')]")));
            deleteOption.click();

            WebElement confirmDelete = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//button[contains(text(),'Delete')]")));
            JavascriptExecutor js = (JavascriptExecutor) driver;
            js.executeScript("arguments[0].click();", confirmDelete);

            System.out.println("Assignment deleted successfully.");
        } catch (Exception e) {
            System.err.println("Error while deleting assignment: " + e.getMessage());
        }
    }

    // Closes the browser
    public void closeBrowser() {
        if (driver != null) {
            driver.quit();
        }
    }
}
