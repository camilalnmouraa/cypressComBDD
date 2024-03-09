import { Before, Given, And } from 'cypress-cucumber-preprocessor/steps';
import BeforePageActions from '../../../PageObjects/PageActions/BeforePageActions';
import '../../../support/commands';

Before(() => {
  cy.Login(Cypress.env('username'), Cypress.env('password'));
});

Given(`cliquei no menu {string}`, (menu) => {
  BeforePageActions.menu(menu);
});

And(`cliquei no primeiro sub-menu {string}`, (SubMenu) => {
  BeforePageActions.SubMenu(SubMenu);
});

And(`cliquei no segundo sub-menu {string}`, (SubMenuDois) => {
  BeforePageActions.SubMenuDois(SubMenuDois);
});
