class ExoBookFlightItem extends HTMLElement {
  constructor() {
    super();

    const id = this.getAttribute("data-id");
    const company = this.querySelector('[slot="company"]').innerHTML;
    const method = this.querySelector('[slot="method"]').innerHTML;
    const startTime = this.querySelector('[slot="start-time"]').innerHTML;
    const startDate = this.querySelector('[slot="start-date"]').innerHTML;
    const endTime = this.querySelector('[slot="end-time"]').innerHTML;
    const endDate = this.querySelector('[slot="end-date"]').innerHTML;
    const startLocation = this.querySelector('[slot="start-location"]').innerHTML;
    const endLocation = this.querySelector('[slot="end-location"]').innerHTML;
    const startAirport = this.querySelector('[slot="start-airport"]').innerHTML;
    const endAirport = this.querySelector('[slot="end-airport"]').innerHTML;
    const startPlanet = this.querySelector('[slot="start-planet"]').innerHTML;
    const endPlanet = this.querySelector('[slot="end-planet"]').innerHTML;
    const cost = this.querySelector('[slot="cost"]').innerHTML;
    const travellerAmount = this.querySelector('[slot="traveller-amount"]').innerHTML;
    const selected = this.hasAttribute("data-selected") && this.getAttribute("data-selected") === "true";

		const backgrounds = ["airport.webp", "alien_planet.webp", "frankfurt.webp", "green_future_city.webp", "moon_settlement.webp"];
		// const randomBackground = `url('..\/..\/public\/images\/${backgrounds[Math.floor(Math.random() * backgrounds.length)]}')`;
		// style="background-image: ${randomBackground}">

    this.innerHTML = /*html*/ `
      <div id="${id}" class="book-item-flight object-cover">
        <div class="flex justify-between items-center [&>h1]:text-2xl">
          <h1>${company}</h1>
          <h1>${method}</h1>
        </div>
        <div class="flex flex-col w-full">
          <div class="w-full">
            <span class="font-bold">${startTime}</span>
            <span>${startDate}</span>
            -
            <span class="font-bold">${endTime}</span>
            <span>${endDate}</span>
          </div>
          <div class="w-full text-xl uppercase">
            <span class="font-bold">${startLocation}</span>
            <span>${startAirport}</span>
            -
            <span class="font-bold">${endLocation}</span>
            <span>${endAirport}</span>
          </div>
          <div class="w-full">
            <span>${startPlanet}</span>
            <span>${endPlanet}</span>
          </div>
        </div>
        <div class="flex flex-row justify-between w-full mt-auto items-center">
          <button 
            class="select-flight btn h-[2.5rem] w-[7rem]" 
            data-title="SELECT"
          ></button>
          <div class="text-right">
            <p class="font-bold text-2xl">${cost}</p>
            <p>${travellerAmount}</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("exo-book-flight-item", ExoBookFlightItem);
