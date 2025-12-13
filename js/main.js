// MOBILE MENU
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });
}

// DARK MODE
const toggle = document.getElementById('darkModeToggle');
let dark = localStorage.getItem("darkMode") === "true";

const applyDarkMode = val => {
  document.body.classList.toggle("dark-mode", val);
  if (toggle) toggle.textContent = val ? "☀️" : "🌙";
};

applyDarkMode(dark);

if (toggle) {
  toggle.addEventListener("click", () => {
    dark = !dark;
    localStorage.setItem("darkMode", dark);
    applyDarkMode(dark);
  });
}

// CONTACT FORM
const form = document.getElementById('contact-form');
const msg = document.getElementById('form-message');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(form.action, { method:'POST', body:new FormData(form), headers:{'Accept':'application/json'} })
      .then(() => { msg.style.display = 'block'; form.reset(); });
  });
}
