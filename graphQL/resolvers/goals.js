const { get } = require('lodash');
const { Goals } = require('../../db_models/tablesList');

module.exports = {
  goals: async ({ studentId = '' }) => {
    if (studentId) {
      const goal = await Goals.findOne({where: { studentId }});
      const res = get(goal, ['dataValues'], null)
      return res ? [res] : [] ;
    }
    const goals = await Goals.findAll();
    return goals.map(({studentId, studentName}) => ({studentId, studentName}))
  }
}
