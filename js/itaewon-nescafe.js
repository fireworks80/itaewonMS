
// 위치값 반응형
function responseLoc() {
	var winW = window.innerWidth;
	var winH = window.innerHeight;
  var src = './images/';
  var wrap = $('.wrap');

   // height : 780 이하면 이미지 축소
   if(winH <= 780){
    wrap.addClass('small');
     /* $('.wrap-inner-nescafe').css({
        height: '501px',
        bottom: '106px',
        overflow: 'visible',
        paddingTop: 0
      });*/
/*
      $('.nescafe-visual').css({
        width: '522px',
        background: 'url('+src+'bg-nescafe-s.png) no-repeat 0 0',
        height: '501px'
      }).find('.nescafe-visual__btn').css({
        top: '327px',
        left: '350px'
      }).find('img').attr('src',src+'btn-nescafe-s.png');*/

       $('.nescafe-visual').find('img').attr('src',src+'btn-nescafe-s.png');

     /* $('.nescafe-text').css({
        'padding-top':'31px',
        marginLeft: '522px'
      });*/
      $('.nescafe-txt-img').attr('src',src+'txt-nescafe-s.png');
      /*$('.nescafe-date').css('margin-top','23px').find('img').attr('src',src+'date-nescafe-s.png');
      $('.nescafe-tit').css('margin-top','17px').find('img').attr('src',src + 'logo-nescafe-s.png');*/
      $('.nescafe-date').find('img').attr('src',src+'date-nescafe-s.png');
      $('.nescafe-tit').find('img').attr('src',src + 'logo-nescafe-s.png');
   } else if( winH > 781 ) {
    wrap.removeClass('small');
     /* $('.wrap-inner-nescafe').css({
        height: 'auto',
        bottom: '172px',
        overflow: 'hidden',
        paddingTop: '69px'
      });*/

      /*$('.nescafe-visual').css({
        width: '500px',
        background: 'url('+src+'bg-nescafe.png) no-repeat center top',
        height: '753px'
      }).find('.nescafe-visual__btn').css({
        top: '537px',
        left: '282px'
      }).find('img').attr('src',src+'btn-nescafe.png');*/
      $('.nescafe-visual').find('img').attr('src',src+'btn-nescafe.png');
      /*$('.nescafe-text').css({
        'padding-top':'59px',
        marginLeft: '500px'
      });*/
      $('.nescafe-txt-img').attr('src',src+'txt-nescafe.png');
      /*$('.nescafe-date').css('margin-top','40px').find('img').attr('src',src+'date-nescafe.png');
      $('.nescafe-tit').css('margin-top','37px').find('img').attr('src',src + 'logo-nescafe.png');*/
      $('.nescafe-date').find('img').attr('src',src+'date-nescafe.png');
      $('.nescafe-tit').find('img').attr('src',src + 'logo-nescafe.png');
   }
 }

 window.onload = function () {
 	responseLoc();
 };

 $(window).resize(function () {
 	responseLoc();
 });

