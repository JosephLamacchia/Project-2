
Feature: User Functionality


 #View Task
 Scenario: Check can view active tasks for each employee
  Given user is on post login page
    When user clicks "view current tasks"
    Then user views current tasks

#Complete Task
 Scenario: Check can view active tasks for each employee
  Given user is on post login page
    When user enters clicks "Mark task as complete"
    And user enters details as "blah blah blah"
    And user clicks  "submit"
    Then user completes task

