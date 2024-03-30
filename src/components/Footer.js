class Footer extends HTMLElement {
    constructor() {
        super()
        this.render()
    }

    render() {
        this.innerHTML = `
            <div class="footer">
                <div class="footer-content">
                    <p>Created by ❤️ <a href="http://github.com/firmansyahken">Firmansyahken</a></p>
                    <p>Data by riostamal</p>
                </div>
            </div>
        `
    }
}

customElements.define("footer-component", Footer)