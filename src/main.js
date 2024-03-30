import Router from "./utils/RouterHandler.js"
import Home from "./pages/Home.js"
import Surah from "./pages/Surah.js"

const routes = {
  "/": {
    title: "Home",
    element: Home
  },
  "surah/:id": {
    title: "Surah",
    element: Surah
  }
}

export const route = new Router(routes)
