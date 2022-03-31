var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// function plusSlides(n) {
//   slideIndex = slideIndex + n;
//   showSlides(slideIndex);
// }

// Thumbnail image controls 
function currentSlide(n) {
  showSlides(slideIndex = n);
}
// function currentSlide(n) {
//   slideIndex = n;
//   showSlides(slideIndex);
// }

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} // iestata nākošo skaitli 
  if (n < 1) {slideIndex = slides.length} // 
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";// visiem mySlides iedod css display none
  }
  for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "");
  }
   slides[slideIndex-1].style.display = "flex";// atrod un parāda aktīvo bildi 
   dots[slideIndex-1].className += " active";
 }

