import ScriptBase from "../ScriptBase";
import { CharacterData } from "../Types/CommonTypes";

class CharacterBase extends ScriptBase {
  initCharacterData(data: CharacterData) {
    this.initData(data);
  }
}

export default CharacterBase;
