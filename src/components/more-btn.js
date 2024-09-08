class MoreBtn extends HTMLElement {
	connectedCallback() {
		const href = this.getAttribute('href');
		this.classList = "absolute bottom-6 left-1/2 -translate-x-1/2";
		this.innerHTML = /*html*/ `
			${href 
					? /* html */ `<a href="${href}"class="grid items-center text-center cursor-pointer">` 
					: /* html */ `<div class="grid items-center text-center">`
			}
				<span class="text-xl pointer-default">${this.innerHTML || "More"}</span>
				<svg class="mx-auto -my-2 animate-learn-more-arrow" xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#e8eaed">
					<path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
				</svg>
			${href ? "</a>" : "</div>"}
		`;
	}
}

customElements.define('more-btn', MoreBtn);


