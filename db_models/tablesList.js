const { studentsDB, insertStudents } = require('./studentsDB');
const { languagesDB, insertLanguages } = require('./languagesDB');
const { educationDB, insertEducations } = require('./educationDB');
const { goalsDB, insertGoals } = require('./goalsDB');
const { ratingsDB, ratingsGoals } = require('./ratingsDB');

  Promise.all([
      studentsDB.sync(),
      languagesDB.sync(),
      educationDB.sync(),
      goalsDB.sync(),
      ratingsDB.sync(),
  ])

  Promise.all([
    educationDB.belongsTo(studentsDB, { foreignKey: 'studentId' }),
    educationDB.belongsTo(languagesDB, { foreignKey: 'langId' }),
    goalsDB.belongsTo(studentsDB, { foreignKey: 'studentId' }),
    ratingsDB.belongsTo(studentsDB, { foreignKey: 'studentId' }),
  ]);

  const inserts = [
    insertStudents,
    insertLanguages,
    insertEducations,
    insertGoals,
    ratingsGoals,
  ]
  const runInsert = async () => {
    for(const insert of inserts) {
      await insert();
    }
  }

  runInsert();

module.exports = {
  Students: studentsDB,
  Languages: languagesDB,
  Education: educationDB,
  Goals: goalsDB,
  Ratings: ratingsDB,
}

