var numSquares = 6;
var colors;
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var title = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

resetButton.addEventListener("click", function () {
    reset();
});

function init() {
    setUpModeButtons();
    setUpSquare();
    reset();
}

function setUpSquare() {
    for (var i = 0; i < squares.length; i++) {
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

function setUpModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });

    }
}

function reset() {
    title.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
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
