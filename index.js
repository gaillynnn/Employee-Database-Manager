const inquirer = require("inquirer")
const asciiLogo = require("asciiart-logo")
const pool = require("./config")

function main(

) {
    console.log("starting cli app...");
    const logo = asciiLogo({name: "Employee Management"}).render()
    console.log(logo)

    commandlinePrompts()
}

function commandlinePrompts() {
   return inquirer.prompt([
        {
            type: "list" ,
            name: "choices",
            message: "Welcome!! Please make a selection...",
            choices: [
                {
                    name: "view all employees",
                    value: "VIEW_ALL_EMPLOYEES"
                },

                {
                    name: "add employee",
                    value: "ADD_EMPLOYEE"
                }
            ]
        }
    ]).then((answers) => {
        console.log(answers);
    })
}

main