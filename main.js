var allBlocks = document.querySelectorAll('.block');
var yellowFlower = document.querySelector('.yellow-flower-turn');
var pinkFlower = document.querySelector('.pink-flower-turn');
var yellowFlowerWins = document.querySelector('.yellow-flower-wins');
var pinkFlowerWins = document.querySelector('.pink-flower-wins')
var winner = document.querySelector('.winner')
var draw = document.querySelector('.draw')
var playerYellow = createPlayerOne() 
var playerPink = createPlayerTwo() 

var game = createGame(playerYellow,playerPink)
var currentPlayer = game.player1 
var playerOneWins = [
    // Horizontal wins
    ['🌼', '🌼', '🌼', '', '', '', '', '', ''],
    ['', '', '', '🌼', '🌼', '🌼', '', '', ''],
    ['', '', '', '', '', '', '🌼', '🌼', '🌼'],

    // Vertical wins
    ['🌼', '', '', '🌼', '', '', '🌼', '', ''],
    ['', '🌼', '', '', '🌼', '', '', '🌼', ''],
    ['', '', '🌼', '', '', '🌼', '', '', '🌼'],

    // Diagonal wins
    ['🌼', '', '', '', '🌼', '', '', '', '🌼'],
    ['', '', '🌼', '', '🌼', '', '🌼', '', ''],
];
var playerTwoWins = [
    // # Horizontal rows
    ["🌸", "🌸", "🌸", "", "", "", "", "", ""],
    ["", "", "", "🌸", "🌸", "🌸", "", "", ""],
    ["", "", "", "", "", "", "🌸", "🌸", "🌸"],
    // # Vertical columns
    ["🌸", "", "", "🌸", "", "", "🌸", "", ""],
    ["", "🌸", "", "", "🌸", "", "", "🌸", ""],
    ["", "", "🌸", "", "", "🌸", "", "", "🌸"],
    // # Diagonals
    ["🌸", "", "", "", "🌸", "", "", "", "🌸"],
    ["", "", "🌸", "", "🌸", "", "🌸", "", ""],
    ];


for (var i = 0; i < allBlocks.length; i++) {
    allBlocks[i].addEventListener('click', function(event) {
            if (event.target.innerText === "" && !game.gameOver) {
                addPlayerToken(event,game,playerYellow,playerPink);
                determineCurrentPlayer(game);
                displayPlayerOneWins(game,playerYellow);
                displayPlayerTwoWins(game, playerPink);     
                checkForDraw(game);
                }
           })
        }


function createPlayerOne() {
    var playerYellow = {
        id: 'one',
        token: '🌼',
        win: 0,
    }
    return playerYellow;
}

function createPlayerTwo() {
    var playerPink = {
        id: 'two', 
        token: '🌸', 
        win: 0, 
    }
    return playerPink;
}

function createGame(playerYellow,playerPink) {
    var game = {
        player1: playerYellow,
        player2: playerPink,
        stateOfGame: ["","","","","","","","",""],
        gameOver: false,
        gameWon: false,
    }
    return game
}

function addPlayerToken(event,game) {
    var num = event.target.id
    if (event.target.innerText === "") { 
        game.stateOfGame[num] = currentPlayer.token 
        allBlocks[num].innerText = currentPlayer.token 
        allBlocks[num].classList.add('disabled-block');
    }
}


function determineCurrentPlayer(game) {
    if (currentPlayer === game.player1) {
        currentPlayer = game.player2
        yellowFlower.classList.add('hidden')
        pinkFlower.classList.remove('hidden')
    } else {
        currentPlayer = game.player1
        pinkFlower.classList.add('hidden')
        yellowFlower.classList.remove('hidden') 
    }
}

function displayPlayerOneWins(game) {
    if (game.gameOver) {
        return; 
    }
    for (var i = 0; i < playerOneWins.length; i++) {
        var everyArray = playerOneWins[i] 
        var allMatch = everyArray.every((element,index) => element === '' || element === game.stateOfGame[index])
        
        if (allMatch && !game.gameWon) {
            game.player1.win += 1;   
            winner.classList.remove('hidden')
            winner.innerText = `${playerYellow.token} won!`
            yellowFlowerWins.innerText = `${playerYellow.win} wins`;
            pinkFlower.classList.add('hidden')
            yellowFlower.classList.add('hidden');
            allBlocks.disabled = true; 
            game.gameOver = true;
            game.gameWon = true;
            setTimeout(reloadGame,1000);
        }
    }
}

function displayPlayerTwoWins(game) {
    if (game.gameOver) {
        return; 
    }
    if (game.gameWon) {
        return;
    }
    for (var i = 0; i < playerTwoWins.length; i++) {
        var eachPlayerTwoIndex = playerTwoWins[i] 
        
        var allMatch = eachPlayerTwoIndex.every((element,index) => element === '' || element === game.stateOfGame[index])

        if (allMatch && !game.gameWon) {
            game.player2.win += 1; 
            winner.classList.remove('hidden')
            winner.innerText = `${playerPink.token} won!`
            pinkFlowerWins.innerText = `${playerPink.win} wins`;
            yellowFlower.classList.add('hidden');
            pinkFlower.classList.add('hidden');
            allBlocks.disabled = true;
            game.gameOver = true;
            game.gameWon = true;
            setTimeout(reloadGame,1000);
        } 
    }   
}


function reloadGame() {
    game.stateOfGame = ["","","","","","","","",""];
    for (var i=0;i<allBlocks.length;i++) {
            allBlocks[i].innerText = "";
            allBlocks[i].classList.remove('disabled-block');
    }
    game.gameOver = false;
    game.gameWon = false; 
    if (currentPlayer === game.player1) {
        winner.classList.add('hidden')
        draw.classList.add('hidden');
        yellowFlower.classList.remove('hidden')
        pinkFlower.classList.add('hidden')
        yellowFlower.innerText = `It's ${playerYellow.token} turn`
    } else {
        winner.classList.add('hidden')
        draw.classList.add('hidden');
        pinkFlower.classList.remove('hidden')
        yellowFlower.classList.add('hidden')
        pinkFlower.innerText = `It's ${playerPink.token} turn`
    }
}


function checkForDraw(game) {
    var isDraw = true;
    for (var i = 0; i<game.stateOfGame.length; i++) {
        if (game.stateOfGame[i] === '') {
            isDraw = false;
            break;
        }
    }
    if (!game.gameWon && isDraw) {
        console.log("It's a draw!");
        draw.classList.remove('hidden');
        yellowFlower.classList.add('hidden');
        pinkFlower.classList.add('hidden');
        game.gameOver = true;
        setTimeout(reloadGame,2000);
    }
}
