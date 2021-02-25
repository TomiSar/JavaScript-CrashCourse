//Challenge 1: Your age in days
function countAgeIndays() {
    var bYear = prompt("What year were you born?");
    var bMonth = prompt("What month were you born?");
    var bDay = prompt("What day were you born?");
    var daysLived = (new Date() - new Date(bYear, bMonth, bDay)) / (1000 * 60 * 60 * 24);
    daysLived = Math.ceil(daysLived);
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + daysLived + ' days old.');
    h1.setAttribute('id', 'daysLived');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function resetAgeDaysCount() {
    document.getElementById('daysLived').remove();
}

//Challenge 2: Cat generator
function generateCats() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://cdn2.thecatapi.com/images/bh8.gif?size=small";
    div.appendChild(image);
}

//Challenge 3: Rock, Paper, Scissors
function rpsGameStart(yourChoice) {
    var playerChoice, computerChoice;
    playerChoice = yourChoice.id;
    computerChoice = numberToChoice(randomToRpsInteger());
    console.log("computer choice: ", computerChoice);
    results = deciceWinner(playerChoice, computerChoice); //[0, 1] player lost | computer won
    message = finalMessage(results);
    rpsResultsFrontEnd(playerChoice, computerChoice, message);
}

function randomToRpsInteger() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return [ "rock", "paper", "scissors"][number];
}

function deciceWinner(playerChoice, computerChoice) {
    //objects for all the possible results win, draw, lose
    var rpsData = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }
    }
    var playerScore = rpsData[playerChoice][computerChoice];
    var computerScore = rpsData[computerChoice][playerChoice];

    return [playerScore, computerScore];
}

function finalMessage([playerScore, computerScore]) {
    if (playerScore === 0) {
        return { 'message': 'You lost!', 'color': 'red'};
    } else if (playerScore === 0.5) {
        return { 'message': 'You tied!', 'color': 'yellow'};
    } else {
        return { 'message': 'You won!', 'color': 'green'};
    }
}

function rpsResultsFrontEnd(playerImageChoice, computerImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    //Remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var playerDiv = document.createElement('div');
    var computerDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    playerDiv.innerHTML = "<img src='" + imagesDatabase[playerImageChoice] + "' height=200 width=200 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML ="<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    computerDiv.innerHTML = "<img src='" + imagesDatabase[computerImageChoice] + "' height=200 width=200 style='box-shadow: 0px 10px 50px rgba(243, 38, 0, 1);'>"

    document.getElementById('flex-box-rps-div').appendChild(playerDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(computerDiv);
}

//Challenge 4: Change the color of alla buttons
var all_buttons = document.getElementsByTagName('button');
//console.log(all_buttons);

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}

//console.log(copyAllButtons);

function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === 'red') {
        buttonsRed();
    } else if (buttonThingy.value === 'green') {
        buttonsGreen();
    } else if (buttonThingy.value === 'reset') {
        buttonsColorReset();
    } else if (buttonThingy.value === 'random') {
        buttonsRandom();
    } 
}

//change all buttons to red
function buttonsRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

//change all buttons to green
function buttonsGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

//reset all buttons colors
function buttonsColorReset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

//random all buttons colors
function buttonsRandom() {
    var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];
    
    for (let i = 0; i < choices.length; i++) {
        // Remember add randomNumber inside loop (so that actual random genaration is working)
        // evverytime the new button is ganerated
        var randomNumber = Math.floor(Math.random() * choices.length);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}