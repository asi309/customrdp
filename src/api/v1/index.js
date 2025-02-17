const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    statusCode: 200,
    msg: "APIv1 Server is running",
  });
});

module.exports = router;
