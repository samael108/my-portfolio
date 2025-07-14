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

function updateToggleText() {
  const isDark = document.body.classList.contains("dark");
  darkToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
}

// On click
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  loadParticlesForTheme(isDark ? "dark" : "light");
  updateToggleText(); // If you're using button label toggle
});

// On page load
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
  updateToggleText(); // Set correct button text
});

const closePopupBtn = document.getElementById("closePopup");
const popupOverlay = document.getElementById("popupOverlay");

closePopupBtn.addEventListener("click", () => {
  popupOverlay.style.display = "none";
});
const text = "Hi, I'm Pradip"; // your typing line
const typedText = document.getElementById("typedText");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100); // typing speed
  }
}
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    size: { value: 3 },
    color: { value: "#ffffff" },
    line_linked: {
      enable: true,
      color: "#ffffff"
    },
    move: { speed: 2 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  }
});
const sections = document.querySelectorAll(".scroll-section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.classList.remove("blur-out");
    } else {
      entry.target.classList.add("blur-out");
      entry.target.classList.remove("show");
    }
  });
}, {
  threshold: 0.5,
});

sections.forEach(section => {
  observer.observe(section);
});
window.addEventListener("load", () => {
  function typeEffect() {
  const text = "Hi, I'm Pradip";
  const typedText = document.getElementById("typedText");
  let index = 0;

  function type() {
    if (index < text.length) {
      typedText.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100); // speed of typing
    }
  }

  // Clear any old content and start typing
  typedText.textContent = "";
  type();
}
  // Splash screen removal
  setTimeout(() => {
  const splash = document.getElementById("splashScreen");
  splash.classList.add("hide");

  // Optional: fully remove it after the animation ends
  setTimeout(() => {
    splash.style.display = "none";
    typeEffect();
  }, 1000); // matches the CSS transition duration
}, 2000); // splash screen stays for 2s before fading

  // Apply saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    loadParticlesForTheme("dark");
  } else {
    loadParticlesForTheme("light");
  }
});
function loadParticlesForTheme(theme) {
  const config = theme === "dark"
    ? {
        particles: {
          number: { value: 60 },
          size: { value: 3 },
          color: { value: "#ffffff" },
          line_linked: {
            enable: true,
            color: "#ffffff"
          },
          move: { speed: 2 }
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: "repulse" }
          }
        }
      }
    : {
        particles: {
          number: { value: 40 },
          size: { value: 4 },
          color: { value: "#222" },
          line_linked: {
            enable: true,
            color: "#999"
          },
          move: { speed: 1.5 }
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: "grab" }
          }
        }
      };

  // Reload particles
  if (window.pJSDom && pJSDom.length) {
    pJSDom[0].pJS.fn.vendors.destroypJS(); // Destroy existing particles
    pJSDom = [];
    document.getElementById("particles-js").innerHTML = "";
  }

  particlesJS("particles-js", config);
}
