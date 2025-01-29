Feature: The student submits an assignment

  Scenario: the student submit an assignment
    Given the student logged in to the Moodle system with username "student " and password "Abcd123*"
    And the student is enrolled in a course 1234
    When the student uploads an assignment to the course
    Then the assignment is added to the assignment list in Moodle


