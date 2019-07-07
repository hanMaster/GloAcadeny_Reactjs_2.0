export default class DbService {
  constructor() {
    // this._apiBase = 'http://localhost:3001';
    this._apiBase = 'http://jsonplaceholder.hanmaster.ru/api';

    this.status = null;
  }

  getResource = async url => {
    const res = await fetch(`${this._apiBase}${url}`);
    // const res = await fetch(`${this._apiBase}${url}`, {
    //   method: 'GET',
    //   mode: 'cors',
    //   cache: 'no-cache',
    //   credentials: 'same-origin',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*'
    //   }
    // });
    console.log('In service', res.ok);
    if (!res.ok) {
      console.log(res.ok);
      this.status = res.status;
      this.errMessage = `Couldn't fetch ${url}, received ${res.status}`;
      throw new Error(this.errMessage);
    }
    return await res.json();
  };

  getBestsellers = async (url = '/?bestsellers') => {
    return await this.getResource(url);
  };

  getCoffee = async (url = '/?coffee') => {
    return await this.getResource(url);
  };

  getGoods = async (url = '/?goods') => {
    return await this.getResource(url);
  };

  saveContact = async (data = []) => {
    const res = await fetch(`${this._apiBase}/contact/`, {
      method: 'POST',
      mode: 'no-cors',
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
