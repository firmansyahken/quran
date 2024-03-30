export class ListItem extends HTMLElement {
    constructor() {
        this.render()
    }

    connectedCallback() {

    }

    render() {
        return this.innerHTML = `
            <div>
                <p>Ini List</p>            
            </div>
        `
    }
}


customElements.define("list-item", ListItem);