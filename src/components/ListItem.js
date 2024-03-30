export class ListItem extends HTMLElement {
    constructor() {
        super()
        this.no = ""
        this.name = ""
        this.nameIndo = ""
        this.category = ""
        this.ayat = ""
    }
    
    connectedCallback() {
        this.no = this.getAttribute("no")
        this.name = this.getAttribute("name")
        this.nameIndo = this.getAttribute("nameIndo")
        this.category = this.getAttribute("category")
        this.ayat = this.getAttribute("ayat")
        this.render()
    }

    render() {
        return this.innerHTML = `
            <div class="list-item">
                <div>
                    <p>${this.no}</p>
                    <div>
                        <p>${this.name}</p>            
                        <small>${this.nameIndo}</small>            
                    </div>
                </div>
                <div>
                    <span>${this.ayat}</span>
                    <small>${this.category}</small>
                </div>
            </div>
        `
    }
}


customElements.define("list-item", ListItem);