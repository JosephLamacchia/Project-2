 

Feature: Login Page Functionality 

#Successful Login (employee)
  Scenario: Check login is succesful with valid credectials
    Given user is on login page
    When user enters email as "BillyB@gmail.com" 
    And user enters password as "password911"
    And user clicks login button
    Then user is navigated to post login page
    
    #Successful Login (manager)
  Scenario: Check login is succesful with valid credectials
    Given user is on login page
    When user enters email as "BillyBoBThorton@gmail.com" 
    And user enters password as "password"
    And user clicks login button
    Then user is navigated to post login manager page
    
 #Unsuccessful login
 Scenario: Check login is unsuccessful with invalid credentials
  Given user is on login page
    When user enters email as "B" 
    And user enters password as "pass1"
    And user clicks login button
    Then user fails to log in

#Register User
Scenario: Check can register new user
  Given user is on login page
	And user clicks "register"
	And user enters information
	And user clicks "submit" 
  Then user is now registered

#Get password if forgotten (recognized email)
Scenario: Check can get password by email
  Given user is on login page
    When user clicks "forgot password"
    And user enters email as "email@gmail.com"
    And user clicks "submit"
    Then user receives password in email 
    
  #Get password if forgotten (unrecognized email)
Scenario: Check can get password by email
  Given user is on login page
    When user clicks "forgot password"
    And user enters email as "email@gmail.com"
    And user clicks "submit"
    Then user is prompted "No account linked to this email."
    
     

    