(() => {
  const body = document.body;
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');

const updateActiveNavigation = () => {
  if (!nav) return;

  const links = [...nav.querySelectorAll('a:not(.button)')];
  const currentFile =
    window.location.pathname.split('/').pop() || 'index.html';
  const currentHash = window.location.hash;

  links.forEach(link => link.removeAttribute('aria-current'));

  let activeLink;

  if (currentHash === '#about') {
    activeLink = links.find(link =>
      link.getAttribute('href').endsWith('#about')
    );
  } else {
    activeLink = links.find(link => {
      const href = link.getAttribute('href');

      return (
        href === currentFile ||
        (currentFile === '' && href === 'index.html')
      );
    });
  }

  if (activeLink) {
    activeLink.setAttribute('aria-current', 'page');
  }
};

updateActiveNavigation();

window.addEventListener(
  'hashchange',
  updateActiveNavigation
);
  
  const closeMenu = () => {
    if (!nav || !toggle) return;
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    body.classList.remove('menu-open');
  };

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const opening = !nav.classList.contains('open');
      nav.classList.toggle('open', opening);
      toggle.setAttribute('aria-expanded', String(opening));
      body.classList.toggle('menu-open', opening);
    });

    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 980) closeMenu();
    });
  }

  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealItems.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.13 });

    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('visible'));
  }

  const emailForm = document.querySelector('[data-email-form]');
  if (emailForm) {
    emailForm.addEventListener('submit', event => {
      event.preventDefault();
      const data = new FormData(emailForm);
      const name = String(data.get('name') || '').trim();
      const email = String(data.get('email') || '').trim();
      const phone = String(data.get('phone') || '').trim();
      const service = String(data.get('service') || '').trim();
      const message = String(data.get('message') || '').trim();

      const subject = encodeURIComponent(`Website enquiry from ${name || 'a potential client'}`);
      const bodyText = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || 'Not provided'}`,
        `Service: ${service || 'Not selected'}`,
        '',
        'Message:',
        message
      ].join('\n');

      window.location.href = `mailto:info@digitalcoast.solutions?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
    });
  }
})();
