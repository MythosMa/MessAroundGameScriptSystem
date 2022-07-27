import { ScriptActionCommand } from "./Types/ScriptCommand";

class ScriptBase {
  mainScript: Object;
  allActionScript: Object;
  allActionScriptArray: Array<Object>;
  singleActionScript: Object;
  singleActionScriptArray: Array<Object>;
  initDataArray: Array<Object>;

  filePath: string;
  fileName: string;

  constructor() {
    this.mainScript = new Object();
  }

  setFilePathAndFileName(filePath: string, fileName: string) {
    this.filePath = filePath;
    this.fileName = fileName;
  }

  initData(data) {
    this.mainScript["init_data"] = data;
  }

  allActionScriptStart(scriptID) {
    this.allActionScriptArray = new Array();
    this.allActionScript = new Object();
    this.allActionScript["start_script_id"] = scriptID;
  }

  allActionScriptEnd() {
    this.allActionScript["all_action_script"] = this.allActionScriptArray;
    this.mainScript["action_data"] = this.allActionScript;
  }

  singleActionScriptStart(scriptID) {
    this.singleActionScriptArray = new Array();
    this.singleActionScript = new Object();
    this.singleActionScript["script_id"] = scriptID;
  }

  singleActionScriptAdd(script) {
    this.singleActionScriptArray.push(script);
  }

  singleActionScriptEnd() {
    this.singleActionScript["script"] = this.singleActionScriptArray;
    this.allActionScriptArray.push(this.singleActionScript);
  }

  // 以下是通用命令

  /**
   * 延迟多少秒后跳转脚本
   * @param delayTime // 延迟时间: -1为随机时间，当前代码取值为1-2s
   * @param targetScriptId // 要跳转的目标脚本ID: 当数组大于1时，随机跳转到其中的一条脚本
   */
  changeScriptDelayTime(delayTime: number, ...targetScriptId: Array<number>) {
    let commandObject = new Object();
    commandObject["command"] = ScriptActionCommand.CHANGE_SCRIPT_DELAY_TIME;

    let commandData = new Object();
    commandData["delay_time"] = delayTime;
    commandData["target_script_id"] = targetScriptId;
    commandObject["command_data"] = commandData;

    this.singleActionScriptAdd(commandObject);
  }

  getMainScript() {
    return {
      fileContent: JSON.stringify(this.mainScript),
      fileName: this.fileName,
      filePath: this.filePath,
    };
  }
}

export default ScriptBase;
