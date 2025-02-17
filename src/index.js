// Server Starter Code

require("dotenv").config();
const app = require("./server");

const PORT = process.env.PORT || 8081;

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
