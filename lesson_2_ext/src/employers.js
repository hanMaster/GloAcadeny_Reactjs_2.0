export default class Employers {
  constructor() {
    this.employers = [
      "Alex",
      "",
      "ludmila",
      "Viktor",
      "",
      "oleg",
      "iNna",
      "Ivan",
      "Alex",
      "Olga",
      " Ann"
    ];
  }

  getEmployersNames() {
    return this.employers
      .filter(emp => emp != "")
      .map(emp => emp.toLowerCase().trim());
  }
}
