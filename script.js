let canvas = document.querySelector(".canvas");

document.addEventListener("DOMContentLoaded", () => createCanvas(16));

function createCanvas(userinput) {
  for (let i = 0; i < userinput * userinput; i++) {
    let div = document.createElement("div");
    div.classList.add("pixel");
    div.style.width = 750 / userinput + "px";
    div.addEventListener("mouseover", (e) => {
      if (!toggled) {
        div.style.backgroundColor = "black";
      } else {
        div.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      }
    });
    canvas.appendChild(div);
  }
}

function clearCanvas() {
  let pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = "white";
  });
}

function changeSize() {
  let userinput = prompt("How many pixels per side?");
  while (userinput > 100 || userinput < 1) {
    userinput = prompt("Please enter a number for pixels between 1 and 100");
  }
  let pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => {
    pixel.remove();
  });
  createCanvas(userinput);
}
let toggled = false;
function rgbToggle() {
  toggled = !toggled;
}
