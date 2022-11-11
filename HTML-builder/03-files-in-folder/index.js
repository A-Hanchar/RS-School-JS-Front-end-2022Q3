const path = require("path");
const fsPromises = require("fs").promises;

const getFiles = async (dirName) => {
  const dirents = await fsPromises.readdir(dirName, { withFileTypes: true });

  const files = await Promise.all(
    dirents.map((dirent) => {
      if (dirent.isDirectory()) {
        // This code for getting recursive files
        // const entireFolderPath = path.resolve(dirName, dirent.name)
        // return getFiles(entireFolderPath);

        return;
      }

      return dirent;
    })
  );

  // for solution with recursive - remove ".filter(Boolean)"
  return Array.prototype.concat(...files).filter(Boolean);
};

const dirName = path.resolve(__dirname, "secret-folder");

getFiles(dirName)
  .then(async (dirents) => {
    for (const dirent of dirents) {
      const checkedPath = path.resolve(dirName, dirent.name);

      const { name, ext } = path.parse(checkedPath);
      const { size: fileSize } = await fsPromises.stat(checkedPath); // size in bytes

      console.log(`${name} - ${ext.slice(1)} - ${fileSize / 1024}Kb`);
    }
  })
  .catch((err) => console.error(err));
