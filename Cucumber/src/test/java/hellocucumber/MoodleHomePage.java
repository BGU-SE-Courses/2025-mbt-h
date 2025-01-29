package hellocucumber;
import io.cucumber.java.Before;
import org.testng.annotations.Test;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.testng.annotations.Test;

import org.junit.jupiter.api.Assertions;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class  MoodleHomePage {
    private static WebDriver driver ;
    private static WebDriverWait wait;

    public void start_the_moodle_web (String webDriver , String path)
    {
        System.setProperty(webDriver, path);
        this.driver = new ChromeDriver();
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(40));
        driver.get("http://localhost/");
        driver.manage().window().setSize(new Dimension(700, 800));
    }

    public void login(String username, String password)
    {
        driver.get("http://localhost/login/index.php");
        wait = new WebDriverWait(driver, Duration.ofSeconds(40));
        WebElement usernameInput = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"username\"]")));
        usernameInput.sendKeys(username);
        WebElement passwordInput = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"password\"]")));
        passwordInput.sendKeys(password);
        WebElement loginButton = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"loginbtn\"]")));
        loginButton.click();
    }
    public void have_the_course (int course_id )
    {

        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        driver.get("http://localhost/my/courses.php");
        wait.until(ExpectedConditions.urlContains("courses.php"));
        String courseUrl = "http://localhost/course/view.php?id=" + course_id;
        driver.get(courseUrl);
        wait.until(ExpectedConditions.urlToBe(courseUrl));
        WebElement courseTitle = wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("course-title")));
        System.out.println("Course Loaded: " + courseTitle.getText());

    }
    public void delete_assignment() throws InterruptedException {

        // i cant run the test right now but you have to change the  Thread.sleep(2000) line
        // replace it with the wait driver functions
        // like what i did in the log_in function
        driver.findElement(By.xpath("/html/body/div[2]/nav/div/div[2]/form/div/div")).click();
        Thread.sleep(2000);
        WebElement options = driver.findElement(By.xpath("//*[@id=\"action-menu-toggle-3\"]\n"));
        options.click();
        WebElement delete_option = driver.findElement(By.xpath("/html/body/div[4]/div[5]/div/div[3]/div/section/div/div/div/ul/li[1]/div[1]/div[2]/ul/li[2]/div[2]/div[2]/div[5]/div/div/div/div/div/a[8]\n"));
        delete_option.click();
//        WebElement delete = driver.findElement(By.xpath("/html/body/div[8]/div[2]/div/div/div[3]/button[2]\n"));
//        delete.click();
        Thread.sleep(2000);
        JavascriptExecutor js = (JavascriptExecutor) driver;
        WebElement delete = driver.findElement(By.xpath("//button[contains(text(),'Delete')]"));
        js.executeScript("arguments[0].click();", delete);
    }
}
