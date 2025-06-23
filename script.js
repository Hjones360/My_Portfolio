// Typewriter Rotating Text Animation

const words = ["Cybersecurity Specialist", "Full Stack Developer", "Ethical Hacker", "SOC Analyst"];
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector(".typewriter-text");
const typingSpeed = 150;
const erasingSpeed = 80;
const delayBetweenWords = 2000;

function type() {
  const currentWord = words[currentWordIndex];

  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, currentCharIndex - 1);
    currentCharIndex--;

    if (currentCharIndex === 0) {
      isDeleting = false;
      currentWordIndex = (currentWordIndex + 1) % words.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, erasingSpeed);
    }
  } else {
    typingElement.textContent = currentWord.substring(0, currentCharIndex + 1);
    currentCharIndex++;

    if (currentCharIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, delayBetweenWords);
    } else {
      setTimeout(type, typingSpeed);
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (typingElement) {
    type();
  }
});

