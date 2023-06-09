// Your DOM related JavaScript will include:
// Query selectors

var turnBanner = document.querySelector('.announcements');
var boxes = document.querySelectorAll('.box');
var boardGrid = document.querySelector('.board-grid')
// var box1 = document.querySelector('.box1');
// var box2 = document.querySelector('.box2');
// var box3 = document.querySelector('.box3');
// var box4 = document.querySelector('.box4');
// var box5 = document.querySelector('.box5');
// var box6 = document.querySelector('.box6');
// var box7 = document.querySelector('.box7');
// var box8 = document.querySelector('.box8');
// var box9 = document.querySelector('.box9');

// Event listeners

window.addEventListener('load', displayTurn);
boardGrid.addEventListener('click', function(event) {
    selectBox(event)
    displayToken(event)
    // var eventTargetClass = event.target.className
    // for (var i = 0; i < boxes.length; i++) {
    //     if(boxes[i].classList.contains(eventTargetClass))
    //     displayToken(boxes)
    // } 
 });
// box1.addEventListener('click', function() {
//     displayToken(box1)});
// box2.addEventListener('click', function() {
//     displayToken(box2)});
// box3.addEventListener('click', function() {
//     displayToken(box3)});
// box4.addEventListener('click', function() {
//     displayToken(box4)});
// box5.addEventListener('click', function() {
//     displayToken(box5)});
// box6.addEventListener('click', function() {
//     displayToken(box6)});
// box7.addEventListener('click', function() {
//     displayToken(box7)});
// box8.addEventListener('click', function() {
//     displayToken(box8)});
// box9.addEventListener('click', function() {
//     displayToken(box9)});


//functions
function createPlayer(name, id, token, wins, turn) {
    return {
        name: name,
        id: id,
        token: token,
        wins: wins,
        turn: turn,
    }
}

var firePlayer = createPlayer('fire', 1, '🔥', 0, true);
var waterPlayer = createPlayer('water', 2, '💧', 0, false);

var players = [firePlayer, waterPlayer];

 var gameBoardBoxes = [] 

window.addEventListener('load', displayTurn);

// Function(s) to display the game board and user data

function selectBox(event) {
    var eventTargetClass = event.target.className
    for (var i = 0; i < boxes.length; i++) {
        if(boxes[i].className === eventTargetClass) {
            console.log(boxes[i].className)
           gameBoardBoxes.push(boxes[i])
        }
    }
    return gameBoardBoxes
}

function displayToken(event) {
    var selectedBox = gameBoardBoxes[gameBoardBoxes.length -1]
    console.log('selectBox', selectedBox)
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
 
// function stopRepeats() {
//     for (var i = 0; i < gameBoardBoxes.length; i++) {
//         if(gameBoardBoxes[i].occupied) {
//            return displayToken()
//         } else {
//             return
//         }
//     }   
// }

// A function that creates the objects that store each players’ informations - properties should include: id (ex: 'one'), token (ex: '⭐️'), wins (ex: 0)

function increaseWins(players) {
   for (var i = 0; i < players.length; i++) {
    players[i].wins ++
   }
    return players;
}

// A function called increaseWins - increases the count of a player’s wins (should work for either player)

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



