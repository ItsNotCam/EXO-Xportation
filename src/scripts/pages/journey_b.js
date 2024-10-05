import '../../styles/pages/journey.css'
import '../../styles/pages/journey_b.css'
import $ from 'jquery';


let journeyInfoIndex = 0;
$(function() {
	const containers = $(".exo-journey-info-item-container");
	containers.each(function() {
		const journeyInfoItems = $(this).find("exo-journey-info-item");
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
})