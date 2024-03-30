import "../components/AyatItem.js";

export default class Surah {
  constructor(id) {
    this.uid = id;
  }

  async fetchData() {
    const getData = await fetch(`/src/assets/data/${this.uid}.json`);
    const response = await getData.json();
    return response;
  }

  async render() {
    const data = await this.fetchData();
    let template = "";

    Object.keys(data[`${this.uid}`].text).forEach(
      (key) =>
        (template += `
        <ayat-item 
          ayat="${data[`${this.uid}`].text[key]}"
          no="${key}"
          indonesian="${data[`${this.uid}`].translations['id'].text[key]}"> 
        </ayat-item>`
        )
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
