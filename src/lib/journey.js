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

let outerLeft = $(".parallax-outer-left")
let outerRight = $(".parallax-outer-right")
let inner = $(".parallax-inner")

window.addEventListener('scroll', function () {
	const yPos = window.scrollY;

  const stickyElement = document.getElementById('parallax-images');
	// stickyElement.style.position = 'sticky';
	// stickyElement.style.top = `0`;

	const scale = lerp(150, 100, easeOut(yPos))
	$("#parallax-images > *").css("transform", `scale(${scale}%)`)


	// stickyElement.style.transform = `scale(${scale}%)`;

  const unstickyPoint = 6*this.window.innerHeight;
	// stickyElement.style.transform = `translateY(${this.window.innerHeight + stickyElement.offsetHeight / 5}px)`
  // if (window.scrollY > unstickyPoint) {
  //   stickyElement.style.position = 'relative';
  //   stickyElement.style.top = `0`;
	// 	stickyElement.style.transform = `translateY(${this.window.innerHeight + stickyElement.offsetHeight / 5}px)`
  // } else {
  //   stickyElement.style.position = 'sticky';
  //   stickyElement.style.top = '0';
	// 	stickyElement.style.transform = `translateY(0px)`
  // }

	let centerTranslateY = (yPos * 0.135) - (window.innerHeight);
	let outerTranslateY = (-yPos * 0.125) + (window.innerHeight * 0.35) - 300;
	outerRight.each(function() {
		$(this).css("transform", `translateY(${outerTranslateY}px)`)
	});
	outerLeft.each(function() {
		$(this).css("transform", `translateY(${outerTranslateY}px)`)
	});
	inner.each(function() {
		$(this).css("transform", `translateY(${centerTranslateY}px)`)
	})
});





const doParallax = (element, value) => {
	$(element).css("transform", `translate3d(0,${value}px,0)`);
}

$(function() {
	const outerElementLeft = $(".parallax-outer-left")
	const outerElementRight = $(".parallax-outer-right")
	const innerElement = $(".parallax-inner")

	const tm = $(".translate-me");
	document.addEventListener("scroll", function() {
		tm.css("translateY", `-${window.scrollY}px`);
		// const value = window.scrollY*1.1 - window.innerHeight*2;
		// outerElementLeft.css("transform", `translate(0, -${value}px)`);
		// innerElement.css("transform", `translate(0, ${value/4}px)`);
		// outerElementRight.css("transform", `translate(0, -${value}px)`);
	});
})



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