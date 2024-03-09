import EmpresasElementLocators from '../PageElements/EmpresasPageElements.json';
import faker from 'faker';

class EmpresasPageActions {

  clickBotao(nomeBotao) {
    cy.get(EmpresasElementLocators.EmpresasPageLocators[nomeBotao]).click();
  }

  preencherCampo(nomeCampo, valor) {
    const campoLocator = EmpresasElementLocators.EmpresasPageLocators[nomeCampo.toUpperCase()];

    cy.get(campoLocator)
      .should('exist')
      .should('be.visible')
      .should('be.enabled')
      .focus()
      .clear()
      .type(nomeCampo === 'CNPJ' ? faker.random.number({ min: 10000000, max: 99999999 }).toString() : valor);
  }

  verificarMensagemSucesso() {
    cy.get('.p-toast-detail')
      .should('contain.text', 'Salvo com sucesso')
      .should('be.visible');
  }

  filtrarTabela() {
    cy.get(EmpresasElementLocators.EmpresasPageLocators.FILTRAR_BUTTON).click();
    cy.get(EmpresasElementLocators.EmpresasPageLocators.FILTRO_RAZAO_SOCIAL)
      .should('exist')
      .should('be.visible')
      .type(Cypress.env('razaoSocial'));
    cy.get(EmpresasElementLocators.EmpresasPageLocators.FILTRO_OK_BUTTON).click();
  }

  armazenarRazaoSocial() {
    cy.get(EmpresasElementLocators.EmpresasPageLocators.RAZAOSOCIAL)
      .invoke('val')
      .then((razaoSocial) => {
        Cypress.env('razaoSocial', razaoSocial);
      });
  }

  clicarNoCadastroFiltrado() {
    cy.contains('.column-row-Data', Cypress.env('razaoSocial'))
      .click();
  }

  excluirRegistro() {
    cy.get(EmpresasElementLocators.EmpresasPageLocators.DROPDOWN).click({force: true});
    cy.get(EmpresasElementLocators.EmpresasPageLocators.Excluir).click({force: true});
    cy.get(EmpresasElementLocators.EmpresasPageLocators.EXCLUIR_SIM).click({force: true});
    cy.get(EmpresasElementLocators.EmpresasPageLocators.DIALOGO_SIM).click({force: true});
  }
}

export default new EmpresasPageActions;