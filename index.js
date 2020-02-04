const axios = require("axios");
const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username",
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the project title?",
            name: "title"
        },
        {
            type: "input",
            message: "What is a description of the project?",
            name: "description"
        },
        {
            type: "input",
            message: "How does this get installed?",
            name: "installation"
        },
        {
            type: "input",
            message: "How does this get used?",
            name: "usage"
        },
        {
            type: "checkbox",
            message: "Select the license(s) used:",
            name: "license",
            choices: [
                { name: 'Apache License 2.0' },
                { name: 'GNU GPLv3' },
                { name: 'MIT' },
                { name: 'ISC' }
            ]
        }
    ])
    .then((response) => {
        console.log(response);
        const list = Object.values(response);
        console.log(list);
        const mappedItems = list.map(markup);
        function markup(item) {
            return (`## ${item}`)
        };
        console.log(mappedItems);

        console.log(readMeInformation);
        return writeFile("ReadMe.md", readMeInformation)
    })
    // .then((username) => {
    //     const queryUrl = `https://api.github.com/users/${username}`;
    //     return axios.get(queryUrl);
    // })
    // .then(({ data }) => {
    //     console.log(data);
    // })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });