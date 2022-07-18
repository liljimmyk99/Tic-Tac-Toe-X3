package main

import (
	"fmt"
)

var board [3][3]string

func main() {
	fmt.Println("Welcome to Tic-Tac-Toe")
	board = [3][3]string{{"1", "2", "3"}, {"4", "5", "6"}, {"7", "8", "9"}}
	printBoard(board)
	startGame()

}

func startGame() {
	fmt.Println("X's go First")
	xTurn()
	oTurn()
	printBoard(board)
}

func xTurn() {
	choice := getUserChoice()
	chooseSpace(choice, "X")
}

func oTurn() {
	choice := getUserChoice()
	chooseSpace(choice, "O")
}

func chooseSpace(choice int, letter string) {
	switch choice {
	case 1:
		if checkSpace(board[0][0]) {
			board[0][0] = letter
		} else {
			redo(letter)
		}
	case 2:
		if checkSpace(board[0][1]) {
			board[0][1] = letter
		} else {
			redo(letter)
		}
	case 3:
		if checkSpace(board[0][2]) {
			board[0][2] = letter
		} else {
			redo(letter)
		}
	case 4:
		if checkSpace(board[1][0]) {
			board[1][0] = letter
		} else {
			redo(letter)
		}
	case 5:
		if checkSpace(board[1][1]) {
			board[1][1] = letter
		} else {
			redo(letter)
		}
	case 6:
		if checkSpace(board[1][2]) {
			board[1][2] = letter
		} else {
			redo(letter)
		}
	case 7:
		if checkSpace(board[2][0]) {
			board[2][0] = letter
		} else {
			redo(letter)
		}
	case 8:
		if checkSpace(board[2][1]) {
			board[2][1] = letter
		} else {
			redo(letter)
		}
	case 9:
		if checkSpace(board[2][2]) {
			board[2][2] = letter
		} else {
			redo(letter)
		}
	}

}

func redo(letter string) {
	fmt.Println("ERROR: Space is already occuiped, please try again")
	if letter == "X" {
		xTurn()
	} else {
		oTurn()
	}
}
func checkSpace(value string) bool {
	if value == "X" || value == "O" {
		return false
	} else {
		return true
	}
}

// Prints the values currently in board array for the player
func printBoard(values [3][3]string) {
	for i := 0; i < 3; i++ {
		fmt.Print(values[i][0])
		fmt.Print(" | ")
		fmt.Print(values[i][1])
		fmt.Print(" | ")
		fmt.Println(values[i][2])
	}

}

// Gets the position the user wants place an X or O
func getUserChoice() int {
	fmt.Println("Which space would you like to choose?")
	printBoard(board)
	var choice int
	fmt.Scanln(&choice)
	return choice
}
