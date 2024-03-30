import BookmarkIcon from "../assets/icon/bookmark.svg"

class Navbar extends HTMLElement {
    constructor() {
        super()
        this.render()
    }

    render() {
        this.innerHTML = `
            <div class="navbar">
                <div class="navbar-content">
                    <h1>Al-Qur'an</h1>
                    <img src="${BookmarkIcon}" alt="icon"/>
                </div>
            </div>
        `
    }
}

customElements.define("navbar-component", Navbar)