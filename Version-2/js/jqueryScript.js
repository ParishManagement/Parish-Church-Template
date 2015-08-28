jQuery.noConflict();
jQuery(document).ready(function(){
	communityIntegrator.init();
	/* var boxes = jQuery('[data-scroll-speed]'),
	jQuerywindow = jQuery(window);
	console.log("boxes",boxes.length);
	 jQuerywindow.on('scroll', function(){
		var scrollTop = jQuery(window).scrollTop();
		boxes.each(function(){
		  var $this = $(this),
			  scrollspeed = parseInt(jQuery(this).data('scroll-speed')),
			  val = - scrollTop / scrollspeed;
		  $this.css('transform', 'translateY(' + val + 'px)');
		});
	 }); */
	 
	 //upArrow Click
	 jQuery("#upArrow").click(function(e){
		 console.log("");
		 e.preventDefault();
	 })
});
var communityIntegrator = {
	init : function(){
		console.log("jquery function is loaded");
		setTimeout(function(){
			jQuery('html,body').animate({scrollTop: 0}, 1000);	//Redirection of Page to top when the page is reloaded
			jQuery("#slides_control").find("a.left,a.right,.carousel-indicators").addClass("animated fadeOut");
			jQuery(".leftSideAngel").addClass("animated slideInDown");
			jQuery(".rightSideAngel").addClass("animated slideInDown");
			jQuery(".bannerImage").addClass("animated fadeIn");
			var windowHeight = jQuery(window).height()-100;
			jQuery(".bgParallaxImage").css("height",windowHeight);
			jQuery(".churchAffiliatesImage").css("height",windowHeight);
		},500);
		/* var boxes = $('[data-scroll-speed]'),
		$window = $(window);
		 $window.on('scroll', function(){
			var scrollTop = $window.scrollTop();
			boxes.each(function(){
			  var $this = $(this),
				  scrollspeed = parseInt($this.data('scroll-speed')),
				  val = - scrollTop / scrollspeed;
			  $this.css('transform', 'translateY(' + val + 'px)');
			});
		 }); */
	}
}

function nextSnapView(){
	console.log("nextSnap View");
}