// Initialize drawing display variables
const drawingDisplay = document.querySelector('.drawing-container');
const drawingCell = document.createElement('div');
let firstCell = drawingCell;
firstCell.setAttribute('id', 'drawing-cell');
firstCell.addEventListener('mousedown', (e) => {
	firstCell.style.background = 'blue';
})
drawingDisplay.appendChild(firstCell);

//Wipe original dimensions
function removeChildNodes(paren) {
	while (paren.firstChild) {
		paren.removeChild(paren.firstChild);
	} 
}

// Draw display
function drawDisplay(dim) {
	removeChildNodes(drawingDisplay);
	drawingCell.style.background = 'white';
	drawingDisplay.appendChild(drawingCell);
	drawingDisplay.style.gridTemplateColumns = `repeat(${dim}, 1fr)`;
	for (let i=0; i< (dim ** 2) - 1; i++) {
		let nextCell = drawingCell.cloneNode(true);
		nextCell.addEventListener('mousedown', (e) => {
			nextCell.style.background = 'blue';
		})
		drawingDisplay.appendChild(nextCell);
	}
}

drawDisplay(8);

//Reset display
function displayReset() {
	drawnCell = document.querySelectorAll('#drawing-cell');
	for (let cell of drawnCell) {
		cell.style.background = 'white';
	}
}

resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', () => displayReset());

//Change dimensions


