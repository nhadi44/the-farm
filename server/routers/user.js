import express from "express";
import { userController } from "../controller/userController.js";
const router = express.Router();

router.get("/get-users", (req, res) => {
  userController.getUsers(req, res);
});

router.post("/create-user", (req, res) => {
  userController.createUser(req, res);
});

export default router;
