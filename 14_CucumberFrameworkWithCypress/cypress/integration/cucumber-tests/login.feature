Feature: test login functionality

    Scenario: test login with valid credentials
        Given user is on login page
        When when user enters username and password
        And click on login button
        Then user is navigated to the homepage
