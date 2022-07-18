package main

import (
	"fmt"
)

var board [3][3]string
var winner bool

func main() {
	fmt.Println("Welcome to Tic-Tac-Toe")
	winner = false
	board = [3][3]string{{"1", "2", "3"}, {"4", "5", "6"}, {"7", "8", "9"}}
	printBoard(board)
	startGame()

}

func startGame() {
	fmt.Println("\033[2J")
	fmt.Println("X's go First")
	for !winner {
		xTurn()
		if winner {
			continue
		}
		oTurn()
	}

}

func xTurn() {

	choice := getUserChoice()
	chooseSpace(choice, "X")
	printBoard(board)
	if checkWin() {
		fmt.Println("Congrats you have won!")
	}
}

func oTurn() {

	choice := getUserChoice()
	chooseSpace(choice, "O")
	printBoard(board)
	if checkWin() {
		fmt.Println("Congrats you have won!")
	}
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

func checkWin() bool {
	/*

		Ways to win: across the rows, down the row, or diagonal
		across [1, 2, 3][4, 5, 6][7,8,9]
		down [1,4,7][2,5,8],[3,6,9]
		diagonal[1,5,9][3,5,7]
	*/
	if checkAcross() || checkDown() || checkDiagonal() {
		winner = true
		return true
	} else {
		return false
	}

}

func checkDiagonal() bool {
	if (board[0][0] == board[1][1]) && (board[0][0] == board[2][2]) {
		return true
	} else if (board[0][2] == board[1][1]) && (board[0][2] == board[2][0]) {
		return true
	} else {
		return false
	}
}

func checkDown() bool {
	if (board[0][0] == board[1][0]) && (board[0][0] == board[2][0]) {
		return true
	} else if (board[0][1] == board[1][1]) && (board[0][1] == board[2][1]) {
		return true
	} else if (board[0][2] == board[1][2]) && (board[0][2] == board[2][2]) {
		return true
	} else {
		return false
	}
}

func checkAcross() bool {
	if (board[0][0] == board[0][1]) && (board[0][0] == board[0][2]) {
		return true
	} else if (board[1][0] == board[1][1]) && (board[1][0] == board[1][2]) {
		return true
	} else if (board[2][0] == board[2][1]) && (board[2][0] == board[2][2]) {
		return true
	} else {
		return false
	}
}
