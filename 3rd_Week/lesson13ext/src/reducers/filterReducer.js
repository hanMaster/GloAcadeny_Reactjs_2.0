const filterReducer = (state, action) => {
  switch (action.type) {
    case 'HIDE_COMPLETED':
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;
