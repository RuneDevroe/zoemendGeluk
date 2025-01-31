let lastScrollTop = 0; // Bewaar de vorige scrollpositie
const header = document.querySelector('header');

// Functie die de header verbergt of toont bij scrollen
window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Als naar beneden wordt gescrold, verberg de header
    if (currentScroll > lastScrollTop) {
        header.classList.add('hidden');
    } else {
        // Als naar boven wordt gescrold, toon de header
        header.classList.remove('hidden');
    }
    
    // Update de vorige scrollpositie
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Voeg een hover-effect toe om de header zichtbaar te maken als je tegen de bovenkant van het scherm hovert
header.addEventListener('mouseenter', function() {
    header.classList.remove('hidden');
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (name && email && message) {
        
    } else {
        alert("Please fill out all fields.");
    }
});

document.getElementById('contactButton').addEventListener('click', function() {
    window.location.href = '#contact';
});

document.getElementById('contactButtonHoning').addEventListener('click', function() {
    window.location.href = '#contact';
});
