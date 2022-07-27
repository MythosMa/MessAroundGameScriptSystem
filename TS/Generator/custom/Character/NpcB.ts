import NpcBase from "../../core/Character/NpcBase";
import { Role } from "../../core/Types/CommonEnums";

class NpcA extends NpcBase {
  constructor() {
    super();

    this.setFilePathAndFileName("character/npc/", "npc-b");
    this.initCharacterData({
      id: "npc-b",
      name: "npc-b",
      roldId: Role.NPC_FRIENDLY,
    });

    // 起始脚本
    this.allActionScriptStart(10000);

    // 原地站立
    this.singleActionScriptStart(10000);
    this.stand();
    this.changeScriptDelayTime(-1, 11000, 12000);
    this.singleActionScriptEnd();

    // 指定移动 1
    this.singleActionScriptStart(11000);
    this.walk(40);
    this.changeScriptDelayTime(1, 11001);
    this.singleActionScriptEnd();

    this.singleActionScriptStart(11001);
    this.stand();
    this.changeScriptDelayTime(1, 11002);
    this.singleActionScriptEnd();

    this.singleActionScriptStart(11002);
    this.walk(80);
    this.changeScriptDelayTime(1, 11003);
    this.singleActionScriptEnd();

    this.singleActionScriptStart(11003);
    this.stand();
    this.changeScriptDelayTime(1, 11004);
    this.singleActionScriptEnd();

    this.singleActionScriptStart(11004);
    this.walk(120);
    this.changeScriptDelayTime(1, 10000);
    this.singleActionScriptEnd();

    // 指定移动 2
    this.singleActionScriptStart(12000);
    this.walk(-40);
    this.changeScriptDelayTime(1, 12001);
    this.singleActionScriptEnd();

    this.singleActionScriptStart(12001);
    this.stand();
    this.changeScriptDelayTime(1, 12002);
    this.singleActionScriptEnd();

    this.singleActionScriptStart(12002);
    this.walk(-80);
    this.changeScriptDelayTime(1, 12003);
    this.singleActionScriptEnd();

    this.singleActionScriptStart(12003);
    this.stand();
    this.changeScriptDelayTime(1, 12004);
    this.singleActionScriptEnd();

    this.singleActionScriptStart(12004);
    this.walk(-120);
    this.changeScriptDelayTime(1, 10000);
    this.singleActionScriptEnd();

    this.allActionScriptEnd();
  }
}

export default new NpcA();
