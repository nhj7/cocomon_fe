const cp = require("child_process");
const verify = () => cp.exec("npm ls", error => {
  if (error) {
    console.error("Dependency mismatch between package.json and lock. Run: npm install");
    throw error;
  }
  console.log("Dependencies verified =)");
});