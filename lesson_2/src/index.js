import employersNames from "./employers";
import { money, sponsors } from "./money";

class Business {
  constructor({ owner, director = "Victor", cash, emp }) {
    this.owner = owner;
    this.director = director;
    this.cash = cash;
    this.emp = emp;
  }
  makeBusiness() {
    const { eu, rus } = sponsors;
    const sumSponsors = [...eu, ...rus, "unexpected sponsor"];
    console.log(
      `We have a business. Owner: ${this.owner}, director: ${
        this.director
      }. Our budget: ${this.cash}. And our employers: ${this.emp}`
    );
    console.log("And we have a sponsors: ");
    console.log(...sumSponsors);
    console.log(`Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
  }
}

const business = new Business({
  owner: "Sam",
  cash: money,
  emp: employersNames
});

business.makeBusiness();
