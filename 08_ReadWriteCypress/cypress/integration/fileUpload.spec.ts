describe('file upload tests', function(){
    it('file upload demo', function(){
        cy.visit('https://filebin.net/');
        cy.get('#fileField').attachFile('sample.txt');
    });
});