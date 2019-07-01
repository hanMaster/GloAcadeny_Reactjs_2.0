const initialState = {
  menu: [],
  items: [],
  loading: true,
  error: false,
  errMessage: '',
  total: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_LOADED':
      return {
        ...state,
        menu: action.payload,
        loading: false
      };
    case 'MENU_REQUESTED':
      return {
        ...state,
        loading: false,
        error: false,
        errMessage: ''
      };
    case 'MENU_ERROR':
      return {
        ...state,
        loading: false,
        error: true,
        errMessage: action.payload
      };

    case 'ITEM_ADD_TO_CART':
      const idx = state.items.findIndex(item => item.id === action.payload);
      if (idx === -1) {
        const item = state.menu.find(item => item.id === action.payload);
        item.cnt = 1;
        return {
          ...state,
          items: [...state.items, item],
          total: state.total + item.price
        };
      } else {
        const items = [...state.items];
        items[idx].cnt = items[idx].cnt + 1;
        return {
          ...state,
          items,
          total: state.total + items[idx].price
        };
      }

    case 'ITEM_ADD_FROM_PAGE_TO_CART':
      const indx = state.items.findIndex(item => item.id === action.payload.id);
      if (indx === -1) {
        const item = action.payload;
        item.cnt = 1;
        return {
          ...state,
          items: [...state.items, item],
          total: state.total + item.price
        };
      } else {
        const items = [...state.items];
        items[indx].cnt = items[indx].cnt + 1;
        return {
          ...state,
          items,
          total: state.total + items[indx].price
        };
      }
    case 'ITEM_DELETE_FROM_CART':
      const newItems = state.items.filter(item => item.id !== action.payload);
      const deletedItem = state.items.find(item => item.id === action.payload);
      const total = state.total - deletedItem.cnt * deletedItem.price;
      return {
        ...state,
        items: newItems,
        total
      };
    default:
      return state;
  }
};

export default reducer;
