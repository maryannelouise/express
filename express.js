import express from "express";

const app = express();
app.use(express.json());

app.get("/getInfo", (req, res) => {
  res.json({ message: "Hello" });
});

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});