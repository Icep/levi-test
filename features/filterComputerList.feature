Feature: As a basic user
  I should be able to filter the computers list

@FilterComputerScenario
  Scenario: #1 User can filter the computer list
    Given I'm on computer-database website
    When I enter in the filter field a part of computer name "ap"
    And I click filter by name button
    Then I should see this list filetered in according to filter - "ap"

@FilterComputerScenario
  Scenario: #2 Filter is discarded when user clear filter field and click filter
    Given I'm on computer-database website
    When I enter in the filter field a part of computer name "apppp"
    And I click filter by name button
    And I clear filter field
    And I click filter by name button
    Then I should see this computer list without filter

@FilterComputerScenario
  Scenario: #3 User can see message if nothing to show after filter
    Given I'm on computer-database website
    When I enter in the filter field a part of computer name "apppp"
    And I click filter by name button
    Then I should see the message "No computers found"

@FilterComputerScenario
  Scenario Outline: #4 User can filter the computer list with a different way
    Given I'm on computer-database website
    When I enter in the filter field - <Filter>
    And I click filter by name button
    Then I should see this list filetered by - <Filter>
  Examples:
  |Filter|
  |apple|
  |APPLE|
  |AppLE|
  |12|