beforeEach(() => {
  cy.resetDataBase();
});

describe("Question Tests", () => {
  it("Must Create Question", () => {
    cy.generateToken();
    cy.visit("localhost:3000/");
    cy.get('[data-cy= "inputQuestion"]').type("teste");
    cy.intercept("POST", "/question/create").as("PostQuestion");
    cy.get('[data-cy="submitQuestion"]').click();
    cy.wait("@PostQuestion");
    cy.get('textarea[placeholder="teste"]').should("be.visible");
  });
  it("Must Delete Question", () => {
    cy.generateToken();
    cy.visit("localhost:3000/");
    cy.get('[data-cy= "inputQuestion"]').type("teste");
    cy.intercept("POST", "/question/create").as("PostQuestion");
    cy.get('[data-cy="submitQuestion"]').click();
    cy.wait("@PostQuestion");
    cy.get('[data-cy="delete"]').click();
    cy.get('textarea[placeholder="teste"]').not().should("be.visible");
  });
  it("Must Answer Question", () => {
    cy.generateToken();
    cy.visit("localhost:3000/");
    cy.get('[data-cy= "inputQuestion"]').type("teste");
    cy.intercept("POST", "/question/create").as("PostQuestion");
    cy.get('[data-cy="submitQuestion"]').click();
    cy.wait("@PostQuestion");
    cy.get('textarea[placeholder="teste"]').type("resposta");
    cy.intercept("POST", "/answer").as("SendQuestion");
    cy.get('[data-cy="send"]').click();
    cy.wait("@SendQuestion");
    cy.get('textarea[placeholder="resposta"]').should("be.visible");
  });
});
