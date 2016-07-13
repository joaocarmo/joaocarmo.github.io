$(document).ready(function() {
  $.backstretch('../images/background.jpg', {speed: 150});
  $(window).resize(function(){
  	$('#app').css({
  		position: 'absolute',
  		left: ($(window).width() - $('#app').outerWidth())/2,
  		top: ($(window).height() - $('#app').outerHeight())/2
  	});
  });
  $(window).resize();
});
