const Sequelize = require("sequelize");

const databaseName = "fauxstlight";

console.log("URL*****", process.env.DATABASE_URL);

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
  {
    logging: false,
  }
);

module.exports = db;
