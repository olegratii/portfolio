jQuery(document).ready(function($) {
   
   $(".section-label").click(function(){
	   $(this).siblings(".section-wrapper").toggleClass("hide-block");
	   $(this).siblings(".section-wrapper").toggleClass("show-block");
   })
   
   $(".image-label").click(function(){
	   $(this).siblings(".asset-img").toggleClass("hide-block");
	   $(this).siblings(".asset-img").toggleClass("show-block");
   })

});
