const DB = require("./src/db/DB");

const init = async () => {
  const db = new DB("employee_management_system");

  await db.start();

  await db.end();
};

init();
