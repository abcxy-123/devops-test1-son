const fs = require("fs");
const path = require("path");

const files = ["index.html", "style.css", "script.js"];
for (const file of files) {
  if (!fs.existsSync(path.join(__dirname, file))) {
    console.error("Missing required file: " + file);
    process.exit(1);
  }
}
fs.mkdirSync(path.join(__dirname, "dist"), { recursive: true });
for (const file of files) {
  fs.copyFileSync(path.join(__dirname, file), path.join(__dirname, "dist", file));
}
console.log("BUILD SUCCESS: Website created in dist/");
