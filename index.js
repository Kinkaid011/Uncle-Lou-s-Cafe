
// Slide Show
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

//Media Query
const responsive = window.matchMedia("(max-width: 892px)");
responsive.addListener(myFunction); 
myFunction(responsive);


function myFunction(responsive) {
    if (responsive.matches) { 
      toggleMenu();
      scrollFunction();
      topFunction ();
    } 
  }


//Drop down menu
const wrapper = document.getElementById("wrapper");
const change = document.getElementsByClassName("switch")[0];
change.addEventListener("click", toggleMenu);
   
function toggleMenu() {
        const nav = document.getElementById("dropdown"); 
        wrapper.style.height = "525px"
        nav.classList.add("toggle","animated","fadeInDown");
        if (nav.style.display === "block") {
        wrapper.style.height = "160px"
        nav.style.display = "none";

    } else {
        wrapper.style.height = "525px"
        nav.style.display = "block"
    }
}
   

//scroll top button
const mybutton = document.getElementById("myBtn");
mybutton.addEventListener("click", topFunction);

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

document.addEventListener("scroll",scrollFunction);


function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



  
