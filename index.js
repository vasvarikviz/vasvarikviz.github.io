const correctAnswer = "196819881996200920102023";

function checkAnswer() {
    const input = document.getElementById("answer-input");
    const img = document.getElementById("answer-image");
    if (input.value == "196819881996200920102023") {
        img.hidden = false;
    }
}