
Feature: User Functionality


 #View Task
 Scenario: Check can view active tasks
  Given user is on post login page
    When user clicks "view current tasks"
    Then user views current tasks
    
#Begin Task
 Scenario: Check can begin task
  Given user is on post login page
    When user clicks "view current tasks"
    And user clicks "begin task"
    Then user begins task

#Complete Task
 Scenario: Check can mark task as complete 
  Given user is on post login page
    When user enters clicks "Mark task as complete"
    And user enters details as "blah blah blah"
    And user clicks  "submit"
    Then user completes task

#Send reason for unfinished task 
 Scenario: Check can send reasoning to manager
  Given user is on post login page
    Then user sends reasoning