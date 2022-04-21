const chalk = require("chalk");
const inquirer = require("inquirer");

inquirer.prompt([
    /* Pass your questions in here */
    {
        name: "user_name",
        type: "input",
        message: "Qual é o seu nome?",
    },
    {
        name: "user_age",
        type: "number",
        message: "Qual a sua idade?",
    },
])
.then( (answers) => {
    // Use user feedback for... whatever!!
    const out = `Olá ${answers.user_name}! Você tem ${answers.user_age} anos de idade`;
    console.log(chalk.red.bgBlue.bold(out));
    
})
.catch( (err) => console.log(err));
  
// 563 pd6192