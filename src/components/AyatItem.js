import ShareIcon from "../assets/icon/share.svg";
import CopyIcon from "../assets/icon/copy.svg";
import { CopyClipBoard } from "../utils/CopyClipboard";

class AyatItem extends HTMLElement {
  constructor() {
    super();
    this.uid = "";
    this.no = "";
    this.ayat = "";
    this.indonesian = "";
    this.copyToClipBoard = this.copyToClipBoard.bind(this);
  }

  connectedCallback() {
    this.uid = this.getAttribute("uid");
    this.no = this.getAttribute("no");
    this.ayat = this.getAttribute("ayat");
    this.indonesian = this.getAttribute("indonesian");
    this.render();
  }

  copyToClipBoard() {
    let text = `${this.ayat}\n${this.indonesian}`;
    CopyClipBoard(text);
  }

  render() {
    this.innerHTML = `
        <div class="ayat-item" id="${this.no}">
            <div>
              <small class="no">${this.no}</small>
              <p class="ayat">${this.ayat}</p>
            </div>
            <p class="indonesian">${this.indonesian}</p>
            <div class="option">
                <img id="copy" src="${CopyIcon}" alt="icon"/>
                <img src="${ShareIcon}" alt="icon"/> 
            </div>
        </div>
    `;

    this.querySelector("#copy").addEventListener("click", this.copyToClipBoard);
  }
}

customElements.define("ayat-item", AyatItem);
