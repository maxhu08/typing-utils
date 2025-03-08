import { layouts } from "./constants/keyboard-layouts";
import { genFingerMap } from "./utils/gen-finger-map";

const textInput = document.getElementById("text-input") as HTMLInputElement;
const resultsText = document.getElementById("results-text") as HTMLDivElement;

const splitLayout = layouts.qwerty
  .split("\n")
  .map((line: string) => line.trim().replace(/\s+/g, ""));

splitLayout.shift();
const fingerMap = genFingerMap(splitLayout);

textInput.addEventListener("input", () => {
  const chars = textInput.value.split("");

  const result = chars
    .map((char) => {
      return fingerMap.get(char);
    })
    .join(" ");

  resultsText.innerHTML = result;
});
