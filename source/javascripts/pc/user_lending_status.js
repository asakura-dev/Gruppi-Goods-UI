$(function(){
    $(".tab-nav button").on("click",function(){
	$(".tab-nav button").removeClass("actived");
	$(this).addClass("actived");
    });
});
