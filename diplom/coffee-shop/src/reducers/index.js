const initialState = {
  bestsellers: [],
  coffee: [],
  goods: [],
  loading: true,
  error: false,
  errMessage: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BESTSELLERS_LOADED':
      // console.log('bestsellers loaded');
      return {
        ...state,
        bestsellers: action.payload,
        loading: false
      };
    case 'COFFEE_LOADED':
      // console.log('coffee loaded', action.payload);
      return {
        ...state,
        coffee: action.payload,
        loading: false
      };
    case 'GOODS_LOADED':
      // console.log('coffee loaded', action.payload);
      return {
        ...state,
        goods: action.payload,
        loading: false
      };
    case 'DATA_REQUESTED':
      // console.log('requested data');
      return {
        ...state,
        loading: true,
        error: false,
        errMessage: ''
      };
    case 'GET_DATA_ERROR':
      return {
        ...state,
        loading: false,
        error: true,
        errMessage: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
