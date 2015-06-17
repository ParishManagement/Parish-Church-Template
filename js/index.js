$(function(){
	console.log("Jquery is loading");
	var viewportWidth="" ,viewportHeight = "",documentHeight = 0,slide2Offset = 0,documentHeighReached = false,slideHeight = 0,is_mobile = false;
	$(window).resize(function(){
		if (is_mobile == true) {
			viewportWidth = $(window).width();
			viewportHeight = $(window).height();
		} else {
			viewportWidth = $(window).width();
			viewportHeight = $(window).height();
		}
		$("#slide1,#slide2,#slide3").css({
			"height":viewportHeight+"px",
			"width":viewportWidth+"px"
		});
		$(".imageHolder").css({
			"width":viewportWidth+"px",
			"height":viewportHeight+"px"
		});
		//$(".imageHolder").css("height",viewportHeight+"px");
		$("#carousel-example").css("height",viewportHeight+"px");
		slideHeight = $("#slide2").offset().top;
		documentHeight = $(document).height();
		$(".carousel-inner").css({
			"top":viewportHeight/2-50+"px",
			'left':"0px"
		});
	});
	$(window).resize();
	pageLoadInit();
	$(document).on("mouseover","#carousel-example",function(e){
		e.preventDefault();
		$("a.left").show();
		$("a.right").show();
	});
	$(document).on("mouseleave","#carousel-example",function(e){
		e.preventDefault();
		$("a.left").hide();
		$("a.right").hide();
	})
	//Navigation Links
	$("ul.navbar-nav li").click(function(e){
		e.preventDefault();
		$("ul.navbar-nav li").removeClass("active");
		$("ul.navbar-nav li a").css("color","white");
		$(this).addClass("active");
		$(this).find("a").css("color","black");
	});
	/*KeyPress Events*/
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
	//handleUserEventsFun();
	//Show and Hide of Carousal Controls
});
function pageLoadInit(){
	$('html,body').animate({scrollTop: 0}, 1000);
	$(".profileHiddenDiv").hide();
	$("a.left").hide();
	$("a.right").hide();
	if( $('#some-element').css('display')=='none') {
        is_mobile = true;       
    }
}
function handleUserEventsFun(){
	$(document).on("mouseover","#carousel-example",function(e){
		e.preventDefault();
		$("a.left").show();
		$("a.right").show();
	});
	$(document).on("mouseleave","#carousel-example",function(e){
		e.preventDefault();
		$("a.left").hide();
		$("a.right").hide();
	})
	//Navigation Links
	$("ul.navbar-nav li").click(function(e){
		e.preventDefault();
		$("ul.navbar-nav li").removeClass("active");
		$("ul.navbar-nav li a").css("color","white");
		$(this).addClass("active");
		$(this).find("a").css("color","black");
	});
	/*KeyPress Events*/
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
}
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
