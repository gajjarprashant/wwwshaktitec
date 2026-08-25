document.getElementById('year').textContent = new Date().getFullYear();

const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');
menu.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  if (nav.style.display === 'flex') {
    nav.style.position = 'absolute';
    nav.style.top = '68px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.padding = '20px 6%';
    nav.style.background = '#fff';
    nav.style.flexDirection = 'column';
    nav.style.alignItems = 'flex-start';
    nav.style.borderBottom = '1px solid #e9edf3';
  }
});

document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
  if (window.innerWidth <= 850) nav.style.display = 'none';
}));

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const msg = document.getElementById('formMessage');
  msg.textContent = 'Thanks. Your enquiry form is ready to connect to your preferred email service or backend.';
});
