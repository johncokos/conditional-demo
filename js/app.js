let name = "john";
let isCorrect = false;
let guess = "";

while (!isCorrect) {
  guess = prompt("What is the teachers name?");
  if (guess === name) {
    isCorrect = true;
  }
}

document.write("You got it!");

let numGuesses = 4;
let numCats = 0;

for (let i = 1; i <= numGuesses; i++) {
  let catsGuess = prompt("How many cats do I have?");
  // == lets numbers and letters be checked for equality...
  // === means they must be equal and of same type (num/string)
  if (catsGuess == numCats) {
    document.write("you guessed right!");
    break;
  }
}

// Why doesn't guess show up? We got it right????
// document.write(guess);

let numPets = prompt("How many pets do I have?");
document.write("<ul>");

for (let i = 1; i <= numPets; i++) {
  document.write("<li>Pet number " + i + "</li>");
}

document.write("</ul>");