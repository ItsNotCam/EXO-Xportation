class Nav extends HTMLElement {
  connectedCallback() {
    const path = window.location.pathname;
    this.innerHTML = /*html*/ `
    <nav class="navbar">
      <div class="nav-container">
        <a href="/" class="logo cch decoration-none text-custom-dark">
          <h1 class="aldrich text-custom-light-100 text-3xl">EXO</h1>
          <!-- <h4 class="text-custom-light-400 text-lg">TRANSPORTATION</h4> -->
        </a>
        <ul class="nav-links">
          <li>
            <a href="index.html" class="nav-link cch" data-active='${path.endsWith("/") || path.endsWith("/index.html") ? "true" : "false" }'>HOME</a>
          </li>
          <li>
            <a href="discover.html" class="nav-link cch" data-active='${path.endsWith("/discover.html") ? "true" : "false" }'>DISCOVER</a>
          </li>
          <li>
            <a href="book.html" class="nav-link cch" data-active='${path.endsWith("/book.html") ? "true" : "false" }'>BOOK A FLIGHT</a>
          </li>
          <li>
            <a href="simulation.html" class="nav-link cch" data-active='${path.endsWith("/simulation.html") ? "true" : "false" }'>SIMULATION</a>
          </li>
        </ul>
      </div>
    </nav>
    `;
  }
}

customElements.define('exo-nav', Nav);