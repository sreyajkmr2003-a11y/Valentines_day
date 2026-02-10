const envelope = document.getElementById("envelope");
const envelopeContainer = document.getElementById("envelope-container");
const letterContainer = document.getElementById("letter-container");

const steps = document.querySelectorAll(".step-img");
const finalContent = document.getElementById("final-content");

let currentStep = 0;
let interval;

// Open envelope
envelope.addEventListener("click", () => {
  envelopeContainer.style.display = "none";
  letterContainer.style.display = "block";
  playSteps();
});

function playSteps() {
  steps[currentStep].classList.add("active");

  interval = setInterval(() => {
    steps[currentStep].classList.remove("active");
    currentStep++;

    if (currentStep < steps.length) {
      steps[currentStep].classList.add("active");
    } else {
      clearInterval(interval);
      finalContent.classList.add("show");
    }
  }, 2600); // time per image
}

