require("./config/config");
require("./config/database.js");

const express = require("express");
const app = express();

const users = require("./routes/users");
const login = require("./routes/login");

app.use(express.json());

app.use("/users", users);
app.use("/login", login);

app.listen(process.env.PORT, () => console.log("Listening on port: ", process.env.PORT));
