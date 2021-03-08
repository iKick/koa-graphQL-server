const { students, addStudent } = require('./resolvers/students');
const { languages } = require('./resolvers/languages');
const { goals } = require('./resolvers/goals');
const { ratings } = require('./resolvers/ratings');

module.exports = {
  students,
  languages,
  goals,
  ratings,
  addStudent
}
