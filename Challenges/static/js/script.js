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

//Challenge 5: Blackjack
let blackjackGame = {
    'player': { 'scoreSpan' : '#player-blackjack-result', 'div': '#player-box', 'score' : 0 },
    'dealer': { 'scoreSpan' : '#dealer-blackjack-result', 'div': '#dealer-box', 'score' : 0 },
    'cards' : [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ],
    'cardsMap' : { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10, 'Q': 10, 'K': 10, 'A': [1, 11]},
    'wins' : 0,
    'losses' : 0,
    'draws' : 0,
    'isStand': false,
    'turnsOver': false,
}

const PLAYER = blackjackGame['player'];
const DEALER = blackjackGame['dealer'];
const hitSound = new Audio('sounds/hit.mp3');
const winSound = new Audio('sounds/cash.mp3');
const lossSound = new Audio('sounds/aww.mp3');
document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

function blackjackHit() {
    if (blackjackGame['isStand'] === false) {
        let card = randomCard();
        showCard(PLAYER, card);
        updateScore(PLAYER, card);
        showScore(PLAYER);
    }
}

//Picks card randomly from deck
function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13); //0-13 indexes (14 total)
    return blackjackGame['cards'][randomIndex];
}

function showCard(activePlayer, card) {
    // if activePlayer score count is <= 21 show new card
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = `images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    } else {

    }
}

function updateScore(activePlayer, card) {
    if (card === 'A') {
        // if adding 11 is below 21, add 11 otherwise add 1
        if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) { 
            activePlayer['score'] += blackjackGame['cardsMap'][card][1]; //add 11
        } else {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0]; //add 1
        }
    } else {
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

//Show the activePlaer current score at the score span
function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

//Clear table (Remove images, reset scores)
function blackjackDeal() {

    if (blackjackGame['turnsOver'] === true) {
        blackjackGame['isStand'] = false;

        let playerImages = document.querySelector('#player-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
        clearCardsFromTable(playerImages);
        clearCardsFromTable(dealerImages);
        resetScores();

        document.querySelector('#blackjack-result').textContent = "Let's play";
        document.querySelector('#blackjack-result').style.color = "black";

        blackjackGame['turnsOver'] = true;
    }
}

function clearCardsFromTable(cardImages) {
    for (let i = 0; i < cardImages.length; i++) {
        cardImages[i].remove();
    } 
}

function resetScores() {
    PLAYER['score'] = 0;
    DEALER['score'] = 0;
    document.querySelector('#player-blackjack-result').textContent = 0;
    document.querySelector('#player-blackjack-result').style.color = '#ffffff';
    document.querySelector('#dealer-blackjack-result').textContent = 0;
    document.querySelector('#dealer-blackjack-result').style.color = '#ffffff';
}

//sleep function (sleeptime in ms)
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {
    blackjackGame['isStand'] = true;

    while (DEALER['score'] < 16 && blackjackGame['isStand'] === true) {
        let card = randomCard();
        showCard(DEALER, card);
        updateScore(DEALER, card);
        showScore(DEALER);
        await sleep(1000);
    }

    blackjackGame['turnsOver'] = true;
    let winner = computeWinner();
    showResult(winner);
}

//compute the winner and return who won
//update table: wins, losses and draws
function computeWinner() {
    let winner;
    
    if (PLAYER['score'] <= 21) {
        //higher score than dealer or dealer busts and player 21 or under
        if (PLAYER['score'] > DEALER['score'] || DEALER['score'] > 21) {
            blackjackGame['wins']++;
            winner = PLAYER;
        } else if (PLAYER['score'] <= DEALER['score']) {
            blackjackGame['losses']++;
            winner = DEALER;
        } else if (PLAYER['score'] === DEALER['score']) {
            blackjackGame['draws']++;
        }
    //when player bust, but dealer doesn't
    } else if (PLAYER['score'] > 21 && DEALER['score'] <= 21) {
        blackjackGame['losses']++;
        winner = DEALER;

    //when player bust and dealer bust
    } else if (PLAYER['score'] > 21 && DEALER['score'] > 21) {
        blackjackGame['draws']++;
    }
    console.log(blackjackGame);
    return winner;
}

function showResult(winner) {
    let message, messageColor;

    if (blackjackGame['turnsOver'] === true) {
        if (winner === PLAYER) {
            document.querySelector('#wins').textContent = blackjackGame['wins'];
            message = 'You won!';
            messageColor = 'green';
            winSound.play();
        } else if (winner === DEALER) {
            document.querySelector('#losses').textContent = blackjackGame['losses'];
            message = 'Dealer won!';
            messageColor = 'red';
            lossSound.play();
        } else {
            document.querySelector('#draws').textContent = blackjackGame['draws'];
            message = 'You drew!';
            messageColor = 'black';
        }
        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    }
}