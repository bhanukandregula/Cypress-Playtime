it('Learning Assertions', () => {
    cy.visit('https://example.cypress.io');
    cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(1) > a').click();

    cy.get('#query-btn')
        .should('contain', 'Button')
        .should('have.class', 'query-btn btn btn-primary')
        .should('be.visible')
        .should('be.enabled')

    cy.get('#query-btn').invoke('attr', 'id')
        .should('equal', 'query-btn')

    cy.get('#query-btn')
        .should('contain', 'Button')
        .and('have.class', 'query-btn')

    // Explicit assertions
    expect(true).to.be.true

    let name = 'Bhanu'
    expect(name).to.be.equal('Bhanu')

    // assert()
    assert.equal(4, 4, 'Message display on error, numbers are not equal');
    assert.strictEqual(4, 4, '4 is not stricylt equal to 4');

});