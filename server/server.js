require("./config/config");

const express = require("express");
const app = express();

app.use(express.json())

app.get("/user", (req, res) => {
  res.json("GET local USER");
});

app.post("/user", (req, res) => {
  let body = req.body;

  if (!body.username) {
    res.status(400).json({
      ok: false,
      message: "Username is required",
    });
  } else {
    res.json({
      ok: true,
      user: body,
    });
  }
});

app.put("/user/:id", (req, res) => {
  let id = req.params.id;

  res.json({
    id,
  });
});

app.delete("/user", (req, res) => {
  res.json("DELETE User");
});

app.listen(process.env.PORT, () => {
  console.log("Listening on port: ", process.env.PORT);
});
