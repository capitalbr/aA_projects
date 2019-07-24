const Validator = require("validator");
const validText = require("./valid_text");

module.exports = function validateRegisterInput(data) {
  data.username = validText(data.username) ? data.username : "";
  data.email = validText(data.email) ? data.email : "";
  data.password = validText(data.password) ? data.password : "";

  const errors = {};

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = "Username field is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!Validator.isLength(data.password, {min: 8, max: 32})) {
    errors.password = "Password length must be between 8 and 32"
  }

  return {
    errors,
    isValid: Object.values(errors).length === 0 ? true : false
  };
};