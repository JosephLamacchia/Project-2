package TestRinner;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;
import java.awt.Robot;
import java.awt.event.InputEvent;

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
    
    @When("^user enters login credentials$")
    public void user_enters_login_credentials() throws Throwable {
		driver.findElement(By.id("exampleInputEmail")).sendKeys("josephlamacchia1@gmail.com");
		Thread.sleep(1000);

		driver.findElement(By.id("exampleInputPassword")).sendKeys("password");
		Thread.sleep(1000);
		
		driver.findElement(By.id("login")).click();;


    }
    

@Then("^user is navigated to post login page$")
public void user_is_navigated_to_post_login_page() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException();
}


    @When("^user invalid login credentials$")
    public void user_invalid_login_credentials() throws Throwable {
    	driver.findElement(By.id("exampleInputEmail")).sendKeys("fweewffwe");
		Thread.sleep(1000);

		driver.findElement(By.id("exampleInputPassword")).sendKeys("fwefewfewfewf");
		Thread.sleep(1000);

		driver.findElement(By.id("login")).click();;

    }
    
    @Then("^user is prompted invalid credentials$")
    public void user_is_prompted_invalid_credentials() throws Throwable {

        Thread.sleep(2000);
        Boolean result = driver.findElement(By.id("invalid")).isDisplayed();

    	assertEquals(result, true);
    	
		driver.quit();

    }


    @Then("^user is now registered$")
    public void user_is_now_registered() throws Throwable {
     
		driver.findElement(By.id("exampleInputEmail")).sendKeys("billbanes123@yahoo.com");
		Thread.sleep(1000);

		driver.findElement(By.id("exampleInputPassword")).sendKeys("Billybanes91!");
		Thread.sleep(1000);

		driver.findElement(By.id("login")).click();

        
    	

    }

    @And("^user clicks register")
    public void user_clicks_something() throws Throwable {
		driver.findElement(By.id("register")).click();
    }

  
    
    @And("^user enters email as \"([^\"]*)\"$")
    public void user_enters_email_as(String strArg1) throws Throwable {
		driver.findElement(By.id("inputEmail")).sendKeys(strArg1);
		Thread.sleep(1000);

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
    Select sel = new Select(driver.findElement(By.id("dropDown")));
    sel.selectByVisibleText("I am a Manager");
	Thread.sleep(2000);


  
    }
    @Given("^user clicks submit$")
    public void user_clicks_submit() throws Throwable {
		driver.findElement(By.id("submitButton")).click();
		Thread.sleep(2000);



    }
    
    @When("^user clicks login button$")
    public void user_clicks_login_button() throws Throwable {
		driver.findElement(By.id("login")).click();
    }
    
    @When("^user clicks forgot password$")
    public void user_clicks_forgot_password() throws Throwable {
		driver.findElement(By.id("forgot")).click();
		
    }

    @Then("^user receives password in email$")
    public void user_receives_password_in_email() throws Throwable {
    	//Navigate to yahoo mail login
    	driver.get("https://login.yahoo.com/?.src=ym&pspid=2023538075&activity=ybar-mail&.lang=en-US&.intl=us&.done=https%3A%2F%2Fmail.yahoo.com%2Fd%3Fpspid%3D2023538075%26activity%3Dybar-mail");
    	//Enter Email
		Thread.sleep(2000);

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
		
		Thread.sleep(5000);
		
		driver.quit();


    }
    

    @Then("^user is prompted No account linked to this email$")
    public void user_is_prompted_no_account_linked_to_this_email() throws Throwable {
    	Thread.sleep(4000);
    	Boolean result = driver.findElement(By.id("invalid")).isDisplayed();

    	assertEquals(result, true);
  
		driver.quit();


    }

 

    @Given("^user is on employee page$")
    public void user_is_on_employee_page() throws Throwable {
    	
    	System.setProperty("webdriver.chrome.driver",
				"C:/Users/josep/OneDrive/Desktop/chromedriver.exe");
		Thread.sleep(500);

		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://localhost:4200/login");
		Thread.sleep(1000);
		
       	driver.findElement(By.id("exampleInputEmail")).sendKeys("josephlamacchia1@gmail.com");
		Thread.sleep(1000);

		driver.findElement(By.id("exampleInputPassword")).sendKeys("password");
		Thread.sleep(2000);
		
		driver.findElement(By.id("login")).click();
		
    }

    @When("^user clicks complete$")
    public void user_clicks_complete() throws Throwable {
		Thread.sleep(2000);
        driver.findElement(By.id("complete")).click();
    }

    @Then("^user can view current tasks$")
    public void user_can_view_current_tasks() throws Throwable {
		Thread.sleep(2000);

       	String result = driver.findElement(By.id("status")).getText();

    	assertEquals(result, "Active");
    	driver.quit();
    }
    
    

    @Given("^user is on manager page$")
      public void user_is_on_manager_page() throws Throwable {
          System.setProperty("webdriver.chrome.driver",
  				"C:/Users/josep/OneDrive/Desktop/chromedriver.exe");

  		driver = new ChromeDriver();
  		driver.manage().window().maximize();
  		driver.get("http://localhost:4200/login");
  		Thread.sleep(1000);
  		
         	driver.findElement(By.id("exampleInputEmail")).sendKeys("billybanes123@yahoo.com");
  		Thread.sleep(1000);

  		driver.findElement(By.id("exampleInputPassword")).sendKeys("password");
  		Thread.sleep(2000);
  		
  		driver.findElement(By.id("login")).click();
      
      }

      @When("^user clicks views tasks$")
      public void user_clicks_views_tasks() throws Throwable {
  	Thread.sleep(2000);
          driver.findElement(By.id("View")).click();
      }

      @Then("^task is updated and employee is notified$")
      public void task_is_updated_and_employee_is_notified() throws Throwable {
          throw new PendingException();
      }

      @And("^user clicks update task$")
      public void user_clicks_update_task() throws Throwable {
          Thread.sleep(2000);
          driver.findElement(By.id("update")).click();
      }

      @And("^user enters new information$")
      public void user_enters_new_information() throws Throwable {
          Thread.sleep(2000);
         driver.findElement(By.id("description")).sendKeys("Pick up my kids from school");

  		   Robot robot = new Robot();
  		   
  		   robot.mouseMove(  driver.findElement(By.id("duedate")).getLocation().getX()
,   		    driver.findElement(By.id("duedate")).getLocation().getY());
  		   
  		   robot.mousePress(InputEvent.BUTTON1_DOWN_MASK);

      }



    @Then("^task status is changed and manager is emailed completion report$")
    public void task_status_is_changed_and_manager_is_emailed_completion_report() throws Throwable {
    	//Navigate to yahoo mail login
    	driver.get("https://login.yahoo.com/?.src=ym&pspid=2023538075&activity=ybar-mail&.lang=en-US&.intl=us&.done=https%3A%2F%2Fmail.yahoo.com%2Fd%3Fpspid%3D2023538075%26activity%3Dybar-mail");
    	//Enter Email
		Thread.sleep(2000);

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
		
		Thread.sleep(5000);
		
		driver.quit();
    }

    @And("^user enters completion report$")
    public void user_enters_completion_report() throws Throwable {
        		driver.findElement(By.id( "report")).sendKeys("I added the functionality to the 'complete button.");
	Thread.sleep(1000);
	  driver.findElement(By.id("submit")).click();

    }
    



    @And("^user clicks send$")
    public void user_clicks_send() throws Throwable {
		driver.findElement(By.xpath( "/html/body/app-root/app-forgotpassword/body/div/div/div/div/div/div/div[2]/div/a[1]")).click();
    }




}
