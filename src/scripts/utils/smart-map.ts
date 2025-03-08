import { layouts } from "../constants/keyboard-layouts";
import { genFingerMap } from "./gen-finger-map";

const splitLayout = layouts.qwerty
  .split("\n")
  .map((line: string) => line.trim().replace(/\s+/g, ""));

splitLayout.shift();
const fingerMap = genFingerMap(splitLayout);

export const smartMap = {
  get: (char: string) => {
    const finger = fingerMap.get(char.toLowerCase());

    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      if (finger!.startsWith("L")) return "RP-" + finger;
      else return "LP-" + finger;
    }

    return finger;
  }
};
