export function getComputerChampion() {
    let randomNumber = Math.ceil(Math.random()); {
        let computerChampion;
        if (randomNumber >= 0 && randomNumber <= 0.325)
            computerChampion === 'rock';

        else if (randomNumber >= 0.3251 && randomNumber <= 0.65)
            computerChampion === 'paper';

        else computerChampion === 'scissors';

    }
    return computerChampion;
}

//export function staleMate()){
//const value = 'rock' || 'paper || 'scissors';
//if user.value === computer.value
//return 'Stale Mate';}


export function whoIsTheVictor(user, computer) {
    //let user = //user input
    //let computer = computerChampion

    if (user === 'rock' && computer === 'rock') {
        return 'Your Might is Equal';

    } else if (user === 'paper' && computer === 'paper') {
        return 'Your Might is Equal';

    } else if (user === 'scissors' && computer === 'scissors') {
        return 'Your Might is Equal';

    } else if (user === 'rock' && computer === 'scissor') {
        return 'Your Have Vanquished Your Foe';

    } else if (user === 'paper' && computer === 'rock') {
        return 'Your Have Vanquished Your Foe';

    } else if (user === 'scissors' && computer === 'paper') {
        return 'Your Have Vanquished Your Foe';
    } else return 'Your Family Mourns You';
}

