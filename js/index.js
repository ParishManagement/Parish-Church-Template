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
	});
	$(document).on("mouseleave",".profile",function(e){
		e.preventDefault();
		$(".profileViewMore").removeClass("animated slideInUp").addClass("animated slideInDown").css({top:'82%',left:'0%',height:'',opacity:'2'});
	});
	
	/*Gallery View */
	$(document).on("mouseover",".gallery",function(e){
		e.preventDefault();
		$(".galleryViewMore").addClass("animated slideInUp").css({top:'0%',left:'0%',height:'100%'});
	});
	$(document).on("mouseleave",".gallery",function(e){
		e.preventDefault();
		$(".galleryViewMore").removeClass("animated slideInUp").addClass("animated slideInDown").css({top:'82%',left:'0%',height:'',opacity:'2'});
	});
	
	/*Recent News View */
	$(document).on("mouseover",".recentNews",function(e){
		e.preventDefault();
		$(".recentNewsViewMore").addClass("animated slideInUp").css({top:'0%',left:'0%',height:'100%'});
	});
	$(document).on("mouseleave",".recentNews",function(e){
		e.preventDefault();
		$(".recentNewsViewMore").removeClass("animated slideInUp").addClass("animated slideInDown").css({top:'82%',left:'0%',height:'',opacity:'2'});
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
		/* var html = '<div>'
						+'<h3>Priest Profile</h3>'
				   +'</div>';
		displayOverlay(html); */
		var html = '<div>'
						+'<h3>Priest Profile</h3>'
						+'<div class="row">'
							+'<div class="profilePicContainer col-sm-3 col-md-3 col-lg-3" style="height:150px;">'
								+'<img src="images/thobith.jpg" style="max-height:100%;" alt="profilePic" class="img-responsive" />'
								/* +'<div style="position:absolute;">'
									+'<input type="file" name="profilePic" />'
								+'</div>' */
							+'</div>'
							+'<div class="profileDetails col-sm-9 col-md-9 col-lg-9">'
								+'<div class="row">'
									+'<div class="col-sm-12 col-md-12 col-lg-12">'
										+'<table class="table priestInfoTable">'
											+'<tbody>'
												+'<tr>'
													+'<td>Name</td>'
													+'<td>:</td>'
													+'<td>Thobith Abhraham</td>'
												+'</tr>'
												+'<tr>'
													+'<td>Qualification</td>'
													+'<td>:</td>'
													+'<td>M.A.Philosophy</td>'
												+'</tr>'
												+'<tr>'
													+'<td>Email</td>'
													+'<td>:</td>'
													+'<td>thobith.abhraham@gmail.com</td>'
												+'</tr>'+'<tr>'
													+'<td>Phone</td>'
													+'<td>:</td>'
													+'<td>+91-1234567890</td>'
												+'</tr>'
												+'<tr>'
													+'<td>About me</td>'
													+'<td>:</td>'
													+'<td>Self motivated, and make the people to understand the need of creative ideas and help them to achieve those.</td>'
												+'</tr>'
											+'</tbody>'
										+'</table>'
									+'</div>'
								+'</div>'
							+'</div>'
						+'</div>'
						/* +'<div class="row">'
							+'<div class="col-sm-12 col-md-12 col-lg-12">'
								+'<a href="#gallery">Gallery</a>'
								+'<span>|</span>'
								+'<a href="#recentNews">Recent News</a>'
							+'</div>'
						+'</div>' */
				   +'</div>';
		displayOverlay(html);
		//$("#overlay h4").text("Priest Profile");
	});
	$(document).on("click",".gallery",function(e){
		var currentTarget = $(e.currentTarget);
		e.preventDefault();
		window.scrollTo(0,1);
		var html = '<div>'
						+'<h3>Gallery</h3>'
						+'<div>'
							+'<div class="profilePicContainer">'
								+'<img src="images/naveen.jpg" alt="profilePic" class="img-responsive" />'
							+'</div>'
							+'<div class="profileDetails">'
							+'</div>'
						+'</div>'
						+'<div>'
							+'<a href="#gallery">Gallery</a>'
							+'<a href="#recentNews">Recent News</a>'
						+'</div>'
				   +'</div>';
		displayOverlay(html);
		//$("#overlay h4").text("Gallery");
	});
	$(document).on("click",".recentNews",function(e){
		var currentTarget = $(e.currentTarget);
		e.preventDefault();
		window.scrollTo(0,1);
		var html = '<div>'
						+'<h3>Recent News</h3>'
				   +'</div>';
		displayOverlay(html);
		//$("#overlay h4").text("Recent News");
	});
	$(document).on("click","#close",function(e){
		e.preventDefault();
		$("#overlay").removeClass("shade animated zoomIn").addClass("animated zoomOut");
		$(".container").css("opacity","1");
		$("#overlay").css("background-color","white");
		$("#overlayContent").html("");
		$("body").css("overflow", "auto");
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

function displayOverlay(contentToDisplay){
	$("#overlayContent").html("");
	$("#overlay").removeClass("shade animated zoomIn").addClass("animated zoomOut");
	$("#overlay").css("display","block");
	$(".container").css("opacity","0.3");
	$('#overlay').css({
	   position:'absolute',
	   left: ($(window).width() - $('#overlay').outerWidth())/2,
	   top: ($(window).height() - $('#overlay').outerHeight())/2-60
	});
	$("#overlay").css("background-color","rgba(0,0,0,0.8)");
	$("#overlay").css("color","white");
	$("#overlay").removeClass("animated zoomOut").addClass("shade animated zoomIn");
	$("#overlayContent").html(contentToDisplay);
	$("body").css("overflow","hidden");
}
function closeOverlay(){
	$("body").removeClass("overlayBackgroundColor");
	$(".container").css("opacity", "1");
	 $("#Overlay").hide("slow");
	 $("#overlayContent").html("");
	 $("body").css("overflow", "");
}