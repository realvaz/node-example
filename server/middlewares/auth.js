const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // Obtiene token de la cabecera con la siguiente forma (estándar):
  // Authorization: Bearer eyJhbGciO(...)
  const token = req.get("Authorization")?.replace("Bearer ", "");

  jwt.verify(token, process.env.SEED, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        err: {
          message: "Invalid token",
        },
      });
    }

    req.user = decoded.user;
    next();
  });
};

module.exports = {
  verifyToken,
};
