// %값 리턴
function responseHeight(winH, defaultH, defaultSize) {
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

// detail 높이 맞추기
function detailPop() {
    var wrap = $('.comingSoon-wrap');
    var wrapInner = $('.wrap-inner');
    var comingSoon = $('.comingSoon');
    var detail = $('.detail');

    wrap.css('height', wrapInner.css('height'));

}

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


function changeDiscSmallImg(target) {
    $(target).each(function() {
        var name = $(this).data('locname');
        var img = $(this).find('img');
        img.attr('src', './images/btn-' + name + '-s.png');
    });
}

function changeDiscMdImg(target) {
    $(target).each(function() {
        var name = $(this).data('locname');
        var img = $(this).find('img');
        img.attr('src', './images/btn-' + name + '.png');
    });
}

function changeSmallImg(target, file) {
    $(target).find('img').attr('src', './images/' + file + '-s.png');
}

function changeClsName(target, rmName, addName) {
    $(target).removeClass(rmName).addClass(addName);
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
    setTimeout(function() {
        var currHeight = tableCell.height();

        // ie 8 이면 사이즈 조정
        if (getInternetExplorerVersion() === 8) {
            $('.animation').css('marginTop', '43px');
            $('.floor1__txt-area').css('paddingTop', '100px');
        }

        if (winH >= 1420) {
            $('.fp-tableCell').css('height', '1355px');
        } else if (winH <= 630) {
            $('.fp-tableCell').css('height', '630px');
        }

        // .section 안의 내용물 높이를 .section의 height로 맞춤
        $('.section').css('height', currHeight + 'px');
        $('.bx-wrapper').css('height', currHeight + 'px');
        $('.bx-viewport').css('height', '100%');
        $('.rolling').css('height', currHeight + 'px');
        $('.wrap').height(currHeight * 4);
        $('.wrap-inner').css('height', currHeight + 'px');

    }, 800);

    // 컨텐츠 높이값 %로 변환
    var defaultH = 900;
    var detailMT = $('.detail').css('marginTop').replace(/[^-\d\.]/g, '');

    // height : 780 이하면 이미지 축소
    if (winH <= 780) {

        $('.wrap').addClass('small');

        // 각층 disc
        changeDiscSmallImg('.floor2__extend .disc');
        changeDiscSmallImg('.floor3__extend .disc');
        changeDiscSmallImg('.floor4__extend .disc');

        changeSmallImg('.floor2 .linker, .floor3 .linker', 'btn-up_sec');
        changeSmallImg('.floor1 .linker', 'btn-up');
        changeSmallImg('.txt-area__tit', 'floor1-tit');
        changeSmallImg('.visual-video', 'floor1-video-btn');

        $('.roll-list').find('li').eq(0).find('img').attr('src', './images/floor1-scroll-s-0.png');
        $('.roll-list').find('li').eq(1).find('img').attr('src', './images/floor1-scroll-s-1.png');

        changeClsName('.js-animation', 'animation', 'animation-s');
        changeClsName('.js-lightBg', 'light-bg', 'light-bg-s');
        changeClsName('.js-building', 'building', 'building-s');
        changeClsName('.js-shake', 'human-roof3', 'human-roof3-s');
        changeClsName('.js-sHuman3', 'human-street3', 'human-street3-s');
        changeClsName('.js-sHuman4', 'human-street4', 'human-street4-s');
        changeClsName('.js-bike', 'human-street5', 'human-street5-s');

        light.setEndX(-2870);
        light.setStep(574);

        handShaker.setEndX(-28);
        handShaker.setStep(28);

        woman.setEndX(-69);
        woman.setStep(23);

        hatMan.setEndX(-87);
        hatMan.setStep(29);

        bike.setEndX(-80);
        bike.setStep(80);

    } else if (winH > 781 && winH <= 1000) {

        $('.wrap').removeClass('small');

        // 2층
        changeDiscMdImg('.floor2__extend .disc');
        changeDiscMdImg('.floor3__extend .disc');
        changeDiscMdImg('.floor4__extend .disc');

        // linker

        $('.floor1 .linker').find('img').attr('src', './images/btn-up.png');
        $('.floor2 .linker, .floor3 .linker').find('img').attr('src', './images/btn-up_sec.png');


        changeClsName('.js-animation', 'animation-s', 'animation');
        changeClsName('.js-lightBg', 'light-bg-s', 'light-bg');
        changeClsName('.js-building', 'building-s', 'building');
        changeClsName('.js-shake', 'human-roof3-s', 'human-roof3');
        changeClsName('.js-sHuman3', 'human-street3-s', 'human-street3');
        changeClsName('.js-sHuman4', 'human-street4-s', 'human-street4');
        changeClsName('.js-bike', 'human-street5-s', 'human-street5');

        $('.txt-area__tit').attr('src', './images/floor1-tit.png');
        $('.visual-video').find('img').attr('src', './images/floor1-video-btn.png');

        $('.roll-list').find('li').eq(0).find('img').attr('src', './images/floor1-scroll-0.png');
        $('.roll-list').find('li').eq(1).find('img').attr('src', './images/floor1-scroll-1.png');

        light.setEndX(-4100);
        light.setStep(820);

        handShaker.setEndX(-40);
        handShaker.setStep(40);

        woman.setEndX(-105);
        woman.setStep(35);

        hatMan.setEndX(-129);
        hatMan.setStep(43);

        bike.setEndX(-120);
        bike.setStep(120);

    } else if (winH > 1001) {
        $('.floor1__txt-area').css('padding-top', responseHeight(winH, defaultH, 80) + 'px');
        $('.floor2__extend, .floor3__extend, .floor4__extend').css('margin-top', responseHeight(winH, defaultH, 140) + 'px');
    }

}

// 모션 프로토 타입
function Motion(obj) {
    this.thing = obj.thing;
    this.endX = obj.endX;
    this.currentX = 0;
    this.step = obj.step;
    this.clearTime = null;
    this.time = 300;
    this.posX = obj.posX;
    this.mTime = obj.mTime;
    this.startPoint = obj.startPoint;
}
Motion.prototype.init = function() {
    this.currentX += this.step;

    if (this.currentX <= this.endX) {
        this.currentX = this.endX;
        this.step *= -1;
    } else if (this.currentX >= 0) {
        this.currentX = 0;
        this.step *= -1;
    }
    // console.log(this.thing);
    $(this.thing).css('backgroundPosition', this.currentX + 'px 0');
};

Motion.prototype.standMotion = function() {
    var obj = this;

    this.init();

    clearTime = setTimeout(function() {
        obj.standMotion();
    }, obj.time);
};

Motion.prototype.moveX = function() {
    var obj = this;
    $(this.thing).animate({
        left: obj.posX + 'px'
    }, obj.mTime, function() {
        $(obj.thing).hide();
        clearTimeout(obj.clearTime);
        // standMotion();
        $(obj.thing).css('left', obj.startPoint + 'px').show();
    });

    setTimeout(function() {
        obj.moveX();
    }, obj.mTime);
};

Motion.prototype.setStep = function(step) {
    this.step = step;
};
Motion.prototype.setEndX = function(end) {
    this.endX = end;
}

var lightProp = {
    thing: '.js-lightBg',
    endX: -4100,
    step: 820,
    posX: -350,
    mTime: 25000,
    startPoint: 200
};

var handShakerProp = {
    thing: '.js-shake',
    endX: -40,
    step: 40,
    posX: -350,
    mTime: 25000,
    startPoint: 200
};

var womanProp = {
    thing: '.js-sHuman3',
    endX: -105,
    step: 35,
    posX: -350,
    mTime: 25000,
    startPoint: 200
};

var hatManProp = {
    thing: '.js-sHuman4',
    endX: -129,
    step: 43,
    posX: -150,
    mTime: 25000,
    startPoint: 500
};

var bikeProp = {
    thing: '.js-bike',
    endX: -120,
    step: 120,
    posX: 640,
    mTime: 13000,
    startPoint: -300
};

// 밤낮 변경
var dayAndNight = {
    wrap: $('.floor1'),
    bgDate: $('.day-date'),
    bgNight: $('.day-night'),

    init: function() {

        var bgDate = this.bgDate;
        var bgNight = this.bgNight;
        var checkCycle = this.wrap.data('check');
        var obj = this;
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
        setTimeout(function() {
            obj.init();
            // dayAndNight.init();
        }, 10000);
    }
};


// 모션 이미지들
var light = new Motion(lightProp);
var handShaker = new Motion(handShakerProp);
var woman = new Motion(womanProp);
var hatMan = new Motion(hatManProp);
var bike = new Motion(bikeProp);

light.standMotion();
handShaker.standMotion();

woman.standMotion();
woman.moveX();

hatMan.standMotion();
hatMan.moveX();

bike.standMotion();
bike.moveX();

dayAndNight.init();

function gotoLocAni(hash) {
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    });
}

