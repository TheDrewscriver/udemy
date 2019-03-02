/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScores, activePlayer, dice;
var gamePlaying = false;


scores = [0, 0];
roundScore = 0;
activePlayer = 0;

dice = 0;

function rollDice() {
    return Math.floor((Math.random() * 6)) + 1;
}

console.log(rollDice());
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-' + activePlayer).textContent = 0;
document.getElementById('current-' + activePlayer).textContent = 0;

//document.querySelector('#current-' + activePlayer).textContent = rollDice();
//Id we use #, and for class we use . in querySelector
document.querySelector('#current-' + activePlayer).innerHTML = rollDice();
document.querySelector('.dice').style.display = 'none';

function btn() {
    var diceValue = rollDice();
    console.log(diceValue);
    console.log(document.querySelector('.dice').getAttribute('src'));
    document.querySelector('.dice').src = 'dice-' + diceValue + '.png';
    document.querySelector('.dice').style.display = 'block';
    //Update the round score if the diceValue is not 1
    if (diceValue !== 1) {
        //Add value
        roundScore = document.getElementById('current-' + activePlayer).textContent;
        roundScore = diceValue + parseInt(roundScore);
        document.getElementById('current-' + activePlayer).innerHTML = roundScore;
    } else {
        //Update score
        var scoreOfActivePlayer = document.getElementById('score-' + activePlayer);
        scoreOfActivePlayer.textContent = roundScore + parseInt(scoreOfActivePlayer.textContent);
        //Switch active player
        switchActivePlayer();
    }
    document

}


document.querySelector('.btn-hold').addEventListener('click', function () {
    //Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;

    //Update the UI
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    //Check if player won the game



})


function switchActivePlayer() {
    //Next player
    activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;
    //Set the round score is 0 for next player
    roundScore = 0;
    //Set current score for both playes tp 0
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    //Switch active panel
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    //Hide dice
    document.querySelector('.dice').style.display = 'none';
}

function switchActivePanel() {

}


document.querySelector('.btn-roll').addEventListener('click', btn);
