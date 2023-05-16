// Viết code đọc file file-info.txt ở đây


const fs = require('fs');

async function readFileAsync(filePath) {
  const data = await new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
  const jsonObject = JSON.parse(data);
  module.exports.jsonObject = jsonObject;
}

readFileAsync('./file-info.txt')
  .catch((err) => {
    console.error(err);
  });
