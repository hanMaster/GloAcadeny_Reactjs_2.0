const employers = [
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

let employersNames = employers
  .filter(emp => emp != "")
  .map(emp => emp.toLowerCase().trim());

export default employersNames;
