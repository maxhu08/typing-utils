import { smartMap } from "./utils/smart-map";

const textInputEl = document.getElementById("text-input") as HTMLInputElement;
const resultsContainerEl = document.getElementById("results-container") as HTMLDivElement;

textInputEl.addEventListener("input", () => {
  resultsContainerEl.innerHTML = "";

  const chars = textInputEl.value.split("");

  chars.forEach((char) => {
    resultsContainerEl.innerHTML += `<div class="grid place-items-center grid-rows-[repeat(2,max-content)] bg-neutral-800 aspect-square p-2 rounded-md">
      <span class="text-white text-4xl">${char}</span>
      <span class="text-white">${smartMap.get(char)}</span>
    </div>`;
  });
});
