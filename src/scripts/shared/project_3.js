import $ from 'jquery';

import { bgImgCount } from './project_2';

// get the current background image index or set it to 0
let bgImgIdx = localStorage.getItem("exo-last-rng-image") || 0;

const updateImages = () => {
	// go to the next image and reset back to 0 at the end
	bgImgIdx = (bgImgIdx + 1) % bgImgCount;

	// set the last rng image s.t. when the page loads it picks back up where it left off
	localStorage.setItem("exo-last-rng-image", bgImgIdx);

	// show / hide the images
	$(".exo-astro-bg").each(function (index) {
		// show the item and set its opacity to 100%
		// the css has a transition duration of 200 on opacity
		$(this).css({ 
			display: "block",
			opacity: index === bgImgIdx ? "100%" : "0%"
		});

		// hide the invisible elements from the dom after the opacity transition has ended
		if(index !== bgImgIdx) {
			setTimeout(() => $(this).css({ display: "none" }), 200)
		}
	});
}

const getImgRotationDelay = () => {
	const delay = localStorage.getItem("exo-image-rotation-delay");
	if(!isNaN(delay)) {
		return parseInt(delay);
	}

	return 2500;
}

const startImageRotation = (delay) => {
	// start the animation after delay
	return setInterval(() => updateImages(), delay);
}

// scripted window animation initialization
$(function() {
	let lastDelay = getImgRotationDelay();
	let interval = startImageRotation(lastDelay);

	let delay = getImgRotationDelay();
	setTimeout(() => {
		setInterval(() => {
			delay = getImgRotationDelay();
			if(lastDelay !== delay) {
				clearInterval(interval);
				interval = startImageRotation(delay);
				lastDelay = delay;
			}
		}, 200);
	}, delay);
})