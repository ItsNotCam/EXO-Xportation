import $ from "jquery";

class ExoCursor extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<div id='custom-cursor' data-hovered="false"></div>`;

    let customCursor = $('#custom-cursor');
    if (customCursor) {
      $(document).on('mousemove', (e) => {
        customCursor.css({
          top: `${e.clientY}px`,
          left: `${e.clientX}px`
        });

        const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
        if (hoveredElement != null && (hoveredElement.classList.contains('cch') || hoveredElement.closest('.cch'))) {
          customCursor.attr('data-hovered', true);
        } else {
          customCursor.attr('data-hovered', false);
        }
      });
    }
  }
}

customElements.define('exo-cursor', ExoCursor);