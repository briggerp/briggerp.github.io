function toggleContent(button) {
    const content = button.nextElementSibling;
    button.classList.toggle("active");
    content.style.display = content.style.display === "none" || content.style.display === "" ? "block" : "none";
}
