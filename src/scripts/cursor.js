// Custom Cursor
const customCursor = document.querySelector('#custom-cursor');
document.addEventListener('mousemove', (e) => {
  customCursor.style.left = e.clientX + 'px';
  customCursor.style.top = e.clientY + 'px';

  const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
  if (hoveredElement != null && (hoveredElement.classList.contains('cch') || hoveredElement.closest('.cch'))) {
    customCursor.setAttribute('data-hovered', true);
  } else {
    customCursor.setAttribute('data-hovered', false);
  }
});
