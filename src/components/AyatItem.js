import { Store } from "../utils/Store";

class AyatItem extends HTMLElement {
  constructor() {
    super();
    this.uid = ""
    this.no = "";
    this.ayat = "";
    this.indonesian = "";
    this.saveBookMark = this.saveBookMark.bind(this);
  }

  connectedCallback() {
    this.uid = this.getAttribute("uid");
    this.no = this.getAttribute("no");
    this.ayat = this.getAttribute("ayat");
    this.indonesian = this.getAttribute("indonesian");
    this.render();
  }

  saveBookMark() {
    let confirmation = confirm(`Ingin menandai Ayat: ${this.no} ini?`)
    if(confirmation) { 
      return new Store("bookmark").setStorage({
        uid: this.uid,
        no: this.no,
        ayat: this.ayat,
        indonesian: this.indonesian 
      })
    }
  }

  render() {
    this.innerHTML = `
        <div class="ayat-item" id="${this.no}">
            <div>
              <small class="no">${this.no}</small>
              <p class="ayat">${this.ayat}</p>
            </div>
            <p class="indonesian">${this.indonesian}</p>
        </div>
    `;

    this.querySelector(".ayat-item").addEventListener("click", this.saveBookMark)
  }
}

customElements.define("ayat-item", AyatItem);
