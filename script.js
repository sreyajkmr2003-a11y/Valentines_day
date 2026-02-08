const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const letterWindow = document.querySelector(".letter-window");

// Open envelope
envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";

  setTimeout(() => {
    letterWindow.classList.add("open");
  }, 50);
});

// Move NO button
const moveNoBtn = () => {
  const distance = 250;
  const angle = Math.random() * Math.PI * 2;

  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
};

noBtn.addEventListener("mouseover", moveNoBtn);
noBtn.addEventListener("touchstart", moveNoBtn);

// YES clicked
yesBtn.addEventListener("click", () => {
  title.textContent = "I knew you’d say YES 😁😘💕";
  catImg.src = "cosytales-cute.gif";

  letterWindow.classList.add("final");
  buttons.style.display = "none";
  finalText.style.display = "block";
});

