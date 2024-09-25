import './scripted_imports';
import Lenis from 'lenis';
import $ from 'jquery';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// remove the index html from the url because of how relative pathing works with links lol
if (window.location.pathname.endsWith("index.html")) {
  window.history.replaceState({}, document.title, window.location.pathname.replace("index.html", ""));
}

/*
const exoName = localStorage.getItem("exo-name");
console.log(exoName);
if(exoName !== null) {
	console.log(`Welcome ${exoName}`)
} else {
	let name = ""

	console.log("Exo name is null");
	const centeredDiv = $("<div>", {
		class: `
			fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
			p-4 w-screen h-screen
			bg-white/1 backdrop-blur-sm text-center 
			z-[1000]
			grid place-items-center
		`,
	})

	const textField = $("<input>", {
		id: "exo-name-input",
		type: "text",
		placeholder: "John Doe",
		class: "p-4 my-auto text-exo-dark-500"
	})

	textField.on("input", function() {
		name = $(this).val();
	});

	const submitButton = $("<button>", {
		id: "exo-name-submit",
		text: "Submit",
		class: "p-4 my-auto text-exo-dark-500"
	});

	submitButton.on("click", function() {
		if (name.trim() !== "") {
			localStorage.setItem("exo-name", name);
			centeredDiv.remove();
		} else {
			alert("Please enter a valid name.");
		}
	});


	$("<p>", {
		text: "Enter your name",
		class: "text-lg text-white"
	}).appendTo(centeredDiv)

	textField.appendTo(centeredDiv);
	submitButton.appendTo(centeredDiv);
	centeredDiv.appendTo("body");
}
*/

// update the scale of the special buttons based on the window width
const updateBtnScale = (buttonElement, baseWidth) => {
  const windowWidth = window.innerWidth;
  if(windowWidth >= 1920) {
    buttonElement.style.transform = "scale(1)";
    buttonElement.style.width = `${baseWidth}px`;
    return;
  }

  const percent = Math.min(1, window.innerWidth / 2560.0);
  const value = parseFloat(lerp(0.8, 1, percent));
  buttonElement.style.transform = `scale(${value})`;

  const width = parseFloat(baseWidth * value);
  buttonElement.style.width = `${width}px`;
}

const lerp = (a, b, n) => {
  return (1 - n) * a + n * b;
}

const linkBtns = [...document.querySelectorAll('exo-link-btn')];
let rglrBtns = [...document.querySelectorAll('exo-btn')];
if(rglrBtns.length > 0) {
  rglrBtns = rglrBtns.filter((btn) => !btn.closest("exo-link-btn"));
}

const allBtns = [...linkBtns, ...rglrBtns];
if(allBtns.length > 0) {
  const baseWidth = window.getComputedStyle(allBtns[0]).width.replace("px", "");
  allBtns.forEach((btn) => updateBtnScale(btn, baseWidth));
  window.addEventListener('resize', () => {
    allBtns.forEach((btn) => updateBtnScale(btn, baseWidth));
  });
}

const startAnimation = (entries, observer) => {
  entries.forEach(entry => {
    const animation = entry.target.getAttribute("data-anim")
    entry.target.classList.toggle(animation, entry.isIntersecting);
  });
};

window.onload = function() {
  gsap.registerPlugin(ScrollTrigger);
  
  var scroll = new Lenis({
    duration: 1.25,
  })

  scroll.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    scroll.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
 
  // smooth scrolling
  // const lenis = new Lenis({
  //   duration: 2,
  //   smoothWheel: true
  // })
  // lenis.stop();
  
  // lenis.start();
  function raf(time) {
    // lenis.raf(time)
    scroll.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)  

  const observer = new IntersectionObserver(startAnimation);
  const options = { root: null, rootMargin: '0px', threshold: 1 }; 
  const elements = document.querySelectorAll('.animate-when-visible');
  elements.forEach(el => observer.observe(el, options));
}