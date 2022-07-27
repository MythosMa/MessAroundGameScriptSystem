import NpcBase from "../../core/Character/NpcBase";
import { Role } from "../../core/Types/CommonEnums";

class NpcA extends NpcBase {
  constructor() {
    super();

    this.setFilePathAndFileName("character/npc/", "npc-a");
    this.initCharacterData({
      id: "npc-a",
      name: "npc-a",
      roldId: Role.NPC_FRIENDLY,
    });

    // 起始脚本
    this.allActionScriptStart(10000);

    // 原地站立
    this.singleActionScriptStart(10000);
    this.stand();
    this.changeScriptDelayTime(-1, 11000);
    this.singleActionScriptEnd();

    // 随机移动
    this.singleActionScriptStart(11000);
    this.walkRandom();
    this.changeScriptDelayTime(-1, 10000);
    this.singleActionScriptEnd();

    this.allActionScriptEnd();
  }
}

export default new NpcA();
