function revealMessage() {
    const message = document.getElementById("secret-message");
    if (message.style.display === "none") {
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }
}
