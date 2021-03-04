const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const dateAt = require('./defaultCreateAtAndUpdateAt');
const { languagesList } = require('./languagesDB');
const { studentsList } = require('./studentsDB');
const { getRandomInt, studentsIds } = require('./helper');

const educationDB = sequelize.define('education', {
  langId: {
    primaryKey: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  studentId: {
    primaryKey: true,
    allowNull: false,

    type: Sequelize.INTEGER,
  },
  ...dateAt,
});

const langIds = languagesList.map(({ langId }) => langId);
const langIdsLength = langIds.length;

const insertEducations = async () => {
  const educationInDB = await educationDB.findAll();
  if(educationInDB.length) return;
  for(let studentId of studentsIds) {
    const number = getRandomInt(langIdsLength);
    await educationDB.create({studentId, langId: langIds[number]})
  }
}
educationDB.sync();
insertEducations();


module.exports = educationDB;
