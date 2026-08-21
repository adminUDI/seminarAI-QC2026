function openModal(src) {
  document.getElementById("programImage").src = src;
  document.getElementById("programModal").style.display = "block";
}

function closeModal() {
  document.getElementById("programModal").style.display = "none";
}
