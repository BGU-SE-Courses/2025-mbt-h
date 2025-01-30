Feature: Student uploads an assignment
  Scenario: A student uploading an assignment test
    Given the student logged in to the Moodle system with username "student10" and password "student@2411M"
    And the student is enrolled in a course "course124"
    And the course have a assignment to submit name : "assignment_Test"
    When the student uploads an assignment "the text of the online assignment"
    Then the assignment is added to the assignment list in Moodle
