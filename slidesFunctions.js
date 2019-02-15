//-----------------------Dog Registery slider
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
//---------------Buztle Sldier-------------------
var iOSslideIndex = 1;
showSlides(iOSslideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(iOSslideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(iOSslideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("iosSlides");
  var dots = document.getElementsByClassName("iosdot");
  if (n > slides.length) {iOSslideIndex = 1} 
  if (n < 1) {iOSslideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[iOSslideIndex-1].style.display = "block"; 
  dots[iOSslideIndex-1].className += " active";
}
