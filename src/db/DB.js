const mysql = require("mysql");

class DB {
  constructor(database) {
    const databaseOptions = {
      host: "localhost",
      user: "root",
      password: "password",
      port: 3306,
      database,
    };

    this.database = database;
    this.connection = mysql.createConnection(databaseOptions);
  }

  start() {}
}

module.exports = DB;
