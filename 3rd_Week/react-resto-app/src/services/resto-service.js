export default class RestoService {
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

  getMenuItems = async (url = '/menu') => {
    const menu = await this.getResource(url);
    return menu.map(this._transformMenu);
  };

  getDish = async id => {
    return await this.getResource(`/menu/${id}`);
  };

  _transformMenu = menuItem => {
    return {
      title: menuItem.title ? menuItem.title : 'no data...',
      price: menuItem.price ? menuItem.price : 'no data...',
      url: menuItem.url ? menuItem.url : 'no data...',
      category: menuItem.category ? menuItem.category : 'no data...',
      id: menuItem.id ? menuItem.id : 'no data...'
    };
  };

  setData = async (data = {}) => {
    const res = await fetch(`${this._apiBase}/menu`, {
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
