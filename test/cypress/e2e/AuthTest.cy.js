describe("Auth Tests", () => {
  it("Must Create New User", () => {
    cy.visit("localhost:3000/sign-up");
    cy.get('[data-cy="name"]').type("teste");
    cy.get('[data-cy="email"]').type("teste2@teste.com");
    cy.get('[data-cy="password"]').type("1234567890");
    cy.get('[data-cy="photo"]').type(
      "https://64.media.tumblr.com/6ed4d905e2daf140621cf49fb4e992a7/45c8f5f1c04730ea-f6/s1280x1920/f32aeed9ad2cab1e11e0245d19729abbdab3bb70.png"
    );
    cy.intercept("POST", "/signup").as("PostSignUp");
    cy.get('[data-cy="submit"]').click();
    cy.wait("@PostSignUp");
    cy.url().should("eq", "http://localhost:3000/sign-in");
  });

  it("Must Login User", () => {
    cy.visit("localhost:3000/sign-in");
    cy.get('[data-cy="email"]').type("teste2@teste.com");
    cy.get('[data-cy="password"]').type("1234567890");
    cy.intercept("POST", "/signin").as("PostSignIn");
    cy.get('[data-cy="submit"]').click();
    cy.wait("@PostSignIn");
    cy.url().should("eq", "http://localhost:3000/");
  });
});
