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
});


