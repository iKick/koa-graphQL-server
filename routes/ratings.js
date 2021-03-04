const ratings = require('../db_models/ratingsDB');

module.exports = (router) => {
  router.get('/ratings', async (ctx) => {
    try {
      const res = await ratings.findAll();
      ctx.body = res;
    } catch (e) {
      ctx.body = e + ' ratingsDB.js';
    }
  })
};
