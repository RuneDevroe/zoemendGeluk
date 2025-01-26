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
