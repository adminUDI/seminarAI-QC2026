function toggleAccordion(id) {
  const content = document.getElementById(id);
  const icon = document.getElementById('icon-' + id);
  if (content.style.display === "none") {
    content.style.display = "block";
    if (icon) icon.textContent = "−";
  } else {
    content.style.display = "none";
    if (icon) icon.textContent = "+";
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Expandir biografía al dar clic en la burbuja
  document.querySelectorAll('.speaker-block a').forEach(link => {
    link.addEventListener('click', function () {
      const bioId = this.getAttribute('data-bio-id');

      // Cierra todas las biografías primero
      document.querySelectorAll('.accordion-content').forEach(el => el.style.display = "none");
      document.querySelectorAll('[id^="icon-bio-"]').forEach(el => el.textContent = "+");

      setTimeout(() => {
        toggleAccordion(bioId);
      }, 300);
    });
  });

  // Scroll automático a la sección de ponentes si hay búsqueda
  const params = new URLSearchParams(window.location.search);
  if (params.has('q')) {
    const target = document.getElementById("speakers");
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    }
  }
});
