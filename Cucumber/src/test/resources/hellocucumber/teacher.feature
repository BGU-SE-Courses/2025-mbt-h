Feature: Teacher deletes an assignment
  Scenario: A teacher deleting an assignment test
    Given the teacher logged in to the Moodle system with username "admin" and password "Abcd123*"
    And the teacher is teacher of the course "course124"
    When the teacher deletes an assignment
    Then the assignment is deleted
