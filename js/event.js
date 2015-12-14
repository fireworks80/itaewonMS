function eventPopClose(name){
	$(name).removeClass('on');
}

function eventPopOpen(name){
	$(name).addClass('on');
}

function closeDim(){
	$('.dim').removeClass('on');
}

function openDim(){
	$('.dim').addClass('on');
}

function goToLoc(name){
	$('html, body').animate({
		scrollTop: $(name).offset().top
	});
}

function mobileScroll(){
	window.onscroll = function(){
		var windowScrollTop = $(window).scrollTop();
		var header = $('.mHeader');
		var tab = $('.js-tab');
		var current;

		// 스크롤시 header가 안보일때 까지 위치 고정
		if(windowScrollTop <= header.innerHeight()){
			current = (134 - windowScrollTop) + 'px';
		} else if (windowScrollTop >= header.innerHeight()){
			current = '24px';
		}
		tab.css('top',current).fadeIn();
	}
}