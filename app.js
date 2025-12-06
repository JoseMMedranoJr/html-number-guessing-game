
console.log("HELLO HUMAN!")
// Your function(s) should go here that will interact with the webpage or DOM

// Creating that rando
function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("Random number is:", randomNumber);
    return randomNumber;
}

let realnumber = generateRandomNumber();

// No refreshing
document.getElementById("guessGame").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Grab the value from the <input> element
    let userGuess = Number(document.getElementById("answerInput").value);

    // Creates a new line of each guess
    let guessParagraph = document.createElement("p");
    
    // Tells the user what they chose
    let guessText = document.createTextNode("You chose: " + userGuess);

    // add to the new line
    guessParagraph.appendChild(guessText);

    // add the new line to the guessedNumbers
    document.getElementById("numberGuess").appendChild(guessParagraph);
    let message = "";

    if (userGuess < realnumber) {
        message = "Too low homie, Guess higher!";
    } else if (userGuess > realnumber) {
        message = "Too high, you fly! Guess lower!";
    } else {
        message = "INCONCEIVABLE YOU WIN! ";
    }
    // adds message into the results
    document.getElementById("results").textContent = message;
    console.log("User entered:", userGuess);
    
    
});


