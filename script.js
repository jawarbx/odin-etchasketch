// Initialize drawing display variables
let singleColorSelector = document.querySelector('#single-color');
let color = 'black';
let drawDim = 8;

singleColorSelector.addEventListener('change', (e) => {
	color = singleColorSelector.value;
})
const drawingDisplay = document.querySelector('.drawing-container');
const drawingCell = document.createElement('div');
let firstCell = drawingCell;
firstCell.setAttribute('id', 'drawing-cell');
firstCell.addEventListener('mouseover', () => {
	firstCell.style.background = color;
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
	for (let i=0; i < (dim ** 2) - 1; i++) {
		let nextCell = drawingCell.cloneNode(true);
		nextCell.addEventListener('mouseover', () => {
			nextCell.style.background = color;
		})
		drawingDisplay.appendChild(nextCell);
	}
}

// Initial display
drawDisplay(drawDim);

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
dimensionSelector = document.querySelector('#dimension');
let dimensionButton = document.querySelector('#dim-button');
dimensionButton.addEventListener('click', () => {
	if(dimensionSelector.value != drawDim) {
		drawDim = dimensionSelector.value;
		drawDisplay(drawDim);
		}
	});
