import '../../styles/styles';

class ExoLaunchHero extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({
      mode: 'open'
    });

    const subtitle = document.createElement("slot");
    subtitle.name = "subtitle";

    const rocketSlot = document.createElement("slot");
    rocketSlot.name = "title";

    const locationFromSlot = document.createElement("slot");
    locationFromSlot.name = "from";

    const locationToSlot = document.createElement("slot");
    locationToSlot.name = "to";

    shadow.appendChild(subtitle);
    shadow.appendChild(rocketSlot);
    shadow.appendChild(locationFromSlot);
    shadow.appendChild(locationToSlot);
  }

  connectedCallback() {
    const link = this.getAttribute('data-link');

    const alignment = this.getAttribute('data-align');
    let textAlign = "";
    let btnAlign = "";
    switch (alignment) {
      case "left":
        textAlign = "text-left";
        btnAlign = "mr-auto";
        break;
      case "right":
        textAlign = "text-right";
        btnAlign = "ml-auto";
        break;
      default:
        textAlign = "text-center";
        btnAlign = "";
        break
    }

    const subtitle = this.shadowRoot.querySelector('slot[name="subtitle"]').assignedNodes()[0];
    const rocketName = this.shadowRoot.querySelector('slot[name="title"]').assignedNodes()[0];
    const lfEl = this.shadowRoot.querySelector('slot[name="from"]').assignedNodes()[0];
    const leEl = this.shadowRoot.querySelector('slot[name="to"]').assignedNodes()[0];

    const locationFromCountry = lfEl.attributes.getNamedItem("loc").nodeValue;
    const locationFromName = lfEl.innerText;

    const locationToCountry = leEl.attributes.getNamedItem("loc").nodeValue;
    const locationToName = leEl.innerText;

    this.shadowRoot.innerHTML = /*html*/ `
    <link rel="stylesheet" href="styles.css">
    <div class="flex flex-col gap-2 ${textAlign}">
      <span>
        <h2 class="text-lg text-custom-light-200 drop-shadow-custom-sm slide-fade-in delay-0">
          ${subtitle.innerText}
        </h2>
        <h2 class="text-3xl font-medium tracking-tight drop-shadow-custom-sm slide-fade-in delay-1">
          ${rocketName.innerText}
        </h2>
      </span>
      <h1 class="launch-route slide-fade-in delay-2">
        <span data-location="${locationFromCountry}">${locationFromName}</span>
        <svg class="inline mb-4" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
          <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
        </svg>
        <span data-location="${locationToCountry}">${locationToName}</span>
      </h1>
      <a href="${link}" class="btn text-custom-dark-500 duration-500 slide-fade-in delay-3 ${btnAlign}" data-title="DETAILS" style="width: 8rem; height: 3rem;"></a>
    </div>
    `
  }
}

customElements.define('exo-launch-hero', ExoLaunchHero);