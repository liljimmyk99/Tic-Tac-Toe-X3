import { LitElement, html, css } from 'lit';

export class TicTacToe extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get tag() {
    return 'tic-tac-toe';
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        background-color: var(--tic-tac-toe-background-color);
      }
    `;
  }

  constructor() {
    super();
    this.title = 'My app';
  }

  render() {
    return html`
      <main>
        <h1>${this.title}</h1>
      </main>
    `;
  }
}
