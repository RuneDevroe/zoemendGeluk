document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0;
    const header = document.querySelector('header');

    if (!header) return; // Voorkomt fout als header niet bestaat

    // Functie die de header verbergt of toont bij scrollen
    window.addEventListener('scroll', function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });

    // Header weer zichtbaar maken bij hover
    header.addEventListener('mouseenter', function() {
        header.classList.remove('hidden');
    });

    // Formulier validatie en versturen
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;

            if (name && email && message) {
                alert("Bericht verzonden!");
                // contactForm.submit(); // uncomment als je het echt wilt verzenden
            } else {
                alert("Vul alle velden in.");
            }
        });
    }

    // Knoppen koppelen aan contactsectie
    const contactButton = document.getElementById('contactButton');
    const contactButtonHoning = document.getElementById('contactButtonHoning');

    if (contactButton) {
        contactButton.addEventListener('click', function() {
            window.location.href = '#contact';
        });
    }

    if (contactButtonHoning) {
        contactButtonHoning.addEventListener('click', function() {
            window.location.href = '#contact';
        });
    }
});
