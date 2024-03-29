// import ConfettiGenerator from "confetti-js";
// https://stackoverflow.com/questions/10000083/javascript-event-handler-with-parameters
var game = {
    turn: "X",
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
    winner: false,
    numTurns: 1
}

var removedNodes

/*
let buttons = document.querySelectorAll('.game-settings')
for (button of buttons){
    console.log(button)
    button.addEventListener('click', goesFirst(button))
}

*/

function goesFirst(button){
    // Get the button clicked and know if it is X or O
    let letter = button.innerHTML
    // Save this state somewhere to this application
    game.turn = letter;
    changeAllButtonShadows()
    // Show the board and have all the buttons, onHover show the letter going first
    dqs("#msg").innerHTML=`It is ${letter}'s turn`
    removedNodes = Array.from(dqs("#btn-group").childNodes)
    for (node of removedNodes){
        node.remove()
    }
    dqs("#game-board").style.visibility = 'visible'
}

function changeButtonStyle(button){
    if (game.turn === 'X'){button.style.backgroundColor = 'green'}
    else {button.style.backgroundColor = 'red'}
    
}

function selected(button, buttonRow, buttonColumn) {
    game.numTurns += 1
    // When button is selected, have the letter be placed inside
    button.disabled = "disabled"
    
    game.board[buttonRow][buttonColumn] = game.turn
    button.innerHTML = ""
    changeButtonStyle(button)
    
    let p = document.createElement('p')
    let node = document.createTextNode(game.turn)
    p.appendChild(node)

    button.appendChild(p)
    console.log(game.board)
    if(!checkWinner()){
        changeTurn()
    }
    
}

function changeTurn(){
    if(game.numTurns > 9){
        draw()
        return
    }
    if (game.turn === "X"){
        game.turn = "O"
    } else {
        game.turn = "X"
    }
    changeAllButtonShadows()
    dqs("#msg").innerHTML=`It is ${game.turn}'s turn`
}

function checkWinner(){
    if (checkAcross() || checkDown() || checkDiagonal()) {
		game.winner = true;
        disableRemainButtons()
        console.log("Winner")
        dqs("#msg").innerHTML=`${game.turn} is the Winner`
        // let confetti = new ConfettiGenerator(dqs('body'))
        // confetti.render()
        dqs("body").style.backgroundImage = "radial-gradient(circle at center, green, lime)"
        dqs("#reset").style.visibility = "visible"
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

function changeAllButtonShadows(){
    let buttons = document.querySelectorAll(".grid-btn")
    console.log(buttons)
    for (button of buttons){
        if(button.innerHTML.length <= 1){
            button.innerHTML = game.turn
        } else {
            console.log(`${button.id} has child nodes: first child is ${button.firstChild}: inner html length ${button.innerHTML.length}`)
        }
    }
}

function draw(){
    dqs("#msg").innerHTML=`So we have a draw`
    dqs("body").style.backgroundImage = "radial-gradient(circle at center, white , blue)"
    dqs("#reset").style.visibility = "visible"
}

function disableRemainButtons(){
    let buttons = document.querySelectorAll(".grid-btn")
    for (button of buttons){
        if(button.innerHTML.length <= 1){
            button.innerHTML = " "
            button.disabled = "disabled"
        }
    }
}

function reset(){
    game = {
        turn: "X",
        board: [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ],
        winner: false,
        numTurns: 1
    }

    let buttons = document.querySelectorAll(".grid-btn")
    for (button of buttons){
            button.innerHTML = " "
            button.disabled = false
            button.style.backgroundColor = '#fceec7'
    }
    let btnGrp = dqs("#btn-group")
    for (node of removedNodes){
        btnGrp.appendChild(node)
    }
    dqs("#game-board").style.visibility = 'hidden'
    dqs("body").style.removeProperty("background-image")
    //dqs("#btn-group").style.visibility = "visible"
    dqs("#msg").innerHTML=`Who goes first?`
    dqs("#reset").style.visibility = "hidden"
    
}