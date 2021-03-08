const { Ratings } = require('../db_models/tablesList');

module.exports = (router) => {
  router.get('/api/gerRatings', async (ctx) => {
    try {
      ctx.body = await Ratings.findAll();
    } catch (e) {
      ctx.body = e + ' ratingsDB.js';
    }
  })
};
