Feature: As a basic user
  I should be able to remove computers from the computer list
  
@DeleteComputerScenario
  Scenario: #1 User can delete computer from the list
    Given I'm on computer-database website
    When I select computer - "Test Mac 221" from the list
    And I click the Delete this computer button
    Then I should see a message "Done! Computer has been deleted"
    And I shouldn't see - "Test Mac 221" computer in the list 


