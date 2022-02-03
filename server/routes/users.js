const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json("GET local User");
});

router.post("/", (req, res) => {
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

router.put("/:id", (req, res) => {
  let id = req.params.id;

  res.json({
    id,
  });
});

router.delete("/", (req, res) => {
  res.json("DELETE User");
});

module.exports = router;
