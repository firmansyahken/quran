import { route } from "../main.js"

export const Navigate = path => {
    history.pushState("", "", path)
    route.handleRoute()
}