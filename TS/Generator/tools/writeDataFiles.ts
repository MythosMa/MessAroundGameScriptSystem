import * as fs from 'fs';

const FILE_PATH_BASE = "../../OutPut/";
const FILE_EXTENSION = ".json";

const mkDir = (pos, pathArray, callback) => {
  var len = pathArray.length;
  if (pos >= len) {
    callback();
    return;
  }
  var currentDir = "";
  for (var i = 0; i <= pos; i++) {
    if (i != 0) currentDir += "/";
    currentDir += pathArray[i];
  }
  let isExist = fs.existsSync(currentDir);
  if (!isExist) {
    fs.mkdir(currentDir, function (error) {
      mkDir(pos + 1, pathArray, callback);
    });
  } else {
    mkDir(pos + 1, pathArray, callback);
  }
};

export const writeDataFiles = (filePath, fileName, fileContent) => {
  const writeFiles = () => {
    fs.writeFile(
      FILE_PATH_BASE + filePath + "/" + fileName + FILE_EXTENSION,
      fileContent,
      (error) => {
        if (error) {
          console.error(fileName + "文件写入失败", error);
        } else {
          console.info(fileName + "文件写入成功");
        }
      }
    );
  };
  const path = FILE_PATH_BASE + filePath;
  const isExist = fs.existsSync(path);
  if (!isExist) {
    mkDir(0, path.split("/"), writeFiles);
  } else {
    writeFiles();
  }
};

// writeDataFiles("a/b/c/", "abcdef", "cao ni ma");
