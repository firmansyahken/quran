class Navbar extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="navbar">
            <div class="navbar-content">
                <h1>Al-Qur'an</h1>
            </div>
        </div>
    `;
  }
}

customElements.define("navbar-component", Navbar);
