//Query selectors

var turnBanner = document.querySelector('.announcements');
var boxes = document.querySelectorAll('.box');
var boardGrid = document.querySelector('.board-grid');
var firePlayerScore = document.querySelector('.fire-player-wins');
var waterPlayerScore = document.querySelector('.water-player-wins');
var afterWin = false;

//Event listeners

window.addEventListener('load', displayTurn);
boardGrid.addEventListener('click', function(event) {
    if (!stopRepeats(selectBox(event)) || afterWin === true || event.target.className === 'board-grid') {
        return;
    }  
        selectedBox = selectBox(event);
        addMoves(selectedBox); 
        displayToken(event);
});

var firePlayer = createPlayer('fire', 1, '🔥', 0, true, true);
var waterPlayer = createPlayer('water', 2, '💧', 0, false, false);
var players = [firePlayer, waterPlayer];
var selectedBox;
var winCombos = [['1', '2', '3'], 
                 ['1', '4', '7'], 
                 ['1', '5', '9'], 
                 ['2', '5', '8'], 
                 ['3', '6', '9'], 
                 ['3', '5', '7'], 
                 ['4', '5', '6'], 
                 ['7', '8', '9']];

//Functions

function createPlayer(name, id, token, wins, turn, startsGame) {
    return {
        name: name,
        id: id,
        token: token,
        wins: wins,
        turn: turn,
        startsGame: startsGame,
        moves: []
    }
}

function displayTurn() {
    for (var i = 0; i < players.length; i++) {
        if (players[i].turn) {
            turnBanner.innerHTML = `It's ${players[i].token}'s turn!`;
        } 
    }    
}

function changeTurn(players) {
    for (var i = 0; i < players.length; i++) {
        players[i].turn = !players[i].turn;
    }
    displayTurn();
}

function displayToken(event) {
    var box = event.target
    for (var i = 0; i < players.length; i++) {
        if (players[i].turn) {
            box.innerHTML += `${players[i].token}`;
        }
    }   
    if (checkForWin()) {
            return;
    }
    changeTurn(players);
}

function stopRepeats(box) {
    for (var i = 0; i < players.length; i++) {
        if (players[0].moves.includes(box) || players[1].moves.includes(box)) {
            return false;
        }
            return true;
    } 
}

function selectBox(event) {
    var eventTargetId = event.target.id
    for (var i = 0; i < boxes.length; i++) {
        if(boxes[i].id === eventTargetId) {
           return boxes[i].getAttribute('id');
        }
    }    
}

function addMoves(box) {
    for (var i = 0; i < players.length; i++) {
        if (players[i].turn) {
            players[i].moves.push(box);
        }
    }
}

function checkForWin() {
    for (var i = 0; i < winCombos.length; i++) {
        var fireWin = winCombos[i].every(function(position) {
            return (firePlayer.moves.includes(position));
        })
        var waterWin = winCombos[i].every(function(position) {
            return (waterPlayer.moves.includes(position));
        }) 
        if (fireWin) {
            firePlayer.wins += 1;  
            displayFirePlayerWin();
            afterWin = true;
            return true;
        } else if (waterWin) {
            waterPlayer.wins += 1;
            displayWaterPlayerWin();
            afterWin = true; 
            return true;
        }   
    }   
    if(checkForDraw()) {
        return true;
    }   
    return false;        
}

function displayFirePlayerWin() {
    turnBanner.innerHTML = `${firePlayer.token} Fire wins!`;
    firePlayerScore.innerHTML = ` ${firePlayer.wins}`;
    setTimeout(resetGame, 3000);
} 

function displayWaterPlayerWin() {
    turnBanner.innerHTML = `${waterPlayer.token} Water wins!`;
    waterPlayerScore.innerHTML = ` ${waterPlayer.wins}`;
    setTimeout(resetGame, 3000);
}

function checkForDraw() {
    var totalMoves = firePlayer.moves.length + waterPlayer.moves.length;
    if (totalMoves === boxes.length) {
        turnBanner.innerHTML = `It's a draw ${firePlayer.token} ${waterPlayer.token} !`;
        afterWin = true;
        setTimeout(resetGame, 3000);
        return true;
    }
    return false;
}

function resetGame() {
    for (var i = 0; i < players.length; i++) {
        players[i].moves = [];
    }
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = '';
    }
        afterWin = false
        changeTurnAfterGame();
        displayTurn();
}

function changeTurnAfterGame() {
    for(var i = 0; i < players.length; i++) {
        if(players[i].startsGame) {
            players[i].startsGame = false;
            players[i].turn = false;
        } else {
            players[i].startsGame = true;
            players[i].turn = true;
        }
    }
    return players;
}   
    

   









