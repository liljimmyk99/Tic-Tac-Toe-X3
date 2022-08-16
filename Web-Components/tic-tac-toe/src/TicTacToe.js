import { LitElement, html, css } from 'lit';
import './Tile.js';

export class TicTacToe extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      turn: { type: String },
      values: { type: Array },
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
    this.decideFirst = false;
    this.turn = 'O';
    this.values = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }

  startGame(e) {
    this.decideFirst = true;
    this.turn = e.target.textContent;
    console.log(e.target);
  }

  render() {
    return html`
      ${this.decideFirst
        ? this.renderGrid()
        : html`
            <p>Who goes First</p>
            <button @click="${this.startGame}">O</button>
            <button @click="${this.startGame}">X</button>
          `}
    `;
  }

  renderGrid() {
    return html`
      <div id="grid">
        <div class="row">
          <tile-button id="0" turn=${this.turn}></tile-button
          ><tile-button id="1" turn=${this.turn}></tile-button
          ><tile-button id="2" turn=${this.turn}></tile-button>
        </div>
        <div class="row">
          <tile-button id="3" turn=${this.turn}></tile-button
          ><tile-button id="4" turn=${this.turn}></tile-button
          ><tile-button id="5" turn=${this.turn}></tile-button>
        </div>
        <div class="row">
          <tile-button id="6" turn=${this.turn}></tile-button
          ><tile-button id="7" turn=${this.turn}></tile-button
          ><tile-button id="8" turn=${this.turn}></tile-button>
        </div>
      </div>
    `;
  }
}
