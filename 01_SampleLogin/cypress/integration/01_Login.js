/// <reference types="cypress" />

it('Google Page Test', () => {
    cy.visit('https://www.google.com')
    cy.get('.gLFyf').type('Bhanu Prakash Kandregula {enter}')
    //  Hard wait in milli seconds
    cy.wait(4000);
    cy.contains('Videos').click()
});

it.only("Login test - Authentication", () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click()
});

 