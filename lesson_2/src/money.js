const sponsors = {
  cache: [40000, 5000, 30400, 12000],
  eu: ["SRL", "PLO", "J&K"],
  rus: ["RusAuto", "SBO"]
};

const calcCash = (own = 0) => {
  var everyCash = sponsors.cache.reduce((sum, item) => {
    return (sum += item);
  }, 0);
  return own + everyCash;
};

const money = calcCash();

export { money, sponsors };
