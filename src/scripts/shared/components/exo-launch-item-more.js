class ExoLaunchItemMore extends HTMLElement {
  constructor() {
    super();

    const missionName = this.querySelector('[slot="mission-name"]').innerHTML;
    const manufacturer = this.querySelector('[slot="manufacturer"]').innerHTML;
    const model = this.querySelector('[slot="ship-model"]').innerHTML;
    const startPlanet = this.querySelector('[slot="start-planet"]').innerHTML;
    const startCity = this.querySelector('[slot="start-city"]').innerHTML;
    const endPlanet = this.querySelector('[slot="end-planet"]').innerHTML;
    const endCity = this.querySelector('[slot="end-city"]').innerHTML;
    const distanceAU = this.querySelector('[slot="distance-au"]').innerHTML;
    const distanceKM = this.querySelector('[slot="distance-km"]').innerHTML;
    const durationSols = this.querySelector('[slot="duration-sols"]').innerHTML;
    const durationMonths = this.querySelector('[slot="duration-months"]').innerHTML;
    const speedC = this.querySelector('[slot="speedC"]').innerHTML;
    const speedKms = this.querySelector('[slot="speedKms"]').innerHTML;
    const energyTJ = this.querySelector('[slot="energyTJ"]').innerHTML;
    const energyPwr = this.querySelector('[slot="energyPwr"]').innerHTML;
    const description = this.querySelector('[slot="description"]').innerHTML;
    const id = this.id.replace("-more-container", "");

    this.innerHTML = /*html*/ `
    <div id="${id}-more" class="launch-details-container" data-visible="false" aria-label="details for launch ENDEAVOR">
      <div class="slide-fade-in flex flex-col gap-2 w-launch-col">
        <div class="launches-more-table-title">
          <div>
            <h2 class="text-xl">${missionName}</h2>
            <h1 class="text-4xl uppercase ddin-bold">Overview</h1>
          </div>   
          <button id="${id}-close" class="launch-close-btn">
            <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <table class="w-full">
          <tbody class="w-full font-light">
            <tr class="launch-table-row slide-fade-in anim-delay-2">
              <td class="launch-col-1">🗿</td>
              <td class="launch-col-2">SPACECRAFT</td>
              <td class="launch-col-3">${manufacturer}</td>
              <td class="launch-col-4">${model}</td>
            </tr>
            <tr class="launch-table-row slide-fade-in anim-delay-3">
              <td class="launch-col-1">🗿</td>
              <td class="launch-col-2">Start</td>
              <td class="launch-col-3">${startPlanet}</td>
              <td class="launch-col-4">${startCity}</td>
            </tr>
            <tr class="launch-table-row slide-fade-in anim-delay-4">
              <td class="launch-col-1">🗿</td>
              <td class="launch-col-2">End</td>
              <td class="launch-col-3">${endPlanet}</td>
              <td class="launch-col-4">${endCity}</td>
            </tr>
            <tr class="launch-table-row slide-fade-in anim-delay-5">
              <td class="launch-col-1">🗿</td>
              <td class="launch-col-2">Distance</td>
              <td class="launch-col-3">${distanceAU}</td>
              <td class="launch-col-4">${distanceKM}</td>
            </tr>
            <tr class="launch-table-row slide-fade-in anim-delay-6">
              <td class="launch-col-1">🗿</td>
              <td class="launch-col-2">Duration</td>
              <td class="launch-col-3">${durationSols}</td>
              <td class="launch-col-4">${durationMonths}</td>
            </tr>
            <tr class="launch-table-row slide-fade-in anim-delay-6">
              <td class="launch-col-1">🗿</td>
              <td class="launch-col-2">Cruising Speed</td>
              <td class="launch-col-3">${speedC}</td>
              <td class="launch-col-4">${speedKms}</td>
            </tr>
            <tr class="launch-table-row slide-fade-in anim-delay-7">
              <td class="launch-col-1">🗿</td>
              <td class="launch-col-2">ENERGY REQUIRED</td>
              <td class="launch-col-3">${energyTJ}</td>
              <td class="launch-col-4">${energyPwr}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="slide-fade-in anim-delay-9 w-launch-col">
        <p class="text-3xl ddin-bold">DESCRIPTION</p>
        <p class="text-type-in slide-fade-in anim-delay-9 text-exo-light-300">
          ${description}
        </p>
      </div>
    </div>`;
  }
}

customElements.define("exo-launch-item-more", ExoLaunchItemMore);
