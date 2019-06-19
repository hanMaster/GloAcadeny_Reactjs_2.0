export default class GotService {
  constructor() {
    this._apiBase = "https://www.anapioficeandfire.com/api";
    this.status = null;
  }

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      this.status = res.status;
      throw new Error(`Couldn't fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  }
  async getAllCharacters() {
    const characters = await this.getResource("/characters?page=17&pageSize=10");
    return characters.map(this._transformCharacter);
  }
  async getCharacter(id) {
    const char = await this.getResource(`/characters/${id}`);
    return this._transformCharacter(char);
  }
  async getAllBooks() {
    const books = await this.getResource("/books");
    return books.map(this._transformBook);
  }
  async getBook(id) {
    const book = await this.getResource(`/books/${id}`);
    return this._transformBook(book);
  }
  async getAllHouses() {
    const houses = await this.getResource("/houses");
    return houses.map(this._transformHouse);
  }
  async getHouse(id) {
    const house = await this.getResource(`/houses/${id}`);
    return this._transformHouse(house);
  }

  _transformCharacter(char) {
    return {
      name: char.name ? char.name : "no data...",
      gender: char.gender ? char.gender : "no data...",
      born: char.born ? char.born : "no data...",
      died: char.died ? char.died : "no data...",
      culture: char.culture ? char.culture : "no data...",
      id: char.url ? char.url.substr(49) : "no data..."
    };
  }

  _transformHouse(house) {
    return {
      name: house.name ? house.name : "no data...",
      region: house.region ? house.region : "no data...",
      titles: house.titles ? house.titles : "no data...",
      overlord: house.overlord ? house.overlord : "no data...",
      ancestralWeapons: house.ancestralWeapons ? house.ancestralWeapons : "no data..."
    };
  }
  _transformBook(book) {
    return {
      name: book.name ? book.name : "no data...",
      numberOfPages: book.numberOfPages ? book.numberOfPages : "no data...",
      publisher: book.publisher ? book.publisher : "no data...",
      released: book.released ? book.released : "no data..."
    };
  }
}
