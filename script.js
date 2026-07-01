const pageLoader = document.getElementById('pageLoader');
const siteHeader = document.getElementById('siteHeader');
const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
const year = document.getElementById('year');
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

const INSTAGRAM_URL = 'https://www.instagram.com/atlanticostudioo/';
const WHATSAPP_NUMBER = '';

if (year) year.textContent = new Date().getFullYear();

window.addEventListener('load', () => {
  setTimeout(() => pageLoader?.classList.add('is-hidden'), 640);
});

const setHeaderState = () => {
  siteHeader?.classList.toggle('is-scrolled', window.scrollY > 16);
};
setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

const closeMenu = () => {
  menuToggle?.classList.remove('is-open');
  siteNav?.classList.remove('is-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('no-scroll');
};

menuToggle?.addEventListener('click', () => {
  const open = !siteNav?.classList.contains('is-open');
  menuToggle.classList.toggle('is-open', open);
  siteNav?.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('no-scroll', open);
});

siteNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.13 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

contactForm?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const data = new FormData(contactForm);
  const selectedServices = data.getAll('service');
  const name = data.get('name') || '';
  const contact = data.get('contact') || '';
  const message = data.get('message') || '';

  const text = [
    'Olá, ATLÂNTICO STUDIO!',
    '',
    `Nome: ${name}`,
    `Contacto: ${contact}`,
    `Serviços: ${selectedServices.length ? selectedServices.join(', ') : 'Não informado'}`,
    `Mensagem: ${message || 'Quero agendar uma reunião para falar sobre o meu projeto.'}`,
  ].join('\n');

  try {
    await navigator.clipboard.writeText(text);
    if (formNote) formNote.textContent = 'Mensagem copiada. Cole no WhatsApp, Instagram ou e-mail da ATLÂNTICO STUDIO.';
  } catch (error) {
    if (formNote) formNote.textContent = 'Mensagem pronta. Copie manualmente os dados preenchidos.';
  }

  if (WHATSAPP_NUMBER) {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    return;
  }

  window.open(INSTAGRAM_URL, '_blank', 'noopener');
});
