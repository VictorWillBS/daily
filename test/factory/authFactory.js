import { faker } from "@faker-js/faker";

function newUser() {
  return {
    name: faker.random.word(),
    email: faker.internet.email(),
    password: faker.random.alphaNumeric(12),
    photo: faker.internet.avatar(),
  };
}
