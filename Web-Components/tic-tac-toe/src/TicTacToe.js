import { LitElement, html, css } from 'lit';
import './Tile.js';

export class TicTacToe extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      turn: { type: String },
      values: { type: Array },
      winner: { type: Boolean },
    };
  }

  static get tag() {
    return 'tic-tac-toe';
  }

  static get styles() {
    return css`
      .row {
        display: flex;
      }
    `;
  }

  constructor() {
    super();
    this.title = 'My app';
    this.winner = false;
    this.decideFirst = false;
    this.turn = ' ';
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
            this.turn = 'O';
            break;
          case 'O':
            this.turn = 'X';
            break;
          default:
            console.log('ERROR');
        }
      }
    });
  }

  startGame(e) {
    console.log(`Turn before: ${this.turn}`);
    this.decideFirst = true;
    this.turn = e.target.textContent;
    console.log(e.target);
    console.log(`Turn After: ${this.turn}`);
  }

  test() {
    console.log('clicked');
    this.winner = true;
  }

  render() {
    return html`
      <button @click=${this.test}>test disabled</button>
      ${this.decideFirst
        ? this.renderGrid()
        : html`
            <p>Who goes First</p>
            <button @click="${this.startGame}">X</button>
            <button @click="${this.startGame}">O</button>
          `}
    `;
  }

  renderGrid() {
    return html`
      <div id="grid">
        <div class="row">
          <tile-button
            id="0"
            @click=${this.handleClick}
            ?disabled=${this.winner}
            turn=${this.turn}
          ></tile-button
          ><tile-button
            id="1"
            @click=${this.handleClick}
            ?disabled=${this.winner}
            turn=${this.turn}
          ></tile-button
          ><tile-button
            id="2"
            @click=${this.handleClick}
            ?disabled=${this.winner}
            turn=${this.turn}
          ></tile-button>
        </div>
        <div class="row">
          <tile-button
            id="3"
            @click=${this.handleClick}
            ?disabled=${this.winner}
            turn=${this.turn}
          ></tile-button
          ><tile-button
            id="4"
            @click=${this.handleClick}
            ?disabled=${this.winner}
            turn=${this.turn}
          ></tile-button
          ><tile-button
            id="5"
            @click=${this.handleClick}
            ?disabled=${this.winner}
            turn=${this.turn}
          ></tile-button>
        </div>
        <div class="row">
          <tile-button
            id="6"
            @click=${this.handleClick}
            ?disabled=${this.winner}
            turn=${this.turn}
          ></tile-button
          ><tile-button
            id="7"
            @click=${this.handleClick}
            ?disabled=${this.winner}
            turn=${this.turn}
          ></tile-button
          ><tile-button
            id="8"
            @click=${this.handleClick}
            ?disabled=${this.winner}
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
  }
}
