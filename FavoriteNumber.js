let theFavNumber = 7; 
let guess;

while (true) {
   
       guess = parseInt(prompt("Guess my favorite number:"), 10);

           if (guess === theFavNumber) {
                   console.log("Correct! You've guessed the favorite number.");
                           break;
                               } else if (guess > theFavNumber) {
                                       console.log("Too high! Try again.");
                                           } else {
                                                   console.log("Too low! Try again.");
                                                       }
                                                       }