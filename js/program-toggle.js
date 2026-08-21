function openProgramModal(imageSrc) {
    const modal = document.getElementById("programPopup");
    const modalImg = document.getElementById("programPopupImage");
    modalImg.src = imageSrc;
    modal.style.display = "block";
}

function closeProgramModal() {
    const modal = document.getElementById("programPopup");
    modal.style.display = "none";
}
