export class LoginPage {

    loginPage_username = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
    loginPage_password = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input';
    loginPage_loginButton = '.oxd-button';

    navigate(url: string) {
        cy.visit(url);
    }

    enterUserName(userName: string) {
        cy.get(this.loginPage_username).type(userName);
    }

    enterPassword(password: string) {
        cy.get(this.loginPage_password).type(password);
    }

    clickLogIn() {
        cy.get(this.loginPage_loginButton).click()
    }
} 