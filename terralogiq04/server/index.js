const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const bearerToken = require("express-bearer-token");
const authRouter = require("./routers/authRouter");

dotenv.config();

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use(bearerToken());

app.use("/auth", authRouter);

app.listen(process.env.API_PORT, () => console.log("Api is Running Up... "));
