const axios = require("axios");
const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username",
        },
        // {
        //     type: "input",
        //     message: "What is your email?",
        //     name: "email"
        // },
        // {
        //     type: "input",
        //     message: "What is the project title?",
        //     name: "title"
        // },
        // {
        //     type: "input",
        //     message: "What is a description of the project?",
        //     name: "description"
        // },
        // {
        //     type: "input",
        //     message: "How does this get installed?",
        //     name: "installation"
        // },
        // {
        //     type: "input",
        //     message: "How does this get used?",
        //     name: "usage"
        // },
        // {
        //     type: "checkbox",
        //     message: "Select the license(s) used:",
        //     name: "license",
        //     choices: [
        //         { name: 'Apache License 2.0' },
        //         { name: 'GNU GPLv3' },
        //         { name: 'MIT' },
        //         { name: 'ISC' }
        //     ]
        // }
    ])
    .then(({ username }) => {
        const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
        return axios.get(queryUrl);
    })
    .then(({ data }) => {

    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });