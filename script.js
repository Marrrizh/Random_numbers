let numberInput = document.getElementById('numberInput');
let checkButton = document.getElementById('checkBtn');
let hintText = document.getElementById('hintText');
let attemptsDisplay=document.getElementById('attemptsCounter');
let newGameBtn = document.getElementById('newGameBtn');

let attempts=0;


let secretNumber = Math.floor(Math.random() * 100) + 1;
console.log("Загаданное число:", secretNumber);

function checkNumber() {
    let userGuess = Number(numberInput.value); 
    attempts = attempts + 1;
  
    
    if (userGuess === secretNumber) {
        hintText.textContent = "🎉 Угадала! Поздравляю!";
          attemptsDisplay.textContent = attempts;
    } else if (userGuess > secretNumber) {
        hintText.textContent = "📉 Меньше!";
          attemptsDisplay.textContent = attempts;
    } else {
        hintText.textContent = "📈 Больше!";
          attemptsDisplay.textContent = attempts;
    }
}


function newGame(){
  
}
checkButton.addEventListener('click', checkNumber);
newGameBtn.addEventListener('click', newGame);