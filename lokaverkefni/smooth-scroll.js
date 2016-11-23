var scrollelement = function(element)
	{
		$('body').animate({
			scrolltop: ($(element)offset().top) - 50
		}, 1000);
	};
	$("#1").click(function (){
		scrollelement("#top")
	}); 