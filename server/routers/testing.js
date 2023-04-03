import express from "express";
import { testingController } from "../controller/testingController.js";
const router = express.Router();

router.get("/", (req, res) => {
  testingController.getController(req, res);
});

router.post("/", (req, res) => {
  testingController.postController(req, res);
});

export default router;
