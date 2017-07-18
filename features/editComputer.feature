Feature: As a basic user
  I should be able to edit properties of computers from the computers list

@EditComputerScenario
  Scenario: #1 User create computer for test
    Given I'm on computer-database website
    When I click on Add a new computer button
    And I fill all fields name - "EditPropertyTestComp", start Date - "1989-12-12", end Date - "2010-10-10" , company - "Apple Inc"
    And I click the create this computer button
    Then I should see a message "Done! Computer "..." has been created"
    And I should see - "EditPropertyTestComp" computer in the list

@EditComputerScenario
  Scenario: #2 User can change and Discard properties of computers 
    Given I'm on computer-database website
    When I select computer - "EditPropertyTestComp" from the list
    And I change a computer name - "EditPropertyTestComp Changed"
    And I change a inroduced date in 'yyyy-MM-dd' format - "2000-11-11"
    And I change a discontinued date in 'yyyy-MM-dd' format - "2000-11-11" 
    And I select a company name - "ASUS"
    And I click the Cancel button
    Then I shouldn't see a message "Done! Computer "..." has been updated"

@EditComputerScenario
  Scenario: #3 User can change and save properties of computers 
    Given I'm on computer-database website
    When I select computer - "EditPropertyTestComp" from the list
    And I change a computer name - "EditPropertyTestComp Changed"
    And I change a inroduced date in 'yyyy-MM-dd' format - "2000-11-11"
    And I change a discontinued date in 'yyyy-MM-dd' format - "2000-11-11" 
    And I select a company name - "ASUS"
    And I click the save this computer button
    Then I should see a message "Done! Computer "..." has been updated"

@EditComputerScenario
  Scenario: #4 User can delete computer from the list after update
    Given I'm on computer-database website
    When I select computer - "EditPropertyTestComp" from the list
    And I click the Delete this computer button
    Then I should see a message "Done! Computer has been deleted"
    And I shouldn't see - "EditPropertyTestComp" computer in the list