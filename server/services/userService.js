import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userService = {
  getUsers: (pageNumber, pageSize) => {
    const users = prisma.user.findMany({
      skip: (pageNumber - 1) * pageSize,
      take: pageSize,
    });

    const totalUsers = prisma.user.count();

    return Promise.all([users, totalUsers]).then((values) => {
      return {
        page: pageNumber,
        pageSize: pageSize,
        totalUsers: values[1],
        users: values[0],
      };
    });
  },

  createUser: (data) => {
    return prisma.user.create({
      data,
    });
  },
};

export { userService };
