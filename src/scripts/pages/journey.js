import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../../styles/pages/journey.css';
import $ from "jquery";


gsap.registerPlugin(ScrollTrigger);

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
.to(".outer-images", { y: "-35%" }, 0)
.to(".inner-images", { y: "15%" },  0);

gsap.set(".parallax-title", {
  scale: 0.9,
  translateY: "-50%"
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
}, 0)
.to(".parallax-images", {
  scale: 1.0
}, 0);

///////////////////
// HERO PARALLAX //
///////////////////
const heroContainer = document.querySelector("#parallax-container");
const heroParallaxFg = document.querySelector("#parallax-fg");
const heroParallaxMg = document.querySelector("#parallax-mg");
const heroParallaxSpacer = document.querySelector("#parallax-spacer");
const heroParallaxText = document.querySelector("#parallax-text");

let visible = true;
const updateParallax = () => {
  const displayCutoffPx = window.innerHeight + 300;
  if(window.scrollY >= displayCutoffPx) {
    if(visible) {
      visible = false;
      heroContainer.style.opacity = 0;
      heroContainer.style.pointerEvents = "none";
    }
    return;
  } else if(!visible && window.scrollY < displayCutoffPx) {
    visible = true;
    heroContainer.style.opacity = 1;
    heroContainer.style.pointerEvents = "auto";
  }

  const FG_MULTIPLIER = 0.4;
  const MG_MULTIPLIER = 0.2;
  const CONTAINER_MULTIPLIER = 0.35;
  const TEXT_MULTIPLIER = MG_MULTIPLIER*-1;

  heroParallaxFg.style.transform = `translate3d(0, -${ window.scrollY * FG_MULTIPLIER}px, 0)`;
  heroParallaxMg.style.transform = `translate3d(0, -${ window.scrollY * MG_MULTIPLIER}px, 0)`;
  heroContainer.style.transform = `translate3d(0, -${window.scrollY * CONTAINER_MULTIPLIER}px, 0)`;
  heroParallaxText.style.transform = `translate3d(0, ${window.scrollY * TEXT_MULTIPLIER}px, 0)`;
  heroParallaxSpacer.style.height = `${window.innerHeight + (window.scrollY*CONTAINER_MULTIPLIER / 1.5)}px`;
}

window.addEventListener("scroll", () => {
  requestAnimationFrame(updateParallax);
});
window.addEventListener("resize", () => {
  requestAnimationFrame(updateParallax);
});


let journeyInfoIndex = 0;
$(function() {
	const journeyInfoItems = $("exo-journey-info-item");
	const renderInfoItemSelectors = () => {
		journeyInfoItems.each(function(index) {
			$(this).css("display", index === journeyInfoIndex ? "block" : "none");

			const nav = $(this).find(".journey-nav-js");
			$(nav).html(
				/*html*/ `
				<ul class="exo-journey-nav-selector flex flex-row gap-3 nav:gap-4 justify-center items-center [&>*]:cursor-pointer transition-colors duration-200 nav:w-full ">
					<li class="mr-0 nav:mr-auto">
						<svg class="hover:fill-white h-[36px] w-[36px] nav:h-[50px] nav:w-[50px]" aria-label="leftward arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e8eaed">
							<path d="M480-480 664-296l-56 56-240-240 240-240 56 56-184 184Z" />
						</svg>
					</li>
					${
						journeyInfoItems.map(function(idx, _) {
							return /* html */ `
								<li class="
									selector 
									w-3 h-3 
									rounded-full 
									${idx === journeyInfoIndex ? "bg-white" : "bg-exo-light-400"} 
									hover:bg-white
									transition-colors
									duration-200
									cursor-pointer
								"></li>
							`
						}).get().join("\n")
					}
					<li class="ml-0 nav:ml-auto">
						<svg class="hover:fill-white h-[36px] w-[36px]" aria-label="rightward arrow" xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#e8eaed">
							<path d="M480-480 296-664l56-56 240 240-240 240-56-56 184-184Z" />
						</svg>
					</li>
				</ul>
			`);

		const back = nav.find("svg[aria-label='leftward arrow']");
		const next = nav.find("svg[aria-label='rightward arrow']");

		back.on("click", function() {
			journeyInfoIndex = Math.max(0, journeyInfoIndex-1);
			renderInfoItemSelectors();
		})
		next.on("click", function() {
			journeyInfoIndex = Math.min(journeyInfoItems.length-1, journeyInfoIndex+1);
			renderInfoItemSelectors();
		})
		
		const numberedSelector = $(this).find(".exo-journey-nav-selector > li.selector");
			numberedSelector.on("click", function() {
				journeyInfoIndex = numberedSelector.index(this);
				renderInfoItemSelectors();
			})
		})
	}

	renderInfoItemSelectors();
})