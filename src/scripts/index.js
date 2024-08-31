import '../styles/styles';

import './components/exo-nav';
import './components/exo-btn';
import './components/exo-link-btn';
import './components/exo-cursor';

// remove the index html from the url because of how relative pathing works with links lol
if (window.location.pathname.endsWith("index.html")) {
  window.history.replaceState({}, document.title, window.location.pathname.replace("index.html", ""));
}

const updateBtnScale = (buttonElement, baseWidth) => {
	const percent = Math.min(1, window.innerWidth / 2560.0);
	const value = parseFloat(lerp(0.7, 1, percent));
	buttonElement.style.transform = `scale(${value})`;

	const width = parseFloat(baseWidth * value);
	buttonElement.style.width = `${width}px`;
}

const lerp = (a, b, n) => {
	return (1 - n) * a + n * b;
}

const angledBtns = document.querySelectorAll('exo-link-btn');
// angledBtns = [...angledBtns, ...document.querySelectorAll('exo-btn')];

if(angledBtns.length > 0) {
	const baseWidth = window.getComputedStyle(angledBtns[0]).width.replace("px", "");
	angledBtns.forEach((btn) => updateBtnScale(btn, baseWidth));
	window.addEventListener('resize', () => {
		angledBtns.forEach((btn) => updateBtnScale(btn, baseWidth));
	});
}
