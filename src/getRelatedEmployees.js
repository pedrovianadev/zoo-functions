const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return data.employees.filter((people) => people.managers.includes(managerId))
    .map((people) => `${people.firstName} ${people.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
