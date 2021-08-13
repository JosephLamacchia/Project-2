 

Feature: Login Page Functionality 

#User Login (Success)
 Scenario: Check login is succesful with valid credectials
    Given user is on login page
    When user enters login credentials  
    And user clicks login button
    Then user is navigated to post login page
    
     #Unsuccessful login
 Scenario: Check login is unsuccessful with invalid credentials
  Given user is on login page
    When user invalid login credentials 
    And user clicks login button
    Then user is prompted invalid credentials
 



#Register User
Scenario: Check can register new user
  Given user is on login page
	And user clicks register
	And user enters firstname 
	And user enters lastname 
	And user enters email as "billbanes123@yahoo.com"
	And user enters password
	And user chooses manager
	And user clicks submit
  Then user is now registered


#Get password if forgotten (recognized email)
Scenario: Check can get password by email
  Given user is on login page
    When user clicks forgot password
    And user enters email as "billbanes123@yahoo.com"
    And user clicks send
    Then user receives password in email 
    
 #Get password if forgotten (unrecognized email)
Scenario: Check no email sent if account not found
  Given user is on login page
    When user clicks forgot password
    And user enters email as "email@gmail.com"
    And user clicks send
    Then user is prompted No account linked to this email
    


    