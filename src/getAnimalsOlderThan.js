const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.filter((anml) => anml.name === animal)[0]
    .residents.every((idade) => idade.age >= age);
}

module.exports = getAnimalsOlderThan;
