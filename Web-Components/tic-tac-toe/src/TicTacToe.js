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
    this.turn = 'O';
  }

  render() {
    return html`
      <div>
        <div id="row0" class="row">
          <tile-button turn=${this.turn}></tile-button
          ><tile-button turn=${this.turn}></tile-button
          ><tile-button turn=${this.turn}></tile-button>
        </div>
        <div id="row1" class="row">
          <tile-button turn=${this.turn}></tile-button
          ><tile-button turn=${this.turn}></tile-button
          ><tile-button turn=${this.turn}></tile-button>
        </div>
        <div id="row2" class="row">
          <tile-button turn=${this.turn}></tile-button
          ><tile-button turn=${this.turn}></tile-button
          ><tile-button turn=${this.turn}></tile-button>
        </div>
      </div>
    `;
  }
}
