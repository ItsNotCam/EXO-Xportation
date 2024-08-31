function dropdown() {

}


class Nav extends HTMLElement {
  connectedCallback() {
    const path = window.location.pathname;
    const hamburger = /*html*/ `
    <svg width="35px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" stroke="#eee" stroke-width=".6" fill="rgba(0,0,0,0)" stroke-linecap="round" style="cursor: pointer">
      <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
        <animate dur="0.2s" attributeName="d" values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7" fill="freeze" begin="start.begin" />
        <animate dur="0.2s" attributeName="d" values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7" fill="freeze" begin="reverse.begin" />
      </path>
      <rect width="10" height="10" stroke="none">
        <animate dur="2s" id="reverse" attributeName="width" begin="click" />
      </rect>
      <rect width="10" height="10" stroke="none">
        <animate dur="0.001s" id="start" attributeName="width" values="10;0" fill="freeze" begin="click" />
        <animate dur="0.001s" attributeName="width" values="0;10" fill="freeze" begin="reverse.begin" />
      </rect>
    </svg>
    `;

    this.innerHTML = /*html*/ `
    <nav class="navbar">
      <a href="/" class="logo cch decoration-none text-custom-dark">
        <h1 class="aldrich text-custom-light-100 text-3xl">EXO</h1>
        <!-- <h4 class="text-custom-light-400 text-lg">TRANSPORTATION</h4> -->
      </a>
      <ul id="nav-main" class="nav-links" data-expanded="false">
        </li>
        <li>
          <a href="index.html" class="nav-link cch" data-active='${path.endsWith("/") || path.endsWith("/index.html") ? "true" : "false" }'>HOME</a>
        </li>
        <li>
          <a href="discover.html" class="nav-link cch" data-active='${path.endsWith("/discover.html") ? "true" : "false" }'>DISCOVER</a>
        </li>
        <li>
          <a href="book.html" class="nav-link cch" data-active='${path.endsWith("/book.html") ? "true" : "false" }'>BOOK A FLIGHT</a>
        </li>
        <li>
          <a href="simulation.html" class="nav-link cch" data-active='${path.endsWith("/simulation.html") ? "true" : "false" }'>SIMULATION</a>
        </li>
      </ul>
      <button id="nav-dropdown-button" class="dropdown-btn cch">
        ${hamburger}
      </button>
    </nav>
    `;

    const mainNav = document.getElementById("nav-main");
    const dropdownButton = this.querySelector("#nav-dropdown-button");
    dropdownButton.addEventListener("click", () => {
      const inverted = mainNav.getAttribute("data-expanded") === "true" ? "false" : "true";
      mainNav.setAttribute("data-expanded", inverted);
    });
  }

}

customElements.define('exo-nav', Nav);