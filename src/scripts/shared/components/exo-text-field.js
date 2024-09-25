const css = /*css*/ `
	.exo-text-field-placeholder {
		display: inline;
		font-size: 1em;
		margin-block: auto;
		pointer-events: none;
		transform-origin: top left;
		transition: transform 200ms, font-size 200ms, position 200ms;
	}

	exo-text-field input {
		width: 100%;
		grid-column: 1 / 2;
		grid-row: 1 / 2;
		background-color: transparent;
		border: none;
		outline: none;
	}

	exo-text-field input:focus + div > .exo-text-field-placeholder,
	exo-text-field input:not(:placeholder-shown) +  div > .exo-text-field-placeholder {
		transform: translateY(-0.85rem) scale(0.8);
	}
`

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
			<style>${css}</style>
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
