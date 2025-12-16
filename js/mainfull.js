// ========================= DOM ELEMENTS =========================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const toggle = document.getElementById('darkModeToggle');
const form = document.getElementById('contact-form');
const msg = document.getElementById('form-message');
const galleryItems = document.querySelectorAll('.gallery-item');

// ========================= MOBILE MENU =========================
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => mobileMenu.classList.toggle('active'));
  
  mobileMenu.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => mobileMenu.classList.remove('active'))
  );
}

// ========================= DARK MODE =========================
let dark = localStorage.getItem("darkMode") === "true";
const applyDarkMode = state => {
  document.body.classList.toggle("dark-mode", state);
  if (toggle) toggle.textContent = state ? "☀️" : "🌙";
};
applyDarkMode(dark);

if (toggle) {
  toggle.addEventListener("click", () => {
    dark = !dark;
    localStorage.setItem("darkMode", dark);
    applyDarkMode(dark);
  });
}

// ========================= CONTACT FORM =========================
if (form && msg) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(() => {
      msg.style.display = 'block';
      form.reset();
      setTimeout(() => msg.style.display = 'none', 5000); // auto-hide after 5s
    }).catch(err => console.error('Form submission error:', err));
  });
}

// ========================= GALLERY ACCORDION =========================
if (galleryItems.length) {
  const allDesc = document.querySelectorAll('.gallery-desc');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const desc = item.querySelector('.gallery-desc');
      if (!desc) return;

      // Close all others
      allDesc.forEach(d => { if (d !== desc) d.classList.remove('open'); });

      // Toggle clicked
      desc.classList.toggle('open');
    });
  });
}
