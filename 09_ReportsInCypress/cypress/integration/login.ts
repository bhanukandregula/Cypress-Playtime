it('My 1st test', () => {
    cy.log('Login 1st test started...');
    cy.visit('https://trytestingthis.netlify.app/');
    cy.get('#uname').type('test');
    cy.get('#pwd').type('test');
    cy.get('[type="submit"]').click();
    cy.log('1st test ended...')
});