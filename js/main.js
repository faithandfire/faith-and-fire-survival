// ====================== MOBILE MENU ======================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
  });
}

// ====================== DARK MODE ======================
const toggle = document.getElementById('darkModeToggle');
let dark = localStorage.getItem("darkMode") === "true";

const applyDarkMode = (val) => {
  if (val) {
    document.body.classList.add("dark-mode");
    if (toggle) toggle.textContent = "☀️";
  } else {
    document.body.classList.remove("dark-mode");
    if (toggle) toggle.textContent = "🌙";
  }
};

applyDarkMode(dark);

if (toggle) {
  toggle.addEventListener("click", () => {
    dark = !dark;
    localStorage.setItem("darkMode", dark);
    applyDarkMode(dark);
  });
}

// ====================== CONTACT FORM ======================
const form = document.getElementById('contact-form');
const msg = document.getElementById('form-message');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    fetch(form.action, {
      method:'POST',
      body: new FormData(form),
      headers:{ 'Accept':'application/json' }
    })
    .then(() => {
      if (msg) msg.style.display = 'block';
      form.reset();
    });
  });
}
