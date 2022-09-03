import { LitElement, html, css } from 'lit';
import './Tile.js';

export class TicTacToe extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      turn: { type: String },
      numTurns: { type: Number },
      values: { type: Array },
      endGame: { type: Boolean },
    };
  }

  static get tag() {
    return 'tic-tac-toe';
  }

  static get styles() {
    return css`
      p {
        font-size: 25px;
      }
      .row {
        display: flex;
      }
      button {
        height: 150px;
        width: 150px;
        font-size: 50px;
        background-color: #fceec7;
      }
      #resetbtn,
      .setupbtns {
        height: 100px;
        width: 100px;
        font-size: 25px;
      }
      #resetgrp {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    `;
  }

  constructor() {
    super();
    this.title = 'My app';
    this.endGame = false;
    this.decideFirst = false;
    this.turn = ' ';
    this.numTurns = 0;
    this.values = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }

  resetGame() {
    this.endGame = false;
    this.decideFirst = false;
    this.turn = ' ';
    this.numTurns = 0;
    this.values = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'values') {
        switch (this.turn) {
          case 'X':
            this.checkWinner();
            this.turn = 'O';
            break;
          case 'O':
            this.checkWinner();
            this.turn = 'X';
            break;
          default:
            console.log('ERROR');
        }
      }
      if (propName === 'numTurns') {
        if (this.numTurns === 9) {
          this.endGame = true;
        }
      }
      if (propName === 'endGame') {
        this.shadowRoot.querySelector(
          '#resetText'
        ).innerHTML = `Ends in a draw play again?`;
      }
    });
  }

  // eslint-disable-next-line class-methods-use-this
  checkWinner() {
    if (this.checkAcross() || this.checkDown() || this.checkDiagonal()) {
      this.endGame = true;
      setTimeout(() => {
        this.shadowRoot.querySelector(
          '#resetText'
        ).innerHTML = `${this.turn} is the winner!  Play again?`;
      }, 1);

      this.shadowRoot.querySelector('#resetbtn').style.visibility = 'visible';
    }
  }

  checkAcross() {
    if (
      this.values[0][0] === this.values[0][1] &&
      this.values[0][0] === this.values[0][2] &&
      this.values[0][0] !== null
    ) {
      return true;
    }
    if (
      this.values[1][0] === this.values[1][1] &&
      this.values[1][0] === this.values[1][2] &&
      this.values[1][0] !== null
    ) {
      return true;
    }
    if (
      this.values[2][0] === this.values[2][1] &&
      this.values[2][0] === this.values[2][2] &&
      this.values[2][0] !== null
    ) {
      return true;
    }
    return false;
  }

  checkDiagonal() {
    if (
      this.values[0][0] === this.values[1][1] &&
      this.values[0][0] === this.values[2][2] &&
      this.values[0][0] !== null
    ) {
      return true;
    }
    if (
      this.values[0][2] === this.values[1][1] &&
      this.values[0][2] === this.values[2][0] &&
      this.values[0][2] !== null
    ) {
      return true;
    }
    return false;
  }

  checkDown() {
    if (
      this.values[0][0] === this.values[1][0] &&
      this.values[0][0] === this.values[2][0] &&
      this.values[0][0] !== null
    ) {
      return true;
    }
    if (
      this.values[0][1] === this.values[1][1] &&
      this.values[0][1] === this.values[2][1] &&
      this.values[0][1] !== null
    ) {
      return true;
    }
    if (
      this.values[0][2] === this.values[1][2] &&
      this.values[0][2] === this.values[2][2] &&
      this.values[0][2] !== null
    ) {
      return true;
    }
    return false;
  }

  startGame(e) {
    this.decideFirst = true;
    this.turn = e.target.textContent;
    console.log(e.target);
  }

  renderSetup() {
    return html`
      <p>Who goes first?</p>
      <button class="setupbtns" @click="${this.startGame}">X</button>
      <button class="setupbtns" @click="${this.startGame}">O</button>
    `;
  }

  renderReset() {
    return html`
      <p id="resetText"></p>
      <button @click="${this.resetGame}" id="resetbtn">Reset</button>
    `;
  }

  render() {
    return html` ${this.decideFirst ? this.renderGrid() : this.renderSetup()} `;
  }

  renderGrid() {
    return html`
      <div id="resetgrp">${this.endGame ? this.renderReset() : html``}</div>
      <div id="grid">
        <div class="row">
          <tile-button
            id="0"
            @click=${this.handleClick}
            ?disabled=${this.endGame}
            turn=${this.turn}
          ></tile-button
          ><tile-button
            id="1"
            @click=${this.handleClick}
            ?disabled=${this.endGame}
            turn=${this.turn}
          ></tile-button
          ><tile-button
            id="2"
            @click=${this.handleClick}
            ?disabled=${this.endGame}
            turn=${this.turn}
          ></tile-button>
        </div>
        <div class="row">
          <tile-button
            id="3"
            @click=${this.handleClick}
            ?disabled=${this.endGame}
            turn=${this.turn}
          ></tile-button
          ><tile-button
            id="4"
            @click=${this.handleClick}
            ?disabled=${this.endGame}
            turn=${this.turn}
          ></tile-button
          ><tile-button
            id="5"
            @click=${this.handleClick}
            ?disabled=${this.endGame}
            turn=${this.turn}
          ></tile-button>
        </div>
        <div class="row">
          <tile-button
            id="6"
            @click=${this.handleClick}
            ?disabled=${this.endGame}
            turn=${this.turn}
          ></tile-button
          ><tile-button
            id="7"
            @click=${this.handleClick}
            ?disabled=${this.endGame}
            turn=${this.turn}
          ></tile-button
          ><tile-button
            id="8"
            @click=${this.handleClick}
            ?disabled=${this.endGame}
            turn=${this.turn}
          ></tile-button>
        </div>
      </div>
    `;
  }

  handleClick(e) {
    const { id } = e.target;
    const arr = [...this.values];
    switch (id) {
      case '0':
        arr[0][0] = e.target.value;
        this.values = arr;
        break;
      case '1':
        arr[0][1] = e.target.value;
        break;
      case '2':
        arr[0][2] = e.target.value;
        break;
      case '3':
        arr[1][0] = e.target.value;
        break;
      case '4':
        arr[1][1] = e.target.value;
        break;
      case '5':
        arr[1][2] = e.target.value;
        break;
      case '6':
        arr[2][0] = e.target.value;
        break;
      case '7':
        arr[2][1] = e.target.value;
        break;
      case '8':
        arr[2][2] = e.target.value;
        break;
      default:
        console.log('Error ID is not valid');
    }
    this.values = arr;
    this.numTurns += 1;
  }
}
