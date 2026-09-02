/* Google Analytics 4: medición institucional del micrositio. */
(function () {
  const measurementId = 'G-JHFJDX7WV0';
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, { anonymize_ip: true });

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a, button');
    if (!link) return;
    const label = (link.textContent || link.getAttribute('aria-label') || 'interaccion').trim().slice(0, 100);
    window.gtag('event', 'interaccion_micrositio', { element_text: label });
  });

  const seen = new Set();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting || !entry.target.id || seen.has(entry.target.id)) return;
      seen.add(entry.target.id);
      window.gtag('event', 'seccion_vista', { section_name: entry.target.id });
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.45 });
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
  });
}());
