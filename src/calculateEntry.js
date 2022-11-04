const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((crianca) => crianca.age < 18).length;
  const adult = entrants.filter((adulto) => adulto.age >= 18 && adulto.age < 50).length;
  const senior = entrants.filter((idoso) => idoso.age >= 50).length;

  return {
    child,
    adult,
    senior,
  };
}

function calculateEntry(entrants) {
  if (entrants === undefined || !entrants.length) return 0;

  const child = prices.child * countEntrants(entrants).child;
  const adult = prices.adult * countEntrants(entrants).adult;
  const senior = prices.senior * countEntrants(entrants).senior;
  return child + adult + senior;
}

module.exports = { calculateEntry, countEntrants };
