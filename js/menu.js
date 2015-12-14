var url = './images/menu/popup/';
var menuName;

// dim toggle
function toggleDim(value){
	var dim = $('.js-dim');

	if(value){
		dim.addClass('on');
	} else {
		dim.removeClass('on');
	}
}

// 메뉴 클릭시 해당 메뉴로 이미지 변경하기
function replaceImg(name){

	var title = document.querySelector('.js-menuTit');
	var titleImg = title.getElementsByTagName('img')[0];
	var discription = document.querySelector('.js-menuDiscription');
	var link = document.getElementById('thumbWrap').getElementsByTagName('a');
	var bigImg = document.querySelector('.js-bigImg');

	// 제품 이름 이미지 설정
	titleImg.setAttribute('src',url + 'tit-'+name+'.png');

	// 제품 설명 이미지 설정
	discription.style.backgroundImage = 'url(' + url + 'disc-'+ name +'.png)';

	// 썸네일 링크 이미지들 순서대로 배치
	for(var i = 0; i < link.length; i++){

		var img = link[i].getElementsByTagName('img')[0];
		img.src = url + name + '-thumb' + i + '.jpg';

	}
	// 썸네일 클릭시 바뀌는 큰이미지 중 첫번째 이미지로 세팅
	bigImg.setAttribute('src',url+name+'-big0.jpg');
}

// 메뉴 클릭시 팝업 열기
$('.js-menuBtn').click(function(e){
	e.preventDefault();

	var popName = $(this).data('menuname');
	var popup = $('.js-menuDetail');
	// var thumbLen = $(this).data('thumblen');

	console.log(popName);

	replaceImg(popName);
	popup.addClass('on');
	toggleDim(true);

	menuName = popName;


});

// 닫기
$('.js-close').click(function(){
	var thumb = $('.js-thumb').find('a');

	$(this).parent().removeClass('on');
	toggleDim(false);

	// 팝업 닫을때 썸네일 이미지도 첫번때로 선택되어 있도록
	thumb.removeClass('on').eq(0).addClass('on');
});


$('.js-thumb').on('click','a', function(e){
	e.preventDefault();
	var idx = $(this).index();
	var bigImg = $('.js-bigImg');
	var src = url + menuName + '-big' + idx + '.jpg';

	bigImg.attr('src', src);
	$(this).addClass('on').siblings().removeClass('on');

	// console.log(idx);
});