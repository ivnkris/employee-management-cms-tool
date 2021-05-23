const DB = require("./src/db/DB");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

const viewDepartments = async () => {
  const db = new DB("employee_management_system");

  const allDepartments = await db.query(
    'SELECT department.id as "Department ID", name as "Department Name", title as "Role Title", salary as "Salary" FROM department LEFT JOIN role ON role.department_id = department.id'
  );
  console.log("\n");
  console.table(allDepartments);
  console.log("\n");
  console.log("\n");
  console.log("Press the Up or Down arrow to return to the menu options");
};

const viewRoles = async () => {
  const db = new DB("employee_management_system");

  const allRoles = await db.query(
    'SELECT role.id as "Role ID", title as "Role Title", salary as "Salary", name as "Department" FROM role RIGHT JOIN department ON role.department_id = department.id'
  );
  console.log("\n");
  console.table(allRoles);
  console.log("\n");
  console.log("\n");
  console.log("Press the Up or Down arrow to return to the menu options");
};

const viewEmployees = async () => {
  const db = new DB("employee_management_system");

  const allEmployees = await db.query(
    'SELECT a.id as "Employee ID", a.first_name as "First Name", a.last_name as "Last Name", title as "Title", CONCAT(b.first_name," ",b.last_name) as "Manager\'s Name", name as "Department" FROM employee a LEFT JOIN employee b on a.manager_id = b.id LEFT JOIN role ON a.role_id = role.id LEFT JOIN department ON role.department_id = department.id'
  );
  console.log("\n");
  console.table(allEmployees);
  console.log("\n");
  console.log("\n");
  console.log("Press the Up or Down arrow to return to the menu options");
};

const addDepartment = async () => {
  const db = new DB("employee_management_system");
  const departmentQuestions = [
    {
      type: "input",
      name: "departmentName",
      message: "What is the name of the new department?",
    },
  ];
  const newDepartment = await inquirer.prompt(departmentQuestions);
  await db.parameterisedQuery(
    "INSERT INTO `employee_management_system`.`department` (`name`) VALUES (?);",
    [newDepartment.departmentName]
  );
};

const addRole = async () => {
  const db = new DB("employee_management_system");

  const allDepartments = await db.query(
    "SELECT department.id, name FROM department"
  );
  const departmentChoices = allDepartments.map((department) => {
    return department.name;
  });

  const roleQuestions = [
    {
      type: "input",
      name: "roleTitle",
      message: "What is the title of the new role?",
    },
    {
      type: "input",
      name: "roleSalary",
      message: "What is the salary?",
    },
    {
      type: "list",
      name: "roleDepartment",
      choices: departmentChoices,
    },
  ];

  const newRole = await inquirer.prompt(roleQuestions);
  const filteredDepartment = allDepartments.filter((department) => {
    if (department.name === newRole.roleDepartment) {
      return true;
    }
  });

  await db.parameterisedQuery(
    "INSERT INTO `employee_management_system`.`role` (`title`, `salary`, `department_id`) VALUES (?, ?, ?);",
    [newRole.roleTitle, newRole.roleSalary, filteredDepartment[0].id]
  );
};

const mainMenu = async () => {
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
      message: "Please, select what would you like to do:",
    },
  ];

  let inProgress = true;

  while (inProgress) {
    const menuOption = await inquirer.prompt(menuQuestions);
    if (menuOption.menuChoices === "Exit") {
      inProgress = false;
    } else if (menuOption.menuChoices === "View all departments") {
      viewDepartments();
    } else if (menuOption.menuChoices === "View all roles") {
      viewRoles();
    } else if (menuOption.menuChoices === "View all employees") {
      viewEmployees();
    } else if (menuOption.menuChoices === "Add new department") {
      await addDepartment();
    } else if (menuOption.menuChoices === "Add new role") {
      await addRole();
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

  await mainMenu();

  await db.end();
  console.log(
    "Thank you for using our programme. Press 'control+C' to exit mySQL in your terminal"
  );
};

init();
