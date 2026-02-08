document.addEventListener("DOMContentLoaded", () => {

  const envelopeContainer = document.getElementById("envelope-container");
  const letterContainer = document.getElementById("letter-container");
  const letterWindow = document.querySelector(".letter-window");

  const yesBtn = document.querySelector(".yes-btn");
  const noBtn = document.querySelector(".no-btn");

  const letterTitle = document.getElementById("letter-title");
  const letterVideo = document.getElementById("letter-cat");
  const videoSource = letterVideo.querySelector("source");
  const letterButtons = document.getElementById("letter-buttons");
  const finalText = document.getElementById("final-text");

  // Open letter
  envelopeContainer.addEventListener("click", () => {
    envelopeContainer.style.display = "none";
    letterContainer.style.display = "flex";

      // 🔥 FORCE VIDEO TO START AFTER VISIBLE
  letterVideo.load();
  letterVideo.play();

    setTimeout(() => {
      letterWindow.classList.add("open");
    }, 50);
  });

  // YES button
  yesBtn.addEventListener("click", () => {
    letterTitle.textContent = "I knew you’d say YES 😘💖";

    videoSource.src = "cosytales-cute.mp4";
    letterVideo.load();
    letterVideo.play();

    letterButtons.style.display = "none";
    finalText.style.display = "block";
    letterWindow.classList.add("final");
  });

  // NO button escape
  const moveNo = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  };

  noBtn.addEventListener("mouseover", moveNo);
  noBtn.addEventListener("touchstart", moveNo);
});

