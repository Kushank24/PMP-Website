$(function() {
  
  // contact form animations
  $('.contactTrigger').click(function() {
    $('#contactForm').fadeToggle();
    $('nav').removeClass("fixed-top");
  })
  $(document).mouseup(function (e) {
    var container = $("#contactForm");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
          container.fadeOut("slow");
          $('nav').addClass("fixed-top");
      }
  });
  
});