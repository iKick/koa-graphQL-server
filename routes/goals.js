const Goals = require('../db_models/goalsDB');

module.exports = (router) => {
  router.get('/goal', async (ctx) => {
    try {
      const res = await Goals.findAll();
      ctx.body = res;
    } catch (e) {
      ctx.body = e + ' goalsDB.js';
    }
  })
};
