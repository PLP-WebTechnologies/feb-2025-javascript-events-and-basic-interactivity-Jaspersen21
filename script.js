// === 1. Button Clicks ===
document.getElementById("click-btn").addEventListener("click", () => {
    document.getElementById("event-message").textContent = "You clicked me!";
  });
  
  // === 2. Double Click ===
  document.getElementById("double-btn").addEventListener("dblclick", () => {
    alert("You double-clicked!");
  });
  
  // === 3. Long Press Detection ===
  let pressTimer;
  const longPressBtn = document.getElementById("long-press-btn");
  
  longPressBtn.addEventListener("mousedown", () => {
    pressTimer = setTimeout(() => {
      alert("Long press detected!");
    }, 1000); // 1 second
  });
  
  longPressBtn.addEventListener("mouseup", () => {
    clearTimeout(pressTimer);
  });
  
  longPressBtn.addEventListener("mouseleave", () => {
    clearTimeout(pressTimer);
  });
  
  // === 4. Hover Effects ===
  document.getElementById("hover-color").addEventListener("mouseover", () => {
    document.body.style.backgroundColor = getRandomColor();
  });
  document.getElementById("hover-color").addEventListener("mouseout", () => {
    document.body.style.backgroundColor = "#fff";
  });
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // === 5. Image Gallery Navigation ===
  const images = document.querySelectorAll(".gallery-img");
let currentIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
}

document.getElementById("next-btn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

document.getElementById("prev-btn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});
  
  // === 6. Tab Switching ===
  document.querySelectorAll(".tab-link").forEach(button => {
    button.addEventListener("click", () => {
      const tabId = button.dataset.tab;
  
      document.querySelectorAll(".tab-link").forEach(btn => btn.classList.remove("active"));
      document.querySelectorAll(".tab-pane").forEach(pane => pane.classList.remove("active"));
  
      button.classList.add("active");
      document.querySelector(`.tab-pane[data-tab="${tabId}"]`).classList.add("active");
    });
  });
  
  // === 7. Keypress Detection ===
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      alert("You pressed Enter!");
    }
  });
  
  // === 8. Form Validation ===
  document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const successMsg = document.getElementById("form-success");
  
    let valid = true;
  
    emailError.textContent = "";
    passwordError.textContent = "";
    successMsg.textContent = "";
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      emailError.textContent = "Please enter a valid email.";
      valid = false;
    }
  
    if (passwordInput.value.length < 8) {
      passwordError.textContent = "Password must be at least 8 characters.";
      valid = false;
    }
  
    if (valid) {
      successMsg.textContent = "Form submitted successfully!";
    }
  });