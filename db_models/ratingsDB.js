const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const dateAt = require('./defaultCreateAtAndUpdateAt');
const { getRandomInt, studentsIds } = require('../helper');

const ratingsDB = sequelize.define('ratings', {
  studentId: {
    primaryKey: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  rating: {
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  ...dateAt,
},);

const ratingsList = [100, 80, 70, 33, 20];
const ratingsLength = ratingsList.length;

const ratingsGoals = async () => {
  const ratingsInDB = await ratingsDB.findAll();
  if(ratingsInDB.length) return;
  for(let studentId of studentsIds) {
    const number = getRandomInt(ratingsLength);
    await ratingsDB.create({studentId, rating: ratingsList[number]})
  }
}

module.exports = {
  ratingsDB,
  ratingsGoals
};
