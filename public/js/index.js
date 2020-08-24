$(".bt1").click(function () {
	var position = $(".main-wrap").offset();
	$("html,body").stop().animate({ 'scrollTop': position.top }, 500);
});
$(".bt2").click(function () {
	var position = $(".band-wrap").offset();
	$("html,body").stop().animate({ 'scrollTop': position.top }, 500);
});
$(".bt3").click(function () {
	var position = $(".tour-wrap").offset();
	$("html,body").stop().animate({ 'scrollTop': position.top }, 500);
});
$(".bt4").click(function () {
	var position = $(".contact-wrap").offset();
	$("html,body").stop().animate({ 'scrollTop': position.top }, 500);
});
$(".bt5").click(function () {
	var position = $(".map-wrap").offset();
	$("html,body").stop().animate({ 'scrollTop': position.top }, 500);
});