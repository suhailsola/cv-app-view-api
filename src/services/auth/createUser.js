import prisma from "..";

export const createUser = async (username, email, hashedPassword) => {
  const result = await prisma.users.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });
  return result;
};
