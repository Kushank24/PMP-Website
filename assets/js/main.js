$(document).ready(function() {
  $("#cf7_controls").on('mouseover', 'li', function() {
      $("#cf7 img").removeClass("opaque");
      
      var newImage = $(this).index();
      
      $("#cf7 img").eq(newImage).addClass("opaque")

      $("#cf7_controls").removeClass("selected");
      $(this).addClass("selected");
  });
});

$(document).ready(function () {
$(".navbar-nav li a").click(function(event) {
  $(".navbar-collapse").collapse('hide');
});
});

$(function () {
  $(document).scroll(function () {
    var top =	 window.pageYOffset || document.documentElement.scrollTop;
    if (top > 100) {
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      document.getElementById("navbar-logo").src = "assets/images/logo2.svg";
    } 
    else {
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      document.getElementById("navbar-logo").src = "assets/images/logo1.png";
    }
  });
});

// $('#products-link').on('click', function() {
//   $('#products-section').scrollIntoView();
// })

$(document).scroll(function () {
$('.section-divider').each(function () {
  if($(window).scrollTop() >= $(this).offset().top-100) {
      var currentSection = $(this).attr('id');
      if(currentSection == 'homepage-section') {
        document.getElementById("homepage-link").classList.add("current");
        document.getElementById("products-link").classList.remove("current");
        document.getElementById("investors-link").classList.remove("current");
        document.getElementById("about-us-link").classList.remove("current");
      }  
      else if(currentSection == 'products-section') {
        document.getElementById("homepage-link").classList.remove("current");
        document.getElementById("products-link").classList.add("current");
        document.getElementById("investors-link").classList.remove("current");
        document.getElementById("about-us-link").classList.remove("current");
      }
      else if(currentSection == 'investors-section') {
        document.getElementById("homepage-link").classList.remove("current");
        document.getElementById("products-link").classList.remove("current");
        document.getElementById("investors-link").classList.add("current");
        document.getElementById("about-us-link").classList.remove("current");
      }
      else if(currentSection == 'about-us-section') {
        document.getElementById("homepage-link").classList.remove("current");
        document.getElementById("products-link").classList.remove("current");
        document.getElementById("investors-link").classList.remove("current");
        document.getElementById("about-us-link").classList.add("current");
      }
    }
});
})

$(document).ready(function(){
  $(window).load(function(){
   $(".loader-wrapper").fadeOut("slow") });
 })

 $(document).ready(function(){
// Add smooth scrolling to all links
 $("a").on('click', function(event) {

 // Make sure this.hash has a value before overriding default behavior
 if (this.hash !== "") {
   // Prevent default anchor click behavior
   event.preventDefault();

   // Store hash
   var hash = this.hash;

   // Using jQuery's animate() method to add smooth page scroll
   // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
   $('html, body').animate({
     scrollTop: $(hash).offset().top
   }, 800, function(){

     // Add hash (#) to URL when done scrolling (default click behavior)
     window.location.hash = hash;
   });
 } // End if
});
});