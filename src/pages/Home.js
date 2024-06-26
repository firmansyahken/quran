import "../components/ListItem.js";
import "../components/Navbar.js";
import "../components/Footer.js";
import Surah from "../../public/data/surah.json";

export default class Home {
  constructor() {
    
  }

  async render() {
    return `
        <navbar-component></navbar-component>
        <div class="wrapper">
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
        <footer-component></footer-component>
    `;
  }
}
