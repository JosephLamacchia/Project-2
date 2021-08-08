 

Feature: Login Page Functionality 

#Register User
Scenario: Check can register new user
  Given user is on login page
	And user clicks register
	And user enters firstname 
	And user enters lastname 
	And user enters email
	And user enters password
	And user chooses manager
	And user clicks submit
  Then user is now registered


#Get password if forgotten (recognized email)
Scenario: Check can get password by email
  Given user is on login page
    When user clicks forgot password
    And user enters email
    And user clicks send
    Then user receives password in email 


    