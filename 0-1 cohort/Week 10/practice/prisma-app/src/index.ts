import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  await prisma.user.create({
    data: {
      username,
      password,
      firstName,
      lastName,
    },
  });
}

// insertUser("user1", "password1", "John", "Doe");
// insertUser("user2", "password2", "Jane", "Doe");
// insertUser("user3", "password3", "John", "Smith");

prisma.user.findMany().then((users) => {
  console.log(users);
});
