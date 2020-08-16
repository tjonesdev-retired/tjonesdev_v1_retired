$(document).ready(function() {
  // Smooth scrolling from links to pages
  $(".HomeBtn").click(function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $("#Home").offset().top
    }, 1000);
  });
  $(".AboutMeBtn").click(function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $("#AboutMe").offset().top
    }, 1000);
  });
  $(".MyProjectsBtn").click(function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $("#MyProjects").offset().top
    }, 1000);
  });
  $(".ContactMeBtn").click(function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $("#ContactMe").offset().top
    }, 1000);

  });

  // Calculate age so doesn't have to be manually updated
  function getAge(birthday) {
    var birthDate = +new Date(birthday);
    return ~~((Date.now() - birthDate) / (31557600000));
  }
  document.getElementById('age').innerHTML = getAge("03/24/1996");

  // Web Technologies Slider
  $('.languageslider').slick({
    arrows: false,
    infinite: true,
    centerMode: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 1500,
    focusOnSelect: false,
    pauseOnHover: false,
    pauseOnFocus: false
  });


});