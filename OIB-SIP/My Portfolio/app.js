// Typing Animation
const typingElement = document.querySelector(".typing");
const words = ["Web Developer", "Programmer", "Student"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 80 : 150);
}

if (typingElement) {
  typeEffect();
}

// EmailJS Initialization
(function () {
  emailjs.init("YOUR_PUBLIC_KEY"); // 🔁 Replace with your actual public key
})();

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(function (response) {
      alert("✅ Message sent successfully!");
      document.getElementById("contact-form").reset();
    }, function (error) {
      alert("❌ Failed to send message. Please try again!");
      console.error(error);
    });
});
