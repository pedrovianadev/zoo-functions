const { species } = require("../data/zoo_data");
const data = require("../data/zoo_data");

function countAnimals(animal) {
  if (animal === undefined) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  const specie = species.find(
    (specie2) => specie2.name === animal.specie
  ).residents;
  if (animal.sex) {
    return specie.filter((specie2) => specie2.sex === animal.sex).length;
  }
  return specie.length;
}

module.exports = countAnimals;
