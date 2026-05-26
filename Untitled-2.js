import { exec } from 'child_process';

exports.handler = function executeVulnerableSystemCommand(userInput: string): void {
  exec('echo ' + userInput, (error, stdout, stderr) => {
    if (error) {
      console.error(`Execution error: ${error.message}`);
      return;
    }
    console.log(`Output: ${stdout}`);
    if (stderr) {
      console.error(`Error Output: ${stderr}`);
    }
  });
}