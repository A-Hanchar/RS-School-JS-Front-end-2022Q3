const fs = require("fs");
const path = require("path");

const readStream = fs.createReadStream(path.resolve(__dirname, "text.txt"), {
  encoding: "utf-8",
});

let fileContent = "";

readStream.on("data", (chunk) => (fileContent += chunk));

readStream.on("end", () => console.log(fileContent));

readStream.on("error", (error) => console.log(error));
