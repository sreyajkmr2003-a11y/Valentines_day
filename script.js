const envelope = document.getElementById("envelope");
const envelopeContainer = document.getElementById("envelope-container");
const letterContainer = document.getElementById("letter-container");

const steps = document.querySelectorAll(".step-img");
const questionSlide = document.getElementById("question-slide");
const finalSlide = document.getElementById("final-slide");
const yesBtn = document.getElementById("yesBtn");

let index = 0;

// Open envelope
envelope.onclick = () => {
  envelopeContainer.style.display = "none";
  letterContainer.style.display = "block";
  showStep();
};

function showStep() {
  if (index < steps.length) {
    steps[index].style.display = "block";
    setTimeout(() => steps[index].classList.add("show"), 50);

    index++;
    setTimeout(showStep, 2500);
  } else {
    questionSlide.style.display = "block";
    setTimeout(() => questionSlide.classList.add("show"), 50);
  }
}

// YES button logic
yesBtn.onclick = () => {
  questionSlide.classList.remove("show");

  setTimeout(() => {
    questionSlide.style.display = "none";
    finalSlide.style.display = "block";
    setTimeout(() => finalSlide.classList.add("show"), 50);
  }, 600);
};



