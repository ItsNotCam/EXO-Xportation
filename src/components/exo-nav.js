import $ from "jquery";

class Nav extends HTMLElement {
  connectedCallback() {
    const path = window.location.pathname;

    const hasBG = this.hasAttribute("blur-color");
    const blurColor = hasBG ? this.getAttribute("blur-color") : "";
    const bgGradient = hasBG ? /*html*/`
      <div style="background: linear-gradient(to bottom, ${blurColor} 0%, #FFFFFF 100%);" class="nav-bg-gradient fixed top-0 h-24 w-full bg-blend-multiply mix-blend-multiply z-10 pointer-events-none"></div>
    ` : "";

    this.innerHTML = /*html*/ `
    ${bgGradient}
    <nav class="navbar fixed w-full flex flex-col gap-4 items-center justify-center py-9 z-50" data-expanded="false">
      <a href="/" class="logo cch fixed left-4 aldrich text-custom-light-100 text-3xl">EXO</a>
      <ul id="nav-main" class="nav-links relative flex justify-center m-0 p-0 z-10" data-expanded="false">
        <li class="mr-8">
          <a href="index.html" class="nav-link cch" data-active='${path.endsWith("/") || path.endsWith("/index.html") ? "true" : "false" }'>HOME</a>
        </li>
        <li class="mr-8">
          <a href="mission.html" class="nav-link cch" data-active='${path.endsWith("/mission.html") ? "true" : "false" }'>MISSION</a>
        </li>
        <li class="mr-8">
          <a href="flights.html" class="nav-link cch" data-active='${path.endsWith("/flights.html") ? "true" : "false" }'>FLIGHTS</a>
        </li>
        <li class="mr-8">
          <a href="book.html" class="nav-link cch" data-active='${path.endsWith("/destinations.html") ? "true" : "false" }'>DESTINATIONS</a>
        </li>
        <li class="nav-socials hidden flex-row gap-4 justify-end items-center mt-auto mb-4 border-none">
          <a class="cch group" href="https://www.figma.com/design/wM1QwepxhQEqXILXFCVqTv/IT-331-Project-1?node-id=0-1&t=lRgPOmWjdUkPz3k1-1" target="_blank">
            <svg class="transition-transform duration-150 fill-[#E0E0E0] group-hover:fill-white group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 42 62" fill="none">
              <path d="M1 11C1 5.47715 5.47715 1 11 1H21V21H11C5.47715 21 1 16.5228 1 11V11Z" stroke="#E0E0E0" stroke-width="4" fill="none" />
              <path d="M41 11C41 5.47715 36.5228 1 31 1H21V21H31C36.5228 21 41 16.5228 41 11V11Z" stroke="#E0E0E0" stroke-width="4" fill="none" />
              <path d="M41 31C41 25.4772 36.5228 21 31 21V21C25.4772 21 21 25.4772 21 31V31C21 36.5228 25.4772 41 31 41V41C36.5228 41 41 36.5228 41 31V31Z" stroke="#E0E0E0" stroke-width="4" fill="none" />
              <path d="M1 31C1 25.4772 5.47715 21 11 21H21V41H11C5.47715 41 1 36.5228 1 31V31Z" stroke="#E0E0E0" stroke-width="4" fill="none" />
              <path d="M1 51C1 45.4772 5.47715 41 11 41H21V51C21 56.5228 16.5228 61 11 61V61C5.47715 61 1 56.5228 1 51V51Z" stroke="#E0E0E0" stroke-width="4" fill="none" />
            </svg>
          </a>
          <!-- <a target="_blank" href="https://icons8.com/icon/12599/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>  -->
          <a class="cch group" href="https://github.com/ItsNotCam/EXO-Xportation" target="_blank">
            <svg class="transition-transform duration-150 fill-[#E0E0E0] group-hover:fill-white group-hover:scale-110" width="35px" height="35px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50">
              <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25C2,35.164,8.63,43.804,17.791,46.836z" />
            </svg>
          </a>
        </li>
      </ul>
      <button id="nav-dropdown-button" class="nav-dropdown-btn cch absolute hidden top-4 right-4 z-10">
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
      </button>
    </nav>
    `;

    const mainNav = $("#nav-main");
    $(document).on("click", (e) => {
      if (e.target.closest("#nav-dropdown-button") !== null) {
        mainNav.attr("data-expanded", !(mainNav.attr("data-expanded") === "true"));
        return;
      }

      if (e.target.closest("#nav-main") === null && mainNav.attr("data-expanded") === "true") {
        mainNav.attr("data-expanded", false);
        $(`#nav-dropdown-button #reverse`).each(function() {
          this.beginElement();
        });
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 960 && mainNav.attr("data-expanded") === "true") {
        mainNav.attr("data-expanded", false);
        $("#nav-dropdown-button #reverse").each(function() {
          this.beginElement();
        });
      }
    });
  }
}

customElements.define('exo-nav', Nav);