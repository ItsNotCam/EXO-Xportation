import {
  v4 as uuidv4
} from 'uuid';

class ExoBtn extends HTMLElement {
  connectedCallback() {
    const title = this.innerText;
    const isLight = this.hasAttribute('light');
    const clipUUID = uuidv4();


    this.innerHTML = /*html*/ `
    <button class="
			${isLight ? "btn-angled-light" : ""} cch 
			relative w-max
			grid items-center grid-cols-1 grid-rows-1 
			transition-colors duration-200
			text-custom-light-100
			hover:text-custom-dark-500
		">
      <svg class="pointer-events-none col-start-1 col-end-2 row-start-1 row-end-2" xmlns="http://www.w3.org/2000/svg" width="200" height="49" viewBox="0 0 203 49" fill="transparent">
        <defs>
          <clipPath id="hover-clip-${clipUUID}">
            <rect x="0" y="100%" width="100%" height="100%" fill="orange">
              <animate attributeName="y" from="100%" to="0" dur="0.65s" fill="freeze" id="mouseenter" keyTimes="0; 1" keySplines="0.19 1 0.22 1" calcMode="spline" />
              <animate attributeName="y" from="0" to="-100%" dur="0.65s" fill="freeze" id="mouseleave" keyTimes="0; 1" keySplines="0.19 1 0.22 1" calcMode="spline" />
            </rect>
          </clipPath>
        </defs>
        <g filter="url(#filter0_b_52_3)">
          <path d="M1 48V11.9399L12.389 1.5H202V38.0721L191.599 48H1Z" fill="none" stroke="white" stroke-width="1.5" />
          <path d="M1 48V11.9399L12.389 1.5H202V38.0721L191.599 48H1Z" fill="white" stroke="none" id="hover-anim" clip-path="url(#hover-clip-${clipUUID})" />
        </g>
      </svg>
			<span class="text-lg col-start-1 col-end-2 row-start-1 row-end-2">${title}</span>
    </button>
    `;

    const mouseenter = this.querySelector('#mouseenter');
    const mouseleave = this.querySelector('#mouseleave');
    this.addEventListener('mouseenter', () => mouseenter.beginElement());
    this.addEventListener('mouseleave', () => mouseleave.beginElement());
  }
}

customElements.define('exo-btn', ExoBtn);