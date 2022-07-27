import { ScriptDataType } from "../core/Types/CommonTypes";
import allCharacters from "../custom/Character/AllCharacters";
import { writeDataFiles } from "../tools/writeDataFiles";

const getAllScripts = () => {
  let scripts: Array<ScriptDataType> = [];
  scripts = scripts.concat(allCharacters);
  return scripts;
};

const writeAllScripts = () => {
  const scripts = getAllScripts();
  for (let i = 0; i < scripts.length; i++) {
    let script = scripts[i];
    writeDataFiles(script.filePath, script.fileName, script.fileContent);
  }
};

writeAllScripts();
