// Express Server Code

const express = require("express");
const cors = require("cors");

const apiRouter = require("./api");

const app = express();
app.use(cors());
app.use(express.json());

// APIv1 Route
app.use("/api", apiRouter);

// HC Route
app.get("/", (req, res) => {
  res.json({
    statusCode: 200,
    msg: "API Server is running",
  });
});

module.exports = app;
