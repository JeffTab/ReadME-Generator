const axios = require("axios");
const inquirer = require("inquirer");


const generateReadMe = require("./lib/generate-readme");
const questions = require("./lib/questions");
const { writeFile } = require("./lib/file-utils");

const promiseHandler = promise => promise.then(res => [null, res]).catch(err => [err, null]);

const init = async () => {
    const responseObj = await inquirer.prompt(questions);

    const [axiosErr, githubData] = await promiseHandler(
        axios.get(`https://api.github.com/users/${responseObj.username}`)
    );

    if (axiosErr) {
        return console.log(axiosErr);
    }

    const readMeData = {
        ...responseObj, githubData
    };

    const finishedReadMe = generateReadMe(readMeData);

    const [writeFileErr, writeFileRes] = await promiseHandler(writeFile("generatedREADME.md", finishedReadMe));

    if (writeFileErr) {
        return console.log(writeFileErr);
    }

    console.log(writeFileRes);
};

init();