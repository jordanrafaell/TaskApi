// src/models/generatorUser.ts
import { faker } from '@faker-js/faker';

export function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

export const users = faker.helpers.multiple(createRandomUser, {
  count: 10,
});
