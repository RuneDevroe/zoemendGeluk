let slideIndex = 0;
let slideTimer;

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";
  slideTimer = setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function plusSlides(n) {
  clearTimeout(slideTimer);
  slideIndex += n - 1;
  showSlides();
}

function currentSlide(n) {
  clearTimeout(slideTimer);
  slideIndex = n - 1;
  showSlides();
}

function validateForm(event) {
  event.preventDefault();
  alert("Thank you for contacting us! Your message has been submitted.");
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides();
});
