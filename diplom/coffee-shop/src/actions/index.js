const bestsellersLoaded = bs => {
  return {
    type: 'BESTSELLERS_LOADED',
    payload: bs
  };
};
const coffeeLoaded = coffee => {
  return {
    type: 'COFFEE_LOADED',
    payload: coffee
  };
};
const goodsLoaded = goods => {
  return {
    type: 'GOODS_LOADED',
    payload: goods
  };
};

const dataRequested = () => {
  return {
    type: 'DATA_REQUESTED'
  };
};
const getDataError = err => {
  return {
    type: 'GET_DATA_ERROR',
    payload: err
  };
};

export {
  bestsellersLoaded,
  coffeeLoaded,
  goodsLoaded,
  dataRequested,
  getDataError
};
