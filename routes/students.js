const { Students } = require('../db_models/tablesList');
const { errorMessageObject } = require('../helper');

module.exports = (router) => {
  router.get('/students', async (ctx) => {
    const { id, name } = ctx.query;
    const studentId = Number(id);
    const studentName = name;
    try {
      const students = await Students.findAll();

      if(studentId) {
        const studentsIds = students.map(({ studentId }) => Number(studentId));
       ctx.body = studentsIds.includes(studentId)
         ? await Students.findOne({ where: { studentId } })
         : errorMessageObject(`we don't now student with id: ${id}`);
       return;
      }
      if(studentName){
        const studentsNames = students.map(({ studentName }) => studentName);
        ctx.body = studentsNames.includes(studentName)
          ? await Students.findOne({ where: { studentName } })
          : errorMessageObject(`we don't now user with studentName: ${studentName}`);
        return;
      }
      ctx.body = students;
    } catch (e) {
      ctx.body = e + ' studentsDB.js';
    }
  })
};
