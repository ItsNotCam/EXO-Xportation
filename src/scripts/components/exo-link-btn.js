class ExoLinkBtn extends HTMLElement {
  connectedCallback() {
    const title = this.innerText;
    const isLight = this.hasAttribute('light');

    this.innerHTML = /*html*/ `
    <a href="${this.getAttribute('href')}" class="flex">
      <exo-btn ${isLight ? "light" : "" } class="flex">${title}</exo-btn>
    </a>
    `
  }
}
customElements.define('exo-link-btn', ExoLinkBtn);