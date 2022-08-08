
// https://stackoverflow.com/questions/10000083/javascript-event-handler-with-parameters
var game = {
    turn: "X",
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
    winner: false
}
function goesFirst(button){
    // Get the button clicked and know if it is X or O
    let letter = button.innerHTML
    // Save this state somewhere to this application
    game.turn = letter;
    // Show the board and have all the buttons, onHover show the letter going first
    dqs("#btn-group").remove()
    dqs("#msg").innerHTML=`It is ${letter}'s turn`
    dqs("#game-board").style.visibility = 'visible'
}

function selected(button) {
    // When button is selected, have the letter be placed inside
    button.innerHTML = game.turn
    let row = button.dataset.row
    let col = button.dataset.column
    button.disabled = "disabled"
    game.board[row][col] = game.turn
    console.log(game.board)
    changeTurn()
    checkWinner()
}

function changeTurn(){
    if (game.turn === "X"){
        game.turn = "O"
    } else {
        game.turn = "X"
    }
    dqs("#msg").innerHTML=`It is ${game.turn}'s turn`
}



function checkWinner(){
    if (checkAcross() || checkDown() || checkDiagonal()) {
		game.winner = true;
        console.log("Winner")
        dqs("body").style.background = "purple"
        return true
	} else {
		return false
	}
}

function checkDiagonal(){
    if(game.board[0][0] === game.board[1][1] && game.board[0][0] == game.board[2][2] && game.board[0][0] !== null){
        return true
    } else if (game.board[0][2] === game.board[1][1] && game.board[0][2] == game.board[2][0] && game.board[0][2] !== null){
        return true
    } else {
        return false
    }
}

function checkDown(){
    if (game.board[0][0] === game.board[1][0] && game.board[0][0] === game.board[2][0] && game.board[0][0] !== null) {
		return true
	} else if (game.board[0][1] === game.board[1][1] && game.board[0][1] === game.board[2][1] && game.board[0][1] !== null) {
		return true
	} else if (game.board[0][2] === game.board[1][2] && game.board[0][2] === game.board[2][2] && game.board[0][2] !== null) {
		return true
	} else {
		return false
	}
}

function checkAcross()  {
	if (game.board[0][0] === game.board[0][1] && game.board[0][0] === game.board[0][2] && game.board[0][0] !== null) {
		return true
	} else if (game.board[1][0] === game.board[1][1] && game.board[1][0] === game.board[1][2] && game.board[1][0] !== null) {
		return true
	} else if (game.board[2][0] === game.board[2][1] && game.board[2][0] === game.board[2][2] && game.board[2][0] !== null) {
		return true
	} else {
		return false
	}
}
function dqs(target){
    return document.querySelector(target)
}