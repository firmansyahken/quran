import ShareIcon from "../assets/icon/share.svg";
import CopyIcon from "../assets/icon/copy.svg";
import { CopyClipBoard } from "../utils/CopyClipboard";
import { API_WA } from "../utils/Constant";

class AyatItem extends HTMLElement {
  constructor() {
    super();
    this.uid = "";
    this.surah = "";
    this.no = "";
    this.ayat = "";
    this.indonesian = "";
    this.copyToClipBoard = this.copyToClipBoard.bind(this);
    this.shareAyat = this.shareAyat.bind(this);
  }

  connectedCallback() {
    this.uid = this.getAttribute("uid");
    this.surah = this.getAttribute("surah");
    this.no = this.getAttribute("no");
    this.ayat = this.getAttribute("ayat");
    this.indonesian = this.getAttribute("indonesian");
    this.render();
  }

  copyToClipBoard() {
    let text = `${this.ayat}\n${this.indonesian}`;
    CopyClipBoard(text);
  }

  shareAyat() {
    let text = `
      ${this.ayat}\n${this.indonesian}\nQ.S ${this.surah} : ${this.no}
    `
    window.location.href = API_WA + text
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
                <img id="share" src="${ShareIcon}" alt="icon"/> 
            </div>
        </div>
    `;

    this.querySelector("#copy").addEventListener("click", this.copyToClipBoard);
    this.querySelector("#share").addEventListener("click", this.shareAyat);
  }
}

customElements.define("ayat-item", AyatItem);
