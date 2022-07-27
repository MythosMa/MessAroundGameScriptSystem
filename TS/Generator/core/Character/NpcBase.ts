import { CharacterData } from "../Types/CommonTypes";
import { ScriptActionCommand } from "../Types/ScriptCommand";
import CharacterBase from "./CharacterBase";

class NpcBase extends CharacterBase {
  stand() {
    let commandObject = new Object();
    commandObject["command"] = ScriptActionCommand.STAND;
    commandObject["command_data"] = "╮(╯▽╰)╭";
    this.singleActionScriptAdd(commandObject);
  }

  walkRandom() {
    let commandObject = new Object();
    commandObject["command"] = ScriptActionCommand.WALKING_RANDOM;
    commandObject["command_data"] = "╮(╯▽╰)╭";
    this.singleActionScriptAdd(commandObject);
  }

  walk(moveSpeed) {
    let commandObject = new Object();
    commandObject["command"] = ScriptActionCommand.WALKING;

    let commandData = new Object();
    commandData["move_speed"] = moveSpeed;
    commandObject["command_data"] = commandData;

    this.singleActionScriptAdd(commandObject);
  }
}

export default NpcBase;
