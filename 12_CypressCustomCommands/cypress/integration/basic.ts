it('Google Test', () => {
    cy.visit('https://trytestingthis.netlify.app/');
    cy.get('#uname').type('test');
    cy.get('#pwd').type('test');
    cy.get('[type="submit"]').click();
    cy.contains('Login Successful');
    // This is coming from supportr/commands.js as Custom commands
    cy.clicklink('here');
});