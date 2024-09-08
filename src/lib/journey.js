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

$(function() {
	document.addEventListener('scroll', function () {
		if(outerElements === undefined || container === undefined || title === undefined) {
			return;
		}

		let yPos = window.scrollY;
		console.log(yPos);

		const scale = lerp(180, 100, easeOut(yPos))
		container.css("transform", `scale(${scale}%)`);

		let centerTranslateY = (yPos * 0.135) - (window.innerHeight * 0.8);
		let outerTranslateY = (-yPos * 0.125) + (window.innerHeight * 0.35);
		outerElements.each(function() {
			$(this).css("transform", `translateY(${outerTranslateY}px)`);
		})
		innerElement.css("transform", `translateY(${centerTranslateY}px)`);

		const deg = lerp(200, 0, easeOut(yPos - 200));
		title.css("transform", `rotate3d(1,0,0,${deg}deg) scale(${scale}%)`);
		// const trans = lerp(0, 5, easeOut(yPos));
		// title.css("transform", `rotate3d(1,0,0,${deg}deg) translateY(${trans}vh) scale(${scale}%)`);
	});
})
/*
import Scrollbar from 'smooth-scrollbar';

// Initialize Smooth Scrollbar on the body element
const scrollbar = Scrollbar.init(document.querySelector('body'), {
  damping: 0.1, // Adjust the damping value for inertia effect
  thumbMinSize: 20, // Adjust the minimum size of the scrollbar thumb
});

// Optional: Add event listeners or other customizations
scrollbar.addListener((status) => {
  console.log('Scroll position:', status.offset);
});
*/