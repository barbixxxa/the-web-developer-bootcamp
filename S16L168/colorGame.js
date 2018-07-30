var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var title = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var iziButton = document.getElementById("izi");
var hardButton = document.getElementById("hard");

colorDisplay.textContent = pickedColor;

changeSquaresColors();

resetButton.addEventListener("click", function () {
    reset(numSquares);
});
iziButton.addEventListener("click", function () {
    iziButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquares = 3;
    reset(numSquares);
    for (let i = 3; i < squares.length; i++) {
        squares[i].style.display = "none";
    }
});
hardButton.addEventListener("click", function () {
    iziButton.classList.remove("selected");
    hardButton.classList.add("selected");
    for (let i = 3; i < squares.length; i++) {
        squares[i].style.display = "block";
    }
    numSquares = 6;
    reset(numSquares);
});

function changeSquaresColors() {
    for (var i = 0; i < squares.length; i++) {
        //add colors to squares
        squares[i].style.backgroundColor = colors[i];

        //click listener
        squares[i].addEventListener("click", function () {
            if (this.style.backgroundColor === pickedColor) {
                changeColors(pickedColor);
                title.style.backgroundColor = pickedColor;
                messageDisplay.textContent = "You Win!";
                resetButton.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
}

function reset(num) {
    title.style.backgroundColor = "#232323";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    colors = generateRandomColors(num);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    changeSquaresColors();
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
