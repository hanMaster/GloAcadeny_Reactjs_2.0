const reducer = (state = 0, { type, payload }) => {
  switch (type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'RST':
      return 0;
    default:
      return state;
  }
};

export default reducer;
