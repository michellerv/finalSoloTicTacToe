// Your DOM related JavaScript will include:
// Query selectors

var turnBanner = document.querySelector('.announcements');
var boxes = document.querySelectorAll('.box');
var boardGrid = document.querySelector('.board-grid');

// Event listeners


window.addEventListener('load', displayTurn);
boardGrid.addEventListener('click', function(event) {
    if (!stopRepeats(selectBox(event))) {
        return
    }  
        selectedBox = selectBox(event);
        addMoves(selectedBox); 
        displayToken(event);
});

var firePlayer = createPlayer('fire', 1, '🔥', 0, true);
var waterPlayer = createPlayer('water', 2, '💧', 0, false);
var players = [firePlayer, waterPlayer];

var selectedBox;
var winCombos = [['1', '2', '3'], 
                 ['4', '5', '6'], 
                 ['7', '8', '9'], 
                 ['1', '5', '9'], 
                 ['3', '5', '7'], 
                 ['1', '4', '7'], 
                 ['2', '5', '8'], 
                 ['3', '6', '9']];


//functions
function createPlayer(name, id, token, wins, turn) {
    return {
        name: name,
        id: id,
        token: token,
        wins: wins,
        turn: turn,
        moves: []
    }
}



// Function(s) to display the game board and user data
function displayTurn() {
    for (var i = 0; i < players.length; i++) {
        if (players[i].turn) {
            turnBanner.innerHTML = 
            `It\'s ${players[i].token}\'s turn!`
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
            box.innerHTML += 
            `${players[i].token}`
        }
    }   
    checkForWin()
    changeTurn(players);
}

function stopRepeats(box) {
    for (var i = 0; i < players.length; i++) {
        if (players[0].moves.includes(box) || players[1].moves.includes(box)) {
            return false
        }
            return true
    } 
}

function selectBox(event) {
    var eventTargetId = event.target.id
    for (var i = 0; i < boxes.length; i++) {
        if(boxes[i].id === eventTargetId) {
           return boxes[i].getAttribute('id')
        }
    }    
}

function addMoves(box) {
    for (var i = 0; i < players.length; i++) {
        if (players[i].turn) {
            players[i].moves.push(box)
        }
    }
}

function checkForWin() {
    for (var i = 0; i < winCombos.length; i++) {
        var fireWin = winCombos[i].every(function(position) {
            return (firePlayer.moves.includes(position))
        })
        var waterWin = winCombos[i].every(function(position) {
            return (waterPlayer.moves.includes(position))
        }) 
        if(fireWin) {
            firePlayer.wins += 1  
            //displayFirePlayerWin() 
            return true
        } else if (waterWin) {
            waterPlayer.wins += 1
            //displayWaterPlayerWin()
            return true
        } 
    } 
        return false
}


//displayFirePlayerWin() 
//updateing banner and displaying win count
//displayWaterPlayerWin()
//updateing banner and displaying win count



// A function that creates the objects that store each players’ informations - properties should include: id (ex: 'one'), token (ex: '⭐️'), wins (ex: 0)



// A function called increaseWins - increases the count of a player’s wins (should work for either player)

//Use?
// function createGameBoard() {
//     for (var i = 1; i < 10; i++) {
//         gameBoardBoxes.push({
//             boxNum: i,
//             occuppied: false,
//         })
//     }
// }



// A function that keeps track of the data for the game board



// A function that keeps track of which player’s turn it currently is

// function playerWin(gameBoardBoxes) {
//     for (var i = 0; i <  gameBoardBoxes.length; i++) {
//         if (gameBoardBoxes[0,1,2].occupied) {
//             //that player wins- how to connect game board to player
//         } else if (gameBoardBoxes[3, 4, 5].occupied) {
//             // ''
//         } else if (gameBoardBoxes[6, 7, 8].occupied) {
//             // ''
//         } else if (gameBoardBoxes[0, 4, 8].occupied) {
//             //  ''
//         } else if (gameBoardBoxes[2, 4, 6].occupied) {
//             //''
//         } else if (gameBoardBoxes[0, 3, 6].occupied) {
//             // ''
//         } else if (gameBoardBoxes[1, 4, 7].occupied) {
//             // ''
//         } else if (gameBoardBoxes[2, 5, 8].occupied) {
//             // ''
//         }
//     }
// }


// A function that checks the game board data for win conditions

// A function that detects when a game is a draw (no one has won)

// A function that resets the game board’s data to begin a new game



