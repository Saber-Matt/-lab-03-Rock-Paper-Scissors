// import functions and grab DOM elements
// initialize state

// set event listeners to update state and DOM




import { whoIsTheVictor, getComputerChampion } from './utils.js';

const battleButton = document.querySelector('#battle-button');
const victorText = document.querySelector('#Victor');
const Rock = document.querySelector('#Rock');
const Paper = document.querySelector('#Paper');
const Scissors = document.querySelector('#Scissors');
const successText = document.querySelector('#Success');
const defeatText = document.querySelector('#Defeat');
const drawText = document.querySelector('#draws');
const totalAnswers = document.querySelector('#total');

let Success = 0;
let Defeat = 0;
let draws = 0;
let total = 0;

battleButton.addEventListener('click', () => {
    const player = document.querySelector('input:checked').value;
    const computer = getComputerChampion();
    const victor = whoIsTheVictor(player, computer);
    if (victor === 'Your Might is Equal') {
        draws++;
        drawText.textContent = `${draws} Your Might is Equal`;
        total++;
        totalAnswers.textContent = `${total} total`;
    }
    if (victor === 'Your Family Mourns You') {
        Defeat++;
        defeatText.textContent = `${Defeat} Your Family Mourns You`;
        total++;
        totalAnswers.textContent = `${total} total`;
    }
    if (victor === 'Your Have Vanquished Your Foe') {
        Success++;
        successText.textContent = `${Success} Your Have Vanquished Your Foe`;
        total++;
        totalAnswers.textContent = `${total} total`;
    }
});