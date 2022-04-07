export const canvas = document.getElementById("cvs");
export const ctx = canvas.getContext("2d");

import { OPTIONS, inputLength, inputAngle } from "./options.js";

import { generateCollatzSequence } from "./collatz.js";

import { draw } from "./draw.js";
import { inputHandler } from "./inputHandler.js";
canvas.width = OPTIONS.canvasWidth;
canvas.height = OPTIONS.canvasHeight;

let tree = generateCollatzSequence(OPTIONS.branchesNum);

document.addEventListener("newtree", function (e) {
  tree = generateCollatzSequence(e.detail.num_branches);
  console.log(tree.length);
  draw(tree);
});

document.addEventListener("redraw", function (e) {
  draw(tree);
});

draw(tree);

inputHandler(tree);

const movie = [];
document.querySelector("#gen-movie").addEventListener("click", function () {
  document.querySelector("#gen-movie").disabled = true;
  for (let frameNum = 0; frameNum < 120; frameNum++) {
    console.log("Generating frameNum:: " + frameNum);

    OPTIONS.angle++;
    OPTIONS.len++;
    draw(tree);
    const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
    movie.push(frame);
  }
  document.querySelector("#play-movie").style.background = "green";
  document.querySelector("#play-movie").disabled = false;
});

document.querySelector("#play-movie").addEventListener("click", function () {
  movie.forEach((frame, i) => {
    document.querySelector("#play-movie").disabled = true;
    setTimeout(() => {
      inputAngle.value = OPTIONS.angle;
      inputLength.value = OPTIONS.len;

      ctx.putImageData(frame, 0, 0);
      if (i == 119) {
        document.querySelector("#play-movie").disabled = false;
      }
    }, 100 * i);
  });
});
