const { get } = require('lodash');
const { Ratings } = require('../../db_models/tablesList');

module.exports = {
  ratings: async ({ studentId = '' }) => {
    if (studentId) {
      const rating = await Ratings.findOne({where: { studentId }});
      const res = get(rating, ['dataValues'], null)
      return res ? [res] : [] ;
    }
    const ratings = await Ratings.findAll();
    return ratings.map(({studentId, rating}) => ({studentId, rating}))
  }
}
