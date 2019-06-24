export default class DbService {
  constructor() {
    this._apiBase = 'http://localhost:3001';
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
  getData = async () => {
    return await this.getResource('/numbers');
  };

  setData = async (data = {}) => {
    const res = await fetch(`${this._apiBase}/numbers`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify(data)
    });
    if (!res.ok) {
      this.status = res.status;
      this.errMessage = `Could not save data, received ${res.status}`;
      throw new Error(this.errMessage);
    }
    return await res.json();
  };
}
