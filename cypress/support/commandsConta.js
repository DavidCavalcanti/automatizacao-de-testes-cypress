import { LOCATORS as loc } from "./locators";

Cypress.Commands.add("acessarMenuConta", () => {
  cy.get(loc.MENU.SETTINGS).click();
  cy.get(loc.MENU.CONTAS).click();
});

Cypress.Commands.add("inserirConta", (nomeConta) => {
  cy.get(loc.CONTAS.NOME).clear().type(nomeConta);
  cy.get(loc.CONTAS.BTN_SALVAR).click();
});
