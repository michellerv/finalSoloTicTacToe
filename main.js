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
        gameBoardBoxes.push(selectedBox);
        displayToken(event);
});

var firePlayer = createPlayer('fire', 1, '🔥', 0, true);
var waterPlayer = createPlayer('water', 2, '💧', 0, false);
var players = [firePlayer, waterPlayer];

var selectedBox;
var gameBoardBoxes = [];


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
            checkForWin()
        }
    }
}

function checkForWin() {
    if (!firePlayer.turn) {
        checkFirePlayerWin()
    } else {
        checkWaterPlayerWin()
    }
}

function checkFirePlayerWin() {
    for (var i = 0; i < firePlayer.moves.length; i++) {
        if (firePlayer.moves[i].includes( 1 && 2 && 3 ||
                                             4 && 5 && 6 ||            
                                             7 && 8 && 9 ||
                                             1 && 5 && 9 ||
                                             3 && 5 && 7 ||
                                             1 && 5 && 7 ||
                                             2 && 6 && 8 ||
                                             3 && 6 && 9 
        )) {
            firePlayer.wins = firePlayer.wins +1
            return firePlayer
        } else {
            return 'draw!'
        }
    }
}

function checkWaterPlayerWin() {
    for (var i = 0; i < waterPlayer.moves.length; i++) {
        if (waterPlayer.moves[i].includes( 1 && 2 && 3 ||
                                              4 && 5 && 6 ||            
                                              7 && 8 && 9 ||
                                              1 && 5 && 9 ||
                                              3 && 5 && 7 ||
                                              1 && 5 && 7 ||
                                              2 && 6 && 8 ||
                                              3 && 6 && 9 
        )) {
            waterPlayer.wins = waterPlayer.wins +1
            return waterPlayer
        } else {
            return 'draw!'
        }
    }
}

// function increaseWins(firePlayer) {
//      firePlayer.wins ++
    
//      return firePlayer;
//  } 

//  function increaseWins(waterPlayer) {
//     waterPlayer.wins ++
    
//      return waterPlayer;
//  } 


// function increaseWins(players) {
//     for (var i = 0; i < players.length; i++) {
//      players[i].wins ++
//     }
//      return players;
//  }

// function waterPlayerWins() {
//     for (var i = 0; i < waterPlayer.moves.length; i++) {
//         if (waterPlayer.moves[i].className.includes("box box1", "box box2", "box box3")) {
//            return 'win!'
//         } else if (waterPlayer.moves[i].className.includes("box box1", "box box4", "box box7")) {
//             return 'win!'
//         } else if (waterPlayer.moves[i].className.includes("box box1", "box box5", "box box9")) {
//             return 'win!'
//         } else if (waterPlayer.moves[i].className.includes("box box2", "box box5", "box box8")) {
//             return 'win!'
//         } else if (waterPlayer.moves[i].className.includes("box box3", "box box6", "box box9")) {
//             return 'win!'
//         } else if (waterPlayer.moves[i].className.includes("box box3", "box box5", "box box7")) {
//             return 'win!'
//         } else if (waterPlayer.moves[i].className.includes("box box4", "box box5", "box box6")) {
//             return 'win!'
//         } else if (waterPlayer.moves[i].className.includes("box box7", "box box8", "box box9")) {
//             return 'win!'
//         } else {
//             return 'draw!'
//         }
       
//     }

// }



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



