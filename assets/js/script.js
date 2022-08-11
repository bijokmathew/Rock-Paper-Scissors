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