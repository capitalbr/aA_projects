const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const keys = require("../../config/keys");

// here we'll be taking in the `data` from our mutation

const validateRegisterInput = require("../validations/register");
const validateLoginInput = require("../validations/login")


const register = async data => {
  try {
    const { errors, isValid } = validateRegisterInput(data);
    if (!isValid) {
      throw new Error(Object.values(errors)[0]);
    }

    const { username, email, password } = data;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new Error("This user already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User(
      {
        username,
        email,
        password: hashedPassword
      },
      err => {
        if (err) throw err;
      }
    );


    user.save();

    const token = jwt.sign({ id: user._id }, keys.secretOrKey);
    return { token, loggedIn: true, ...user._doc, password: null };

  } catch (err) {
    throw err;
  }
};

const logout = async data => {
  const user = await User.findById(data._id);
  return {token: "", loggedIn: false, ...user._doc};
}

const login = async data => {
  try {
    // use our other validator we wrote to validate this data
    const { errors, isValid } = validateLoginInput(data);

    if (!isValid) {
      throw new Error(Object.values(errors)[0]);
    }

    const user = await User.findOne({email: data.email});

    if (!user) {
      throw new Error("user does not exist");
    }

    console.log(user);
    console.log(data.password)

    if (bcrypt.compareSync(data.password, user.password)){
      const token = jwt.sign({ id: user._id }, keys.secretOrKey);
      return { token, loggedIn: true, ...user._doc, password: null };
    } else {
      throw new Error("password does not match");
    }
  } catch (err) {
    throw err;
  }
};

const verifyUser = async data => {
  try {
    // we take in the token from our mutation
    const { token } = data;
    // we decode the token using our secret password to get the
    // user's id
    const decoded = jwt.verify(token, keys.secretOrKey);
    const { id } = decoded;

    // then we try to use the User with the id we just decoded
    // making sure we await the response
    const loggedIn = await User.findById(id).then(user => {
      return user ? true : false;
    });

    return { loggedIn };
  } catch (err) {
    return { loggedIn: false };
  }
};

module.exports = { register, logout, login, verifyUser };