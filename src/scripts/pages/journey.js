import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../../styles/pages/journey.css';

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