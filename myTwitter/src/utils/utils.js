const isObject = value => {
  return value && typeof value === 'object' && value.constructor === Object;
};

const getUId = () =>
  Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15);

export { getUId };
export default isObject;
