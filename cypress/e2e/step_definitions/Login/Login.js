import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPageActions from '../../../PageObjects/PageActions/LoginPageActions';
import loginElementLocators from '../../../PageObjects/PageElements/LoginPageElements.json'


Given('que sai da página de Login', () => {
  LoginPageActions.deslogar();
});

When("informo um CPF válido {string}", (cpf) => {
  LoginPageActions.setEditText(loginElementLocators.LoginPageLocators.USERNAME, cpf);
});

When("informo uma senha {string}", (senha) => {
  LoginPageActions.setEditText(loginElementLocators.LoginPageLocators.PASSWORD, senha);
});

When("pressiono o botão de Login", () => {
 LoginPageActions.clickButton(loginElementLocators.LoginPageLocators.BTN_LOGIN);
});

Then('vejo o código da empresa {string} na página logada', (codemp) => {
 LoginPageActions.verifyMessage(loginElementLocators.LoginPageLocators.COD_EMP, codemp);
});

When("pressiono o botão de Recuperação de Senha", () => {
  LoginPageActions.clickButton(loginElementLocators.LoginPageLocators.RECUPERARSENHA);
});

When("pressiono o botão para enviar e-mail", () => {
  LoginPageActions.clickButton(loginElementLocators.LoginPageLocators.ENVEMAIL);
});

Then("vejo o aviso de Recuperação de senha {string}", (aviso) => {
  LoginPageActions.verifyMessage(loginElementLocators.LoginPageLocators.ERROEMAIL, aviso);
});

Then("vejo o aviso {string}", (aviso) => {
  LoginPageActions.verifyMessage(loginElementLocators.LoginPageLocators.ERROLOGIN, aviso);
});

Then("vejo o aviso de campo {string}", (aviso) => {
  LoginPageActions.verifyMessage(loginElementLocators.LoginPageLocators.OBRIGATORIO, aviso);
});