class AyatItem extends HTMLElement {
    constructor() {
        super()
        this.ayat = ""
    }
    connectedCallback() {
        this.ayat = this.getAttribute("ayat")
        this.render()
    }

    render() {
        this.innerHTML = `
            <div>
                <p>${this.ayat}</p>
            </div>
        `
    }
}

customElements.define("ayat-item", AyatItem)