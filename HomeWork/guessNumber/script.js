
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

// const Randomnumber = Math.floor(Math.random() * 10) + 1;
// console.log(Randomnumber);

// function sumbit() {
//   let guess = Number(document.getElementById("guessNumber").value);

//   if (!guess || guess < 1 || guess > 10) {
//     alert("Please enter a number between 1 and 10");
//     return;
//   }

//   if (guess === Randomnumber) {
//     alert("You win! You guessed the right number!");
//     location.reload();
//   } else if (guess > Randomnumber) {
//     alert("Please enter a smaller number");
//     document.getElementById("guessNumber").value = "";
//   } else {
//     alert("Please enter a greater number");
//     document.getElementById("guessNumber").value = "";
//   }
// }
