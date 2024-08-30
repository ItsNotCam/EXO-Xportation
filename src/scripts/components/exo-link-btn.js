class ExoLinkBtn extends HTMLElement {
  connectedCallback() {
    const title = this.innerText;
    const isLight = this.hasAttribute('light');

    this.innerHTML = /*html*/ `
    <a href="${this.getAttribute('href')}">
      <exo-btn ${isLight ? "light" : "" }>${title}</exo-btn>
    </a>
    `
  }
}
customElements.define('exo-link-btn', ExoLinkBtn);