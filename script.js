const choiceButtons = document.querySelectorAll(".choice-button")
// let rock = document.getElementById("rock")
// let paper = document.getElementById("paper")
// let scissors = document.getElementById("scissors")
let declareUserChoice = document.getElementById('user-choice')
const declareComputerChoice = document.querySelector('.computer-choice')
const declareResult = document.querySelector('.result-display')
let userChoice;
let computerChoice;
let result;


choiceButtons.forEach(button => button.addEventListener("click", (e) => {
    userChoice = e.target.id;
    declareUserChoice.innerHTML = "Your choice: " + userChoice
    computerChooses()
}))

    function computerChooses(){
        
    }






//let choices = ["rock", "paper", "scissors"]

/*userChoice =""

computerChoice = r,p,s

console.log("Enter your choice" )

if userChoice === computerChoice
console log(0)

if userChoice = r and computerChoice = s 
console.log ("You lose! User 0, Computer 1")
if userChoice */