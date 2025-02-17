const express = require("express");
const router = express.Router();

const v1Router = require("./v1");

router.use("/v1", v1Router);

// HC Route
router.get("/", (req, res) => {
  res.json({
    statusCode: 200,
    msg: "API Server is running",
  });
});

module.exports = router;
