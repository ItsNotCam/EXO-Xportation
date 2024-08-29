// Custom Cursor
const customCursor = document.querySelector('#custom-cursor');
const spacemanImage = document.querySelector('.spaceman-img');
document.addEventListener('mousemove', (e) => {
	customCursor.style.left = e.clientX + 'px';
	customCursor.style.top = e.clientY + 'px';

	const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
	if (hoveredElement != null && (hoveredElement.classList.contains('cch') || hoveredElement.closest('.cch'))) {
		customCursor.setAttribute('data-hovered', true);
	} else {
		customCursor.setAttribute('data-hovered', false);
	}

	const windowWidth = window.innerWidth;
	const windowHeight = window.innerHeight;

	const targetX = (windowWidth - 0.0001 * windowWidth) * (e.clientX / windowWidth);
	const targetY = (windowHeight - 0.0001 * windowHeight) * (e.clientY / windowHeight);

	spacemanImage.style.left = targetX + 'px';
	spacemanImage.style.top = targetY + 'px';
	
	// `translate(${targetX}px, ${targetY}px)`;
});

// SVG Button Hover Animation
const svgButtons = document.querySelectorAll('.angled-btn');
svgButtons.forEach((svgButton, index) => {
	svgButton.innerHTML = `
		<svg xmlns="http://www.w3.org/2000/svg" width="200" height="49" viewBox="0 0 203 49" fill="transparent">
			<defs>
				<clipPath id="hover-clip-${index}">
					<rect x="0" y="100%" width="100%" height="100%" fill="orange">
						<animate attributeName="y" from="100%" to="0" dur="0.65s" fill="freeze" id="mouseenter" keyTimes="0; 1" 
						keySplines="0.19 1 0.22 1" 
						calcMode="spline"/>
						<animate attributeName="y" from="0" to="-100%" dur="0.65s" fill="freeze" id="mouseleave" keyTimes="0; 1" 
						keySplines="0.19 1 0.22 1" 
						calcMode="spline"/>
					</rect>
				</clipPath>
			</defs>
			<g filter="url(#filter0_b_52_3)">
				<path d="M1 48V11.9399L12.389 1.5H202V38.0721L191.599 48H1Z" fill="none"  stroke="white" stroke-width="1.5" />
				<path d="M1 48V11.9399L12.389 1.5H202V38.0721L191.599 48H1Z" fill="white" stroke="none" id="hover-anim" clip-path="url(#hover-clip-${index})"/>
			</g>
		</svg>
	`;

	// svgButton.querySelector('#hover-clip').id = `hover-clip-${index}`;
	// svgButton.querySelector('#hover-anim').setAttribute('clip-path', `url(#hover-clip-${index})`);

	svgButton.addEventListener('mouseenter', () => {
		svgButton.querySelector('#mouseenter').beginElement();
	});
	svgButton.addEventListener('mouseleave', () => {
		svgButton.querySelector('#mouseleave').beginElement();
	});
});