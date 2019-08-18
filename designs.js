//Create constants for submission button & color picker
const submitButton = document.querySelectorAll('input')[2];
const colorPicker = document.querySelector('#colorPicker');

//EVENT LISTENERS
//Adds an event listener to the color picker. Uses colorchoice function
colorPicker.addEventListener("change", colorChoice, false);

//Adds an event listener to the submit button.
//When triggered it creates a grid, attaches listener to each cell in grid
submitButton.addEventListener('click', function(event){
  event.preventDefault();
  makeGrid();
  attachListener();
}
  ,true);

//FUNCTIONS****

//function logs the choice of color when the user accesses
//the color picker. To be utilised in the creation of an event listener
function colorChoice(event) {
  chosenColor = '';
  chosenColor = event.target.value;
}

//function creates the grid based on the variables put in Grid Height
// and Grid Weight
function makeGrid() {
  //constants setup for rows, columns and pixel table
  const rows = document.getElementById('inputHeight').value;
  const cols = document.getElementById('inputWidth').value;
  const pixelTable = document.querySelector('#pixelCanvas');

  pixelTable.innerHTML = '';
  pixelData = '';

  //for loop creates string neccessary to create the table.
  for(var i=0;i<rows;i++){
  	pixelData += '<tr>';
    for(var j=0;j<cols;j++){
  	    pixelData += '<td></td>';
    }
  	pixelData+= '</tr>';
    };
    pixelTable.innerHTML = pixelData;
  }

//Function attaches a listener to each cell in the table
function attachListener(){

    const cells = document.querySelectorAll('td');
    colorCell = '';
    for (var i = 0; i < cells.length; i++) {
      cells[i].addEventListener('click', function (event) {
      const colorCell = chosenColor;
      event.target.style.backgroundColor = colorCell;
      });
    }
}
