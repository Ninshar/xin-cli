const inquirer = require('inquirer');
inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'Project name?',
  }
])
.then(anwsers=>{
  
})