let userChoice;
let computerChoice;

// logica partita a 10

let wins = 0;
let loses = 0;

function punteggio(){
    const winsElement = document.getElementById('wins');
    const losesElement = document.getElementById('loses');

    // Imposta il testo degli elementi
    winsElement.textContent = wins;
    losesElement.textContent = loses;
}

function resetTheGame(){
    const winsElement = document.getElementById('wins');
    const losesElement = document.getElementById('loses');

    winsElement.textContent ='0';
    losesElement.textContent = '0';

}

function totalGame(){  

    punteggio();

    if (wins == 10){
        alert('You won!');
        wins = 0;
        loses = 0;
        resetTheGame();
    } else if (loses == 10){
        alert('You lost!');
        wins = 0;
        loses = 0;
        resetTheGame();
    }
}

//logica singolo gioco

function singleGame(){
    if(userChoice == 'rock'){
        if(computerChoice == 'paper'){
            console.log('You lose!');
            loses++;
            totalGame();
        } else if (computerChoice == 'rock'){
            console.log('It\'s a tie!');
        } else {
            console.log('You won!');
            wins++;
            totalGame();
        }
    } else if (userChoice == 'paper'){
        if(computerChoice == 'scissors'){
            console.log('You lose!');
            loses++;
            totalGame();
        } else if (computerChoice == 'paper'){
            console.log('It\'s a tie!');
        } else {
            console.log('You won!');
            wins++;
            totalGame();
        }
    } else if (userChoice == 'scissors'){
        if(computerChoice == 'rock'){
            console.log('You lose!');
            loses++;
            totalGame();
        } else if (computerChoice == 'scissors'){
            console.log('It\'s a tie!');
        } else {
            console.log('You won!');
            wins++;
            totalGame();
        }
    }
}



// scelta del computer randomica 

function getComputerChoice(){
    let choice = Math.random();
    if(choice < 0.33){
        computerChoice = "rock";
    } else if(choice < 0.66){
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
}


// scelta dell'utente 



let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');

button1.addEventListener('click', () => {
    userChoice = 'rock';
    console.log(userChoice);
    getComputerChoice();
    singleGame();
});
button2.addEventListener('click', () => {
    userChoice = 'paper';
    console.log(userChoice);
    getComputerChoice();
    singleGame();
});
button3.addEventListener('click', () => {
    userChoice = 'scissors';
    console.log(userChoice);
    getComputerChoice();
    singleGame();
});


