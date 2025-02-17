const { z } = require("zod");

const schema = z.object({
  serverIp: z.string().refine(
    (value) => {
      const ipV4Regex =
        /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
      return ipV4Regex.test(value);
    },
    {
      code: 'invalid_format',
      message: "Invalid IP Address",
    }
  ),
  port: z
    .number()
    .int()
    .min(0, { message: "Port must be between 0 and 65535" })
    .max(65535, { message: "Port must be between 0 and 65535" })
    .refine((value) => value !== 0, { message: "Port 0 is not valid" }),
});

const validateRdpRequest = (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    console.log('Error Input: ', req.body);
    res.status(400).json({
      statusCode: 400,
      msg: "Error in input",
      error: error.errors,
    });
  }
};

module.exports = validateRdpRequest;
