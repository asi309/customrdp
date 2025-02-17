const { spawn } = require("node:child_process");

// Function to start the RDP client
function startRdpClient(serverIp, port) {
  const rdpCommand = "mstsc"; // RDP client for Windows
  const args = [`/v:${serverIp}:${port}`]; // Arguments to pass to mstsc command

  // Start the RDP client
  const rdpProcess = spawn(rdpCommand, args);

  // Listen for output from the RDP process (optional)
  rdpProcess.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  rdpProcess.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  rdpProcess.on("close", (code) => {
    console.log(`RDP client exited with code ${code}`);
  });
}

module.exports = startRdpClient;
