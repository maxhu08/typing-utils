import { smartMap } from "./utils/smart-map";

const textInput = document.getElementById("text-input") as HTMLInputElement;
const resultsText = document.getElementById("results-text") as HTMLDivElement;

textInput.addEventListener("input", () => {
  const chars = textInput.value.split("");

  const result = chars
    .map((char) => {
      return smartMap.get(char);
    })
    .join(" ");

  resultsText.innerHTML = result;
});
