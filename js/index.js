$(document).ready(function() {
    
      $('.carousel.carousel-slider').carousel({
        fullWidth: false,
        indicators: true
      });

      $(document).ready(function(){
        $('.fixed-action-btn').floatingActionButton();
      });

      $(document).ready(function(){
        $('.modal').modal();
      });
      $(document).ready(function(){
        $('.sidenav').sidenav();
      });
      $(document).ready(function(){
        $('.tabs').tabs();
      });

      $("#1").click(function() {
        $('html, body').animate({
            scrollTop: $("#social-network-block").offset().top - 80
        }, 1000);
    });
    $("#2").click(function() {
        $('html, body').animate({
            scrollTop: $("#employee-block").offset().top - 80
        }, 1000);
    });
    $("#3").click(function() {
        $('html, body').animate({
            scrollTop: $("#price-block").offset().top - 80
        }, 1000);
    });
    $("#4").click(function() {
        $('html, body').animate({
            scrollTop: $("#contacts-block").offset().top - 80
        }, 1000);
    });
    

});


