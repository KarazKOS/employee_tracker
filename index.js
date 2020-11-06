var inquirer = require("inquirer");
var connection = require("./connection");
var cTable = require("console.table");
var mysql = require("mysql");
const { connect } = require("./connection");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Phoenix11!",
  database: "employee_db",
});

connection.connect(function (err) {
  if (err) throw err;
  mainMenu();
  console.log("connected as id " + connection.threadId);
});

const viewOptions = [
  "Add a department",
  "Add a role",
  "Add an employee",
  "View departments",
  "View roles",
  "View employees",
  "Update employee",
  "Exit",
];

const employeeOptions = [
  "Nick Karaiscos",
  "Lou Messina",
  "Tom Tcshida",
  "Walt Disney",
  "Kobe Bryant",
  "Mike Tyson",
  "Abraham Lincoln",
  "exit",
];

const updateOptions = ["First Name", "Last Name", "Role", "exit"];

function mainMenu() {
  inquirer
    .prompt({
      name: "menu",
      type: "confirm",
      message: "Do you want to add, view or update the data?",
    })
    .then(function (res) {
      switch (res.menu) {
        case true:
          runSearch();
          break;

        case false:
          connection.end();
          break;
      }
    });
}

runSearch();

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: viewOptions,
    })
    .then(function (answer) {
      switch (answer.action) {
        case viewOptions[0]:
          addDepartment();
          break;

        case viewOptions[1]:
          addRole();
          break;

        case viewOptions[2]:
          addEmployee();
          break;

        case viewOptions[3]:
          departmentView();
          break;

        case viewOptions[4]:
          roleView();
          break;

        case viewOptions[5]:
          employeeView();
          break;

        case viewOptions[6]:
          connection.end();
          break;

        case viewOptions[7]:
          connection.end();
          break;
      }
    });
}

function addDepartment() {
  inquirer
    .prompt({
      name: "newDepartment",
      type: "input",
      message: "What is the department name?",
    })
    .then(function (res) {
      var query = connection.query(
        "INSERT INTO department SET ?",
        {
          name: res.newDepartment,
        },
        function (err, res) {
          if (err) throw err;
          console.log(res.affectedRows + "department added");
          mainMenu();
        }
      );
      console.log(query.sql);
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        name: "newRole",
        type: "input",
        message: "What is the name of this role?",
      },
      {
        name: "salary",
        type: "input",
        message: "How much is the salary?",

        validate: function (value) {
          if (isNaN(parseFloat(value))) {
            console.log("\n Please enter a decimal value.");
            return false;
          }
          return true;
        },
      },
      {
        name: "departmentID",
        type: "input",
        message: "What is the dept. ID number?",
      },
    ])
    .then(function (res) {
      console.log(res);
      var query = connection.query(
        "INSERT INTO role SET ?",
        {
          title: res.newRole,
          salary: parseFloat(res.salary).toFixed(2),
          department_id: res.department_id,
        },
        function (err, res) {
          if (err) throw err;
          console.log(res.affectedRows + "Role Added");
          mainMenu();
        }
      );
      console.log(query.sql);
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        name: "firstName",
        type: "input",
        message: "What is the employee's first name?",
      },
      {
        name: "lastName",
        type: "input",
        message: "What is the employee's last name?",
      },
      {
        name: "roleID",
        type: "input",
        message: "What is this employee's role number?",
      },
      {
        name: "managerID",
        type: "input",
        message: "What is this employee's manager's ID number?",
      },
    ])

    .then(function (res) {
      var query = connection.query(
        "INSERT INTO department SET ?",
        {
          name: res.newDepartment,
        },
        function (err, res) {
          if (err) throw err;
          console.log(res.affectedRows + "department added");
          mainMenu();
        }
      );
      console.log(query.sql);
    });
}

function departmentView() {
  var sqlStr = "SELECT * FROM department";
  connection.query(sqlStr, function (err, result) {
    if (err) throw err;

    console.table(result);
    runSearch();
  });
}
function employeeView() {
  var sqlStr = "SELECT * FROM employee ";
  sqlStr += "LEFT JOIN role ";
  sqlStr += "ON employee.role_id = role.id";
  connection.query(sqlStr, function (err, result) {
    if (err) throw err;

    console.table(result);
    runSearch();
  });
}
function roleView() {
  var sqlStr = "SELECT * FROM role";
  connection.query(sqlStr, function (err, result) {
    if (err) throw err;

    console.table(result);
    runSearch();
  });
}

const updateEmployee = () => {
  function runUpdateSearch() {
    inquirer.prompt({
      name: "action",
      type: "list",
      message: "Which employee do you want to update?",
      choices: employeeOptions,
    });
  }
  runUpdateSearch();
};
