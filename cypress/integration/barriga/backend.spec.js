/// <reference types="cypress"/>

import "../../support/commandMovimentacao";

describe("should test at a functional level", () => {
  let token;

  before(() => {
    cy.getToken("a@a", "a").then((tkn) => {
      token = tkn;
    });
  });

  beforeEach(() => {
    //cy.resetApp();
  });

  it("Should create an count", () => {
    // método para fazer requisições à API

    cy.request({
      url: "https://barrigarest.wcaquino.me/contas",
      method: "POST",
      headers: { Authorization: `JWT ${token}` },
      body: {
        nome: "Conta via api rest",
      },
    }).as("response");

    cy.get("@response").then((res) => {
      expect(res.status).to.be.equal(201);
      expect(res.body).to.have.property("id");
      expect(res.body).to.have.property("nome", "Conta via api rest");
    });
  });

  it("Should update an account", () => {});

  it("Should not create an account with same name", () => {});

  it("Should create a transaction", () => {});

  it("Should get balance", () => {});

  it("Should remove a transaction", () => {});
});
