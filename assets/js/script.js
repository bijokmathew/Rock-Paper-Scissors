/* Declare constants for DOM elements */
const controlButtons = document.getElementsByTagName('button');
const resetButton = document.getElementById('reset-btn');
//result message pop up
const resultMessage = document.getElementById('result-msg');
// user and pc selection image display
const userChoiceImage = document.getElementById('user-image');
const computerChoiceImage = document.getElementById('computer-image')
// array for getting the computer selected image based on the random number
const computerChoice = ["rock","paper","scissors"];
// user and pc score 
const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('computer-score')

/* Register event listener for all buttons after loading the DOM  */
document.addEventListener('DOMContentLoaded',function(){
    for(let button of controlButtons){
        button.addEventListener('click',function(){
            let buttonType = this.getAttribute('data-type');
            if(buttonType=== "reset"){
                resetGame();
            } else{
                runGame(buttonType)
            }
        })
    } 
})
/**
 * Reset the game by clearing the score and
 * go to the intial state of the game
 */
function resetGame(){
    //set the user and computer score to zero
    userScore.innerHTML="0";
    computerScore.innerText="0";
}
/**
 *This is main function which takes buttonType as a parameter
 *  this funtion start after loading the DOM
 * based on the button type continue the game 
 * @param {*} buttonType 
 */
function runGame(buttonType){
    setUserChoiceImage(buttonType);
    generateComputerChoice();
}
/**
 * This function takes buttonType as a parameter
 * And set the image on the HTML based on the buttonType
 * @param {*} buttonType 
 */
function setUserChoiceImage(buttonType){

}
/**
 * This function set the image on the HTML 
 * based on the computer choice
 */
 function setComputerChoiceImage(){

}
/**
 * This function generate the computer choice
 * based on the random number generate between the 0 and userchoice length
 * 
 */
function generateComputerChoice(){


}