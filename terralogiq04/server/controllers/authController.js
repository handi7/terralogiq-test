const db = require("../config/db");
const { compare } = require("../helper/password");
const { createToken, authToken } = require("../helper/token");

module.exports = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      let query = `select * from users where email = ?;`;

      const [[user]] = await db.execute(query, [email]);

      if (!user) {
        return res.status(401).send("Account not found!");
      }

      if (!compare(password, user.password)) {
        return res.status(401).send("Wrong password!");
      }

      delete user.password;
      const token = createToken({ id: user.id, email }, "10m");

      res.status(200).send({ user, token });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  keepLogin: async (req, res) => {
    try {
      const auth = authToken(req.token);

      if (!auth) {
        return res.status(401).send("invalid/expired token");
      }

      let query = `select * from users where id = ?;`;

      const [[user]] = await db.execute(query, [auth.data.id]);
      delete user.password;
      const token = createToken({ id: user.id, emal: user.email }, "10m");

      res.status(200).send({ user, token });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
