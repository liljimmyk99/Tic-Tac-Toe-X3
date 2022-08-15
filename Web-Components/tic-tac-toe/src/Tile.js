import { LitElement, html, css } from 'lit';

export class Tile extends LitElement {
  static get properties() {
    return {
      turn: { type: String },
      value: { type: String },
      disabled: { type: Boolean },
    };
  }

  static get tag() {
    return 'tile-button';
  }

  static get value() {
    return this.turn;
  }

  static get styles() {
    return css`
      :host([disabled]) {
        pointer-events: none;
      }
      :host,
      button {
        height: 150px;
        width: 150px;
        font-size: 50px;
        background-color: #fceec7;
      }
      p {
        font-family: 'Courier New', monospace;
      }
    `;
  }

  constructor() {
    super();
    this.turn = 'X';
    this.value = ' ';
    this.enabled = false;
  }

  updated(changedProperties) {
    if (super.updated) {
      super.updated(changedProperties);
    }
  }

  handleMouseover() {
    if (!this.disabled) {
      const text = this.shadowRoot.querySelector('p');
      text.innerHTML = this.turn;
    }
  }

  handleMouseOut() {
    if (!this.disabled) {
      const text = this.shadowRoot.querySelector('p');
      text.innerHTML = ' ';
    }
  }

  handleClick() {
    if (!this.disabled) {
      const text = this.shadowRoot.querySelector('p');
      text.innerHTML = this.turn;
      this.disabled = true;
      this.value = this.turn;
      // this.shadowRoot.removeEventListener("click", this.handleClick, true)
      // this.shadowRoot.removeEventListener("mouseout", this.handleMouseOut);
    }
  }

  render() {
    return html`
      <button
        @mouseover="${this.handleMouseover}"
        @mouseout="${this.handleMouseOut}"
        @click="${this.handleClick}"
      >
        <p></p>
      </button>
    `;
  }
}
