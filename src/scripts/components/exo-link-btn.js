class ExoLinkBtn extends HTMLElement {
  connectedCallback() {
    const title = this.innerText;
    const isLight = this.hasAttribute('light');

    this.innerHTML = /*html*/ `
    <a href="${this.getAttribute('href')}" class="flex">
      <exo-btn-angled ${isLight ? "light" : "" } class="flex">${title}</exo-btn-angled>
    </a>
    `
  }
}
customElements.define('exo-link-btn', ExoLinkBtn);