import "../components/ListItem.js";
import Surah from "../assets/data/surah.json";

export default class Home {
  constructor() {
    
  }

  async render() {
    return `
            <div class="wrapper">
                <div class="header">
                    <h1>List Surah</h1>
                </div>
                <div class="list-surah">
                    ${Surah.surahs
                        .map(
                        (surah) =>
                            `<list-item 
                            no="${surah.nomor}"
                            name="${surah.nama}"
                            nameIndo="${surah.namaIndonesia}"
                            category="${surah.jenisWahyu}"
                            ayat="${surah.ayat}">
                            </list-item>`
                        )
                        .join("")}
                </div>
            </div>
        `;
  }
}
