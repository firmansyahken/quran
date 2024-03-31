class Preload extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="preloader">
            <div class="lds-ripple"><div></div><div></div></div>
            <h1>Loading..</h1>
        </div>
        `;
  }
}

customElements.define("preloader-component", Preload);