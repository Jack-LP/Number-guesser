const guessInput = document.getElementById('guess-input');
const submitBtn = document.getElementById('submit-btn');
const resultDisplay = document.getElementById('result-display');

let randomNum = Math.floor(Math.random() * 100);

guessInput.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    submitBtn.click();
  }
});

submitBtn.addEventListener('click', play);

function play() {
  guessValue = guessInput.value;
  if (guessValue == 0) {
    resultDisplay.innerText = 'Please enter a number';
  } else if (guessValue > randomNum) {
    resultDisplay.innerText = 'Too high!';
  } else if (guessValue < randomNum) {
    resultDisplay.innerText = 'Too Low!';
  } else if (guessValue == randomNum) {
    resultDisplay.innerText = `Correct! It was ${randomNum}`;
  } else {
    console.warn('Incorrect input');
  }
}
