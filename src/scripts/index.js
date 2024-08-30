import '../styles/styles';

import './components/exo-nav';
import './components/exo-btn';
import './components/exo-link-btn';
import './components/exo-cursor';

// remove the index html from the url because of how relative pathing works with links lol
if (window.location.pathname.endsWith("index.html")) {
  window.history.replaceState({}, document.title, window.location.pathname.replace("index.html", ""));
}