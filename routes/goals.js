const { Goals } = require('../db_models/tablesList');

module.exports = (router) => {
  router.get('/api/getGoals', async (ctx) => {
    try {
      ctx.body = await Goals.findAll();
    } catch (e) {
      ctx.body = e + ' goalsDB.js';
    }
  })
};
