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
        displayToken();
});

var firePlayer = createPlayer('fire', 1, '🔥', 0, true);
var waterPlayer = createPlayer('water', 2, '💧', 0, false);

var players = [firePlayer, waterPlayer];

var selectedBox;


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

function selectBox(event) {
    var eventTargetClass = event.target.className
    for (var i = 0; i < boxes.length; i++) {
        if(boxes[i].className === eventTargetClass) {
           return boxes[i]
        }
    }    
}

function addMoves(box) {
    for (var i = 0; i < players.length; i++) {
        players[i].moves.push(box)
    }
}

function stopRepeats(box) {
    for (var i = 0; i < players.length; i++) {
    if (players[i].moves.includes(box)) {
        return false
    }
        return true
    } 
}

function displayToken() {
    for (var i = 0; i < players.length; i++) {
        if (players[i].turn) {
            selectedBox.innerHTML += 
            `${players[i].token}`
        }
    }   
    changeTurn(players);
}

function changeTurn(players) {
    for (var i = 0; i < players.length; i++) {
        players[i].turn = !players[i].turn;
    }
    displayTurn();
}

function displayTurn() {
    for (var i = 0; i < players.length; i++) {
        if (players[i].turn) {
            turnBanner.innerHTML = 
            `It\'s ${players[i].token}\'s turn!`
        } 
    }    
}
 


// A function that creates the objects that store each players’ informations - properties should include: id (ex: 'one'), token (ex: '⭐️'), wins (ex: 0)

function increaseWins(players) {
   for (var i = 0; i < players.length; i++) {
    players[i].wins ++
   }
    return players;
}

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