var Site = Site || {};

Site.load = function() {
    responseLoc();
    // 1초 뒤에 맨 아래로 이동
    setTimeout(function() {
        gotoLocAni('.floor1');

        // nav 클릭시 해당 섹션으로 이동
        Site.nav.controllNv();

        // 위로 이동버튼
        Site.linker.gotoTop();

    }, 300);
};

// navigation
Site.nav = (function() {
    var $target = $('.lnb-btn');
    var lHash = location.hash;

    return {
        controllNv: function() {
            $target.on({
                click: function(e) {
                    e.preventDefault();
                    var myHash = this.hash;
                    gotoLocAni(myHash);
                    // console.log(lHash);
                },
                mouseenter: function() {
                    if (lHash != '#4thpage') {
                        // console.log(hash);
                        $(this).next().stop().fadeIn();
                    }
                },
                mouseleave: function() {
                    if (lHash != '#4thpage') {
                        // console.log(hash);
                        $(this).next().hide();
                    }
                }
            });
        }
    }
}());

// 상단 이동 버튼
Site.linker = (function() {
    var $target = $('.linker');
    return {
        gotoTop: function() {
            $target.on('click', function(e) {
                e.preventDefault();
                var hash = $(this).attr('href');
                gotoLocAni(hash);
            });
        }
    }
}());

window.addEventListener('load', Site.load, false);

window.addEventListener('resize', responseLoc, false);

window.addEventListener('scroll', function() {
    var hash = location.hash;

    // 현재 페이지가 맨 아래 페이지가 아니면 lnb on 제거 및 층이름 변경
    if (hash != '#4thpage') {
        $('.lnb-txt').hide();
        $('.lnb-item').removeClass('on');

    }
}, false);
