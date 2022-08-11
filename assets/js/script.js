/* Declare constants for DOM elements */
const controlButtons = document.getElementsByTagName('button');
const resetButton = document.getElementById('reset-btn');

/* Register event listener for all buttons after loading the DOM  */
document.addEventListener('DOMContentLoaded',function(){
    for(let button of controlButtons){
        button.addEventListener("click",function(){
            let buttonType = this.getAttribute("data-type");
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

}
/**
 *This is main function which takes buttonType as a parameter
 *  this funtion start after loading the DOM
 * based on the button type continue the game 
 * @param {*} buttonType 
 */
function runGame(buttonType){

}