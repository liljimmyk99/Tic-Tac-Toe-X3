
function goesFirst(event){
    console.log("Clicked")
    // Get the button clicked and know if it is X or O
    console.log(event)
    // Save this state somewhere to this application

    // Show the board and have all the buttons, onHover show the letter going first
}

function selected(letter, event) {
    // When button is selected, have the letter be placed inside
    // Make it kn
}

function dqs(target){
    console.log(document.querySelector(target))
    return document.querySelector(target)
}

function init(){
    Window.onload = () =>{
    document.querySelector("#x-button").addEventListener("click",() => console.log("kkkkkclickedkkkkkk"))
    document.querySelector("#o-button").addEventListener("click", event => goesFirst)
    }
}
init()