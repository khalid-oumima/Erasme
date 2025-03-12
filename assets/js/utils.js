let slideIndex = 0;
let slideInterval;

function plusSlides(n) {
    clearInterval(slideInterval); // Stop the automatic slide change
    showSlides(slideIndex += n);
    slideInterval = setInterval(autoShowSlides, 8000); // Restart the automatic slide change
}

function currentSlide(n) {
    clearInterval(slideInterval); // Stop the automatic slide change
    showSlides(slideIndex = n);
    slideInterval = setInterval(autoShowSlides, 5000); // Restart the automatic slide change
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function autoShowSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

slideInterval = setInterval(autoShowSlides, 3000); // Change image every 2 seconds
autoShowSlides(); // Initialize the slideshow