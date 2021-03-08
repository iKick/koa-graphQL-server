const { Education } = require('../db_models/tablesList');
const { errorMessageObject } = require('../helper');

module.exports = (router) => {
  router.get('/api/getEducation', async (ctx) => {
    const { id, langId: lang } = ctx.query;
    const langId = Number(lang);
    const studentId = Number(id);
    try {
      const education = await Education.findAll();
      if(langId && studentId){
        const haveResponse = education.some(({ studentId, langId }) => Number(studentId) === Number(id) && Number(langId) === Number(lang));
        ctx.body = haveResponse
          ? await Education.findAll({where: { langId, studentId }})
          : errorMessageObject(`we don't have id: ${id}, with study langId: ${lang}`);
        return;
      }
      if(langId){
        ctx.body = education.map(({ langId }) => Number(langId)).includes(langId)
          ? await Education.findAll({ where: { langId } })
          : errorMessageObject(`we don't have students witch study langId: ${lang}`);
        return;
      }
      if(studentId) {
        const studentsIds = education.map(({ studentId }) => Number(studentId));
        ctx.body = studentsIds.includes(studentId)
          ? await Education.findAll({ where: { studentId } })
          : errorMessageObject(`we don't now student with id: ${id}`);
        return;
      }
      ctx.body = education;
    } catch (e) {
      ctx.body = e + ' educationDB.js';
    }
  })
};
