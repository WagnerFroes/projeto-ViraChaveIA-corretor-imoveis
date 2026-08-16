const items = document.querySelectorAll('.reveal:not(.on)');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('on');
      observer.unobserve(entry.target);
    }
  }), { threshold: 0.12 });

  items.forEach((item) => observer.observe(item));
} else {
  items.forEach((item) => item.classList.add('on'));
}

document.querySelectorAll('.q').forEach((question) => question.addEventListener('click', () => {
  const item = question.parentElement;
  const wasOpen = item.classList.contains('open');

  document.querySelectorAll('.faq-item.open').forEach((openItem) => {
    openItem.classList.remove('open');
    openItem.querySelector('.q').setAttribute('aria-expanded', 'false');
  });

  if (!wasOpen) {
    item.classList.add('open');
    question.setAttribute('aria-expanded', 'true');
  }
}));

let previousScroll = 0;
const header = document.querySelector('header');

addEventListener('scroll', () => {
  const currentScroll = scrollY;
  header.classList.toggle('stuck', currentScroll > 12);
  header.classList.toggle('hide', currentScroll > 130 && currentScroll > previousScroll);
  previousScroll = currentScroll;
}, { passive: true });
