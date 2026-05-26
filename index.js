const { exec } = require('child_process');
const userInput = req.query.cmd; // Unsanitized user input
exec(userInput, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${err}`);
    return;
  }
  console.log(`Result: ${stdout}`);
});
