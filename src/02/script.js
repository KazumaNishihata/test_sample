$(function(){
	$("#navi a").click(function(){
		$("#main img").attr("src",$(this).attr("href"));
		return false;
	});
});