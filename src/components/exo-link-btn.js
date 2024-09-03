class ExoLinkBtn extends HTMLElement {
  connectedCallback() {
    const title = this.innerText;
    const isLight = this.hasAttribute('light');

    this.innerHTML = /*html*/ `
    <a href="${this.getAttribute('href')}">
      <exo-btn-angled ${isLight ? "light" : "" }>${title}</exo-btn-angled>
    </a>
    `
  }
}
customElements.define('exo-link-btn', ExoLinkBtn);