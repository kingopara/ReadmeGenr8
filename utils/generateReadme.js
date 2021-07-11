const fs = require('fs');

const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./README2.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

module.exports = {writeToFile};