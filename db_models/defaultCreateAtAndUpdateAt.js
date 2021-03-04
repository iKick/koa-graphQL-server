const Sequelize = require('sequelize');

module.exports = {
  createdAt: {
    allowNull: true,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: true,
    type: Sequelize.DATE,
  }
};
