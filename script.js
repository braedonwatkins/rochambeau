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
    if(gameState === 'idle'){gameState = 'active'; document.querySelector('.points').setAttribute("style","display:flex");}    
    else if(gameState !== 'active'){return;} // cant break this into a function... :/

    //1. Computer Selects Move
    let aiNum = Math.floor(Math.random() * 3);
    let aiChoice;

    if(aiNum === 0) {aiChoice = 'grass';}
    else if(aiNum === 1) {aiChoice = 'water';}
    else if(aiNum === 2) {aiChoice = 'fire';}
    else {console.error("error gameLoop() w/ aiChoice");}


    //2. Player Selects Move
    let playerChoice = button.id;

    
    // Maybe change variable color based on choice? Could be fun
    resultSpan.innerText = `You Chose ${playerChoice}\n AI Chose ${aiChoice}`;

    
    //3. Calculate Round Logic
    let roundResult = roundLogic(playerChoice, aiChoice);

    //4. Update Scores
    if(roundResult === 'win'){playerScore++;}
    else if(roundResult === 'loss'){aiScore++;}
    showScore();
    console.log(`AI Score: ${aiScore} Player Score: ${playerScore}`);

    //5. Set Game State
    gameState = setGameState(button, gameState, roundResult);
}

// determine winner of each round
function roundLogic(playerChoice, aiChoice) {
    console.log(`Player Choice: ${playerChoice}\n AI Choice: ${aiChoice}`);

    if(playerChoice === aiChoice) {return 0;}
    else if(playerChoice === 'grass') {return aiChoice === 'water' ? 'win': 'loss';}
    else if(playerChoice === 'water') {return aiChoice ===  'fire' ? 'win' : 'loss';}
    else if(playerChoice === 'fire') {return aiChoice === 'grass' ? 'win' : 'loss';}
    else {console.error("roundLogic() invalid choice"); return null;}
}

function showScore(){
    document.querySelector('#your-points').innerHTML = `Your Points: ${playerScore}`;
    document.querySelector('#ai-points').innerHTML = `AI Points: ${aiScore}`;
}

function setGameState(button, gameState) {
    if(playerScore >= 5){gameState = 'win';}
    else if(aiScore >= 5){gameState = 'lose';}

    if(gameState === 'win'){
        resultSpan.innerText = 'You Won! '; 
      
        link.setAttribute('href', `./index.html`);
        link.innerText = 'Play Again?';
        resultSpan.append(link);

        button.removeEventListener('click', () => gameLoop(button));
    }
    else if(gameState === 'lose') {
        resultSpan.innerText = 'You Lost! '; 
      
        link.setAttribute('href', `./index.html`);
        link.innerText = ' Try Again?';
      
        resultSpan.append(link);

        button.removeEventListener('click', () => gameLoop(button));
    }

    
    console.log(`Game State: ${gameState}`);
    return gameState;
}