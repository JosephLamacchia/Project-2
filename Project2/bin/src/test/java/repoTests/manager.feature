 

Feature: Manager Functionality

#Create task
  Scenario: Check can create task
    Given user is on post login manager page
    When user clicks "assign task"
    And user enters employee name as "Bill Thrill"
    And user enters task description as "Write a report."
    And user enters date-due as "10/20/21"
    And user clicks "submit"
    Then task is created
    

#Assign task
  Scenario: Check can assign task
    Given user is on post login manager page
    When user clicks "assign task"
	  And user selects task
    And user selects employee
    And user clicks "assign"
    Then employee is assigned task
    
#Edit task
  Scenario: Check can edit task
    Given user is on post login manager page
    When user clicks "edit task"
	  And user selects task
    And user clicks edits task
    And user clicks "submit"
    Then task is updated
    
#View all employees
Senario
	Given user is on post login manager page
	When clicks "view employees"    
	Then user views all employees 
	
	#View all employees with tasks
Senario
	Given is in employee view
	When clicks "view employees with tasks"    
	Then user views employees with tasks  
	
	#View all employees without tasks
Senario
	Given  user is in employee view
	When user clicks "view employees without tasks"    
	Then user views employees without tasks
	
	


 #View tasks in progress
 Scenario: Check can view active tasks for each employee
  Given user is on post login manager page
    When user clicks "View tasks in progress" 
    Then user views tasks in progress
    
    

