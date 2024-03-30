export default class Router {
    constructor(routes) {
        this.routes = routes;
        this.init();
    }

    async init() {
        this.routes = await this.routes;
        window.addEventListener("click", e => {
            if (e.target.matches("[data-link]")) {
                e.preventDefault();
                history.pushState("", "", e.target.dataset.link);
                this.handleRoute();
            }
        });
        window.addEventListener("hashchange", () => this.handleRoute());
        window.addEventListener("DOMContentLoaded", () => this.handleRoute());
    }

    async handleRoute() {
        let url = window.location.hash.replace("#", "")
        if(url.length == 0) {
            url = "/"
        }

        let path = this.routes[url];

        Object.keys(this.routes).forEach(routePath => {
            const regex = new RegExp("^" + routePath.replace(/:\w+/g, "(.+)") + "$");
            const match = url.match(regex);
            if (match) {
                const params = match.slice(1);
                const id = params[0];
                path = this.routes[routePath];
                path.id = id;
            }
        });
    
        if (path) {
            document.title = path.title ? path.title : "";
            document.getElementById("root").innerHTML = await new path.element(path.id).render();
            return;
        }

        history.replaceState("", "", "#");
    }
}