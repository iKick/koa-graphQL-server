const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const dateAt = require('./defaultCreateAtAndUpdateAt');

const studentsDB = sequelize.define('students', {
  studentId: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  studentName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ...dateAt,
})

const studentsList = [
  {studentId: 1, studentName: 'Odin'},
  {studentId: 2, studentName: 'Thor'},
  {studentId: 3, studentName: 'Loki'},
  {studentId: 4, studentName: 'Tom'},
  {studentId: 5, studentName: 'Jerry'},
  {studentId: 6, studentName: 'Const'},
  {studentId: 7, studentName: 'Let'},
  {studentId: 8, studentName: 'Var'},
  {studentId: 9, studentName: 'String'},
  {studentId: 10, studentName: 'Await'},
]

const insertStudents = async () => {
  const studentsInDB = await studentsDB.findAll();
  if(studentsInDB.length) return;
  for(let info of studentsList) {
    await studentsDB.create(info);
  }
}

module.exports = {
  studentsDB,
  insertStudents,
  studentsList,
};
