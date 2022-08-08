
// https://stackoverflow.com/questions/10000083/javascript-event-handler-with-parameters
var game = {
    turn: "X",
    board: [[],[],[]],
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

function selected(letter, event) {
    // When button is selected, have the letter be placed inside
    // Make it kn
}

function dqs(target){
    console.log(document.querySelector(target))
    return document.querySelector(target)
}