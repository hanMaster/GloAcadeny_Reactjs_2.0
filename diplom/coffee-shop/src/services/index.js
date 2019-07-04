export default class DbService {
  constructor() {
    this._apiBase = 'http://localhost:3001';
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

  getBestsellers = async (url = '/bestsellers') => {
    return await this.getResource(url);
  };
}
