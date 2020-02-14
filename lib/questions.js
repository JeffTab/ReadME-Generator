module.exports = [
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
        choices: ['Apache License 2.0', 'GNU GPLv3', 'MIT', 'ISC']
    },
    {
        type: "input",
        message: "Who contributed?",
        name: "contributing"
    },
    {
        type: "input",
        message: "What type of tests?",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
        validate: function (nameinput) {
            if (nameinput) {
                return true;
            }
            return false;
        }
    },
    {
        type: "input",
        message: "What is your GitHub email?",
        name: "email",
        validate: function (emailInput) {
            return /^.+@.+\..+$/gi.test(emailInput) ? true : false;
        }
    }
];