const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find((people) => people.id === id).responsibleFor[0];
  const animal = data.species.find((anml) => anml.id === employee)
    .residents.sort((a, b) => b.age - a.age)[0];

  return [animal.name, animal.sex, animal.age];
}

module.exports = getOldestFromFirstSpecies;
