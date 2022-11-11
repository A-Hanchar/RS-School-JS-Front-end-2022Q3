const fs = require("fs");
const path = require("path");

const fsPromises = fs.promises;

const getFiles = async (dirName, ext) => {
  const dirents = await fsPromises.readdir(dirName, { withFileTypes: true });

  const files = await Promise.all(
    dirents.map((dirent) => {
      if (dirent.isDirectory()) {
        const entireFolderPath = path.resolve(dirName, dirent.name)
        
        return getFiles(entireFolderPath);
      }

      const checkedPath = path.resolve(dirName, dirent.name);
      const pathInfo = path.parse(checkedPath);

      return pathInfo.ext === ext && dirent;
    })
  );

  return Array.prototype.concat(...files).filter(Boolean);
};

(async () => {
  try {
    const cssFiles = await getFiles(path.resolve(__dirname, "styles"), ".css");

    const writeStream = fs.createWriteStream(
      path.resolve(__dirname, "project-dist", "bundle.css")
    );

    for (const file of cssFiles) {
      const filePath = path.resolve(__dirname, "styles", file.name);

      const readStream = fs.createReadStream(filePath, { encoding: "utf-8" });
      readStream.pipe(writeStream);
    }
  } catch (error) {
    console.log(error);
  }
})();
