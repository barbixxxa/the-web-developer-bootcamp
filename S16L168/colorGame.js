var colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 255)",
    "rgb(125, 125, 125)",
    "rgb(0, 0, 0)"
];

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var title = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //add colors to squares
    squares[i].style.backgroundColor = colors[i];

    //click listener
    squares[i].addEventListener("click", function () {
        if (this.style.backgroundColor === pickedColor) {
            changeColors(pickedColor);
            title.style.backgroundColor = pickedColor;
            messageDisplay.textContent = "You Win!";
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });
}

function changeColors(color) {
    //change all the squares colors
    squares.forEach(element => {
        element.style.backgroundColor = color;
    });
}

function pickColor() {
    //pick a color from the colors array to be the goal
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
