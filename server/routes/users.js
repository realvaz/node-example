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
  let {username, email, img, role, state} = req.body;

  User.findByIdAndUpdate(
    id,
    {username, email, img, role, state},
    {
      new: true, //devuelve el objeto actualizado
      runValidators: true, //aplica las validaciones del esquema del modelo
      context: 'query'  //necesario para las disparar las validaciones de mongoose-unique-validator
    },
    (err, userDB) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err,
        });
      }

      res.json({
        ok: true,
        user: userDB,
      });
    }
  );
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  // User.findByIdAndRemove(id, (error, userDB) => {
  //   if (error) {
  //     return res.status(400).json({
  //       ok: false,
  //       err,
  //     });
  //   } else {
  //     res.json({
  //       ok: true,
  //       user: userDB,
  //     });
  //   }
  // });

  User.findByIdAndUpdate(
    id,
    { state: false },
    { new: true },
    (error, userDB) => {
      if (error) {
        return res.status(400).json({
          ok: false,
          error,
        });
      }

      if (userDB == null) {
        res.status(400).json({
          ok: false,
          error: {
            message: "User not found",
          },
        });
      } else if (userDB != null) {
        res.json({
          ok: true,
          user: userDB,
        });
      }
    }
  );
});

module.exports = router;
