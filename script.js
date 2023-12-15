const choiceButtons = document.querySelectorAll(".choice-button")
// let rock = document.getElementById("rock")
// let paper = document.getElementById("paper")
// let scissors = document.getElementById("scissors")
const declareUserChoice = document.getElementById('user-choice')
const declareComputerChoice = document.getElementById('computer-choice')
const declareResult = document.getElementById('result')
const clearButton = document.getElementById('clear-button')
let userChoice;
let computerChoice;
let result;
let userScore = 0;
let computerScore = 0;


choiceButtons.forEach(button => button.addEventListener("click", (e) => {
    userChoice = e.target.id;
    declareUserChoice.innerHTML = "Your choice: " + userChoice
    computerChooses()
    getResult ()
    scoreboard ()
}))



    function computerChooses(){
        const randNum = Math.floor(Math.random() * 3) + 1
        if (randNum === 1) {
            computerChoice = "Rock"
        } 
        else if (randNum === 2) {
            computerChoice = "Paper"
        }
        else {
            computerChoice = "Scissors"
        }
        declareComputerChoice.innerHTML = "Computer choice: " + computerChoice
    }

    function getResult (){
        if (computerChoice === userChoice){
            result = "It's a tie!"
        } else if (computerChoice === "Rock" && userChoice === "Paper"){
            result = "You win!"
        } else if (computerChoice === "Rock" && userChoice === "Scissors"){
            result = "You lose!"
        } else if (computerChoice === "Scissors" && userChoice === "Rock"){
            result = "You win!"
        } else if (computerChoice === "Scissors" && userChoice === "Paper"){
            result = "You lose!"
        } else if (computerChoice === "Paper" && userChoice === "Scissors"){
            result = "You win!"
        } else if (computerChoice === "Paper" && userChoice === "Rock"){
            result = "You lose!"
        }

        declareResult.innerHTML = "Result: " + result
    }

    function scoreboard (){
        if (result = "You win!"){
            userScore.innerHTML = "User score: " + userScore + 1;

        } else (result = "You lose!")
            computerScore.innerHTML = "Computer score: " + computerScore + 1;
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