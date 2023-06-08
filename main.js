// Your DOM related JavaScript will include:
// Query selectors
// Function(s) to display the game board and user data
// Event listeners

//functions
function createPlayer(name, id, token, wins, turn) {
    return {
        name: name,
        id: id,
        token: token,
        wins: wins ?? 0,
        turn: turn,
    }
}

var firePlayer = createPlayer('fire', 1, '🔥', true);
var waterPlayer = createPlayer('water', 2, '💧', false);

var players = [firePlayer, waterPlayer];


// A function that creates the objects that store each players’ informations - properties should include: id (ex: 'one'), token (ex: '⭐️'), wins (ex: 0)

function increaseWins(players) {
   for (var i = 0; i < players.length; i++) {
    players[i].wins ++
   }
    return players
}

// A function called increaseWins - increases the count of a player’s wins (should work for either player)

function createGameBoard() {
    for (var i = 1; i < 10; i++) {
        gameBoardBoxes.push({
            boxNum: i,
            occuppied: false,
        })
    }
}
var gameBoardBoxes = [];


// A function that keeps track of the data for the game board

function trackTurn(players) {
    for (var i = 0; i < players.length; i++) {
        players[i].turn = !players[i].turn
    }
}


// A function that keeps track of which player’s turn it currently is



// A function that checks the game board data for win conditions
// A function that detects when a game is a draw (no one has won)
// A function that resets the game board’s data to begin a new game



