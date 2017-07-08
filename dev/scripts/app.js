const john = {}

john.init = function() {
	john.getJohn();
}

console.log('hiiiii');

john.getJohn = function() {
	$(".submitButton").on('click', function() {
	    $('html,body').animate({
	        scrollTop: $(".followMe").offset().top},
	        'slow');
	});
};

$(document).ready(function() {
	john.init();
});
