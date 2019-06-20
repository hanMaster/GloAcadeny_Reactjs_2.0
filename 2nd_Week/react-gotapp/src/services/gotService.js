export default class GotService {
  constructor() {
    this._apiBase = "https://www.anapioficeandfire.com/api";
    this.status = null;
  }

  getResource = async url => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      this.status = res.status;
      this.errMessage = `Couldn't fetch ${url}, received ${res.status}`;
      throw new Error(this.errMessage);
    }
    return await res.json();
  };
  getAllCharacters = async () => {
    const characters = await this.getResource("/characters?page=17&pageSize=10");
    return characters.map(this._transformCharacter);
  };
  getCharacter = async id => {
    const char = await this.getResource(`/characters/${id}`);
    return this._transformCharacter(char);
  };
  getAllBooks = async () => {
    const books = await this.getResource("/books");
    return books.map(this._transformBook);
  };
  getBook = async id => {
    const book = await this.getResource(`/books/${id}`);
    return this._transformBook(book);
  };
  getAllHouses = async () => {
    const houses = await this.getResource("/houses");
    return houses.map(this._transformHouse);
  };
  getHouse = async id => {
    const house = await this.getResource(`/houses/${id}`);
    return this._transformHouse(house);
  };

  _transformCharacter = char => {
    return {
      name: char.name ? char.name : "no data...",
      gender: char.gender ? char.gender : "no data...",
      born: char.born ? char.born : "no data...",
      died: char.died ? char.died : "no data...",
      culture: char.culture ? char.culture : "no data...",
      id: char.url ? char.url.substr(49) : "no data..."
    };
  };

  _transformHouse = house => {
    return {
      id: house.url ? house.url.substr(45) : "no data...",
      name: house.name ? house.name : "no data...",
      region: house.region ? house.region : "no data...",
      titles: house.titles ? house.titles : "no data...",
      overlord: house.overlord ? house.overlord : "no data...",
      ancestralWeapons: house.ancestralWeapons ? house.ancestralWeapons : "no data..."
    };
  };
  _transformBook = book => {
    return {
      id: book.url ? book.url.substr(44) : "no data...",
      name: book.name ? book.name : "no data...",
      numberOfPages: book.numberOfPages ? book.numberOfPages : "no data...",
      publisher: book.publisher ? book.publisher : "no data...",
      released: book.released ? book.released : "no data..."
    };
  };
}
