class ExoLinkBtn extends HTMLElement {
  connectedCallback() {
    const title = this.innerText;
    const isLight = this.hasAttribute('light') ? "true" : "false";

    this.innerHTML = /*html*/ `
    <a href="${this.getAttribute('href')}">
      <exo-btn light="${isLight}">${title}</exo-btn>
    </a>
    `
  }
}
customElements.define('exo-link-btn', ExoLinkBtn);