import $ from 'jquery';

import { bgImgCount } from './project_2';

/********************************************************
 * This script file satsifies the requirement         	*
 * of the user altering the page content.								*
 * 																											*
 * The backgrund image on the main page will rotate			*			
 * every n milliseconds, where n can be changed					*
 * dynamically by the user.															*				
 * 																											*
 * The following code is responsible for that change.		*
 * 																											*
 * The user input field that changes this delay is only	*
 * present on the home page and can be found in the			*
 * project_2.js file. 																	*
 * 																											*
 * (sorry it is seperate, it just made	more sense			* 
 * from an architectural point of view to keep all of		* 
 * the form input logic combined)												*
*********************************************************/

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
		// the css on the element has a transition duration of 200 on opacity
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

// change the delay between background image rotation
const getImgRotationDelay = () => {
	const delay = localStorage.getItem("exo-image-rotation-delay");
	try 	{ return parseInt(delay); }
	catch { return 2500; }
}

// start the animation after delay
const startImageRotation = (delay) => setInterval(() => updateImages(), delay);

// scripted window animation initialization
$(function() {
	// get the last delay and start the image rotation using it
	let lastDelay = getImgRotationDelay();

	// start the image rotaiton and store a reference to the interval id
	let interval = startImageRotation(lastDelay);

	// now store the current image delay for future comparisons
	let curDelay = lastDelay;

	// use a timeout s.t. the image does not change instantly on page load
	setTimeout(() => {
		// every 200ms compare the current user-input image rotation delay
		// and the previous one
		setInterval(() => {
			// get the current user-inputted delay
			curDelay = getImgRotationDelay(); 

			// if the delay has changed:
			// 1. clear the existing interval (stop the current js animation)
			// 2. create a new interval with the new delay and store a reference to its id
			if(lastDelay !== curDelay) { 
				clearInterval(interval);
				interval = startImageRotation(curDelay);
				lastDelay = curDelay;
			}
		}, 200);
	}, curDelay);
})