import $ from 'jquery';
import '../../styles/pages/flights.css';

/* Page State */
const pageState = {
	imgNext: $('#img-next'),
	imgBack: $('#img-back'),
	carouselControls: $('#carousel-controls'),
	imgSelectors: $('#img-selectors > *'),
	images: $('.exo-launch'),
	curSelectedImg: 0
};

function setSelectedImg(newSelectedImg) {
	if (newSelectedImg === pageState.curSelectedImg) {
		return;
	}

	pageState.carouselControls.css("pointer-events", "none");
	pageState.images.each(function (imgIdx) {
		let curState = $(this).attr("data-state");
		if (imgIdx === newSelectedImg) {
			$(this).attr("data-state", "visible");
		} else if (curState !== "enter") {
			$(this).attr("data-state", "hidden");
		}
	});

	setTimeout(() => {
		pageState.carouselControls.css("pointer-events", "auto");
	}, 350);

	pageState.curSelectedImg = newSelectedImg;
}

/* Image selectors */
const updateImgSelectors = (nextIdx) => {
	if (nextIdx === pageState.curSelectedImg) {
		return;
	}

	pageState.imgSelectors.each(function () {
		$(this).attr("data-selected", false);
	});
	$(pageState.imgSelectors[nextIdx]).attr("data-selected", true);

	pageState.imgBack.attr("data-enabled", nextIdx !== 0);
	pageState.imgNext.attr("data-enabled", nextIdx !== pageState.images.length - 1);
}

pageState.imgSelectors.each(function (index) {
	$(this).on('click', () => {
		if (index === pageState.curSelectedImg) {
			return;
		}

		updateImgSelectors(index);
		setSelectedImg(index);
	});
});

/* Image next and back buttons */
pageState.imgNext.on('click', () => {
	let nextIdx = pageState.curSelectedImg + 1;
	if (nextIdx > pageState.images.length - 1) {
		nextIdx = 0;
	}

	updateImgSelectors(nextIdx);
	setSelectedImg(nextIdx);

	pageState.curSelectedImg = nextIdx;
});

pageState.imgBack.on('click', () => {
	let nextIdx = pageState.curSelectedImg - 1;
	if (nextIdx < 0) {
		nextIdx = pageState.images.length - 1;
	}

	updateImgSelectors(nextIdx);
	setSelectedImg(nextIdx);

	pageState.curSelectedImg = nextIdx;
});

$(function () {
	/* Details Toggles */
	for (let i = 0; i < 100; i++) {
		const launchContainerId = `#launch${i}`;
		const launchCloseId = `${launchContainerId}-close`;
		const launchDetailsId = `${launchContainerId}-more`;

		const container = document.querySelector(launchContainerId);
		if (!container) { continue; }

		const launchShadowRoot = container.shadowRoot;
		if (!launchShadowRoot) { continue; }

		const launchMoreBtn = launchShadowRoot.querySelector("button");
		const launchDetailsContainer = $(launchDetailsId);
		$(launchMoreBtn).on("click", function () {
			console.log("clicked", launchContainerId)
			launchDetailsContainer.attr("data-visible", "true");

			$(launchDetailsContainer).find('.text-type-in').each(function() {
				const height = $(this).height();
				$(this).css('height', height);

				const element = $(this);
				const text = element.text();
				element.text('');

				text.split('').forEach((char, index) => {
					setTimeout(() => {
						element.text(element.text() + char)
					}, 4 * index + 1000);
				});
			});
		});

		const launchCloseBtn = $(launchCloseId);
		$(launchCloseBtn).on("click", function () {
			console.log("clicked", launchContainerId)
			launchDetailsContainer.attr("data-visible", "false");
		});
	}
})