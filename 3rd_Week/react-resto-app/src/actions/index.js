const menuLoaded = newMenu => {
  return {
    type: 'MENU_LOADED',
    payload: newMenu
  };
};
const menuRequested = () => {
  return {
    type: 'MENU_REQUESTED'
  };
};
const menuError = err => {
  return {
    type: 'MENU_ERROR',
    payload: err
  };
};

const addedToCart = id => {
  return {
    type: 'ITEM_ADD_TO_CART',
    payload: id
  };
};
const addFromPageToCart = item => {
  return {
    type: 'ITEM_ADD_FROM_PAGE_TO_CART',
    payload: item
  };
};

const deleteFromCart = id => {
  return {
    type: 'ITEM_DELETE_FROM_CART',
    payload: id
  };
};

export {
  menuLoaded,
  menuRequested,
  menuError,
  addedToCart,
  deleteFromCart,
  addFromPageToCart
};
