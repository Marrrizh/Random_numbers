let guessInput = document.getElementById('guessInput');
let checkButton = document.getElementById('checkBtn');
let hintText = document.getElementById('hintText');

let secretNumber = Math.floor(Math.random() * 100) + 1;
console.log("Загаданное число:", secretNumber);
