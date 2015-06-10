$(function(){
	console.log("Jquery is loading");
	$(".profileHiddenDiv").hide();
	$("a.left").hide();
	$("a.right").hide();
	window.scrollTo(0,1);
	/*Profile View */
	$(document).on("mouseover",".profile",function(e){
		e.preventDefault();
		$(".profileViewMore").addClass("animated slideInUp").css({top:'0%',left:'0%',height:'100%'});
		//$(".profile").css("background-color","rgba(219,215,215,0.2)").find("img").css("opacity","0.1");
		//$(".priestProfileHeading").css("background-color","");
		//$(".priestProfileHeading").css("color","white");
		//$(".profileViewMore").css("background-color","rgba(0,0,0,0.7)");
	});
	$(document).on("mouseleave",".profile",function(e){
		e.preventDefault();
		$(".profileViewMore").removeClass("animated slideInUp").addClass("animated slideInDown").css({top:'82%',left:'0%',height:'',opacity:'2'});
		//$(".profile").css("background-color","rgba(219,215,215,1)").find("img").css("opacity","1");
		//$(".priestProfileHeading").css("background-color","rgba(0,0,0,0.5)");
		//$(".priestProfileHeading").css("color","white");
		//$(".profileViewMore").css("background-color","");
	});
	
	/*Gallery View */
	$(document).on("mouseover",".gallery",function(e){
		e.preventDefault();
		$(".galleryViewMore").addClass("animated slideInUp").css({top:'0%',left:'0%',height:'100%'});
		//$(".gallery").css("background-color","rgba(219,215,215,0.2)").find("img").css("opacity","0.1");
		/* $(".galleryHeading").css("background-color","");
		$(".galleryHeading").css("color","white");
		$(".galleryViewMore").css("background-color","rgba(0,0,0,0.7)"); */
	});
	$(document).on("mouseleave",".gallery",function(e){
		e.preventDefault();
		$(".galleryViewMore").removeClass("animated slideInUp").addClass("animated slideInDown").css({top:'82%',left:'0%',height:'',opacity:'2'});
		//$(".gallery").css("background-color","rgba(219,215,215,1)").find("img").css("opacity","1");
		/* $(".galleryHeading").css("background-color","rgba(0,0,0,0.5)");
		$(".galleryHeading").css("color","white");
		$(".galleryViewMore").css("background-color",""); */
	});
	
	/*Recent News View */
	$(document).on("mouseover",".recentNews",function(e){
		e.preventDefault();
		$(".recentNewsViewMore").addClass("animated slideInUp").css({top:'0%',left:'0%',height:'100%'});
		//$(".recentNews").css("background-color","rgba(219,215,215,0.2)").find("img").css("opacity","0.1");
		/* $(".recentNewsHeading").css("background-color","");
		$(".recentNewsHeading").css("color","white");
		$(".recentNewsViewMore").css("background-color","rgba(0,0,0,0.7)"); */
	});
	$(document).on("mouseleave",".recentNews",function(e){
		e.preventDefault();
		$(".recentNewsViewMore").removeClass("animated slideInUp").addClass("animated slideInDown").css({top:'82%',left:'0%',height:'',opacity:'2'});
		//$(".recentNews").css("background-color","rgba(219,215,215,1)").find("img").css("opacity","1");
		/* $(".recentNewsHeading").css("background-color","rgba(0,0,0,0.5)");
		$(".recentNewsHeading").css("color","white");
		$(".recentNewsViewMore").css("background-color",""); */
	});
	
	//Show and Hide of Carousal Controls
	$(document).on("mouseover",".carousalDiv",function(e){
		e.preventDefault();
		$("a.left").show();
		$("a.right").show();
	});
	$(document).on("mouseleave",".carousalDiv",function(e){
		e.preventDefault();
		$("a.left").hide();
		$("a.right").hide();
	})
	//Overlay
	$(document).on("click",".profile",function(e){
		var currentTarget = $(e.currentTarget);
		e.preventDefault();
		window.scrollTo(0,1);
		displayOverlay();
		$("#overlay h4").text("Priest Profile");
	});
	$(document).on("click",".gallery",function(e){
		var currentTarget = $(e.currentTarget);
		e.preventDefault();
		window.scrollTo(0,1);
		displayOverlay();
		$("#overlay h4").text("Gallery");
	});
	$(document).on("click",".recentNews",function(e){
		var currentTarget = $(e.currentTarget);
		e.preventDefault();
		window.scrollTo(0,1);
		displayOverlay();
		$("#overlay h4").text("Recent News");
	});
	$(document).on("click","#close",function(e){
		e.preventDefault();
		$("#overlay").removeClass("shade animated zoomIn").addClass("animated zoomOut");
		$(".container").css("opacity","1");
		$("#overlay").css("background-color","white");
	});
	//Navigation Links
	$("ul.navbar-nav li").click(function(e){
		e.preventDefault();
		$("ul.navbar-nav li").removeClass("active");
		$("ul.navbar-nav li a").css("color","white");
		$(this).addClass("active");
		$(this).find("a").css("color","black");
	})
});

function displayOverlay(){
	$("#overlay").removeClass("shade animated zoomIn").addClass("animated zoomOut");
	$("#overlay").css("display","block");
	$(".container").css("opacity","0.5");
	$('#overlay').css({
	   position:'absolute',
	   left: ($(window).width() - $('#overlay').outerWidth())/2,
	   top: ($(window).height() - $('#overlay').outerHeight())/2
	});
	$("#overlay").css("background-color","white");
	$("#overlay").removeClass("animated zoomOut").addClass("shade animated zoomIn");
}
function closeOverlay(){
	$("body").removeClass("overlayBackgroundColor");
	$("body").css("overflow", "visible");
    $(".container").css("opacity", "1");
	 $("#Overlay").hide("slow");
}