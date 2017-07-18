Feature: As a basic user
  I should be able to add computers to the computers list
  Wrong data shouldn't be accepted

@AddComputerScenario
  Scenario: #1 Add page can be opened
    Given I'm on computer-database website
    When I click on Add a new computer button
    Then I should see page with form for add new computer

@AddComputerScenario
  Scenario: #2 User can add new computer to the list
    Given I'm on computer-database website
    When I click on Add a new computer button
    And I fill all fields name - "Test Mac 221", start Date - "1989-12-12", end Date - "2010-10-10" , company - "Apple Inc" 
    And I click the create this computer button
    Then I should see a message "Done! Computer "..." has been created"
    And I should see - "Test Mac 221" computer in the list

@AddComputerScenario
  Scenario: #3 User should see an error on fields with wrong data
    Given I'm on computer-database website
    When I click on Add a new computer button
    And I enter a computer name - ""
    And I enter a inroduced date in 'yyyy-MM-dd' format - "12-12"
    And I enter a discontinued date in 'yyyy-MM-dd' format - "12-13" 
    And I select a company name - "Apple Inc"
    And I click the create this computer button
    Then I should see an error on the fields with wrong data
    
 @AddComputerScenario       
  Scenario: #4 Required fields check
    Given I'm on computer-database website
    When I click on Add a new computer button
    And I click the create this computer button
    Then I should see error on name field

  