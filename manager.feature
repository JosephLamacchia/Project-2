 

Feature: Manager Functionality

#Assign task
  Scenario: Check can assign task
    Given user is on post login manager page
    When user clicks "assign task"
    And user enters employee name as "Bill Thrill"
    And user enters task description as "Write a report."
    And user enters date-due as "10/20/21"
    And user clicks "submit"
    Then employee is assigned task
    
 #View tasks in progress
 Scenario: Check can view active tasks for each employee
  Given user is on post login manager page
    When user clicks "View tasks in progress" 
    Then user views tasks in progress
    
    

