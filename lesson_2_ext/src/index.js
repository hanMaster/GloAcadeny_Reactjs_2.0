import Employers from "./employers";
import Cache from "./money";

class Business {
  constructor({ owner, director = "Victor", cash, emp }) {
    this.owner = owner;
    this.director = director;
    this.cash = cash;
    this.emp = emp;
  }
  makeBusiness() {
    const cache = new Cache();
    const { eu, rus } = cache.getSponsors();
    const sumSponsors = [...eu, ...rus, "unexpected sponsor"];
    console.log(
      `We have a business. Owner: ${this.owner}, director: ${
        this.director
      }. Our budget: ${this.cash}. And our employers: ${this.emp}`
    );
    console.log("And we have a sponsors: ");
    console.log(...sumSponsors);
    console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`);
  }
}

const business = new Business({
  owner: "Sam",
  cash: new Cache().calcCash(),
  emp: new Employers().getEmployersNames()
});

business.makeBusiness();
