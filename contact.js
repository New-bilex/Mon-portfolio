// Initialisation EmailJS

emailjs.init("OCnGrRX1_y9aA-6Ca");

// Sélection du formulaire

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const button = document.querySelector(".contact-btn");

    button.innerHTML = "Envoi en cours...";

    button.disabled = true;

    const params = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        subject: document.getElementById("subject").value,

        message: document.getElementById("message").value

    };

    emailjs.send(

        "service_62ibfat",

        "template_bv5o7ki",

        params

    )

        .then(function () {

            alert("✅ Votre message a été envoyé avec succès !");

            form.reset();

            button.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Envoyer le message';

            button.disabled = false;

        })

        .catch(function (error) {

            alert("❌ Erreur lors de l'envoi.");

            console.log(error);

            button.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Envoyer le message';

            button.disabled = false;

        });

});