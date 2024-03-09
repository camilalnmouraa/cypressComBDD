const loginElementLocators = require('../PageElements/LoginPageElements.json');

class LoginPageActions {

    deslogar() {
        cy.get(loginElementLocators.LoginPageLocators.PERFIL).click();
        cy.get(loginElementLocators.LoginPageLocators.BTNSAIR).click();
      }

    setEditText(elementLocator, value) {
        cy.get(elementLocator)
            .should('exist')
            .should('be.visible')
            .should('be.enabled')
            .focus()
            .type(value);
    }

    clickButton(elementLocator) {
        cy.get(elementLocator)
            .should('exist')
            .should('be.visible')
            .click({ force: true });
    }

    verifyMessage(elementLocator, expectedMessage) {
        cy.get(elementLocator)
            .should('exist')
            .should('be.visible')
            .invoke('text')
            .should('eq', expectedMessage);
    }
}

export default new LoginPageActions();