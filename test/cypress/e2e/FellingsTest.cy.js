beforeEach(() => {
  cy.resetDataBase();
});

describe("Fellings Tests", () => {
  it("Must Answer Felling", () => {
    cy.generateToken();
    cy.visit("localhost:3000/");
    cy.get('[data-cy="emotionInput"]').select("Feliz");
    cy.intercept("POST", "/felling").as("PostFelling");
    cy.get('[data-cy="emotionSubmit"]').click();
    cy.wait("@PostFelling");
    cy.get('[data-cy="emotionInput"]').should("be.disabled");
  });
});
