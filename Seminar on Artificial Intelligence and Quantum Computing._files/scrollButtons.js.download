
// Mostrar botón scroll si baja más de 20px
window.onscroll = function () {
    const upBtn = document.getElementById("scrollToTopBtn");
    const backBtn = document.getElementById("goBackBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        if (upBtn) upBtn.style.display = "block";
        if (backBtn) backBtn.style.display = "block";
    } else {
        if (upBtn) upBtn.style.display = "none";
        if (backBtn) backBtn.style.display = "none";
    }
};

// Ir arriba
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Ir atrás
function goBack() {
    window.history.back();
}
