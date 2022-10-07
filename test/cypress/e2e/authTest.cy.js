describe("Sign-Up Test", () => {
  it("Must Create a new User", () => {
    cy.visit("localhost:3000/sign-up");
    cy.get('[data-cy= "name"]').type("teste");
    cy.get('[data-cy= "email"]').type("teste");
    cy.get('[data-cy= "password"]').type("teste");

    cy.get('[data-cy= "photo"]').type("teste");
  });
});
