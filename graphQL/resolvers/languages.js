const { get } = require('lodash');
const { Education, Languages } = require('../../db_models/tablesList');

module.exports = {
  languages: async ({ studentId = '', langId = '' }) => {
    if (studentId || langId) {
      const where = {};
      studentId ? where.studentId = studentId : null;
      langId ? where.langId = langId : null;
      const education = await Education.findOne({where});
      let res = get(education, ['dataValues'], null);
      if(res) {
        const { langId: langIdRes } = res;
        const languages = await Languages.findOne({where: {langId: langIdRes}});
        let { langName } = get(languages, ['dataValues'], null);
        res.langName = langName;
      }
      return res ? [res] : [];
    }
    const language = await Languages.findAll();
    return language.map(({langId, langName}) => ({langId, langName}))
  }
}
