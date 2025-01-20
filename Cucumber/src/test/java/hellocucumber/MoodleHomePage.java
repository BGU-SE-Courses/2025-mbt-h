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
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.testng.annotations.Test;

import org.junit.jupiter.api.Assertions;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class  MoodleHomePage {
    private static WebDriver driver ;
    private static WebDriverWait wait;

    public void start_the_moodle_web (String webDriver , String path )
    {
        System.setProperty(webDriver, path);
        this.driver = new ChromeDriver();
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(40));
        driver.get("http://localhost/");
        driver.manage().window().setSize(new Dimension(700, 800));
    }

    public void login_Student() {
//        driver.get("http://localhost/login/index.php");
//        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
//        WebElement test1user = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("username")));
//        test1user.sendKeys("test1");
//        WebElement test1pass = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("password")));
//        test1pass.sendKeys("Test1234@");
//        WebElement loginButton = wait.until(ExpectedConditions.elementToBeClickable(By.id("loginbtn")));
//        loginButton.click();
        driver.get("http://localhost/login/index.php");
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        WebElement student1user = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("username")));
        student1user.sendKeys("student1");
        WebElement student1pass = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("password")));
        student1pass.sendKeys("St123456##");
        WebElement loginButton = wait.until(ExpectedConditions.elementToBeClickable(By.id("loginbtn")));
        loginButton.click();
    }
    public void have_the_course ()
    {

    }
}
