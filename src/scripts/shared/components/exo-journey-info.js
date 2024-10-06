class ExoJourneyInfoItem extends HTMLElement {
  constructor() {
    super();

    const reverse = this.hasAttribute("reverse");

    const title = this.querySelector('[slot="title"]').innerHTML;
    const description = this.querySelector('[slot="description"]').innerHTML;
    const img = this.querySelector('[slot="img"]');
    const header = this.querySelector('[slot="header"]').innerHTML;
    const footer = this.querySelector('[slot="footer"]');

    const index = this.getAttribute("data-index");
    const selected = this.getAttribute("data-selected") === "true";

    this.className = "absolute top-0 left-0 w-full h-screen";

    this.innerHTML = /* html */ `
      <div class="grid grid-cols-1 grid-rows-[auto,1fr,auto] gap-4 h-full ">
        <h1 class="text-[4rem] font-bold uppercase m-8 nav:mx-auto nav:mt-8 nav:mb-0 nav:text-[2rem]">
					${header || "YOUR SPACE ...."}
				</h1>
        <div class="
          grid grid-cols-2 {grid-rows-[1fr,auto,1fr] }
          gap-x-4 ml-8 
					${reverse ? "mr-16" : "mr-8"}
          nav:m-0
          nav:gap-x-0
          nav:gap-y-8
          bg-exo-light-500/50
        ">
          <div data-anim="slide-fade-in-rev" class="
            animate-when-visible 
            grid grid-cols-[auto,1fr] gap-8 
            place-items-center 
            ${
              reverse
                ? "col-start-2 -col-end-1 row-start-1 row-end-4"
                : "col-start-1 col-end-2 row-start-1 row-end-4"
            }
						nav:row-start-3 nav:row-end-4 nav:col-end-3 nav:col-start-1
            nav:h-fit
            nav:z-[1]
            nav:w-full
            nav:gap-0
            nav:mt-auto
            nav:bg-exo-dark-500/75
            opacity-0
          ">
						<h1 id="journey-info-number-${index}" class="
							text-3xl mx-auto nav:text-2xl nav:hidden
							${reverse ? "col-start-2 -col-end-1" : ""}
						">
						${index !== null ? `0${parseInt(index) + 1}` : ""}
            </h1>
            <div class="
							flex flex-col gap-2
							${reverse ? "row-start-1 -row-end-1 col-start-1 col-end-2" : ""}
              max-w-[42rem] 
              nav:w-full 
              nav:mx-auto 
              nav:col-span-2
              nav:p-8
              nav:pb-20
            ">
              <h2 class="text-2xl font-bold w-fit uppercase nav:text-xl">${title}</h2>
              <p class="text-xl w-fit nav:text-lg">${description}</p>
            </div>
          </div>
          <div class="
            journey-nav-js
						col-start-1 col-end-2 row-start-3 row-end-4 
            flex flex-row gap-3 justify-center items-center 
            transition-colors duration-200
            justify-self-start mt-auto mx-auto
            nav:col-start-1 nav:-col-end-1
            z-[1] nav:w-full
          "></div>
          <img id="journey-info-img-${index}" 
            alt="${img.getAttribute("alt")}"
            data-anim="slide-fade-in-rev" 
            class="
              anim-delay-2 
              opacity-0 
              place-self-center
              max-w-full h-5/6 object-cover object-center
							${
                reverse
                  ? `
              	col-start-1 col-end-2
								row-start-1 row-end-4
							`
                  : `
								row-start-1 row-end-4
              	col-start-2 -col-end-1
							`
              }
              nav:row-start-1 nav:row-end-4
              nav:z-0 nav:h-full
              nav:col-start-1 nav:-col-end-1
              shadow-md 
              animate-when-visible" src="${img.getAttribute("src")}
            ">
        </div>
				${footer !== null ? /*html */ `
        <div id="journey-info-index-${index}" class="
          relative text-[4rem] font-bold uppercase ml-auto mr-8 mb-8 mt-auto
          flex flex-row
          nav:mx-auto
          nav:text-[2rem]
        ">
        <span>YOUR</span>
				<span class="mx-[0.2em] slide-fade-in-rev">
					${footer.innerHTML || "STUFF"}  ....
				</span>
        </div>
				` : ""}
      </div>
    `;
  }
}

customElements.define("exo-journey-info-item", ExoJourneyInfoItem);
