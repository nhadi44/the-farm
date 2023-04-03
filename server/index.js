import express from "express";
import cors from "cors";
import helmet from "helmet";
import userRoute from "./routers/user.js";
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.use("/api/v2", userRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
