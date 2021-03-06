const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const dateAt = require('./defaultCreateAtAndUpdateAt');

const languagesDB = sequelize.define('languages', {
  langId: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  langName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ...dateAt,
});

const languagesList = [
  {langId: 1, langName: 'JavaScript'},
  {langId: 2, langName: 'PHP'},
  {langId: 3, langName: 'Rust'},
  {langId: 4, langName: 'Ruby'},
  {langId: 5, langName: 'GO'},
  {langId: 6, langName: 'Erlang'},
];

const insertLanguages = async () => {
  const languagesInDB = await languagesDB.findAll();
  if(languagesInDB.length) return;
  for(let info of languagesList) {
    await languagesDB.create(info);
  }
}

module.exports = {
  languagesDB,
  insertLanguages,
  languagesList
};
