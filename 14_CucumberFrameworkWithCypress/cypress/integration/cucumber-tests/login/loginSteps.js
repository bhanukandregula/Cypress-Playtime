import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('user is on login page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
});

When('when user enters username and password', () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('admin123');
});

When('click on login button', () => {
    cy.get('.oxd-button').click()
});

Then('user is navigated to the homepage', () => {
    cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
});