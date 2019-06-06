const employers = [
  'Alex',
  '',
  'ludmila',
  'Viktor',
  '',
  'oleg',
  'iNna',
  'Ivan',
  'Alex',
  'Olga',
  ' Ann'
];

let employersNames = employers
  .filter(emp => emp != '')
  .map(emp => emp.toLowerCase().trim());

const sponsors = {
  cache: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};

const own = 0;

const money =
  sponsors.cache.reduce((sum, item) => {
    return (sum += item);
  }, 0) + own;

makeBusiness = ({ owner, director = 'Victor', cash, emp }) => {
  const { eu, rus } = sponsors;
  const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
  console.log(
    `We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`
  );
  console.log('And we have a sponsors: ');
  console.log(...sumSponsors);
  console.log(`Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
};
makeBusiness({ owner: 'Sam', cash: money, emp: employersNames });
