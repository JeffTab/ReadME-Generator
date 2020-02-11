const generateReadMe = profileData => {
    return `
# ${profileData.title}


## Description
${profileData.description}

## Table of Contents
    


## Installation

${profileData.installation}

## Usage

${profileData.usage}

## License

${profileData.license}   

## Badges


`
};

module.exports = generateReadMe;