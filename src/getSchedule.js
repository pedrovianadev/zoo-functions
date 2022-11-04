const data = require('../data/zoo_data');

const { species, hours } = data;

const nameSpecies = (day) => {
  const anml = species.filter(({ availability }) => availability.includes(day));

  return anml.map((animal) => animal.name);
};

const days = () => {
  const obj = {};
  const weekDays = Object.keys(hours);
  weekDays.forEach((day) => {
    if (day === 'Monday') {
      obj.Monday = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      obj[day] = {
        officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition: nameSpecies(day),
      };
    }
  });
  return obj;
};

const getWeekDays = (day) => {
  if (day === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  const weekDays = Object.keys(hours);
  if (weekDays.includes(day)) {
    return {
      [day]: {
        officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition: nameSpecies,
      },
    };
  }
  return day;
};

function getSchedule(scheduleTarget) {
  const weekDay = getWeekDays(scheduleTarget);
  if (typeof weekDay === 'object') return weekDay;
  const result = species.find(({ name }) => name === scheduleTarget);
  if (scheduleTarget === undefined || result === undefined) return days();
  return result.availability;
}

module.exports = getSchedule;
