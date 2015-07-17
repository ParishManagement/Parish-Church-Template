$(document).ready(function(){
	//$("body").lionbars();
	$('html,body').animate({scrollTop: 0}, 1000);
	$(window).scroll(function(e){
		return false;
	});
	$('#memCalender').fullCalendar({
		// put your options and callbacks here
		weekends: false,
		dayClick: function() {
			alert('a day has been clicked!');
		}
	});
});