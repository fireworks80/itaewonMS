var msSlider;
/*var lv2Slider;
var lv3Slider = $('.mFloor3 .js-mRoll').bxSlider({
	nextSelector: '.mFloor3 .mArrow-next',
	prevSelector: '.mFloor3 .mArrow-prev',
	pager: false
});
var lv4Slider = $('.mFloor4 .js-mRoll').bxSlider({
	nextSelector: '.mFloor4 .mArrow-next',
	prevSelector: '.mFloor4 .mArrow-prev',
	pager: false
});
*/

function makeSlider(name){
	var prev = $(name).find('.mArrow-prev');
	var next = $(name).find('.mArrow-next');

	if(msSlider == null || msSlider == ''){
		msSlider = $(name + ' .js-mRoll').bxSlider({
			nextSelector: prev,
			prevSelector: next,
			pager: false
		});
	}
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
		function pagerLoc(pagerName, num){
			console.log(pagerName);
			var pager = $(pagerName);
			pager.find('a').removeClass('active');
			pager.find('li').eq(num).find('a').addClass('active');
		}

		function changeDetailTxt(name){

			var tit = $('.mDetail');
			var src = './images/m/';

			tit.css({
				backgroundposition: 'url('+src + name +'.png)'
			});
		}


		// tab
		$('.js-tab').on('click','a',function(e){
			e.preventDefault();
			var tab = $('.js-tab');
			var index = $(this).parent().index();
			var section = $('.mSection');

			tab.find('a').removeClass('on');
			$(this).addClass('on');

			section.removeClass('on');
			section.eq(index + 1).addClass('on');

		});

		// floor2 링크 클릭
		$('.mFloor2 .goLoc-link').on('click',function(e){
			e.preventDefault();
			var name = $(this).data('detail');
			var idx = $(this).index();
			lv2Slider.goToSlide(idx);
			detailViewOn(true);
			pagerLoc('.js-pager1',idx - 1);
			// console.log(idx);

			if(idx != 0){
				changeDetailTxt(name);
			}

			if(idx != 4){
				$('.mFloor2 .mDetail').removeClass('dolce');
			} else {
				$('.mFloor2 .mDetail').addClass('dolce');
			}
		});

		//pager 클릭
		$('.js-pager1').on('click','li',function(e){
			e.preventDefault();
			var index  = $(this).index();
			var name = $(this).find('a').data('detail');
			lv2Slider.goToSlide(index + 1);
			pagerLoc('.js-pager1',index);
			changeDetailTxt(name);
			// console.log(index);

			if(index != 3){
				$('.mFloor2 .mDetail').removeClass('dolce');
			} else {
				$('.mFloor2 .mDetail').addClass('dolce');
			}
		});

		// 이전 다음 버튼 클릭
		$('.mFloor2 .bx-prev, .mFloor2 .bx-next').click(function(){
			var pager = $('.js-pager1');
			var idx = lv2Slider.getCurrentSlide();

			switch(idx){
				case 0:
				detailViewOn(false);
				break;
				case 1:
				name = 'welcoming';
				break;
				case 2:
				name = 'menu'	;
				break;
				case 3:
				name = 'video';
				break;
				case 4:
				name = 'self';
				break;
			}

			if(idx != 4){
				$('.mFloor2 .mDetail').removeClass('dolce');
			} else {
				$('.mFloor2 .mDetail').addClass('dolce');
			}

			pagerLoc('.js-pager1',idx - 1);
			changeDetailTxt(name);
		});

		// floor3
		$('.mFloor3 .goLoc-link').on('click',function(e){
			e.preventDefault();
			var name = $(this).data('detail');
			var idx = $(this).index();
			lv3Slider.goToSlide(idx);
			detailViewOn(true);
			pagerLoc('.js-pager2',idx - 1);
			console.log(idx);

			if(idx != 0){
				changeDetailTxt(name);
			}
		});

		// 이전 다음 버튼 클릭
		$('.mFloor3 .bx-prev, .mFloor3 .bx-next').click(function(){
			var pager = $('.js-pager2');
			var idx = lv3Slider.getCurrentSlide();

			switch(idx){
				case 0:
				detailViewOn(false);
				break;
				case 1:
				name = 'tiny';
				break;
				case 2:
				name = 'community';
				break;

			}
			console.log(idx);
			pagerLoc('.js-pager2',idx - 1);
			changeDetailTxt(name);
		});

			//pager 클릭
			$('.js-pager2').on('click','li',function(e){
				e.preventDefault();
				var index  = $(this).index();
				var name = $(this).find('a').data('detail');
				lv3Slider.goToSlide(index + 1);
				pagerLoc('.js-pager2',index);
				changeDetailTxt(name);
			// console.log(index);
		});

		// floor4
		$('.mFloor4 .goLoc-link').on('click',function(e){
			e.preventDefault();
			var name = $(this).data('detail');
			var idx = $(this).index();
			lv4Slider.goToSlide(idx);
			detailViewOn(true);
			pagerLoc('.js-pager3',idx - 1);
			console.log(idx);

			if(idx != 0){
				changeDetailTxt(name);
			}
		});

		// 이전 다음 버튼 클릭
		$('.mFloor4 .bx-prev, .mFloor4 .bx-next').click(function(){
			var pager = $('.js-pager3');
			var idx = lv4Slider.getCurrentSlide();

			switch(idx){
				case 0:
				detailViewOn(false);
				break;
			}
			// console.log(idx);
			pagerLoc('.js-pager3',idx - 1);
			changeDetailTxt(name);
		});

			//pager 클릭
			$('.js-pager3').on('click','li',function(e){
				e.preventDefault();
				var index  = $(this).index();
				var name = $(this).find('a').data('detail');
				lv3Slider.goToSlide(index + 1);
				pagerLoc('.js-pager3',index);
				changeDetailTxt(name);
			// console.log(index);
		});

		//로고 클릭시 시작페이지 가기
		$('.mLogo').click(function(e){
			e.preventDefault();
			var section = $('.mSection');
			var floors = $('.mFloors');

			floors.removeClass('on');
			section.removeClass('on');
			section.eq(0).addClass('on');
		});

		// index 에서 2층가기 눌렀을때
		$('.mFloor1-link').click(function(e){
			e.preventDefault();
			var section = $('.mSection');
			var floors = $('.mFloors');

			section.removeClass('on');
			section.eq(1).addClass('on');
			floors.addClass('on');

			//bxslider 가 생성되지 않았으면 생성한다.
			makeSlider('.mFloor2');
			/*if(lv2Slider == null || lv2Slider == ''){
				lv2Slider = $('.mFloor2 .js-mRoll').bxSlider({
					nextSelector: '.mFloor2 .mArrow-next',
					prevSelector: '.mFloor2 .mArrow-prev',
					pager: false
				});
			}*/

		});

		//toggle 클릭
		$('.mHeader-toggle').click(function(e){
			e.preventDefault();
			var loc;
			var dim = $('.mDim');

			$(this).toggleClass('on');

			if($(this).hasClass('on')){
				loc = 0;
				dim.addClass('on');
			} else {
				loc = -400;
				dim.removeClass('on');
			}

			$('.mNav').animate({
				right: loc
			},600);
		});