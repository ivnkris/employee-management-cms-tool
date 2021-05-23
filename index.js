const DB = require("./src/db/DB");
const inquirer = require("inquirer");

const viewMenu = async () => {
  const menuQuestions = [
    {
      type: "list",
      name: "menuChoices",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add new department",
        "Add new role",
        "Add new employee",
        "Update employee role",
        "Exit",
      ],
    },
  ];

  let inProgress = true;

  while (inProgress) {
    const menuOption = await inquirer.prompt(menuQuestions);
    if (menuOption.menuChoices === "Exit") {
      inProgress = false;
    } else if (menuOption.menuChoices === "View all departments") {
      console.log("viewing departments");
    } else if (menuOption.menuChoices === "View all roles") {
      console.log("viewing roles");
    } else if (menuOption.menuChoices === "View all employees") {
      console.log("viewing employees");
    } else if (menuOption.menuChoices === "Add new department") {
      console.log("adding new department");
    } else if (menuOption.menuChoices === "Add new role") {
      console.log("adding new role");
    } else if (menuOption.menuChoices === "Add new employee") {
      console.log("adding new employee");
    } else if (menuOption.menuChoices === "Update employee role") {
      console.log("updating employee role");
    }
  }
};

const init = async () => {
  const db = new DB("employee_management_system");

  await db.start();

  await viewMenu();

  await db.end();
};

init();
