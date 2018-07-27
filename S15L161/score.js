var btnP1 = document.getElementById("p1");
var btnP2 = document.getElementById("p2");
var btnReset = document.getElementById("reset");
var sp1 = document.getElementById("sp1");
var sp2 = document.getElementById("sp2");
var valor = document.getElementById("valor");

var p1score = 0;
var p2score = 0;
var gameOver = false;
var maxScore = 7;

function reset() {
    gameOver = false;
    p1score = 0;
    p2score = 0;
    valor.value = 0;
    sp1.textContent = p1score;
    sp2.textContent = p2score;
    sp1.classList.remove("winner");
    sp2.classList.remove("winner");
}

function add(player) {
    if (!gameOver) {
        if (player == 1) {
            p1score += parseInt(valor.value);
            sp1.textContent = p1score;

            if (p1score >= maxScore) {
                gameOver = true;
                sp1.classList.add("winner");
            }
        }
        else {
            p2score += parseInt(valor.value);
            sp2.textContent = p2score;

            if (p2score >= maxScore) {
                gameOver = true;
                sp2.classList.add("winner");
            }
        }
    }
}

btnReset.addEventListener("click", reset);
btnP1.addEventListener("click", function () {
    add(1);
});
btnP2.addEventListener("click", function () {
    add(2);
});