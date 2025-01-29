Feature: The teacher deletes an assignment

  Scenario: the teacher deleting assignment test
    Given the teacher logged in to the Moodle system with username "admin" and password "Abcd123*"
    And the teacher is teacher of the course 1234
    When the teacher deletes an assignment
    Then the assignment is deleted

