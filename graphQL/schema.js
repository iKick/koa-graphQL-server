const { buildSchema } = require('graphql');
const schema = buildSchema(`
  type Query {
    students(studentId: ID): [Student]
    languages(studentId: ID, langId: ID): [Language]
    goals(studentId: ID): [Goal]
    ratings(studentId: ID): [Rating]
  }
  type Student {
    studentId: ID
    studentName: String
    languages: [Language]
  }
  type Language {
    langId: ID
    studentId: ID
    langName: String
  }
  type Goal {
    studentId: ID
    goal: String
  }
  type Rating {
    studentId: ID
    rating: Int
  }
`);

module.exports = schema;
