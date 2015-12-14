var msSlider;
var notSlider = true;
var wrapper;

function makeSlider(name){
	var prev = $(name).find('.mArrow-prev');
	var next = $(name).find('.mArrow-next');
	var roll = $('.mRoll');
	var slider = name + ' .js-mRoll';

if(!$(name).hasClass('havRoll'))
		msSlider = $(slider).bxSlider({
			nextSelector: next,
			prevSelector: prev,
			pager: false
		});





	// slider 새로 만들기
	/*if(msSlider == 'object') {
		msSlider.destroySlider();
		msSlider = {};
	}*/

/*	if(msSlider != 'object'){

		msSlider = $(slider).bxSlider({
			nextSelector: next,
			prevSelector: prev,
			pager: false
		});
}*/
}

	// detail view 보이기
	function detailViewOn(flag){
		var detailWrap = $('.mDetail-wrap');
		if(flag){
			detailWrap.addClass('on');
		} else {
			detailWrap.removeClass('on');
		}
	}

// pager 선택한부분은 active로 설정
function pagerLoc(rollNum,num){
	// console.log(num);
	var pager = $('.js-pager').eq(rollNum);
	pager.find('a').removeClass('active');
	pager.find('li').eq(num).find('a').addClass('active');
}

function changeDetailTxt(name){

	var tit = $('.mDetail');
	var src = './images/m/tit-';

	tit.css({
		backgroundImage: 'url('+src + name +'.png)'
	});
}

// tab
$('.js-tab').on('click','a',function(e){
	e.preventDefault();
	var tab = $('.js-tab');
	var container = $('.mContainer');
	var tabName = $(this).data('tab');
	var allClassNames = container.attr('class').split(' ');
	var activeSlideName;

	// 클릭 된 탭 활성화
	tab.find('a').removeClass('on');
	$(this).addClass('on');

	// 탭클릭시 해당 탭 활성화
	container.attr('class',allClassNames[0] + ' ' + tabName);

	switch(tabName){
		case 'lv2':
		activeSlideName = 'mFloor2';
		break;
		case 'lv3':
		activeSlideName = 'mFloor3';
		break;
		case 'lv4':
		activeSlideName = 'mFloor4';
		break;
	}

	//미리 생성된 슬라이더 삭제 후 재 생성
	// msSlider.destroySlider();
	makeSlider(activeSlideName);
});

// 링크 클릭
$('.mRoll .goLoc-link').on('click',function(e){
	e.preventDefault();
	var name = $(this).data('detail');
	var idx = $(this).index();
	var mRollIdx = $(this).parent().parent().data('rollnum');

	console.log(mRollIdx);

	msSlider.goToSlide(idx);
	detailViewOn(true);
	pagerLoc(mRollIdx,idx - 1);

	if(idx != 0){
		changeDetailTxt(name);
	}

});


// 이전 다음 버튼 클릭
$('.mArrow-prev, .mArrow-next').click(function(){
	var pager = $(this).parent().find('.js-pager');
	var idx = msSlider.getCurrentSlide();
	var name = pager.find('li').eq(idx - 1).find('a').data('detail');
	var mRollIdx = $(this).data('rollnum');

	if(idx === 0){
		$('.mDetail-wrap').removeClass('on');
	} else {
		pagerLoc(mRollIdx,idx - 1);
		changeDetailTxt(name);
	}

});


//로고 클릭시 시작페이지 가기
$('.mLogo').click(function(e){
	e.preventDefault();
	var section = $('.mSection');
	var floors = $('.mFloors');
	var detailWrap = $('.mDetail-wrap');

	// 2~4 층 가리고 1층만 보이게하기
	floors.removeClass('on');
	section.removeClass('on');
	detailWrap.removeClass('on');
	section.eq(0).addClass('on');

});

//페이저 클릭 후 글씨 바뀜
$('.js-pager a').click(function(e){
	e.preventDefault();
	var name = $(this).data('detail');
	var idx = $(this).parent().index();
	var pagerNum = $(this).parent().parent().data('rollnum');

	changeDetailTxt(name);
	pagerLoc(pagerNum,idx);
	msSlider.goToSlide(idx + 1);
});


// index 에서 2층가기 눌렀을때
$('.mFloor1-link').click(function(e){
	e.preventDefault();

	var container = $('.mContainer');

	container.removeClass('lv1').addClass('lv2');

	//bxslider 가 생성되지 않았으면 생성한다.
	makeSlider('.mFloor2');
});

//toggle 클릭
$('.mHeader-toggle').click(function(e){
	e.preventDefault();
	var loc;
	var dim = $('.mDim');
	var nav = $('.mNav');

	$(this).toggleClass('on');
	nav.toggleClass('on');

	/*if($(this).hasClass('on')){
		loc = 0;
		dim.addClass('on');
	} else {
		loc = -400;
		dim.removeClass('on');
	}*/

	/*$('.mNav').animate({
		right: loc
	},600);*/
});

//자세히 보기 버튼
$('.mDetail-btn').click(function(e){
	e.preventDefault();
	var dim = $('.mDim');
	var comingSoon = $('.mComingSoon');
	dim.addClass('on');
	comingSoon.addClass('on');
});

// 커밍순 확인, 닫기 버튼
$('.js-close').click(function(){
	var dim = $('.mDim');
	var comingSoon = $('.mComingSoon');
	dim.removeClass('on');
	comingSoon.removeClass('on');
});