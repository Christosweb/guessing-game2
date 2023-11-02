let compWord = document.querySelector(".comp_container");
let message = document.querySelector(".message_container");
let gameOver = document.querySelector(".over_container");
let usedAirtime = document.querySelector(".airtime_used");
let scoreContainer = document.querySelector(".score_container");
let input = document.querySelector("#number");
let right = document.querySelector(".right");
let wrong = document.querySelector(".wrong");
let startBtn = document.querySelector("#button");
let submit = document.querySelector("#btn");
let btn2 = document.querySelector("#btn2");
let btn_3 = document.querySelector("#btn3");

let randonNumber;
let inputValue;

// create array of airtime
const airtime = ['5078-8677-7631-55861', '1700-6855-4737-80295', '2808-2180-3999-99354']

// function to output array
function airtimeCongrats(card) {
     let currentMsg = message.innerHTML
     let newMsg = card[0] ;
    currentMsg += " " + newMsg ;
    message.innerHTML = currentMsg ;
    message.style.display = "block" ;
    
 }

 //function to delete airtime array one by one
 function deleteAirtime(card) {
    card.shift() ;
    
 }


  //function of randomnumber
function getRandomNumber() {
    return  Math.floor( Math.random() * 10);
    
} 

//function to update random number
function update_rand() {
    randonNumber = getRandomNumber();
    console.log(randonNumber);
    
 }//update_rand()



// disable input field
function isDisabled() {
    return input.disabled = true;
  }isDisabled()
 
  //enable input
  function isEnabled() {
     input.disabled = false;
     input.focus();
     startBtn.style.display ="none"
     submit.style.display = "block"
     update_rand()
  
  }

// function to get input value
function getInputValue() {
 return input.value ;
}


// function to update innerText of right 
function getRightMessage() {
    let currentContent = right.innerHTML;
    let  newContent = input.value;
    newContent += " " + currentContent;
    right.innerHTML = newContent;
    right.style.display = "block";
}
//function to update innerText of wrong
function getWrongMessage() {
   // let currentContent = wrong.innerHTML;
   // let  newContent = input.value;
  //  currentContent += " " + newContent;
   // wrong.innerHTML = currentContent ;
   wrong.innerHTML = ` the correct number is ${randonNumber}. You guessed ${input.value}`
    wrong.style.display = "block" ;
    right.style.display = "none";

}
// function to change correct number of wrong

// function to check empty airtime array
function isAirtimeEmpty(card) {
    if (card.length === 0) {
        message.style.display = "none"
        usedAirtime.style.display = "block"
    }
}
//function is equal random number
function isEqualRandonNumber() {
     inputValue= getInputValue()
   // console.log(inputValue)
   // console.log(randonNumber)
    if (inputValue == randonNumber) {
        compWord.style.display = "none";
        airtimeCongrats(airtime)
        scoreContainer.style.display = "none"
        submit.style.display = "none"
        btn2.style.display = "block"
        getRightMessage();
        
       
        isAirtimeEmpty(airtime)
    }
    else{
        usedAirtime.style.display = "none" ;
        compWord.style.display = "none" ;
        gameOver.style.display = "block" ;
        scoreContainer.style.display = "none" ;
        submit.style.display = "none" ;
        btn_3.style.display = "block" ;
        getWrongMessage() 
       
    }
    
    
}
//function to remove last statement from message
function removeStatement() {
    var statement = message.innerHTML ;
    var updatedStatement = statement.split(' ').slice(0, -1).join(' ');
    message.innerHTML = updatedStatement ;
// remove first element of right
 var newNumber = right.innerHTML
 var updatedRight = newNumber.split(' ').slice(1).join(' ');
     right.innerHTML = updatedRight;

    
}

// function to remove last element of wrong call by replay
function removeWrong(){
    let statement = wrong.innerHTML
    let updated = statement.split(' ').slice(0, -1).join(' ');
    wrong.innerHTML = updated
}
// function of play again
function playAgain() {
    compWord.style.display = "block"
    startBtn.style.display = "block"
    message.style.display = "none"
    btn2.style.display = "none"
    right.style.display = "none"
    wrong.style.display = "none"
    gameOver.style.display = "none"
    usedAirtime.style.display = "none"
    input.value = "" ;
    input.disabled = true
    deleteAirtime(airtime) ;
        removeStatement()
       
    
}
// function of replay
function replayGame(){
    compWord.style.display = "block"
    startBtn.style.display = "block"
    message.style.display = "none"
    right.style.display = "none"
    btn_3.style.display = "none"
    wrong.style.display = "none"
    gameOver.style.display = "none"
    usedAirtime.style.display = "none"
    input.value = "" ;
    input.disabled = true
    removeWrong()
    
}
// add event listener to  buttons
  startBtn.addEventListener('click', isEnabled);
  submit.addEventListener("click", isEqualRandonNumber);
  btn2.addEventListener("click", playAgain );
  btn_3.addEventListener("click", replayGame );
  

  