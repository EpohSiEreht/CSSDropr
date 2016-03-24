$(function(){
	menuToggle();
});

function menuToggle() {
	$('#menu-toggle').click(function () {
		if($('#wrapper').hasClass("toggled")){
			$("#wrapper").removeClass("toggled");
		}
	    else {
	    	$("#wrapper").addClass("toggled");
	    }
	});
}