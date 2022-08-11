/* Declare constants for DOM elements */
const controlButtons = document.getElementsByTagName('button');
const resetButton = document.getElementById('reset-btn');
//result message pop up
const resultMessage = document.getElementById('result-msg');
// user and pc selection image display
const userChoiceImage = document.getElementById('user-image');
const computerChoiceImage = document.getElementById('computer-image')
// array for getting the computer selected image based on the random number
const computerChoice = ["rock", "paper", "scissor"];
// user and pc score 
const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('computer-score')

/* Register event listener for all buttons after loading the DOM  */
document.addEventListener('DOMContentLoaded', function () {
    for (let button of controlButtons) {
        button.addEventListener('click', function () {
            let buttonType = this.getAttribute('data-type');
            if (buttonType === "reset") {
                resetGame();
            } else {
                runGame(buttonType)
            }
        })
    }
})
/**
 * Reset the game by clearing the score ,set default(empty-image) to
 * both user choice and computer choice images
 * go to the intial state of the game
 */
function resetGame() {
    //set the user and computer score to zero and respective images
    userScore.innerHTML = "0";
    computerScore.innerText = "0";
    userChoiceImage.src = `assets/images/no-image.png`;
    userChoiceImage.alt = "empty image";
    computerChoiceImage.src = `assets/images/no-image.png`;
    computerChoiceImage.alt = "empty image";
}
/**
 *This is main function which takes buttonType as a parameter
 *  this funtion start after loading the DOM
 * based on the button type continue the game 
 * @param {*} buttonType 
 */
function runGame(buttonType) {
    setUserChoiceImage(buttonType);
    generateComputerChoice();
}
/**
 * This function takes buttonType as a parameter
 * And set the image on the HTML based on the buttonType
 * @param {*} buttonType 
 */
function setUserChoiceImage(buttonType) {
    userChoiceImage.src = `assets/images/${buttonType}.png`
    userChoiceImage.alt = buttonType;
}
/**
 * This function set the image on the HTML 
 * based on the computer choice
 * @param {*} ComputerRandomChoice
 */
function setComputerChoiceImage(ComputerRandomChoice) {
    computerChoiceImage.src = `assets/images/` + computerChoice[ComputerRandomChoice] + `.png`;
    computerChoiceImage.alt = computerChoice[ComputerRandomChoice];
}
/**
 * This function generate the computer choice
 * based on the random number generate between the 0 and computer choice array length
 * 
 */
function generateComputerChoice() {
    let ComputerRandomChoice = Math.floor(Math.random() * computerChoice.length);
    setComputerChoiceImage(ComputerRandomChoice);
}