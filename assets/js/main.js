jQuery(document).ready(function($) {
    
   $(".exp-player").click(function(){
	   $(".player-wrapper").toggleClass("hide-block");
	   $(".player-wrapper").toggleClass("show-block");
   })
   $(".coach-exp").click(function(){
	   $(".coach-wrapper").toggleClass("hide-block");
	   $(".coach-wrapper").toggleClass("show-block");
   })
    $(".edu-title").click(function(){
	   $(".education").toggleClass("hide-block");
	   $(".education").toggleClass("show-block");
   })
   $(".add-title").click(function(){
	   $(".add-training").toggleClass("hide-block");
	   $(".add-training").toggleClass("show-block");
   })

});
