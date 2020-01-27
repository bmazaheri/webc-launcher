import { LitElement, html, css } from 'lit-element';

class SMLauncher extends LitElement {
  render(){
    return html`
      Bot: <span class="bot-name">${this.bot}</span>!
      <div>heyha!</div>
    `;
  }

  firstUpdated(changedProperties) {
    this.addEventListener("click", this._onClick);
  }

  static get properties() {
    return { 
      bot: { type: String }
    };
  }

    _onClick(event) {
    this.classList.toggle("open");
    const value = this.className.indexOf('open') > -1 ? "200px" : "70px";
    this.style.width = value;
    this.style.height = value;
  }

  static get styles() {
    return css`
    :host {
      display: block;
      position: fixed;
      right: 100px;
      bottom: 100px;
      width: 70px;
      height: 70px;
      background-color: yellow;
    }
    .bot-name {
      color: green;
      background-color: white;
    }`;
  } 
}

customElements.define("sm-launcher", SMLauncher);

// import { PolymerElement, html } from "@polymer/polymer";

// class SMLauncher extends PolymerElement {
//   static get properties() {
//     return { bot: String };
//   }

//   static get template() {
//     return html`
//       <style>
//         :host {
//           position: fixed;
//           right: 100px;
//           bottom: 100px;
//           width: 70px;
//           height: 70px;
//           background-color: yellow;
//         }
//         .bot-name {
//           color: green;
//         }
//       </style>
//       Bot: <span class="bot-name">[[bot]]</span>!
//       <div>heyha!</div>
//     `;
//   }

//   ready() {
//     super.ready();
//     this.addEventListener("click", this._onClick);
//   }

//   _onClick(event) {
//     this.classList.toggle("open");
//     const value = this.className.indexOf('open') > -1 ? "200px" : "70px";
//     this.style.width = value;
//     this.style.height = value;
//   }
// }

// customElements.define("sm-launcher", SMLauncher);
