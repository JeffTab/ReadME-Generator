const fs = require("fs");

const writeFile = (fileName, fileContent) => {
    return new Promise((resolve, reject) => {
        return fs.writeFile(fileName, fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                message: "Success!",
                successful: true
            });
        });
    });
};

module.exports = { writeFile };