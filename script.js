const choices = [{choice: 'grass', value: 0}, {choice: 'water', value: 1}, {choice: 'fire', value: 2}];
const buttons = document.querySelectorAll('button');
// const wtr = document.querySelector('#water');
// const grs = document.querySelector('#grass');
// const fir = document.querySelector('#fire');

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
    //1. Player Selects Move
    let playerChoice = '';
    // buttons.forEach((button) => {
    //     button.addEventListener('click', () => {
    //         getPlayerChoice();
    //     }); 
    // });

    /* This One Works! */
    buttons.forEach((button) => {

        // and for each one we add a 'click' listener
        button.addEventListener('click', () => {
          playerChoice = getPlayerChoice(button.id);
        });
      });

    alert(`${playerChoice}`)

    // grs.onclick = () => ButtonSelect('grass');
    // wtr.onclick = () => ButtonSelect('water');
    // fir.onclick = () => ButtonSelect('fire');

    //2. Computer Selects Move
    let aiChoice = choices[Math.floor(Math.random() * 3)];

    //3. Calculate Logic
    
}

function getPlayerChoice(buttonChoice) {
    if(buttonChoice === 'grass') {playerChoice = 0;}
    else if(buttonChoice === 'water') {playerChoice = 1;}
    else if(buttonChoice === 'fire') {playerChoice = 2;}
    else {return null;} 

    return playerChoice;
}