// Viết code đọc file file-info.txt ở đây
const fs = require('fs');
(async () =>{
    const data = await new Promise((res, rej) => {
        fs.readFile('file-info.txt',(err, data) => {
                res(data);
        });
    });
    const datajson = JSON.parse(data);
    const datajson2 = JSON.parse(datajson);
    module.exports.datajson2 = datajson2;
})();