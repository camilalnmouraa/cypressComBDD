class BeforePageActions {
  Login() {
    cy.Login();
  }

  menu(menu) {
    cy.get('.toolbar-menu').find('button').click();
    cy.get('.itens-menu-principal').contains(menu).click();
  }

  SubMenu(SubMenu) {
    cy.get('.item').contains(SubMenu).click();
  }

  SubMenuDois(SubMenuDois) {
    cy.get('app-sidenav-link').contains(SubMenuDois).click();
  }
}

export default new BeforePageActions();