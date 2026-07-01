const pageLoader = document.getElementById('pageLoader');
const siteHeader = document.getElementById('siteHeader');
const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
const year = document.getElementById('year');
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

const INSTAGRAM_URL = 'https://www.instagram.com/atlanticostudioo/';
// Para WhatsApp, substitua por: const WHATSAPP_NUMBER = '5511999999999';
const WHATSAPP_NUMBER = '';

if (year) year.textContent = new Date().getFullYear();

window.addEventListener('load', () => {
  setTimeout(() => pageLoader?.classList.add('is-hidden'), 700);
});

const handleScroll = () => {
  if (!siteHeader) return;
  siteHeader.classList.toggle('is-scrolled', window.scrollY > 18);
};
handleScroll();
window.addEventListener('scroll', handleScroll, { passive: true });

const closeMenu = () => {
  menuToggle?.classList.remove('is-open');
  siteNav?.classList.remove('is-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('no-scroll');
};

menuToggle?.addEventListener('click', () => {
  const willOpen = !siteNav?.classList.contains('is-open');
  menuToggle.classList.toggle('is-open', willOpen);
  siteNav?.classList.toggle('is-open', willOpen);
  menuToggle.setAttribute('aria-expanded', String(willOpen));
  document.body.classList.toggle('no-scroll', willOpen);
});

siteNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

contactForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const selectedServices = data.getAll('service');
  const name = data.get('name') || '';
  const contact = data.get('contact') || '';
  const message = data.get('message') || '';

  const text = `Olá, ATLÂNTICO STUDIO!\n\nNome: ${name}\nContacto: ${contact}\nServiços: ${selectedServices.length ? selectedServices.join(', ') : 'Não informado'}\nMensagem: ${message || 'Quero receber uma orientação para o meu projeto.'}`;

  try {
    await navigator.clipboard.writeText(text);
    if (formNote) formNote.textContent = 'Mensagem copiada. Cole no WhatsApp, Instagram ou e-mail da ATLÂNTICO STUDIO.';
  } catch (error) {
    if (formNote) formNote.textContent = 'Mensagem pronta. Copie manualmente os dados preenchidos.';
  }

  if (WHATSAPP_NUMBER) {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  } else {
    window.open(INSTAGRAM_URL, '_blank', 'noopener');
  }
});
