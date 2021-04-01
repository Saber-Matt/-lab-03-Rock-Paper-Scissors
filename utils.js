export function getComputerChampion() {
    let randomNumber = Math.random();
    //let computerChampion;
    if (randomNumber >= 0 && randomNumber <= 0.325)
        return 'Rock';

    else if (randomNumber >= 0.3251 && randomNumber <= 0.65)
        return 'Paper';

    else return 'Scissors';

    //return computerChampion;
}

//export function staleMate()){
//const value = 'Rock' || 'Paper || 'Scissors';
//if user.value === computer.value
//return 'Stale Mate';}


export function whoIsTheVictor(user, computer) {
    //let user = //user input
    //let computer = computerChampion

    if (user === 'Rock' && computer === 'Rock') {
        return 'Your Might is Equal';

    }
    if (user === 'Paper' && computer === 'Paper') {
        return 'Your Might is Equal';

    }
    if (user === 'Scissors' && computer === 'Scissors') {
        return 'Your Might is Equal';

    }
    if (user === 'Rock' && computer === 'Scissors') {
        return 'Your Have Vanquished Your Foe';

    }
    if (user === 'Paper' && computer === 'Rock') {
        return 'Your Have Vanquished Your Foe';

    }
    if (user === 'Scissors' && computer === 'Paper') {
        return 'Your Have Vanquished Your Foe';

    }
    if (user === 'Scissors' && computer === 'Rock') {
        return 'Your Family Mourns You';

    }
    if (user === 'Paper' && computer === 'Scissors') {
        return 'Your Family Mourns You';

    }
    if (user === 'Rock' && computer === 'Paper') {
        return 'Your Family Mourns You';
    }
}