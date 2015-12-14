
  // %값 리턴
  function responseHiehgt(winH, defaultH, defaultSize) {
    return ((winH - defaultH) / 2 + defaultSize);
  }

// ie 8 인지 브라우저 체크
function getInternetExplorerVersion() {
 var rv = -1; // Return value assumes failure.
 if (navigator.appName == 'Microsoft Internet Explorer') {
  var ua = navigator.userAgent;
  var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
  if (re.exec(ua) != null)
    rv = parseFloat(RegExp.$1);
}
return rv;
}

// 위치값 반응형
function responseLoc() {
  var baseX = 1920;
  var winW = window.innerWidth;
  var winH = window.innerHeight;
  var baseLeft = -430;
  var visual = $('.visual');
  var current; // visual의 실시간 x 좌표
  var tableCell = $('.fp-tableCell'); // fullpage.js 사용시 section 안에 생기는 div

  //왼쪽 비쥬얼 위치 이동 (보통 브라우저 1920 * 1080)에서의 visual 의 좌표
  if (winW >= 1000 && winW <= 1500) {
    current = -220.5;
  } else if (winW >= 1501 && winW <= 2400) { // 1500이 넘는 브라우져에서는 visual이 왼쪽 화면을 기준으로 움직임
    current = ((winW - baseX) / 2 - baseLeft) * -1;
  }
  visual.css('left', current + 'px');


    /**
     * 화면 사이즈 조정후 fullpage.js로 조정된 hieght값을 실시간으로 적용이 되지 않아서
     * 0.8초 후에 .fp-tableCell의 height값으로 설정함
     * var winH = 브라우저 크기
     * var currHeight = .fp-tableCell의 height를 담는 값
     * var defaultHeight = 900; 기본 브라우저 높이를 900으로 잡음 높이값이 늘어날 경우 기준으로 잡은 값
     * var detailMT; section 안의 .detail의 margin-top을 넣음
     */
     setTimeout(function () {
       var currHeight = tableCell.height();

      // ie 8 이면 사이즈 조정
      if(getInternetExplorerVersion() === 8){
        $('.animation').css('marginTop','43px');
        $('.floor1__txt-area').css('paddingTop','100px');
      }

      if (winH >= 1420){
        $('.fp-tableCell').css('height','1355px');
      } else if (winH <= 630){
        $('.fp-tableCell').css('height','630px');
      }

      // .section 안의 내용물 높이를 .section의 height로 맞춤
      $('.section').css('height', currHeight + 'px');
      $('.bx-wrapper').css('height', currHeight + 'px');
      $('.bx-viewport').css('height', '100%');
      $('.rolling').css('height', currHeight + 'px');
      $('.wrap').height(currHeight * 4);
      $('.wrap-inner').css('height',currHeight + 'px');

    }, 800);

   // 컨텐츠 높이값 %로 변환
   var defaultH = 900;
   var detailMT = $('.detail').css('marginTop').replace(/[^-\d\.]/g, '');

   // height : 780 이하면 이미지 축소
   if(winH <= 780){

    $('.wrap').addClass('small');

    // 2층
    $('.floor2__extend .disc').each(function(idx){
      var name = $(this).data('locname');
      var img = $(this).find('img');
      img.attr('src','./images/btn-' + name + '-s.png');
    });

    // 3층
    $('.floor3__extend .disc').each(function(idx){
      var name = $(this).data('locname');
      var img = $(this).find('img');
      img.attr('src','./images/btn-' + name + '-s.png');
    });

    // 4층
    $('.floor4__extend .disc').each(function(idx){
      var name = $(this).data('locname');
      var img = $(this).find('img');
      img.attr('src','./images/btn-' + name + '-s.png');
    });

    // linker
    $('.floor2 .linker, .floor3 .linker').find('img').attr('src','./images/btn-up_sec-s.png');
    $('.floor1 .linker').find('img').attr('src','./images/btn-up-s.png');

    $('.js-animation').removeClass('animation').addClass('animation-s');
    $('.js-lightBg').removeClass('light-bg').addClass('light-bg-s');
    $('.js-building').removeClass('building').addClass('building-s');
    // $('.human-roof1, .human-roof2, .human-roof4, .human-street1, .human-street2').hide();
    $('.js-shake').removeClass('human-roof3').addClass('human-roof3-s');
    $('.js-sHuman3').removeClass('human-street3').addClass('human-street3-s');
    $('.js-sHuman4').removeClass('human-street4').addClass('human-street4-s');
    $('.js-bike').removeClass('human-street5').addClass('human-street5-s');
    $('.txt-area__tit').attr('src','./images/floor1-tit-s.png');
    // $('.floor1__txt-area').css('paddingTop','83px');

    // $('.countDown').css('marginTop','10px');
   /* $('.roll-wrap').css({
      width: '306px',
      height: '306px'
    });*/
$('.roll-list').find('li').eq(0).find('img').attr('src','./images/floor1-scroll-s-0.png');
$('.roll-list').find('li').eq(1).find('img').attr('src','./images/floor1-scroll-s-1.png');
    /*$('.visual').css({
      'backgroundImage':'url(./images/floor1-visual-s.png)',
      'backgroundPosition': '0 220px',
      width: '395px',
      height: '490px'
    });*/
    // $('.visual-video').attr('src','./images/floor1-video-btn-s.png').css('left','153px');

    $('.visual-video').find('img').attr('src','./images/floor1-video-btn-s.png');

    light.endX = -2870;
    light.step = 574;
    handShaker.endX = -28;
    handShaker.step = 28;
    woman.endX = -69;
    woman.step = 23;
    hatMan.endX = -87;
    hatMan.step = 29;
    bike.endX = -80;
    bike.step = 80;

  } else if( winH > 781 && winH <= 1000) {

    $('.wrap').removeClass('small');

    // 2층

    $('.floor2__extend .disc').each(function(idx){
      var name = $(this).data('locname');
      var img = $(this).find('img');
      img.attr('src','./images/btn-' + name + '.png');
    });

    // 3층
    $('.floor3__extend .disc').each(function(idx){
      var name = $(this).data('locname');
      var img = $(this).find('img');
      img.attr('src','./images/btn-' + name + '.png');
    });

    // 4층
    $('.floor4__extend .disc').each(function(idx){
      var name = $(this).data('locname');
      var img = $(this).find('img');
      img.attr('src','./images/btn-' + name + '.png');
    });

    // linker
    // $('.linker').css('top','30px');
    $('.floor1 .linker').find('img').attr('src','./images/btn-up.png');
    $('.floor2 .linker, .floor3 .linker').find('img').attr('src','./images/btn-up_sec.png');

    // $('.animation').css({position: 'absolute'});
    // $('.txt-area__open-date').css('margin-top','15px');
    $('.js-animation').removeClass('animation-s').addClass('animation');
    $('.js-lightBg').removeClass('light-bg-s').addClass('light-bg');
    $('.js-building').removeClass('building-s').addClass('building');
    // $('.human-roof1, .human-roof2, .human-roof4, .human-street1, .human-street2').show();
    $('.js-shake').removeClass('human-roof3-s').addClass('human-roof3');
    $('.js-sHuman3').removeClass('human-street3-s').addClass('human-street3');
    $('.js-sHuman4').removeClass('human-street4-s').addClass('human-street4');
    $('.js-bike').removeClass('human-street5-s').addClass('human-street5');
    $('.txt-area__tit').attr('src','./images/floor1-tit.png');
    // $('.floor1__txt-area').css('paddingTop','100px');

    // $('.countDown').css('marginTop','19px');
  /*  $('.roll-wrap').css({
      width: '382px',
      height: '382px'
    });*/
$('.roll-list').find('li').eq(0).find('img').attr('src','./images/floor1-scroll-0.png');
$('.roll-list').find('li').eq(1).find('img').attr('src','./images/floor1-scroll-1.png');
  /*  $('.visual').css({
      'backgroundImage':'url(./images/floor1-visual.png)',
      'backgroundPosition': '0 273px',
      width: '490px',
      height: '610px'
    });*/
    // $('.visual-video').attr('src','./images/floor1-video-btn.png').css('left','192px');
    $('.visual-video').find('img').attr('src','./images/floor1-video-btn.png');
    light.endX = -4100;
    light.step = 820;
    handShaker.endX = -40;
    handShaker.step = 40;
    woman.endX = -105;
    woman.step = 35;
    hatMan.endX = -129;
    hatMan.step = 43;
    bike.endX = -120;
    bike.step = 120;
  } else if(winH > 1001) {
    $('.floor1__txt-area').css('padding-top',responseHiehgt(winH, defaultH, 80) + 'px');
    $('.floor2__extend, .floor3__extend, .floor4__extend').css('margin-top',responseHiehgt(winH, defaultH, 140) + 'px');
  }

  console.log(winH);
}

