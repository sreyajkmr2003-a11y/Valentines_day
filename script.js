const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");

const images = document.querySelectorAll(".seq-img");
const imageBox = document.getElementById("image-sequence");

const title = document.getElementById("letter-title");
const video = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let current = 0;

/* Open envelope */
envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "block";
});

/* Image sequence */
letter.addEventListener("click", () => {
  if (current < images.length - 1) {
    images[current].classList.remove("active");
    current++;
    images[current].classList.add("active");
  } else {
    imageBox.style.display = "none";
    title.style.display = "block";
    video.style.display = "block";
    buttons.style.display = "flex";
    video.play().catch(() => {});
  }
});

/* YES */
yesBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  buttons.style.display = "none";
  finalText.style.display = "block";
});

/* NO (runaway 😏) */
noBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * 70 + "%";
  noBtn.style.left = Math.random() * 70 + "%";
});
