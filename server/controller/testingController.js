import { testingService } from "../services/testingService.js";

// create controller
const testingController = {
  getController: async (req, res) => {
    const result = await testingService.getService();
    res.status(200).send(result);
  },

  postController: async (req, res) => {
    res.status(200).send(req.body);
  },
};

// export the controller es6 style
export { testingController };
