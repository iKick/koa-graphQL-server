const { get } = require('lodash');
const { Students } = require('../../db_models/tablesList');

module.exports = {
  students: async ({ studentId = '' }) => {
    if (studentId) {
      const student = await Students.findOne({where: { studentId }});
      const res = get(student, ['dataValues'], null)
      return res ? [res] : [] ;
    }
    const students = await Students.findAll();
    return students.map(({studentId, studentName}) => ({studentId, studentName}))
  }
}
