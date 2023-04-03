import express from "express";

const app = express();
const port = process.env.PORT || 5000;

app.get("/testing", (req, res) => {
  res.status(200).send("Hello Hadi");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
