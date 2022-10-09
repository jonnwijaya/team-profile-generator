const inquirer = require("inquirer");
const fs = require("fs");
const htmlTemplate = require("./src/htmlTemplateHelper")

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const questionManager = require("./lib/questionManager");
const questionEngineer = require("./lib/questionEngineer");
const questionIntern = require("./lib/questionIntern");

const employeesArr = [];

const init = () => { addToTeamPrompt() }

const addToTeamPrompt = () => {
    inquirer.prompt(employeePrompt)
        .then(answer => {
            if (answer.employeeType === "Engineer") {
                questionEngineerFunc();
            } else if (answer.employeeType === "Intern") {
                questionInternFunc();
            } else if (answer.employeeType === "Manager") {
                questionManagerFunc();
            } else {
                generateHTML(employeesArr);
            };
        });
};

const employeePrompt = [
    {
        type: 'list',
        message: "Type of employee:",
        name: "employeeType",
        choices: [
            { name: 'Manager' },
            { name: 'Engineer' },
            { name: 'Intern' },
            { name: "None" }
        ],
    },
];

const questionManagerFunc = () => {
    inquirer.prompt(questionManager)
        .then((answers) => {
            answers = new Manager(
                answers.managerName,
                answers.managerId,
                answers.managerEmail,
                answers.managerOfficeNumber)
            employeesArr.push(answers);
            console.log("Manager added")
            return addToTeamPrompt();
        });
};

const questionEngineerFunc = () => {
    inquirer.prompt(questionEngineer)
        .then((answers) => {
            answers = new Engineer(
                answers.engineerName,
                answers.engineerid,
                answers.engineerEmail,
                answers.engineerGithub)
            employeesArr.push(answers);
            console.log("Engineer added")
            return addToTeamPrompt();
        });
};

const questionInternFunc = () => {
    inquirer.prompt(questionIntern)
        .then((answers) => {
            answers = new Intern(
                answers.internName,
                answers.internId,
                answers.internEmail,
                answers.internGithub)
            employeesArr.push(answers);
            console.log("Intern added")
            return addToTeamPrompt();
        });
};

const generateHTML = (employees) => {
    let htmlFile = htmlTemplate(employees)
    fs.writeFile("./dist/index.html", htmlFile, "UTF-8", (err) =>
        err ? console.error(err) : console.log("HTML file created")
    )
};

init()