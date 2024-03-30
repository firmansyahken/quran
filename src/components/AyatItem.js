class AyatItem extends HTMLElement {
  constructor() {
    super();
    this.no = "";
    this.ayat = "";
    this.indonesian = "";
  }
  connectedCallback() {
    this.no = this.getAttribute("no");
    this.ayat = this.getAttribute("ayat");
    this.indonesian = this.getAttribute("indonesian");
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="ayat-item">
                <div>
                  <small class="no">${this.no}</small>
                  <p class="ayat">${this.ayat}</p>
                </div>
                <p class="indonesian">${this.indonesian}</p>
            </div>
        `;
  }
}

customElements.define("ayat-item", AyatItem);
