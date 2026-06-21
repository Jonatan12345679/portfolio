// ============================================
// TABS (About section: Skills / Education / Experience)
// ============================================
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-contents');

tabLinks.forEach(link => {
  link.addEventListener('click', () => {
    const target = link.dataset.tab;

    tabLinks.forEach(l => {
      l.classList.remove('active');
      l.setAttribute('aria-selected', 'false');
    });
    tabContents.forEach(c => c.classList.remove('active-tab'));

    link.classList.add('active');
    link.setAttribute('aria-selected', 'true');
    document.getElementById(target).classList.add('active-tab');
  });
});

// ============================================
// MOBILE MENU TOGGLE
// ============================================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a nav link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============================================
// CONTACT FORM (front-end only — no backend wired up)
// ============================================
function handleSubmit(event) {
  event.preventDefault();
  const note = document.getElementById('formNote');
  const form = event.target;

  note.textContent = 'Pesan terkirim. Terima kasih sudah menghubungi!';
  form.reset();

  setTimeout(() => {
    note.textContent = '';
  }, 4000);
}
