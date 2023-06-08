// Your DOM related JavaScript will include:
// Query selectors
// Function(s) to display the game board and user data
// Event listeners

//functions
function createPlayer(name, id, token, wins) {
    return {
        name: name,
        id: id,
        token: token,
        wins: wins ?? 0
    }
}

var firePlayer = createPlayer('fire', 1, 'fireEmoji', 0);
var waterPlayer = createPlayer('water', 2, 'waterEmoji', 0);
console.log(firePlayer)
console.log(waterPlayer)
var players = [firePlayer, waterPlayer];
console.log(players)

// A function that creates the objects that store each players’ informations - properties should include: id (ex: 'one'), token (ex: '⭐️'), wins (ex: 0)

function increaseWins(players) {
   for (var i = 0; i < players.length; i++) {
    players[i].wins ++
   }
    return players
}

// A function called increaseWins - increases the count of a player’s wins (should work for either player)
// A function that keeps track of the data for the game board
// A function that keeps track of which player’s turn it currently is
// A function that checks the game board data for win conditions
// A function that detects when a game is a draw (no one has won)
// A function that resets the game board’s data to begin a new game



