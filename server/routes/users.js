const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.get("/", (req, res) => {
  res.json("GET local User");
});

router.post("/", (req, res) => {
  let body = req.body;
  
  let user = new User({
    username: body.username,
    email: body.email,
    password: body.password,
    role: body.role,
  });

  user.save((err, userDB) => {
    if (err) {
      res.status(400).json({
        ok: false,
        err,
      });
    } else {
      res.json({
        ok: true,
        user: userDB,
      });
    }
  });

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
