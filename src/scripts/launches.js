import $ from 'jquery'

const TRANSITION_DURATION_MS = 750;

const imgNext = $('#img-next');
const imgBack = $('#img-back');
const carouselControls = $('#carousel-controls');
const imgSelectorChildren = $('#img-selectors > *');
const images = $('#exo-launches').children();

let timeout = null;

images.each(function() {
	$(this).css("transition", `transform ease-in-out ${TRANSITION_DURATION_MS}ms`);
});

let curSelectedImg = 0;
function setSelectedImg(index) {
	if(index === curSelectedImg) {
		return;
	}

	carouselControls.css({
		"pointer-events": "none",
		"opacity": "0.5"
	});

	images.each(function(i) {
		const matrix = $(this).css("transform").replace(/[^0-9\-.,]/g, '').split(',');
		const currentX = parseInt(matrix[12] || matrix[4]);
		const currentXPercent = currentX / window.innerWidth * 100;

		const directionAmountPercent = (curSelectedImg-index) * 100;
		const newOffsetXPercent = currentXPercent + directionAmountPercent;

		$(this).css("transform", `translateX(${newOffsetXPercent}%)`);
		if(i !== curSelectedImg) {
			$(this).find("exo-launch-hero").css("display", "none");
		}
	});

	if(timeout) {
		clearTimeout(timeout);
	}
	
	timeout = setTimeout(() => {
		$(images[index]).find("exo-launch-hero").css("display", "block");
		carouselControls.css({
			"pointer-events": "auto",
			"opacity": "1"
		});
	}, 750);

	curSelectedImg = index;
}


const updateImgSelectors = (nextIdx) => {
	if(nextIdx === curSelectedImg) {
		return;
	}

	imgSelectorChildren.each(function() { 
		$(this).attr("data-selected", false);	
	});
	$(imgSelectorChildren[nextIdx]).attr("data-selected", true);

	imgBack.attr("data-enabled", nextIdx !== 0);
	imgNext.attr("data-enabled", nextIdx !== images.length-1);
}

imgSelectorChildren.each(function(index) {
	$(this).on('click', () => {
		if(index === curSelectedImg) {
			return;			
		}

		updateImgSelectors(index);
		setSelectedImg(index);
	});
});

imgNext.on('click', () => {
	let nextIdx = curSelectedImg+1;
	if(nextIdx > images.length-1) {
		nextIdx = 0;
	}

	updateImgSelectors(nextIdx);
	setSelectedImg(nextIdx);

	curSelectedImg = nextIdx;
});

imgBack.on('click', () => {
	let nextIdx = curSelectedImg-1;
	if(nextIdx < 0) { 
		nextIdx = images.length-1; 
	}

	updateImgSelectors(nextIdx);
	setSelectedImg(nextIdx);

	curSelectedImg = nextIdx;
});