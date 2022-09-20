import { LoginPage } from "../pages/login_page";

const loginPage = new LoginPage();

it('login test', () => {
    loginPage.navigate('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    loginPage.enterUserName('Admin');
    loginPage.enterPassword('admin123');
    loginPage.clickLogIn();
});

 