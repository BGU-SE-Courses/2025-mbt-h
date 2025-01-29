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

    public void login_Teacher(String username, String password) {
        driver.get("http://localhost/login/index.php");
        WebElement username_input = driver.findElement(By.xpath("//*[@id=\"username\"]"));
        username_input.sendKeys(username);
        WebElement password_input = driver.findElement(By.xpath("//*[@id=\"password\"]"));
        password_input.sendKeys(password);
        WebElement loginButton = driver.findElement(By.xpath("//*[@id=\"loginbtn\"]"));
        loginButton.click();
    }
    public void have_the_course () throws InterruptedException {
        driver.get("http://localhost/my/courses.php");
        Thread.sleep(2000);
        driver.get("http://localhost/course/view.php?id=2");
        Thread.sleep(2000);
    }
    public void delete_assignment() throws InterruptedException {
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
