document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("commentForm");
    const successMessage = document.getElementById("successMessage");

    // 👇 Aquí agregamos el listener para mostrar el formulario al hacer clic en la imagen
    const showFormTrigger = document.getElementById("showFormTrigger");
    const formContainer = document.getElementById("formContainer");

    if (showFormTrigger && formContainer) {
        showFormTrigger.addEventListener("click", function () {
            formContainer.style.display = "block";
            formContainer.scrollIntoView({ behavior: "smooth" });
        });
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const subject = "Seminar AI & QC 2026";
        const body = `Nombre: ${form.elements.nameCF.value}\nCorreo: ${form.elements.emailCF.value}\nTeléfono: ${form.elements.phone.value}\n\nMensaje:\n${form.elements.message.value}`;
        window.location.href = `mailto:upis@citedi.mx?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        successMessage.className = "alert alert-info mt-3";
        successMessage.innerHTML = "Se abrió tu aplicación de correo para enviar el mensaje.";
        successMessage.style.display = "block";
    });
});
