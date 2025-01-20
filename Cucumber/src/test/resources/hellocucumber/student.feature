Feature: The student submits an assignment

  Scenario: the student submit an assignment test the assignment added to the test
    Given the student logged in to the Moodle system
    And the student is enrolled in a course
    When the student uploads an assignment to the course
    Then the assignment is added to the assignment list in Moodle
#    And the assignment is visible to the teacher
#    And the assignment is not visible to other students

