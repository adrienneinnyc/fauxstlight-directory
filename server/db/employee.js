const Sequelize = require("sequelize");
const db = require("./db");

const Employee = db.define("employee", {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  picture: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  location: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  jobTitle: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  interests: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  department: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Employee;
