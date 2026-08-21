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

// Abrir automáticamente la biografía al hacer clic en una burbuja
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.speaker-block a').forEach(link => {
    link.addEventListener('click', function (e) {
      const bioId = this.getAttribute('data-bio-id');

      // Cierra todas las biografías abiertas primero (opcional)
      document.querySelectorAll('.accordion-content').forEach(el => el.style.display = "none");
      document.querySelectorAll('[id^="icon-bio-"]').forEach(el => el.textContent = "+");

      setTimeout(() => {
        toggleAccordion(bioId);
      }, 300); // Espera a que se realice el scroll
    });
  });
});
