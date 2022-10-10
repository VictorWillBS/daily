import generateDate from "../../../src/functions/generateDate";

beforeEach(() => {
  cy.resetDataBase();
});
describe("Question Tests", () => {
  it("Must Show Question", () => {
    cy.generateToken();
    cy.visit("localhost:3000/");

    cy.get('[data-cy= "inputQuestion"]').type("teste1");
    cy.intercept("POST", "/question/create").as("PostQuestion1");
    cy.get('[data-cy="submitQuestion"]').click();
    cy.wait("@PostQuestion1");

    cy.get('[data-cy= "inputQuestion"]').type("teste2");
    cy.intercept("POST", "/question/create").as("PostQuestion2");
    cy.get('[data-cy="submitQuestion"]').click();
    cy.wait("@PostQuestion2");

    cy.get('textarea[placeholder="teste2"]').type("resposta");
    cy.intercept("POST", "/answer").as("SendQuestion");
    cy.get('[data-cy="send2"]').click();
    cy.wait("@SendQuestion");

    const today = generateDate();

    cy.visit(`localhost:3000/day/${today}`);
    cy.get('[ data-cy="questionTitle"]')
      .contains("teste1")
      .should("be.visible");

    cy.get('[ data-cy="questionTitle"]')
      .contains("teste2")
      .should("be.visible");
    cy.get('[ data-cy="answer"]').contains("resposta").should("be.visible");
    cy.get('[ data-cy="answer"]')
      .contains("Não respondida")
      .should("be.visible");
  });
});
