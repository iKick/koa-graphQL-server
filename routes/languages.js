const { NO_CONTENT } = require('http-status');
const { Languages } = require('../db_models/tablesList');
const { errorMessageObject } = require('../helper');

module.exports = (router) => {
  router.get('/languages', async (ctx) => {
    const { id, name } = ctx.query;
    const langId = Number(id);
    const langName = name;
    try {
      const languages = await Languages.findAll();
      if(langId) {
        ctx.body = languages.map(({ langId }) => Number(langId)).includes(langId)
          ? await Languages.findOne({ where: { langId } })
          : { error: `we don't study language with id: ${id}`, status: NO_CONTENT };
        return;
      }
      if(langName){
        const languagesNames = languages.map(({ langName }) => langName);
        ctx.body = languagesNames.includes(langName)
          ? await Languages.findOne({ where: { langName } })
          : errorMessageObject(`we don't study language with name: ${langName}`);
        return;
      }
      ctx.body = languages;
    } catch (e) {
      ctx.body = e + ' languagesDB.js';
    }
  })
};
