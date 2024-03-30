import { Store } from "../utils/Store";
import BookmarkIcon from "../assets/icon/bookmark.svg"

class Navbar extends HTMLElement {
    constructor() {
        super();
        this.store = new Store("bookmark");
        this.openBookmark = this.openBookmark.bind(this);
    }
    
    connectedCallback() {
        this.render();
    }

    openBookmark() {
       return alert("Upcoming Feature");
    }

    render() {
        this.innerHTML = `
            <div class="navbar">
                <div class="navbar-content">
                    <h1>Al-Qur'an</h1>
                    <img id="openBookmark" src="${BookmarkIcon}" alt="icon"/>
                </div>
            </div>
        `

        this.querySelector("#openBookmark").addEventListener("click", this.openBookmark)
    }
}

customElements.define("navbar-component", Navbar)