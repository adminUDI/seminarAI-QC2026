
function toggleAccordion(id) {
  const content = document.getElementById(id);
  const icon = document.getElementById("icon-" + id);
  if (content.classList.contains("show")) {
    content.classList.remove("show");
    content.style.display = "none";
    icon.textContent = "+";
  } else {
    content.classList.add("show");
    content.style.display = "block";
    icon.textContent = "−";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Cerrar todos los acordeones al inicio
  document.querySelectorAll(".accordion-content").forEach(function (acc) {
    acc.style.display = "none";
    acc.classList.remove("show");
  });

  // Si se accede con hash (ej. #Daniel_Santiago), se expande el bloque automáticamente
  const hash = window.location.hash;
  if (hash.startsWith("#") && hash.length > 1) {
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      const accordion = target.querySelector(".accordion-content");
      if (accordion) {
        const accordionId = accordion.id;
        toggleAccordion(accordionId);
      }
    }
  }

  // Interceptar clics en burbujas
  document.querySelectorAll('.speaker-block a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetID = this.getAttribute("href");
      history.pushState(null, "", targetID);
      const target = document.querySelector(targetID);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        const accordion = target.querySelector(".accordion-content");
        if (accordion) {
          const accordionId = accordion.id;
          toggleAccordion(accordionId);
        }
      }
    });
  });
});
