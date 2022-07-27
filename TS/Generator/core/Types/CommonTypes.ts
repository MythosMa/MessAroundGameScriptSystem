import { Role } from "./CommonEnums";

export interface CharacterData {
  id: string;
  name: string;
  roldId: Role | null;
  animation?: CharacterAnimation;
}

export interface CharacterAnimation {
  animationFileName: string;
}

export interface ScriptDataType {
  fileContent: string;
  fileName: string;
  filePath: string;
}
