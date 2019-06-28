const initialState = {
  menu: [],
  loading: true,
  error: false,
  errMessage: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_LOADED':
      return {
        menu: action.payload,
        loading: false,
        error: false,
        errMessage: ''
      };
    case 'MENU_REQUESTED':
      return {
        menu: state.menu,
        loading: false,
        error: false,
        errMessage: ''
      };
    case 'MENU_ERROR':
      return {
        menu: state.menu,
        loading: false,
        error: true,
        errMessage: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
