import { userService } from "../services/userService.js";

const userController = {
  getUsers: async (req, res) => {
    const result = await userService.getUsers(1, 10);
    res.status(200).send({
      message: "Users fetched successfully",
      result,
    });
  },

  createUser: async (req, res) => {
    const result = await userService.createUser(req.body);
    res.status(200).send(result);
  },
};

export { userController };
