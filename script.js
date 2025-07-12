// Welcome alert when the page loads
window.addEventListener("load", function () {
  console.log("Portfolio Loaded Successfully!");
});

// Toggle project details (future expand feature)
const project = document.querySelector(".project");
project.addEventListener("click", function () {
  alert("You clicked on your project!");
});
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  scrollBtn.style.display = window.scrollY > 100 ? "block" : "none";
};

scrollBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const form = document.getElementById("contactForm");
const response = document.getElementById("formResponse");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    response.textContent = `Thanks, ${name}! I’ll get back to you soon.`;
    form.reset(); // clears the form
  } else {
    response.textContent = "Please fill in all fields.";
  }
});

const darkToggle = document.getElementById("darkModeToggle");

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Optional: Save mode in local storage
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Load saved theme on page load
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
});

const closePopupBtn = document.getElementById("closePopup");
const popupOverlay = document.getElementById("popupOverlay");

closePopupBtn.addEventListener("click", () => {
  popupOverlay.style.display = "none";
});