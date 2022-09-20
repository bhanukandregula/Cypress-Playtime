it('Google Test', () => {
    cy.visit('https://www.google.com');
    cy.get('.gLFyf').type('Bhanu Prakash Kandregula').type('{enter}');
});