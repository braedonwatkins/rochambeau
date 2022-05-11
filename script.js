const buttons = document.querySelectorAll('button');

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


//Game Loop
/*
1. Player selects move
2. Computer selects move
3. Calculate logic
4. Update game state
*/
if(gameState !== 'win' && gameState !== 'lose') {
    buttons.forEach((button) => {
        // and for each one we add a 'click' listener
        button.addEventListener('click', () => {
            //update game state
            if(gameState === 'idle') {gameState = 'active';}

            //1. Computer Selects Move
            let aiChoice = Math.floor(Math.random() * 3);

            //2. Player Selects Move
            let playerChoice = getPlayerChoice(button.id);
            
            //3. Calculate Round Logic
            let roundResult = roundLogic(playerChoice, aiChoice);

            //4. Calculate 
        });
    });


    
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