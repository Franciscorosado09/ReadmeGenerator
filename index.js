const inquirer = require("inquirer");
const fs = require('fs');

const generateMarkdown = require("./utils/generateMarkdown");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the name of your application?",
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a brief description",
    },
    {
      type: "list",
      name: "license",
      message: "Please provide the license being used",
      choices: ["MIT", "Mozilla", "ISC", "IBM", "no license"],
    },
    {
      type: "input",
      name: "link",
      message: "What is the link to your application?",
    },
    {
      type: "input",
      name: "version",
      message: "What is the version of your application?",
    },
    {
      type: "input",
      name: "dependencies",
      message:
        "What prerequsites does your application require before installing?",
    },
    {
      type: "input",
      name: "author",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "gitRepo",
      message: "Please provide your repo url.",
    },
    {
      type: "input",
      name: "email",
      message: "Please provide your email.",
    },

    {
      type: "input",
      name: "contributors",
      message: "List names of all contributors.",
    },
  ])
  .then((data) => {
    //function to write all information on file
    //for information on generatemarkdown go to seperate file

    let response = generateMarkdown(data);
    fs.writeFile("README-generated.md", response, (err) =>
      err ? console.log(err) : console.log("README is now generated!")
    );
  });

  // other functions that were provided were removed for cleaner code