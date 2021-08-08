package TestRinner;

import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
public class StepDefinitions {

	WebDriver driver;

    @Given("^user is on login page$")
    public void user_is_on_login_page() throws Throwable {
    	System.setProperty("webdriver.chrome.driver",
				"C:/Users/josep/OneDrive/Desktop/chromedriver.exe");
		Thread.sleep(500);

		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://localhost:4200/login");
		Thread.sleep(1000);
    }

    @Then("^user is now registered$")
    public void user_is_now_registered() throws Throwable {
        driver.quit();

    	throw new PendingException();

    }

    @And("^user clicks register")
    public void user_clicks_something() throws Throwable {
		driver.findElement(By.xpath("/html/body/app-root/app-login-page/body/div/div/div/div/div/div/div[2]/div/div[3]/a")).click();
    }

    @And("^user enters email")
    public void user_enters_email() throws Throwable {
		driver.findElement(By.id("inputEmail")).sendKeys("billbanes123@yahoo.com");
    }
    @And("^user enters firstname")
    public void user_enters_firstname() throws Throwable {
		driver.findElement(By.id("inputFirst")).sendKeys("William");
    }
    @And("^user enters lastname")
    public void user_enters_lastname() throws Throwable {
		driver.findElement(By.id("inputLast")).sendKeys("Banes");
		Thread.sleep(500);

    }
  
    @And("^user enters password")
    public void user_enters_password() throws Throwable {
		driver.findElement(By.id("inputPassword")).sendKeys("Billybanes91!");
		Thread.sleep(500);

    }

    @And("^user chooses manager")
    public void user_chooses_manager() throws Throwable {
    Select sel = new Select(driver.findElement(By.xpath("/html/body/app-root/app-new-user-registration/div[5]/select")));
    sel.selectByVisibleText("I am a Manager");
	Thread.sleep(2000);


  
    }
    @Given("^user clicks submit$")
    public void user_clicks_submit() throws Throwable {
		driver.findElement(By.xpath("/html/body/app-root/app-new-user-registration/div[6]/button")).click();
		Thread.sleep(2000);



    }
    
    @When("^user clicks forgot password$")
    public void user_clicks_forgot_password() throws Throwable {
		driver.findElement(By.xpath("/html/body/app-root/app-login-page/body/div/div/div/div/div/div/div[2]/div/div[2]/a")).click();
		
    }

    @Then("^user receives password in email$")
    public void user_receives_password_in_email() throws Throwable {
    	//Navigate to Gmail login
    	driver.get("https://login.yahoo.com/?.src=ym&pspid=2023538075&activity=ybar-mail&.lang=en-US&.intl=us&.done=https%3A%2F%2Fmail.yahoo.com%2Fd%3Fpspid%3D2023538075%26activity%3Dybar-mail");
    	//Enter Email
		driver.findElement(By.xpath( "//*[@id='login-username']")).sendKeys("billbanes123@yahoo.com");
		//Click Next
		Thread.sleep(2000);

		driver.findElement(By.xpath( "//*[@id='login-signin']")).click();
		Thread.sleep(2000);
		//Enter Password
		driver.findElement(By.id("login-passwd") ).sendKeys("Tillytanes91!");
		Thread.sleep(2000);

		//Click Next
		driver.findElement(By.id("login-signin")).click();
		driver.quit();


    }
    
    



    @And("^user clicks send$")
    public void user_clicks_send() throws Throwable {
		driver.findElement(By.xpath( "/html/body/app-root/app-forgotpassword/body/div/div/div/div/div/div/div[2]/div/a[1]")).click();
    }


}
