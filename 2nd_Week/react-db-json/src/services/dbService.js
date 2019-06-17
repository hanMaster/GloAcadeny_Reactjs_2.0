export default class DbService {
  constructor() {
    this._apiBase = 'http://localhost:3000';
  }

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Couldn't fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  }
  getCoffee() {
    return this.getResource('/coffee');
  }
  getBestsellers() {
    return this.getResource('/bestsellers');
  }
  getGoods() {
    return this.getResource('/goods');
  }
}
