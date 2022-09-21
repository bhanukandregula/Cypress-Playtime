describe('db tests', () => {
    it('create table', () => {
        cy.task('queryDb', "CREATE TABLE Employee(ID int, FirstName varchar(255), Address varchar(255), City varchar(255)");
    });
});