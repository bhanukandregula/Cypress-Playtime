/// <reference types="cypress" />

it('Google Search with Text', () => {
    cy.log('First Google test started...');
    cy.visit('https://www.google.com');
    cy.get('.gLFyf').type('cypress {enter}');
    cy.log('First google test ended...');
});

it('Google Search 2nd test', () => {
    cy.log('Seconf google test started...');
    cy.visit('https://www.google.com');
    cy.get('.gLFyf').type('cypress {enter}');
    cy.log('Second google test finished');
});