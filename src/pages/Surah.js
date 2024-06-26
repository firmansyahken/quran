import { ScrollToTop } from "../utils/ScrollToTop.js";
import { BASE_URL, ROOT } from "../utils/Constant.js";
import "../components/AyatItem.js";
import "../components/Preload.js";

export default class Surah {
  constructor(id) {
    this.uid = id;
  }

  async fetchData() {
    const getData = await fetch(`${BASE_URL}/data/${this.uid}.json`);
    const response = await getData.json();
    document.title = response[`${this.uid}`].name_latin;
    return response;
  }

  async render() {
    ROOT.innerHTML = `<preloader-component></preloader-component>`;
    const data = await this.fetchData();
    
    ScrollToTop();

    let template = "";

    Object.keys(data[`${this.uid}`].text).forEach(
      (key) =>
        (template += `
        <ayat-item 
          uid="${this.uid}"
          surah="${data[`${this.uid}`].name_latin}"
          ayat="${data[`${this.uid}`].text[key]}"
          no="${key}"
          indonesian="${data[`${this.uid}`].translations["id"].text[key]}" 
          tafsir="${data[`${this.uid}`].tafsir["id"]["kemenag"].text[key]}"> 
        </ayat-item>`)
    );

    return `
        <div class="wrapper">
            <div class="info-surah">
              <p>${data[`${this.uid}`].name_latin}</p>
              <p>${data[`${this.uid}`].translations.id.name}</p>
              <div>
                <p>${data[`${this.uid}`].number_of_ayah}</p>
                <small>Ayat</small>
              </div>
            </div>
            <div class="ayat-surah">
              ${template}
            </div>
        </div>
    `;
  }
}
