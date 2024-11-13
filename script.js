/* function generateRandomColor(){
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')
}

function generateNewPalette(){
        const container = document.getElementById('paletteContainer');
        container.innerHTML = '';

        for (let i = 0; i < 5; i++){
            const color = generateRandomColor();
            const colorBox = document.createElement('div');
            colorBox.className = 'color-box';
            colorBox.style.backgroundColor = color;
            colorBox.textContent = color.toUpperCase;
            container.appendChild(colorBox)
        }
}

generateNewPalette(); */