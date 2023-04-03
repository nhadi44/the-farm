import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();
const createUsers = async () => {
  for (let i = 0; i < 100; i++) {
    await prisma.user.create({
      data: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
      },
    });
  }

  console.log("Users created successfully");
};

createUsers()
  .catch((e) => {
    console.log(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
