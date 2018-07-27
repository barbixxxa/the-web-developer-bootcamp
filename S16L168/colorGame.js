var colors = generateRandomColors(6);

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

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateRandomColors(max) {
    var arr = [];

    for (var i = 0; i < max; i++) {
        arr.push(randomColor());
    }

    return arr;
}

function pickColor() {
    //pick a color from the colors array to be the goal
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
