const generateReadMe = profileData => {
    return `
# ${profileData.title}


## Description
${profileData.description}

## Table of Contents

[Installation](#install) \n
[Usage](#usage) \n
[License](#license) \n
[Contributing](#contributing) \n
[Tests](#tests) \n
[Badges](badges) \n
[Personal Information](#info) \n

## Installation<a name="install"></a>

${profileData.installation}

## Usage<a name="usage"></a>

${profileData.usage}

## License<a name="license"></a>

${profileData.license[0]}   ${profileData.license[1]}   ${profileData.license[2]}   ${profileData.license[3]}  

## Contributing<a name="contributing"></a>

${profileData.contributing}

## Tests<a name="tests"></a>

${profileData.tests}

## Badges<a name="badges"></a>

![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)

## Personal Information <a name="info"></a>

![GitHub Profile Picture](${profileData.githubData.data.avatar_url} "GitHub Profile Picture") \n
${profileData.githubData.data.name} \n
[${profileData.username}](https://github.com/${profileData.username}) \n
${profileData.email} \n
    `
};

module.exports = generateReadMe;