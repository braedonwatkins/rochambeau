const buttons = document.querySelectorAll('button');
const resultSpan = document.querySelector('.results');
const link = document.createElement("a");


//NOTE: Game States
/*
    Idle:
    - Display directions w/ explanation link
    - Wait for button press to begin game
        - When pressed enter active state 

    Active:
    - Wait for button press to continue game
        - Calculate logic
        - Determine win/lose/active
            - If active repeat from start
            - Else enter win/lose state
    - Display Scores

    Win:
    - Display Win Screen
        - Display Scores
    - Give prompt to play again
    - Disable Buttons

    Lose:
    - Display Lose Screen
        - Display Scores
    - Give prompt to play again
    - Disable Buttons
*/
let gameState = 'idle';

let aiScore = 0;
let playerScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => gameLoop(button));
});

//NOTE: Game Loop
/*
1. Player selects move
2. Computer selects move
3. Calculate logic
4. Update Scores
5. Check Win/Lose
*/
function gameLoop(button) {
    //0. Check Game State
    if(gameState === 'idle'){gameState = 'active';}    
    else if(gameState !== 'active'){return;}

    //1. Computer Selects Move
    let aiChoice = Math.floor(Math.random() * 3);


    //2. Player Selects Move
    let playerChoice = getPlayerChoice(button.id);

    document.querySelector('.results').innerText = `You Chose ${button.id}\n`;
    let aiChoiceString
    if(aiChoice === 0) {aiChoiceString = 'grass';}
    else if(aiChoice === 1) {aiChoiceString = 'water';}
    else if(aiChoice === 2) {aiChoiceString = 'fire';}
    else {console.error("error gameLoop() w/ aiChoice");}
    resultSpan.append(`AI Chose: ${aiChoiceString}`)
    
    //3. Calculate Round Logic
    let roundResult = roundLogic(playerChoice, aiChoice);

    //4. Update Scores
    if(roundResult > 0){playerScore++;}
    else if(roundResult < 0){aiScore++;}
    console.log(`AI Score: ${aiScore} Player Score: ${playerScore}`);

    //5. Set Game State
    gameState = setGameState(button, gameState, roundResult);
}

// take button info and turn into numeric choice 
function getPlayerChoice(type) {
    if(type === "grass"){return 0;}
    else if(type === "water"){return 1;}
    else if(type == "fire"){return 2;}
    else{console.error("getPlayerChoice() invalid type"); return null;}
}

// determine winner of each round
function roundLogic(playerChoice, aiChoice) {
    console.log(`Player Choice: ${playerChoice}\n AI Choice: ${aiChoice}`);

    if(playerChoice === aiChoice) {return 0;}
    else if(playerChoice === 0) {return aiChoice === 1 ? 1 : -1;}
    else if(playerChoice === 1) {return aiChoice === 2 ? 1 : -1;}
    else if(playerChoice === 2) {return aiChoice === 0 ? 1 : -1;}
    else {console.error("roundLogic() invalid choice"); return null;}
}

function setGameState(button, gameState) {
    document.querySelector('#your-points').innerHTML = `Your Points: ${playerScore}`;
    document.querySelector('#ai-points').innerHTML = `AI Points: ${aiScore}`;


    if(playerScore >= 5){gameState = 'win';}
    else if(aiScore >= 5){gameState = 'lose';}

    if(gameState === 'win'){
        // document.querySelector('.win').setAttribute("style","display:flex"); //Game Results
        document.querySelector('.results').innerText = 'You Won! '; 
      
        link.setAttribute('href', `./index.html`);
        link.innerText = 'Play Again?';
        resultSpan.append(link);

        button.removeEventListener('click', () => gameLoop(button));
    }
    else if(gameState === 'lose') {
        // document.querySelector('.lose').setAttribute("style","display:flex"); //Game Results
        document.querySelector('.results').innerText = 'You Lost! '; 
      
        link.setAttribute('href', `./index.html`);
        link.innerText = ' Try Again?';
      
        resultSpan.append(link);

        button.removeEventListener('click', () => gameLoop(button));
    }
    else {

        // document.querySelector('.spacing').setAttribute("style","display:none"); //Round Results

        document.querySelector('.points').setAttribute("style","display:flex");
    }

    
    console.log(`Game State: ${gameState}`);
    return gameState;
}
