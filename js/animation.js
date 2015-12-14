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
var light = new Motion('.js-lightBg-s', -2870, 574);
var handShaker = new Motion('.js-shake', -28, 28)
var woman = new Motion('.js-sHuman3', -56, 28);
var hatMan = new Motion('.js-sHuman4', -87, 29);
var bike = new Motion('.js-bike', -80, 80);


function standMotion() {
	light.init();
	handShaker.init();
	woman.init();
	hatMan.init();
	bike.init();
	clearStand = setTimeout(standMotion, 300);
}

standMotion();