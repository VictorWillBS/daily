// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import { faker } from "@faker-js/faker";
Cypress.Commands.add("resetDataBase", () => {
  cy.request("POST", "localhost:5000/clearbank");
});
Cypress.Commands.add("generateToken", () => {
  const user = {
    email: faker.internet.email(),
    name: "test",
    password: "1234567890",
    photo:
      "https://64.media.tumblr.com/6ed4d905e2daf140621cf49fb4e992a7/45c8f5f1c04730ea-f6/s1280x1920/f32aeed9ad2cab1e11e0245d19729abbdab3bb70.png",
  };
  const { email, password } = user;
  cy.request("POST", "localhost:5000/signup", user);
  let token;
  cy.request("POST", "localhost:5000/signin", { email, password }).then(
    (response) => {
      localStorage.setItem("token", response.body.token);
    }
  );
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
