import { LoginPage } from "../pages/login_page";



// Grouping all the required test cases
// Keep all the it() conditions inside describe
describe('all login tests', () => {

    const loginPage = new LoginPage();

    // we can also have multipler beforeEach() in single file
    // This will also execute each trime before every it() is being executed
    beforeEach(() => {
        cy.log('This is for the test log, form beforeEach()');
    });

    // before Each() will execute before each it() is being executed
    beforeEach(() => {
        loginPage.navigate('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });

    // it.only() will run only this test out all the other tests in describe
    it('login test with Valid Credentials', () => {
        loginPage.enterUserName('Admin');
        loginPage.enterPassword('admin123');
        loginPage.clickLogIn();
        cy.get('.oxd-brand-banner > img').click();
    });
    
    // it.skip() will skp this tests to execute
    it('login test with invalid username', () => {
        // we can comment this, since are going to navigate in above it() tests.
        // loginPage.navigate('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginPage.enterUserName('AdminBhanu');
        loginPage.enterPassword('admin123');
        loginPage.clickLogIn();
    
        cy.on('.oxd-alert-content > .oxd-text', (text) => {
            expect('Invalid credentials').to.be.a('string');
        });
    });
    
    it('login test with invalid password', () => {
        // loginPage.navigate('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginPage.enterUserName('Admin');
        loginPage.enterPassword('admin1234546');
        loginPage.clickLogIn();
    
        cy.on('.oxd-alert-content > .oxd-text', (text) => {
            expect('Invalid credentials').to.be.a('string');
        });
    });
});


