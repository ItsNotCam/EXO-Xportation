import $ from 'jquery';

import '../styles/styles';

import './components/exo-nav';
import './components/exo-btn-angled';
import './components/exo-link-btn';
import './components/exo-launch-hero';
import './components/exo-cursor';
import './flights';

// remove the index html from the url because of how relative pathing works with links lol
if (window.location.pathname.endsWith("index.html")) {
  window.history.replaceState({}, document.title, window.location.pathname.replace("index.html", ""));
}

// update the scale of the special buttons based on the window width
const updateBtnScale = (buttonElement, baseWidth) => {
  const windowWidth = window.innerWidth;
  if(windowWidth >= 1920) {
    buttonElement.style.transform = "scale(1)";
    buttonElement.style.width = `${baseWidth}px`;
    return;
  }

  const percent = Math.min(1, window.innerWidth / 2560.0);
  const value = parseFloat(lerp(0.8, 1, percent));
  buttonElement.style.transform = `scale(${value})`;

  const width = parseFloat(baseWidth * value);
  buttonElement.style.width = `${width}px`;
}

const lerp = (a, b, n) => {
  return (1 - n) * a + n * b;
}

const linkBtns = [...document.querySelectorAll('exo-link-btn')];
let rglrBtns = [...document.querySelectorAll('exo-btn')];
if(rglrBtns.length > 0) {
  rglrBtns = rglrBtns.filter((btn) => !btn.closest("exo-link-btn"));
}

const allBtns = [...linkBtns, ...rglrBtns];
if(allBtns.length > 0) {
  const baseWidth = window.getComputedStyle(allBtns[0]).width.replace("px", "");
  allBtns.forEach((btn) => updateBtnScale(btn, baseWidth));
  window.addEventListener('resize', () => {
    allBtns.forEach((btn) => updateBtnScale(btn, baseWidth));
  });
}

// custom height init
const sections = $('.height-init');
const windowHeight = $(window).height();
const navMainHeight = $('.navbar').height();
if (navMainHeight) {
  // sections.height(windowHeight - navMainHeight);
  // sections.height(windowHeight);
} else {
  // sections.height(windowHeight);
}