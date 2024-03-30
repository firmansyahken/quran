import Router from "./utils/RouterHandler.js"
import { Home } from "./pages/Home.js"

const routes = {
  "/": {
    title: "Home",
    element: Home
  }
}

const route = new Router(routes)
