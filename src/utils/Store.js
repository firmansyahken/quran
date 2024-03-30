export class Store {
    constructor(storage) {
        this.storage = storage;

        this.bookmark = this.getStorage(storage) || null
    }

    getStorage(storage) {
        return JSON.parse(localStorage.getItem(storage));
    }

    setStorage(data) {
        localStorage.setItem(this.storage, JSON.stringify(data));
    }
}