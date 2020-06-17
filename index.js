const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    
    return inquirer.prompt(
        [{
            type: "input",
            message:"what is your github username?",
            name: "github"
        },
        {
            type: "input",
            message: "what is the name of your project?",
            name: "projectName"
        },
        {
            type: "input",
            message: "Please describe your project?",
            name: "description"
        },
        {
            type: "input",
            message: "What was your motivation for this project?",
            name: "motivation"
        },
       
        {
            type: "input",
            message: "Why did you choose to build this project?",
            name: "example"
           
        } 
       
        ] 
  
    ); 
 
}




inqPromise = promptUser();
inqPromise.then(function(userInput) {

let md = `

Table of contents:

* Project
* Description
* Motivation
* Why this project
* GitHub user name




Poject - ${userInput.projectName}

Description -  ${userInput.description}
    
Motivation - ${userInput.motivation}
 
Why this project - ${userInput.example}

GitHub - ${userInput.github}

  License:
  This project is licensed under ISC - see the ISC.md file for details.

  Authors:
  Joseph Arocha
   
  


` ;
                             
let writePromise = writeFileAsync("ReadMe.md", md);
writePromise.then(function() {
    console.log("successfully wrote out to ReadMe.md");
}) .catch(function(err) {
    console.log("problem with writing file ReadMe.md");
    console.log(err);
}) .catch(function(err) {
    
    console.log("problem with inquirer.prompt");
    console.log(err);
});
});
