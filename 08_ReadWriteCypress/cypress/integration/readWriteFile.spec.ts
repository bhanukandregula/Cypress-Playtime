describe('Reading and Writing a file tests', () => {

    beforeEach(function() {
        // all the data in the example.json will be referred as data
        cy.fixture('example.json').as('data');
    });
    
    it('read file using fixtures', function() {
        // cy.log('test logs');
        cy.fixture('example.json')
            .its('name').should('eq', 'cypress');
        
        cy.log(this.data.name);
    }); 

    it('read file with readFile()', function() {
        cy.readFile('./cypress/fixtures/example.json')
            .its('name').should('eq', 'cypress');
    });

    it('write file', function(){
        // If we don't specify the file path, it create sin hte project directory
        // cy.writeFile('sample.txt', 'Bhanu Prakash Kandregula');
        // It replaces the existing content in hte file.
        cy.writeFile('sample.txt', 'Hello from New York City :) ');
        // This will appends to existing cointent in the file, in same line
        cy.writeFile('sample.txt', 'New York City welcomes you, Tadaaa, enjoy the city of lights', {flag: 'a+'});
    });
});