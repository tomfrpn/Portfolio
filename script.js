// Sélectionne le formulaire
const form = document.querySelector("form");

// Fonction de validation du formulaire
form.addEventListener("submit", function(event) {
    // Récupère les valeurs des champs
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Expression régulière pour vérifier un email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Vérifie si tous les champs sont remplis et si l'email est valide
    if (nom === "" || email === "" || message === "") {
        alert("Veuillez remplir tous les champs.");
        event.preventDefault(); // Empêche l'envoi du formulaire
    } else if (!emailPattern.test(email)) {
        alert("Veuillez entrer une adresse email valide.");
        event.preventDefault();
    } else {
        alert("Merci pour votre message !");
    }
});
