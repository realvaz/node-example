require("./config/config");

const express = require("express");
const app = express();

const users = require("./routes/users");

app.use(express.json());

app.use("/user", users);

app.listen(process.env.PORT, () => {
  console.log("Listening on port: ", process.env.PORT);
});
