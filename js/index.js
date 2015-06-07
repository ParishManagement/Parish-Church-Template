$(function(){
	console.log("Jquery is loading");
	$(document).on("mouseover",".newsItems p",function(e){
		e.preventDefault();
		$(this).css("text-decoration","underline");
	});
	$(document).on("mouseleave",".newsItems p",function(e){
		e.preventDefault();
		$(this).css("text-decoration","none");
	});
	$(document).on("click",".newsItems p",function(e){
		e.preventDefault();
		alert($(this).text());
	});
	$(document).on("click","#profileArea",function(e){
		e.preventDefault();
		displayOverlay($(this));
	});
	$(document).on("click","#churchProfileArea",function(e){
		e.preventDefault();
		displayOverlay($(this));
	});
	/* $(document).on("click","#recentNewsArea",function(e){
		e.preventDefault();
		displayOverlay($(this));
	}); */
	$(document).on("click","#close",function(e){
		e.preventDefault();
		closeOverlay();
	});
	$(document).on("mouseover",function(e){
		e.preventDefault();
		$(this).css('box-shadow', '10px 10px 5px #888');
	});
	$(document).on("mouseleave",function(e){
		e.preventDefault();
		$(this).css('box-shadow', '');
	});
	/* $(document).on("click",function(e){
		e.preventDefault();
		if($("#Overlay").css("display") == "block"){
			closeOverlay();
		} else {
			console.log("overlay is visible");
		}
	}); */ 
});

function displayOverlay(overlayDiv){
	var ov = $("#Overlay");
    var pos = $(overlayDiv).offset();
    var doc = $(document);
    ov.css({
        left: window.outerWidth/2 + 'px',
        top: window.outerHeight/2 + 'px',
        width: 0,
        height: 0
    })
    .show()
    .animate({
        left: '560px',
        top: '125px',
        width: '500px',
        height: '500px'
        }, "slow");
	$("body").css("overflow", "hidden");
    $(".container").css("opacity", "0.2");
	$("body").addClass("overlayBackgroundColor");
}
function closeOverlay(){
	$("body").removeClass("overlayBackgroundColor");
	$("body").css("overflow", "visible");
    $(".container").css("opacity", "1");
	 $("#Overlay").hide("slow");
}