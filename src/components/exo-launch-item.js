class ExoLaunchItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });

    const container = document.createElement('div');

    const textAlign = this.getAttribute('data-align') || 'text-left';
    const link = this.getAttribute('data-link') || '#';

    const subtitle = this.querySelector('[slot="subtitle"]');
    const rocketName = this.querySelector('[slot="title"]');
    const locationFrom = this.querySelector('[slot="from"]');
    const locationTo = this.querySelector('[slot="to"]');
    const description = this.querySelector('[slot="description"]');

    let locationFromName = "'from-innerText' - FROM PORT";
    let locationFromCountry = "'from-attr(loc)' - [ WORLD / COUNTRY ]";
    let locationToName = "'to-innerText' - TO PORT";
    let locationToCountry = "'to-attr(loc)' - [ WORLD / COUNTRY ]";

    if (locationFrom) {
      locationFromName = locationFrom.innerText;
      locationFromCountry = locationFrom.getAttribute('loc');
    }
    if (locationTo) {
      locationToName = locationTo.innerText;
      locationToCountry = locationTo.getAttribute('loc');
    }

    container.innerHTML = /*html*/ `
		<link rel="stylesheet" href="styles.css">
		<div class="flex flex-col gap-2 ${textAlign} rounded-xl max-[1024px]:rounded-sm p-8 bg-fade-in anim-delay-4 bg-blend-multiply">
			<p class="text-lg text-custom-light-200 drop-shadow-custom-sm slide-fade-in  anim-delay-0">
				${subtitle ? subtitle.innerHTML : "Subtitle"}
			</p>
			<p class="text-3xl font-medium tracking-tight drop-shadow-custom-sm slide-fade-in  anim-delay-1">
				${rocketName ? rocketName.innerHTML : "Rocket Name"}
			</p>
			<div class="launch-route flex flex-row items-center justify-center gap-2 tracking-wide -mt-2 mb-1 w-max drop-shadow-custom-lg leading-none slide-fade-in  anim-delay-2">
				<h1 class="launch-route__location" data-location="${locationFromCountry}">${locationFromName}</h1>
				<svg class="inline mb-4" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
					<path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
				</svg>
				<h1 class="launch-route__location" data-location="${locationToCountry}">${locationToName}</h1>
			</div>
			<p class="mb-2 w-full slide-fade-in  anim-delay-3">
				${description ? description.innerHTML : "Description"}
			</p>
			<a href="${link}" class="btn slide-fade-in anim-delay-4 ${textAlign} tracking-snug font-bold text-sm" data-title="MORE" style="width: 10rem; height: 3.5rem;"></a>
		</div>
		`;

    this.shadowRoot.appendChild(container);
  }
}

// Define the custom element
customElements.define('exo-launch-item', ExoLaunchItem);