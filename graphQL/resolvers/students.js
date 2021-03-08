const { get } = require('lodash');
const { Students } = require('../../db_models/tablesList');
const { languages } = require('../../graphQL/resolvers/languages');

module.exports = {
  students: async ({ studentId = '' }) => {
    if (studentId) {
      const student = await Students.findOne({where: { studentId }});
      const res = get(student, ['dataValues'], null)
      if(res){
        const [language] = await languages({studentId});
        res.language = language;
      }
      return res ? [res] : [] ;
    }
    const students = await Students.findAll();
    const studentsList = students.map(({studentId, studentName}) => ({studentId, studentName}));
    const studentsWithLang = [];
    for(let student of studentsList){
      student.language = {}
      const [res] = await languages({ studentId: student.studentId });
      student.language.langName = res.langName;
      student.language.studentId = res.studentId;
      student.language.langId = res.langId;
      studentsWithLang.push(student)
    }
    return studentsWithLang
  },
  addStudent: async({ name }) => {
    await Students.create({ studentName: name });
    const students = await Students.findAll();
    return students.map(({studentId, studentName}) => ({studentId, studentName}));
  }
}
