/* Declare constants for DOM elements */
const controlButtons = document.getElementsByTagName('button');
//result message pop up
const resultMessage = document.getElementById('result-msg');
// user and pc selection image display
const userChoiceImage = document.getElementById('user-image');
const computerChoiceImage = document.getElementById('computer-image');
// array for getting the computer selected image based on the random number
const computerChoiceList = ["rock", "paper", "scissor"];
// user and pc score 
const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('computer-score');
/* 0--> tie, 1--> user win, 2--> computer win
    a) paper covers rocks 
    b) rock crushes scissors
    c) scissors cut paper
    row -->user choice and column --> computer choice  
*/
const winTable = [
    [0, 2, 1],
    [1, 0, 2],
    [2, 1, 0]
];
const winMessage = [
    ["Same selection", "Paper covers rocks", "Rock crushes scissors"],
    ["Paper covers rocks", "Same selection", "Scissors cut paper"],
    ["Rock crushes scissors", "Scissors cut paper", "Same selection"]
];
const result = ["It is a tie !", "You win !!!", "Computer Win !!!"];
/* Register event listener for all buttons after loading the DOM  */
document.addEventListener('DOMContentLoaded', function () {
    for (let button of controlButtons) {
        button.addEventListener('click', function () {
            let userChoice = this.getAttribute('data-type');
            if (userChoice === "reset") {
                resetGame();
            } else {
                runGame(userChoice);
            }
        });
    }
});
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
    resultMessage.innerHTML='';
}
/**
 *This is main function which takes userChoice as a parameter
 *  this funtion start after loading the DOM
 * based on the button type continue the game 
 * @param {*} userChoice 
 */
function runGame(userChoice) {
    setUserChoiceImage(userChoice); 
    let userChoiceIndex = computerChoiceList.indexOf(userChoice);
    let computerChoice = generateComputerChoice();
    setComputerChoiceImage(computerChoice);
    let resultCode =checkResult(userChoiceIndex,computerChoice);
    updateGameMessage(userChoiceIndex,computerChoice,resultCode);
    updateScore(resultCode);
}
/**
 * This function takes userChoice as a parameter
 * And set the image on the HTML based on the buttonType
 * @param {*} userChoice 
 */
function setUserChoiceImage(userChoice) {
    userChoiceImage.src = `assets/images/${userChoice}.png`;
    userChoiceImage.alt = userChoice;
}
/**
 * This function set the image on the HTML 
 * based on the computer choice
 * @param {*} ComputerChoice
 */
function setComputerChoiceImage(ComputerChoice) {
    computerChoiceImage.src = `assets/images/` + computerChoiceList[ComputerChoice] + `.png`;
    computerChoiceImage.alt = computerChoiceList[ComputerChoice];
}
/**
 * This function generate the computer choice
 * based on the random number generate between the 0 and computer choice array length
 * 
 */
function generateComputerChoice() {
    return Math.floor(Math.random() * computerChoiceList.length);
}
/**
 * checkResult accept user and computer choice paremeter 
 * verify who win the game from winTable array
 * @param {*} userChoice 
 * @param {*} computerChoice 
 */
function checkResult(userChoice,computerChoice){
    return winTable[userChoice][computerChoice];
}
/**
 * This function upadte the message to the player based on
 * the game result
 * @param {*} userChoice 
 * @param {*} computerChoice 
 * @param {*} resultCode 
 */
function updateGameMessage(userChoice,computerChoice,resultCode){
    let message = winMessage[userChoice][computerChoice];
    let finalResult = result[resultCode];
    resultMessage.innerHTML=`${message}     :  ${finalResult} `;
}
/**
 * This function update the user and computer score
 * resultCode == 0 --> not update the score
 * resultCode == 1 --> update the user score
 * resultCode == 2 --> not update the computer score
 * @param {*} resultCode 
 */
function updateScore(resultCode){
    let userScores= parseInt(userScore.innerHTML);
    let computerScores=parseInt(computerScore.innerText);
    if(resultCode == 1){
        userScores++;
    } else if(resultCode == 2){
        computerScores++;
    }
    userScore.innerHTML=userScores;
    computerScore.innerHTML=computerScores;
}