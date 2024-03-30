import "../components/ListItem.js"
import Surah from "../assets/data/surah.json"

export class Home {
    constructor() {
        console.log(Surah);
    }

    async render() {
        return `
            <div class="wrapper">
                ${Surah.surahs.map(surah => (
                    `<list-item 
                        no="${surah.nomor}"
                        name="${surah.nama}"
                        nameIndo="${surah.namaIndonesia}"
                        category="${surah.jenisWahyu}"
                        ayat="${surah.ayat}">
                        </list-item>`
                )).join("")}
            </div>
        `;
    }
}