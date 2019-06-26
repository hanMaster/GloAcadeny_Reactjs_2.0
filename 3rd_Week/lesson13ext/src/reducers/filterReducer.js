const filterReducer = (state = false, action) => {
  switch (action.type) {
    case 'HIDE_COMPLETED':
      return !state;
    default:
      return state;
  }
};

export default filterReducer;
