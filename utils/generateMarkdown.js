// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "MIT"){
        return'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }
    if (license === "Mozilla"){
        return'[[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    }
    if (license === "ISC"){
        return'[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    }
    if (license === "IBM"){
        return'[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
    }
    else{
        return ""
    }

}
// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "MIT"){
        return'(https://opensource.org/licenses/MIT)'
    }
    if (license === "Mozilla"){
        return'(https://opensource.org/licenses/MPL-2.0)'
    }
    if (license === "ISC"){
        return'(https://opensource.org/licenses/ISC)'
    }
    if (license === "IBM"){
        return'(https://opensource.org/licenses/IPL-1.0)'
    }
    else{
        return ""
    }





};


// function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {

    if (license === "no license"){
        return ""
    }else{
        return `${renderLicenseLink(license)}`
    }


}
// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # **${data.title}**
  License: ${renderLicenseBadge(data.license)}

  # **Description**
  * ${data.description}


  # ** Table of Contents**
  1. [Description](#Description)
  2. [License](#License)
  3. [Dependencies](#Dependencies)
  4. [Application](#Application)
  5. [Contributors](#Contributors)
  6. [FAQ](#FAQ)
  
  
  
  

  # **License**

  *${data.license}
  * More info visit site: ${renderLicenseLink(license)}
 
  # **Dependencies**
  List of required installations prior to download: ${data.dependencies}
  
  
  # **Application**
  *${data.title} is on version ${data.version}

  *Link to Application: ${data.link} 
  *Link to Repo: ${data.gitRepo}
  
  # **Contributors**
  Author of README ${data.author}

  List of Contributors to application:
    *  ${data.contributors}
    
  
  # **FAQ**
  Contact info:
    *README Author: ${data.author}
    *Email: ${data.email}
    *Application Repo: ${data.gitRepo}
  
  
  `; 
}

//connects with main index file that holds questions for user
module.exports = generateMarkdown;