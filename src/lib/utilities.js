export const getNodeInnerText = (shadowRoot, slotName) => {
	return shadowRoot.querySelector(`slot[name="${slotName}"]`).assignedNodes()[0].innerText;
}

export const getNodeHTML = (shadowRoot, slotName) => {
	return shadowRoot.querySelector(`slot[name="${slotName}"]`).assignedNodes().map((node) => node.innerHTML).join(" ");
}

export const getNode = (shadowRoot, slotName) => {
	return shadowRoot.querySelector(`slot[name="${slotName}"]`).assignedNodes()[0];
}