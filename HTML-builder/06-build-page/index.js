const fs = require("fs");
const path = require("path");

const fsPromises = fs.promises;

const ASSETS = "assets";
const STYLES = "styles";
const PROJECT_DIST = "project-dist";

const EXTS = {
  HTML: ".html",
  CSS: ".css",
};

const DESTINATION_FILE_NAMES = {
  TEMPLATE: "index",
  STYLE: "style",
};

const buildTemplateHTML = async () => {
  let templateContent = await fsPromises.readFile(
    path.resolve(__dirname, "template.html"),
    "utf-8"
  );

  /**
   * example almost the same Reg
   * @see https://ru.stackoverflow.com/questions/1257512/regexp-%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C-%D0%BB%D1%8E%D0%B1%D0%BE%D0%B5-%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BC%D0%B5%D0%B6%D0%B4%D1%83-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%D0%B0%D0%BC%D0%B8-%D1%81-%D1%81%D0%B0%D0%BC%D0%B8%D0%BC%D0%B8-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%D0%B0%D0%BC%D0%B8
   */
  const reg = /{{[^{]+(?:_[^}]+)*}}/g;
  const components = templateContent.match(reg);

  components?.forEach(async (component, index) => {
    const componentPath = path.resolve(
      __dirname,
      "components",
      `${component.split(/{{|}}/g)?.[1]}${EXTS.HTML}`
    );

    const componentContent = await fsPromises.readFile(componentPath, "utf-8");
    templateContent = templateContent.replace(component, componentContent);

    if (index === components.length - 1) {
      await fsPromises.writeFile(
        path.resolve(
          __dirname,
          PROJECT_DIST,
          `${DESTINATION_FILE_NAMES.TEMPLATE}${EXTS.HTML}`
        ),
        templateContent,
        "utf-8"
      );
    }
  });
};

const mergeStyles = async () => {
  const getFiles = async (partOfPath) => {
    const dirents = await fsPromises.readdir(path.join(__dirname, partOfPath), {
      withFileTypes: true,
    });

    const filesPathes = await Promise.all(
      dirents.map((dirent) => {
        const direntPath = path.join(partOfPath, dirent.name);

        if (dirent.isDirectory()) {
          return getFiles(direntPath);
        }

        const fullFilePath = path.resolve(__dirname, direntPath);
        const pathInfo = path.parse(fullFilePath);

        return pathInfo.ext === EXTS.CSS && fullFilePath;
      })
    );

    return Array.prototype.concat(...filesPathes).filter(Boolean);
  };

  const cssFilesPathes = await getFiles(STYLES);

  const writeStream = fs.createWriteStream(
    path.resolve(
      __dirname,
      PROJECT_DIST,
      `${DESTINATION_FILE_NAMES.STYLE}${EXTS.CSS}`
    )
  );

  cssFilesPathes.forEach((cssFilePath) => {
    const readStream = fs.createReadStream(cssFilePath, {
      encoding: "utf-8",
    });

    readStream.pipe(writeStream);
  });
};

const transferAssets = async () => {
  await fsPromises.mkdir(path.resolve(__dirname, PROJECT_DIST, ASSETS));

  const dirents = await fsPromises.readdir(path.resolve(__dirname, ASSETS), {
    withFileTypes: true,
  });

  const transferFolder = async (assetsPartPath) => {
    await fsPromises.mkdir(
      path.resolve(__dirname, PROJECT_DIST, assetsPartPath)
    );

    const dirents = await fsPromises.readdir(
      path.resolve(__dirname, assetsPartPath),
      {
        withFileTypes: true,
      }
    );

    await Promise.all(
      dirents.map((dirent) => {
        const direntPath = path.join(assetsPartPath, dirent.name);

        if (dirent.isDirectory()) {
          return transferFolder(direntPath);
        }

        fsPromises.copyFile(
          path.resolve(__dirname, direntPath),
          path.resolve(__dirname, PROJECT_DIST, direntPath)
        );
      })
    );
  };

  await Promise.all(
    dirents.map((dirent) => {
      const direntPath = path.join(ASSETS, dirent.name);

      if (dirent.isDirectory()) {
        return transferFolder(path.join(direntPath));
      }

      fsPromises.copyFile(
        path.resolve(__dirname, direntPath),
        path.resolve(__dirname, PROJECT_DIST, direntPath)
      );
    })
  );
};

(async () => {
  const projectDistPath = path.resolve(__dirname, PROJECT_DIST);

  await fsPromises.rm(projectDistPath, {
    force: true,
    recursive: true,
  });

  await fsPromises.mkdir(projectDistPath);

  await Promise.all([buildTemplateHTML(), mergeStyles(), transferAssets()]);

  console.log("All done!");
})();
