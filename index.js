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
           
        } ,
        {
            type: "checkbox",
            message: "what license are you using?",
            name: "license",
            choices: ["BSD-3", 
              "ISC", 
              "MIT", 
              "APN-1"
            ]
          },
          {
          type: "list",
          message: "What is your preferred method of communication?",
          name: "contact",
          choices: [
            "email",
            "phone call",
            "text message"
          ]
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
           
        }
        ] 
  
    ); 
 
}




inqPromise = promptUser();
inqPromise.then(function(userInput) {

let md = `

Poject Name - ${userInput.projectName}



 Table of contents:

* License
* Contact
* Project
* Description
* Motivation
* Why this project
* GitHub user name



License type - ${userInput.license}

Preferred way of contact - ${userInput.contact}

Description -  ${userInput.description}
    
Motivation - ${userInput.motivation}
 
Why this project - ${userInput.example}

GitHub username - ${userInput.github}

Email - ${userInput.email}



                        Authors:
                      Joseph Arocha
                        License:
        This project is licensed under ISC - see the ISC.md file for details.


   
  


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
