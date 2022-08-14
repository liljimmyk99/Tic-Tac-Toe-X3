import { LitElement, html, css } from 'lit';

export class Tile extends LitElement {
  static get properties() {
    return {
      turn: { type: String },
      enabled: { type: Boolean },
    };
  }

  static get tag() {
    return 'tile';
  }

  static get styles() {
    return css`
      :host {
        height: 50px;
        width: 50px;
      }
    `;
  }

  constructor() {
    super();
    this.turn = '';
    this.enabled = true;
  }

  render() {
    return html`
      <main>
        <h1>${this.title}</h1>
      </main>
    `;
  }
}
