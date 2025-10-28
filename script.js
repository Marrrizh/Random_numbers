let numberInput = document.getElementById('numberInput');
let checkButton = document.getElementById('checkBtn');
let hintText = document.getElementById('hintText');

let secretNumber = Math.floor(Math.random() * 100) + 1;
console.log("Загаданное число:", secretNumber);

function checkNumber() {
    let userGuess = Number(numberInput.value); 
    
    if (userGuess === secretNumber) {
        hintText.textContent = "🎉 Угадала! Поздравляю!";
    } else if (userGuess > secretNumber) {
        hintText.textContent = "📉 Меньше!";
    } else {
        hintText.textContent = "📈 Больше!";
    }
}

checkButton.addEventListener('click', checkNumber);