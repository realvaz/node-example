require("./config/config");

const express = require("express");
const app = express();

app.get("/user", (req, res) => {
  res.json("GET local User");
});

app.post("/user", (req, res) => {
  res.json("POST User");
});

app.put("/user/:id", (req, res) => {
  res.json("PUT User");
});

app.delete("/user", (req, res) => {
  res.json({message: "DELETE User"});
});

app.listen(3000, () => {
  console.log("Listening on port: ", 3000);
});
