const computerPlay = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock"
    }
    else if (randomNumber === 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

const validateSelection = userInput => {
    if (userInput != null) {
        userInput = userInput.toLowerCase();
    }
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput
    }
    else {
        let error = prompt("Error; Please type rock, paper or scissors")
        validateSelection(error)
    }
}

const playRound = (playerSelection, computerSelection) => {
    if (computerSelection === "rock") {
        if (playerSelection === "scissors") {
            return "You Lose!"
        }
        if (playerSelection === "rock") {
            return "It's a draw, computer drew Rock"
        }
        if (playerSelection === "paper") {
            return "You WON!!!"
        }
    }
    else if (computerSelection === "paper") {
        if (playerSelection === "paper") {
            return "It's a draw, computer drew Paper"
        }
        if (playerSelection === "scissors") {
            return "You WON!!!"
        }
        if (playerSelection === "rock") {
            return "You Lose!"
        }
    }
    else {
        if (playerSelection === "scissors") {
            return "It's a draw, computer drew Scissors"
        }
        if (playerSelection === "rock") {
            return "You WON!!!"
        }
        if (playerSelection === "paper") {
            return "You Lose!"
        }
    }
}

const game = () => {
    let playerScore = 0
    let computerScore = 0
    while (playerScore < 3 && computerScore < 3) {
        const playerSelection = validateSelection(prompt("Rock, Paper or Scissors"))
        const winner = playRound(playerSelection, computerPlay())
        if (winner === "You WON!!!") {
            playerScore++
        }
        else if (winner === "You Lose!") {
            computerScore++
        }
    }
    console.log(playerScore, computerScore)
}