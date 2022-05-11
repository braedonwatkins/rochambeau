const wtr = document.querySelector('#water');
const grs = document.querySelector('#grass');
const fir = document.querySelector('#fire');

let gameState = 'idle';

//Game States
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

    Win:
    - Display Win Screen
    - Give prompt to play again

    Lose:
    - Display Lose Screen
    - Give prompt to play again
*/

function ButtonSelect(type) {
    if(gameState === 'idle') {gameState = 'active';}
    // alert(`${type} move!`);
    // alert(`Current Game State: ${gameState}`)
}


wtr.onclick = () => ButtonSelect('water');
grs.onclick = () => ButtonSelect('grass');
fir.onclick = () => ButtonSelect('fire');