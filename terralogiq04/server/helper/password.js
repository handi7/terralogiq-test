const bcrypt = require("bcrypt");

module.exports = {
  create: (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  },

  compare: (password, hash) => {
    return bcrypt.compareSync(password, hash);
  },
};