window.onload = function () {
  responseLoc();
};

$(window).resize(function () {
  responseLoc();
});


// 모션 프로토 타입
function Motion(thing, endX, step) {
  this.thing = $(thing);
  this.endX = endX;
  this.currentX = 0;
  this.step = step;
}
Motion.prototype.init = function () {
  this.currentX += this.step;

  if (this.currentX <= this.endX) {
    this.currentX = this.endX;
    this.step *= -1;
  } else if (this.currentX >= 0) {
    this.currentX = 0;
    this.step *= -1;
  }

  this.thing.css('backgroundPosition', this.currentX + 'px 0');
};

// 제자리 움직임 객체 생성
var light = new Motion('.js-lightBg', -4100, 820);
var handShaker = new Motion('.js-shake', -40, 40)
var woman = new Motion('.js-sHuman3', -105, 35);
var hatMan = new Motion('.js-sHuman4', -129, 43);
var bike = new Motion('.js-bike', -120, 120);

// 제자리 움직임 메서드 모음
function standMotion() {
  light.init();
  handShaker.init();
  woman.init();
  hatMan.init();
  bike.init();
  clearStand = setTimeout(standMotion, 300);
}

// 좌우 이동 함수
function moves(target, posX, time, posXStart, restart) {

  target.animate({
    left: posX + 'px'
  }, time, function () {
    $(this).hide();
    clearTimeout(clearStand);
    standMotion();
    target.css('left', posXStart + 'px').show();
  });

  setTimeout(function () {
    moves(target, posX, time, posXStart);
  }, restart);
}
// 밤낮 변경
var dayAndNight = {
  wrap: $('.floor1'),
  bgDate: $('.day-date'),
  bgNight: $('.day-night'),

  init: function () {

    var bgDate = this.bgDate;
    var bgNight = this.bgNight;
    var checkCycle = this.wrap.data('check');
        // console.log(checkCycle);
        if (checkCycle === 'date') {

            // console.log('date');
            this.wrap.data('check', 'night');
            bgDate.fadeIn().css('z-index', 1);
            bgNight.fadeOut().css('z-index', 0);
            $('.js-lightBg').hide();

          } else {

            // console.log('night');
            this.wrap.data('check', 'date');
            bgNight.fadeIn().css('z-index', 1);
            bgDate.fadeOut().css('z-index', 0);
            $('.js-lightBg').show();
          }
          setTimeout(function () {
            dayAndNight.init();
          }, 10000);
        }
      };

