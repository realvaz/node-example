const mongoose = require("mongoose");

const uniqueValidator = require("mongoose-unique-validator");

let Schema = mongoose.Schema;

let validRoles = {
  values: ["ADMIN", "USER"],
  message: "{VALUE} is not a valid role",
};

let userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  img: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    default: "USER",
    enum: validRoles,
  },
  state: {
    //Not required
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});

userSchema.plugin(uniqueValidator, { message: "{PATH} should be unique" });

module.exports = mongoose.model("User", userSchema);
