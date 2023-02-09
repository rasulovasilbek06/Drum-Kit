const drums = document.querySelectorAll(".drum");

drums.forEach((item, i) => {
  item.addEventListener("click", () => {
    soundFunc(item.classList[0]);
    pressedFunc(item);
  });
});

document.addEventListener("keypress", (e) => {
  soundFunc(e.key);
  pressedFunc(document.querySelector(`.${e.key}`));
});

function pressedFunc(e) {
  e.classList.add("pressed");
  setTimeout(() => {
    e.classList.remove("pressed");
  }, 200);
}

function soundFunc(param) {
  let audio;
  switch (param) {
    case "w":
      audio = new Audio("sounds/crash.mp3");
      break;
    case "a":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    case "s":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "j":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "k":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "l":
      audio = new Audio("sounds/tom-4.mp3");
      break;
  }
  audio.play();
}

// setInterval(()=>{
//     console.log("salom");
// }, 1000)

console.log(new Date().getFullYear());