// 해당 페이지로 이동
function goToSection(hash) {
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  });
}

// detail 높이 맞추기
function detailPop(){
  var wrap = $('.comingSoon-wrap');
  var wrapInner = $('.wrap-inner');
  var comingSoon = $('.comingSoon');
  var detail = $('.detail');

  wrap.css('height',wrapInner.css('height'));

}


dayAndNight.init();
standMotion();
moves(woman.thing, -350, 30000, 800, 30000);
moves(hatMan.thing, -150, 25000, 1000, 25000);
moves(bike.thing, 640, 13000, -300, 13000);

$('.lnb-btn').on({
  click: function (e) {
    e.preventDefault();
    var hash = this.hash;
    goToSection(hash);
  },
  mouseenter: function () {
    var hash = location.hash;
    if (hash != '#4thpage') {
            // console.log(hash);
            $(this).next().stop().fadeIn();
          }
        },
        mouseleave: function () {
          var hash = location.hash;
          if (hash != '#4thpage') {
            // console.log(hash);
            $(this).next().hide();
          }
        }
      });

$(window).scroll(function () {
  var hash = location.hash;

    // 현재 페이지가 맨 아래 페이지가 아니면 lnb on 제거 및 층이름 변경
    if (hash != '#4thpage') {
      $('.lnb-txt').hide();
      $('.lnb-item').removeClass('on');

    }
  });

// 1초 뒤에 맨 아래로 이동
setTimeout(function () {
  var hash = location.hash;
  // console.log(hash);
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  });
}, 300);

// popup toggle
function popupToggle(dim, popup, flag) {
  var comingSoonWrap = $('.comingSoon-wrap');

    // 팝업 띄우기
    if (flag) {
      detailPop();
      $(dim).addClass('on');
      $(popup).addClass('on');
      comingSoonWrap.addClass('on');

    } else {
     $(dim).removeClass('on');
     $(popup).removeClass('on');
     comingSoonWrap.removeClass('on');

   }
 }




// 각층 슬라이드
var pageSlide = null;
var linker = $('.linker');

function checkSlide(){
  if(pageSlide !== null){
    pageSlide.destroySlider();
  }
}

linker.on('click',function(e){
  e.preventDefault();
  var hash = this.hash;
  goToSection(hash);
});

