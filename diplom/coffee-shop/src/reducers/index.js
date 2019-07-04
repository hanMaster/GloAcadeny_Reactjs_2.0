const initialState = {
  bestsellers: [],
  coffee: [],
  goods: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BESTSELLERS_LOADED':
      return {
        ...state,
        bestsellers: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
