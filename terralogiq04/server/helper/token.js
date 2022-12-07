const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  createToken: (data, exp) => {
    return jwt.sign({ data }, process.env.JWT_KEY, { expiresIn: exp });
  },

  authToken: (token) => {
    try {
      return jwt.verify(token, process.env.JWT_KEY);
    } catch (error) {
      return false;
    }
  },
};
