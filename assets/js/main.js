(() => {
  const body = document.body;
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');

  const setMenuState = open => {
    if (!nav || !toggle) return;

    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    body.classList.toggle('menu-open', open);
  };

  const closeMenu = () => setMenuState(false);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      setMenuState(!nav.classList.contains('open'));
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', event => {
      if (!nav.classList.contains('open')) return;
      if (nav.contains(event.target) || toggle.contains(event.target)) return;
      closeMenu();
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        closeMenu();
        toggle.focus();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 980) closeMenu();
    });

    window.addEventListener('pageshow', closeMenu);
  }

  document.querySelectorAll('[data-year]').forEach(element => {
    element.textContent = new Date().getFullYear();
  });

  const revealItems = document.querySelectorAll('.reveal');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion && 'IntersectionObserver' in window && revealItems.length) {
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

      if (!emailForm.checkValidity()) {
        emailForm.reportValidity();
        return;
      }

      const data = new FormData(emailForm);
      const name = String(data.get('name') || '').trim();
      const email = String(data.get('email') || '').trim();
      const company = String(data.get('company') || '').trim();
      const phone = String(data.get('phone') || '').trim();
      const service = String(data.get('service') || '').trim();
      const message = String(data.get('message') || '').trim();

      const subject = encodeURIComponent(`Website enquiry from ${name || 'a potential client'}`);
      const bodyText = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Organisation: ${company || 'Not provided'}`,
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
