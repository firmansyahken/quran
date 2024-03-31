import ShareIcon from "../assets/icon/share.svg";
import CopyIcon from "../assets/icon/copy.svg";
import DetailIcon from "../assets/icon/detail.svg";
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
    this.tafsir = "";
    this.copyToClipBoard = this.copyToClipBoard.bind(this);
    this.shareAyat = this.shareAyat.bind(this);
  }

  connectedCallback() {
    this.uid = this.getAttribute("uid");
    this.surah = this.getAttribute("surah");
    this.no = this.getAttribute("no");
    this.ayat = this.getAttribute("ayat");
    this.indonesian = this.getAttribute("indonesian");
    this.tafsir = this.getAttribute("tafsir");
    this.render();
  }

  copyToClipBoard() {
    let text = `${this.ayat}\n${this.indonesian}`;
    CopyClipBoard(text);
  }

  shareAyat() {
    let text = `
      ${this.ayat}\n${this.indonesian}\nQ.S ${this.surah} : ${this.no}
    `;
    window.location.href = API_WA + text;
  }

  handleTafsir() {
    let id = this.dataset.target;
    document.querySelector(`[data-id="${id}"]`).classList.toggle("active");
  }

  render() {
    this.innerHTML = `
        <div class="ayat-item" id="${this.no}">
            <div>
              <small class="no">${this.no}</small>
              <p class="ayat">${this.ayat}</p>
            </div>
            <p class="indonesian">${this.indonesian}</p>
            <div class="tafsir" data-id="${this.no}">
              <p>Tafsir Kemenag:</p>
              <p>${this.tafsir}</p>
            </div>
            <div class="option">
              <div>
                <img id="copy" src="${CopyIcon}" alt="icon"/>
                <img id="share" src="${ShareIcon}" alt="icon"/> 
              </div>
              <img id="tafsir" data-target="${this.no}" src="${DetailIcon}" alt="icon"/>
            </div>
        </div>
    `;

    this.querySelector("#copy").addEventListener("click", this.copyToClipBoard);
    this.querySelector("#share").addEventListener("click", this.shareAyat);
    this.querySelector("#tafsir").addEventListener("click", this.handleTafsir);
  }
}

customElements.define("ayat-item", AyatItem);
