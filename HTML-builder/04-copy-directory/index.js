const fs = require("fs");
const path = require("path");

const fsPromises = fs.promises;

const getFiles = async (dirName) => {
  const dirents = await fsPromises.readdir(dirName, { withFileTypes: true });

  const files = await Promise.all(
    dirents.map((dirent) => {
      if (dirent.isDirectory()) {
        const entireFolderPath = path.resolve(dirName, dirent.name)
        
        return getFiles(entireFolderPath);
      }

      return dirent;
    })
  );

  return Array.prototype.concat(...files);
};

/**
 *
 * @param {string} checkedFilePath
 * @param {'folder' | 'file'} checkedType
 * @returns
 */
const checkAccessFile = async (checkedFilePath, checkedType) => {
  const isFolder = checkedType === "folder";

  try {
    await fsPromises.access(
      checkedFilePath,
      fs.constants.R_OK | fs.constants.W_OK
    );

    if (isFolder) {
      const dirents = await getFiles(checkedFilePath);

      await Promise.all(
        dirents.map((dirent) => {
          fsPromises.unlink(path.resolve(checkedFilePath, dirent.name));
        })
      );
    }
  } catch (error) {
    if (isFolder) {
      await fsPromises.mkdir(checkedFilePath);
    }
  }

  return checkedFilePath;
};

checkAccessFile(path.resolve(__dirname, "files-copy"), "folder")
  .then(async (destinationFolderPath) => {
    const sourseFolderPath = path.resolve(__dirname, "files");

    const dirents = await getFiles(sourseFolderPath);

    await Promise.all(
      dirents.map((dirent) => {
        fsPromises.copyFile(
          path.resolve(sourseFolderPath, dirent.name),
          path.resolve(destinationFolderPath, dirent.name)
        );
      })
    );

    console.log("Copy is done");
  })
  .catch((err) => console.error(err));
