import "../components/AyatItem.js"

export default class Surah {
    constructor(id) {
        this.uid = id
    }
    
    async fetchData() {
        const getData = await fetch(`/src/assets/data/${this.uid}.json`)
        const response = await getData.json() 
        return response
    }

    async render() {
        const data = await this.fetchData()
        let template = ""

        Object.keys(data[`${this.uid}`].text).forEach(key => (
            template += `<ayat-item ayat="${data[`${this.uid}`].text[key]}"></ayat-item>` 
        ))

        return `
            <div class="wrapper">
                ${template}
            </div>
        `
    }
}