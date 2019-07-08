export default class DbService {
  constructor() {
    this._apiBase = 'http://coffee.hanmaster.ru/api';

    this.status = null;
  }

  getResource = async url => {
    try {
      const res = await fetch(`${this._apiBase}${url}`);
      if (!res.ok) {
        console.log(res.ok);
        this.status = res.status;
        this.errMessage = `Couldn't fetch ${url}, received ${res.status}`;
        throw new Error(this.errMessage);
      }
      return await res.json();
    } catch (err) {
      this.errMessage = err.message;
      throw new Error(this.errMessage);
    }
  };

  getData = async (data = 'bestsellers') => {
    return await this.getResource(`/?${data}`);
  };

  saveContact = async (data = []) => {
    const res = await fetch(`${this._apiBase}/contact/`, {
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
