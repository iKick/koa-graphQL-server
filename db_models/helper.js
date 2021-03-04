const { studentsList } = require('./studentsDB');
const { NO_CONTENT } = require('http-status');

module.exports = {
  getRandomInt: (max) => Math.floor(Math.random() * Math.floor(max)),
  studentsIds: studentsList.map(({ studentId }) => studentId),
  errorMessageObject: (error)=> ({ error, status: NO_CONTENT })
}
