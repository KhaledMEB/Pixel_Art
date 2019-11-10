const grid = document.querySelector("#pixelCanvas");
const form = document.querySelector("#sizePicker");
var height = 1;
var weight = 1;
var color = "#000000";


document.getElementById("colorPicker").onchange = function(){
  color = this.value;
}

// Select size input
function SelectSize(){
  height =  Number(document.getElementById("inputHeight").value);
  weight = Number(document.getElementById("inputWidth").value);
}

function makeGrid() {
  // Your code goes here!
  if(grid.firstElementChild)
    grid.removeChild(grid.firstElementChild);
  
  var tbdy = document.createElement('tbody');
  for(var i=0; i<height; i++)
  {
    var tr = document.createElement('tr');
    for(var j=0; j<weight; j++)
    {
      var td = document.createElement('td');
      td.id = "pixelCanvastd" + i.toString() + j.toString();
      tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }
  grid.appendChild(tbdy);
}

form.addEventListener('click', function(event){
  if(event.target.type !== 'number')
  {
    event.preventDefault();
    SelectSize();
    makeGrid();
  }  
})

grid.addEventListener('click', function(e){
  document.getElementById(e.target.id).style.backgroundColor = color;
})

