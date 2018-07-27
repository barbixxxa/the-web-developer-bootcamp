var colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 255)",
    "rgb(125, 125, 125)",
    "rgb(0, 0, 0)"
];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //add colors to squares
    squares[i].style.backgroundColor = colors[i];

    //click listener
    squares[i].addEventListener("click", function () {
        if (this.style.backgroundColor === pickedColor) {
            alert("r");
        } else {
            alert("w");
        }
    });
}
