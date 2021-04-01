export function getComputerChampion() {
    let randomNumber = Math.ceil(Math.random()); {
        let computerChampion;
        if (randomNumber >= 0 && randomNumber <= 0.325)
            computerChampion === 'Rock';

        else if (randomNumber >= 0.3251 && randomNumber <= 0.65)
            computerChampion === 'Paper';

        else computerChampion === 'Scissors';

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
        return 'Your Might is Equal'

    };
    if (user === 'paper' && computer === 'paper') {
        return 'Your Might is Equal'

    };
    if (user === 'scissors' && computer === 'scissors') {
        return 'Your Might is Equal'

    };
    if (user === 'rock' && computer === 'scissors') {
        return 'Your Have Vanquished Your Foe'

    };
    if (user === 'paper' && computer === 'rock') {
        return 'Your Have Vanquished Your Foe'

    };
    if (user === 'scissors' && computer === 'paper') {
        return 'Your Have Vanquished Your Foe'

    };
    if (user === 'scissors' && computer === 'rock') {
        return 'Your Family Mourns You'

    };
    if (user === 'paper' && computer === 'scissors') {
        return 'Your Family Mourns You'

    };
    if (user === 'rock' && computer === 'paper') {
        return 'Your Family Mourns You'
    };