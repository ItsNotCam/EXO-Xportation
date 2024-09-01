import $ from 'jquery'

const TRANSITION_DURATION_MS = 750;

const images = $('#exo-launches').children();
images.each(function(index) {
	$(this).css("transition", `transform ease-in-out ${TRANSITION_DURATION_MS}ms`);
});

let curSelectedImg = 0;
function setSelectedImg(index) {
	images.each(function() {
		const matrix = $(this).css("transform").replace(/[^0-9\-.,]/g, '').split(',');
		const currentX = parseInt(matrix[12] || matrix[4]);
		const currentXPercent = currentX / window.innerWidth * 100;

		const directionAmountPercent = (curSelectedImg-index) * 100;
		const newOffsetXPercent = currentXPercent + directionAmountPercent;

		$(this).css("transform", `translateX(${newOffsetXPercent}%)`);
	});

	$(images[index]).find("exo-launch-hero").css("display", "none");
	setTimeout(() => {
		$(images[index]).find("exo-launch-hero").css("display", "block");
	}, 750);

	curSelectedImg = index;
}

const imgSelectors = $('#img-selectors > *');
imgSelectors.each(function(index) {
	$(this).on('click', () => {
		if(index === curSelectedImg) {
			return;			
		}

		imgSelectors.each(function() { 
			$(this).attr("data-selected", false);	
		});
		
		$(this).attr("data-selected", true);
		setSelectedImg(index);
	});
});