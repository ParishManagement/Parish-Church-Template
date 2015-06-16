$(function(){
	console.log("Jquery is loading");
	window.scrollTo(0,1);
	$(".profileHiddenDiv").hide();
	$("a.left").hide();
	$("a.right").hide();
	var viewportWidth="" ,viewportHeight = "",documentHeight = 0,slide2Offset = 0,documentHeighReached = false,slideHeight = 0;; 
	var is_mobile = false;
    if( $('#some-element').css('display')=='none') {
        is_mobile = true;       
    }
	console.log("logged  in device",is_mobile);
    // now i can use is_mobile to run javascript conditionally
    $(window).resize(function(){
		if (is_mobile == true) {
			viewportWidth = $(window).width();
			viewportHeight = $(window).height();
		} else {
			viewportWidth = $(window).width();
			viewportHeight = $(window).height();
		}
		$("#slide1").css("height",viewportHeight+"px");
		$("#slide1").css("width",viewportWidth+"px");
		$(".imageHolder").css("width",viewportWidth+"px");
		$(".imageHolder").css("height",viewportHeight+"px");
		$("#slide2").css("height",viewportHeight+"px");
		$("#slide2").css("width",viewportWidth+"px");
		$("#slide3").css("height",viewportHeight+"px");
		$("#slide3").css("width",viewportWidth+"px");
		$("#carousel-example").css("height",viewportHeight+"px");
		//$(".imageHolder").css("width",viewportWidth+"px");
	});
	$(window).resize();
	setCarouselHeight('#carousel-example');
	$(".carousel-inner").css("top",viewportHeight/2-50+"px");
	$(".carousel-inner").css("left","50px");
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
								+'<div style="position:absolute;" class="myCustomLableForChangeImage">'
									+'<input type="file" name="profilePic" />'
									+'<span>Change Image</span>'
								+'</div>'
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
		var html = '<div style="height:100%;">'
						+'<h3>Gallery</h3>'
						+'<div class="row">'
							+'<div class="col-md-3 col-sm-3 col-lg-3"><img class="img-responsive" src="http://2.bp.blogspot.com/-H6MAoWN-UIE/TuRwLbHRSWI/AAAAAAAABBk/89iiEulVsyg/s400/Free%2BNature%2BPhoto.jpg" /></div>'
							+'<div class="col-md-3 col-sm-3 col-lg-3"><img class="img-responsive" src="http://www.virginia.org/uploadedImages/virginiaorg/Images/OrgImages/H/HamptonConventionVisitorBureau/Grandview_Nature_Preserve.jpg?width=300&height=200&scale=upscalecanvas" /></div>'
							+'<div class="col-md-3 col-sm-3 col-lg-3"><img class="img-responsive" src="http://blog.arborday.org/wp-content/uploads/2013/02/NEC1-300x200.jpg" /></div>'
							+'<div class="col-md-3 col-sm-3 col-lg-3"><img class="img-responsive" src="http://th03.deviantart.net/fs70/200H/f/2010/256/0/9/painting_of_nature_by_dhikagraph-d2ynalq.jpg" /></div>'
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
	});
	/*KeyPress Events*/
	slideHeight = $("#slide2").offset().top;
	documentHeight = $(document).height();
	$(document).on("keyup",function(e){
		e.preventDefault();
		console.log("e.which",e.which);
		console.log($("#slide2").offset());
		if(e.which == 40){
			console.log("slide2Offset down",slide2Offset);
			console.log("slide2Offset down",slideHeight);
			slide2Offset += slideHeight;
			if(slide2Offset < documentHeight){
				$('html,body').animate({scrollTop: slide2Offset}, 1000);
			} else {
				console.log("document height reached");
				documentHeighReached = true;
				slide2Offset = documentHeight;
				console.log("down else",slide2Offset);
			}
		} else if(e.which == 38){
			if(slide2Offset != 0){
				console.log("before",slide2Offset);
				if(documentHeighReached){
					slide2Offset = slide2Offset-2*slideHeight;
					documentHeighReached = false;
				} else {
					slide2Offset = slide2Offset-slideHeight;
				}
				$('html,body').animate({scrollTop: slide2Offset}, 1000);
			} else {
				console.log("at the top");	
			}
		} else {
			console.log("other event is pressed");
		}
	});
	
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

function setCarouselHeight(id)
    {
        var slideHeight = [];
        $(id+' .item').each(function()
        {
            // add all slide heights to an array
            slideHeight.push($(this).height());
        });

        // find the tallest item
        max = Math.max.apply(null, slideHeight);

        // set the slide's height
        $(id+' .carousel-content').each(function()
        {
            $(this).css('height',max+'px');
        });
    }
