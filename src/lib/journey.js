import $ from 'jquery';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

let title = $(".parallax-title")

// gsap.to(".parallax-images", {
// 	scale: 1.0,
// 	scrollTrigger: {
// 		trigger: "#parallax-live-luxury",
// 		start: "top bottom",
// 		end: "bottom top",
// 		scrub: true
// 	}
// });

gsap.set(".parallax-images", {scale: 1.4});
gsap.set(".parallax-title", {rotationX: "90deg"})
gsap.timeline({
	scrollTrigger: {
		trigger: "#trig",
		start: "top bottom",
		end: "200% top",
		scrub: true,
	}
})
.to(".parallax-images", {
	scale: 1.0
}, 0)
.to(".outer-images", {
	y: "-35%",
}, 0)
.to(".inner-images", {
	y: "15%",
}, 0);

gsap.set(".parallax-title", {
	scale: 0.9
})
gsap.timeline({
	scrollTrigger: {
		trigger: "#trig",
		start: "20% bottom",
		end: "bottom top",
		scrub: true,
	}
}).to(".parallax-title", {
	scale: 1.0,
	rotationX: "0deg"
}, 0);

// gsap.to(".parallax-title", {
// 	rotationX: 0,
// 	scrollTrigger: {
// 		trigger: "#parallax-margin-bottom",
// 		start: "top top", 
// 		end: "+=200px",
// 		scrub: true
// 	}
// });


gsap.registerPlugin(ScrollTrigger);

////////////////////////
// HERO PARALLAX GSAP //
////////////////////////


///////////////////
// HERO PARALLAX //
///////////////////
const heroContainer = document.querySelector("#parallax-container");
const heroParallaxFg = document.querySelector("#parallax-fg");
const heroParallaxMg = document.querySelector("#parallax-mg");
const heroParallaxSpacer = document.querySelector("#parallax-spacer");
const heroParallaxText = document.querySelector("#parallax-text");
// const heroContainer = $("#parallax-container");
// const heroParallaxFg = $("#parallax-fg");
// const heroParallaxMg = $("#parallax-mg");
// const heroParallaxBg = $("#parallax-bg");
// const heroParallaxSpacer = $("#parallax-spacer");
// const heroParallaxText = $("#parallax-text");

let visible = true;
const updateParallax = () => {
	if(visible === true && window.scrollY > window.innerHeight * 1.25) {
		visible = false;
		// heroContainer.css("display", "none");
		heroContainer.display = "none";
		return;
	} else if(!visible) {
		visible = true;
		heroContainer.display = "grid";
		// heroContainer.css("display", "grid");
	}

	const FG_MULTIPLIER = 0.4;
	const BG_MULTIPLIER = 0.1;
	const MG_MULTIPLIER = 0.2;
	const CONTAINER_MULTIPLIER = 0.35;
	const TEXT_MULTIPLIER = MG_MULTIPLIER*-1;

	if(heroContainer) {
		heroParallaxFg.style.transform = `translate3d(0, -${ window.scrollY * FG_MULTIPLIER}px, 0)`;
		heroParallaxMg.style.transform = `translate3d(0, -${ window.scrollY * MG_MULTIPLIER}px, 0)`;
		// heroParallaxBg.style.transform = `translate3d(0, ${window.scrollY * BG_MULTIPLIER}px, 0)`;
		heroContainer.style.transform = `translate3d(0, -${window.scrollY * CONTAINER_MULTIPLIER}px, 0)`;
		heroParallaxText.style.transform = `translate3d(0, ${window.scrollY * TEXT_MULTIPLIER}px, 0)`;
		heroParallaxSpacer.style.height = `${window.innerHeight + (window.scrollY*CONTAINER_MULTIPLIER / 1.5)}px`;
	}
}

window.addEventListener("scroll", () => {
	requestAnimationFrame(updateParallax);
});

/*
const parallaxSpacer = document.querySelector('.parallax-spacer');
const parallaxContainer = document.querySelector('.parallax-container');
const parallaxContent = document.querySelector('.parallax-text');
const bg = document.getElementById('background');

const img_fg = parallaxContainer.children[1];
const img_bg_container = parallaxContainer.children[0];
const img_bg_img = img_bg_container.children[1];
const img_bg_text = img_bg_container.children[0];

const PARALLAX_EFFECT_SPEED = 0.5;

parallaxSpacer.style.height = '100vh';
window.addEventListener('scroll', () => {
	if(window.scrollY > window.innerHeight * 2) {
		return;
	}
	const parallaxOffset = window.scrollY * PARALLAX_EFFECT_SPEED;

	bg.style.transform = `translateY(${window.scrollY * 0.05}px)`;
	img_bg_container.style.transform = `translateY(-${window.scrollY * 0.35}px)`;
	img_fg.style.transform = `translateY(-${parallaxOffset}px)`;
	parallaxContent.style.transform = `translateY(${window.scrollY * 0.02}px)`;
	parallaxSpacer.style.height = `${window.innerHeight + parallaxOffset / 1.1}px`;
});

window.addEventListener('resize', () => {
	if(window.scrollY > window.innerHeight * 2) {
		return;
	}
	const parallaxOffset = window.scrollY*PARALLAX_EFFECT_SPEED - 2;
	parallaxSpacer.style.height = `${window.innerHeight + parallaxOffset}px`;
});
*/