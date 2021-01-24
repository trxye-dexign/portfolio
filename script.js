$(function() {
	$('.nav-item>a').click(function() {
		$('#drawer-check').removeAttr('checked').prop('checked', false).change();
	});
});


	window.onload = function() {
		scroll_effect();
		
		$(window).scroll(function(){
			scroll_effect();
		});
		
		function scroll_effect(){
			$('.animation').each(function(){
				var elemPos = $(this).offset().top;
				var scroll = $(window).scrollTop();
				var windowHeight = $(window).height();
				if(scroll > elemPos - windowHeight){
					$(this).addClass('scrollin');
				}
			});
		};
	};
