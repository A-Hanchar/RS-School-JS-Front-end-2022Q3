const fs = require("fs");
const path = require("path");

const fsPromises = fs.promises;

const checkAccessFile = async (filePath) => {
  try {
    await fsPromises.access(filePath, fs.constants.R_OK | fs.constants.W_OK);
  } catch (error) {
    const EMPTY_CONTENT = "";

    await fsPromises.writeFile(filePath, EMPTY_CONTENT, { encoding: "utf-8" });
  }

  return filePath;
};

checkAccessFile(path.resolve(__dirname, "text.txt")).then((workedFilePath) => {
  const EXIT_TEXT = "exit";

  process.stdout.write("Hi! Please, enter text!\n");
  process.stdout.write(`For exit press Ctrl + C or write "${EXIT_TEXT}"\n\n`);

  process.stdin.on("data", (data) => {
    const dataText = Buffer.from(data, "utf-8").toString();

    if (dataText.trim() === EXIT_TEXT) {
      process.exit();
    }

    fsPromises.appendFile(workedFilePath, data, { encoding: "utf-8" });
  });

  process.on("exit", () => process.stdout.write("\nGoodbye!\n"));
  process.on("SIGINT", () => process.exit());
});
