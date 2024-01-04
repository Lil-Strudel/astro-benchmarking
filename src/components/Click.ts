import { LitElement, html } from "lit";
import { state } from "lit/decorators.js";

export class Click extends LitElement {
  static properties = {
    _cound: { state: true },
  };

  constructor() {
    super();
    this._count = 0;
  }

  incrementCount = () => {
    this._count = this._count + 1;
    this.requestUpdate();
  };

  render() {
    return html` <div class="flex flex-col justify-center">
      <h1 class="text-xl">${this._count}</h1>
      <button
        @click=${this.incrementCount}
        class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Click Me
      </button>
    </div>`;
  }
}

customElements.define("my-click", Click);
