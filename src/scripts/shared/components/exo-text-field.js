import './exo-text-field.css';

class ExoTextField extends HTMLElement {
	constructor() {
		super();

		const id = this.id;
		const title = this.querySelector('[slot="title"]');
		const icon = this.querySelector('[slot="icon"]');
		const input = this.querySelector('input');

		const inputType = input.getAttribute("type");
		const inputName = input.getAttribute("name");
		const inputId = input.getAttribute("id");
		const inputPlaceholder = input.getAttribute("placeholder");
		const inputRequired = input.hasAttribute("required");

		this.innerHTML = /*html*/ `
			<div id="${id}"
				class="relative 
					py-2
					px-1
					grid grid-cols-1 grid-rows-1
					after:absolute
					after:left-0
					after:bottom-0
					after:content-['']
					after:w-full
					after:h-[1px]
					after:bg-exo-light-100
				">
				<input type="${inputType}"
					id="${inputId}" 
					name="${inputName}"
					placeholder="${inputPlaceholder}"
					${inputRequired && "required"}
					class=${icon === null ? "''" : "pl-8"}
				>
				<div class="col-start-1 col-end-2 row-start-1 row-end-2 pointer-events-none flex items-center	flex-row gap-2">
					${icon === null ? '' : /*html*/ `
					<span class="inline text-[1em]">
						${icon.innerHTML}
					</span>
					`}
					<span class="exo-text-field-placeholder">
						${title.innerHTML}
					</span>
				</div>
			</div>
		`;
	}
}

customElements.define("exo-text-field", ExoTextField);
