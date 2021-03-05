var secret = Math.floor(Math.random() * 10) + 1;
var answer
var guess = parseInt(answer);
var active = true;

document.getElementById("guess").addEventListener("click", beginGame)

function reloadPage() {
    window.location.reload();
}

function beginGame() {

    answer = prompt("Please guess the secret number (1-10)");

    while (active) {
        if (answer == secret) {
            alert("Correct!");
            active = false;
            reloadPage();
        } else if ((answer > secret) && (answer > 10)) {
            alert("Invalid Number");
            answer = prompt("Invalid Number. Please guess the secret number (1-10)");
        } else if ((answer < secret) && (answer < 1)) {
            alert("Invalid Number");
            answer = prompt("Invalid Number. Please guess the secret number (1-10)");
        } else if (answer > secret) {
            alert("Incorrect " + answer + " Too High!");
            answer = prompt("Please guess the secret number (1-10)");
        } else if (answer < secret) {
            alert("Incorrect " + answer + " Too Low!");
            answer = prompt("Please guess the secret number (1-10)");
        } else {
            alert("Do not use words, use the numbers between (1-10)");
            answer = prompt("Please guess the secret number (1-10)");
        }
    }
}