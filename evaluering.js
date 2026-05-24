// Lavet i samarbejde med AI (Copilot) - rettet og tilpasset af Mathilde

document.getElementById("feedbackForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Vis tak-besked
    document.getElementById("successMsg").style.display = "block";

    // (Her kunne du sende data til server senere)

    // Nulstil formular
    this.reset();
});