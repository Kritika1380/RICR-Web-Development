const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

function sumbit() {
  const guess = document.getElementById("guessNumber").value;

  if (!guess || guess < 1 || guess > 10) {
    result.innerText = "please enter a valid number between 1 to 10";
  }
  if (guess < randomNumber) {
    result.innerText = "OOPS! SORRY!!! TRY A LARGER NUMBER.";
  } else if (guess > randomNumber) {
    result.innerText = "OOPS! SORRY!!! TRY A SMALLER NUMBER.";
  } else {
    result.innerText = "conguraltion";
  }
  document.getElementById("guessNumber").value = "";
}

