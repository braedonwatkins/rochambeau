const wtr = document.querySelector('#water');
const grs = document.querySelector('#grass');
const fir = document.querySelector('#fire');

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


function ButtonSelect(type) {
    if(gameState === 'idle') {gameState = 'active';}
    else if(gameState === 'win' || gameState === 'lose') {return;} 
    /* NOTE:
        - maybe you can get away with just disabling the buttons when entering the state
        - for now leaving as is
    */
   
    // alert(`${type} move!`);
    // alert(`Current Game State: ${gameState}`)
}
//Game Loop
/*
*/
do {
    wtr.onclick = () => ButtonSelect('water');
    grs.onclick = () => ButtonSelect('grass');
    fir.onclick = () => ButtonSelect('fire');

}while(gameState !== 'win' || gameState !== 'lose')

