const express = require("express");

const validateRdpRequest = require("../../entity/rdpConnectSchema");
const startRdpClient = require("../../lib/startRdpClient");

const router = express.Router();

// TODO: Make a route for fetching server addresses
//router.get('/')

// Route for connecting to rdp server
router.post("/rdp-connect", validateRdpRequest, (req, res) => {
  const { serverIp, port } = req.body;

  // Call the RDP starter function
  startRdpClient(serverIp, port);

  res.json({
    statusCode: 200,
    msg: "RDP Connection Process Started Successfully. NOTE: This response does not indicate a successful connection",
  });
});

// HC Route
router.get("/", (req, res) => {
  res.json({
    statusCode: 200,
    msg: "APIv1 Server is running",
  });
});

module.exports = router;
