var communityIntegrator = {
	init : function(){
		console.log("jquery function is loaded");
		setTimeout(function(){
			$('html,body').animate({scrollTop: 0}, 1000);	//Redirection of Page to top when the page is reloaded
			$("a.left,a.right,.carousel-indicators").addClass("animated fadeOut");
			$(".leftSideAngel").addClass("animated slideInDown");
			$(".rightSideAngel").addClass("animated slideInDown");
			$(".bannerImage").addClass("animated fadeIn");
			var windowHeight = $(window).height();
			$(".bgParallaxImage").css("height",windowHeight);
			$(".churchAffiliatesImage").css("height",windowHeight);
		},500);
		var boxes = $('[data-scroll-speed]'),
		$window = $(window);
		 $window.on('scroll', function(){
			var scrollTop = $window.scrollTop();
			boxes.each(function(){
			  var $this = $(this),
				  scrollspeed = parseInt($this.data('scroll-speed')),
				  val = - scrollTop / scrollspeed;
			  $this.css('transform', 'translateY(' + val + 'px)');
			});
		 });
	}
}