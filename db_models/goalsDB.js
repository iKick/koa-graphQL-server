const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const dateAt = require('./defaultCreateAtAndUpdateAt');
const { getRandomInt, studentsIds } = require('../helper');

const goalsDB = sequelize.define('goals', {
  studentId: {
    primaryKey: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  goal: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  ...dateAt,
})

const goalsList = [
  'I want have 1000000$',
  'I want to be SENIOR',
  'I want to be MIDDLE',
  'I want to be JUNIOR',
  'I want to be Architecture',
  'I want now GraphQL'
];
const goalsLength = goalsList.length;

const insertGoals = async () => {
  const goalsInDB = await goalsDB.findAll();
  if(goalsInDB.length) return;
  for(let studentId of studentsIds) {
    const number = getRandomInt(goalsLength);
    await goalsDB.create({studentId, goal: goalsList[number]})
  }
}

module.exports = {
  goalsDB,
  insertGoals,
};
