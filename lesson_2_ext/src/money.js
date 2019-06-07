export default class Cache {
  constructor() {
    this.sponsors = {
      cache: [40000, 5000, 30400, 12000],
      eu: ["SRL", "PLO", "J&K"],
      rus: ["RusAuto", "SBO"]
    };
  }
  calcCash(own = 0) {
    let everyCash = this.sponsors.cache.reduce((sum, item) => {
      return (sum += item);
    }, 0);
    return own + everyCash;
  }
  getSponsors() {
    return this.sponsors;
  }
}
