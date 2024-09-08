import $ from 'jquery';

let outerElements = $('.outer-images');
let innerElement = $('.inner-images');
let container = $(".parallax-images")
let title = $(".parallax-title")

const lerp = (start, end, t) => {
	return start * (1 - t) + end * t;
}

const easeOut = (yPos) => {
	const ease = (val) => 1 - Math.pow(1 - val, 2);
	let progress = yPos / window.innerHeight * 0.25;
	return progress <= 1 ? ease(progress) : 1;
}

window.addEventListener('scroll', function () {
	if(outerElements === undefined || container === undefined || title === undefined) {
		return;
	}

	let yPos = window.scrollY;

	const scale = lerp(180, 100, easeOut(yPos))
	container.css("transform", `scale(${scale}%)`);

	let centerTranslateY = (yPos * 0.135) - (window.innerHeight * 0.8);
	let outerTranslateY = (-yPos * 0.125) + (window.innerHeight * 0.35);
	outerElements.each(function() {
		$(this).css("transform", `translateY(${outerTranslateY}px)`);
	})
	innerElement.css("transform", `translateY(${centerTranslateY}px)`);

	const deg = lerp(200, 0, easeOut(yPos - 200));
	const trans = lerp(0, 5, easeOut(yPos));
	title.css("transform", `rotate3d(1,0,0,${deg}deg) scale(${scale}%)`);
	// title.css("transform", `rotate3d(1,0,0,${deg}deg) translateY(${trans}vh) scale(${scale}%)`);
});