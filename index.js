const http = require('http');
const util = require('util');
const url  = require('url');
const os   = require('os');
const server = http.createServer();

server.on('request', async function (req, res) {
  const reqUrl = url.parse(req.url, true);
  res.writeHead(200, {'Content-Type': "text/html; charset=utf-8"});
  let content = "";

  if (reqUrl.pathname === '/') {
    content += "<html>";
    content += "<head>";
    content += "<title>Hello, World!</title>";
    content += "</head>";
    content += "<body>";
    content += "<p><a href='/osinfo'>Xem thông tin hệ điều hành</a></p>";
    content += "<p><a href='/reading-file'>Đọc file</a></p>";
    content += "<p><a href='/connect-mysql-db'>Kết nối đến MySQL</a></p>";
    content += "</body>";
    content += "</html>";
  } else if (reqUrl.pathname === '/osinfo') {
    content += "<html>";
    content += "<head>";
    content += "<title>Thông tin hệ điều hành</title>";
    content += "</head>";
    content += "<body>";
    content += "<h1>Thông tin hệ điều hành</h1>";
    content += "<table>";
    content += "<tr><th>TMP Directory</th><td>" + os.tmpdir() + "</td></tr>";
    content += "<tr><th>Host Name</th><td>" + os.hostname() + "</td></tr>";
    content += "<tr><th>OS Type</th><td>" + os.type() + " " + os.platform() + " " + os.arch() + "</td></tr>";
    content += "<tr><th>Memory</th><td>total: " + os.totalmem() + ", free: " + os.freemem() + "</td></tr>";
    content += "</table>";
    content += "</body>";
    content += "</html>";
  } else if (reqUrl.pathname === '/reading-file') {
    content += "<html>";
    content += "<head>";
    content += "<title>Đọc file</title>";
    content += "</head>";
    content += "<body>";
    content += "<h1>Đọc file</h1>";
    content += "<p>" + " " + 'Nội dung file hiển thị ở đây' + " " + "</p>";
    content += "</body>";
    content += "</html>";
  } else if (reqUrl.pathname === '/connect-mysql-db') {
    content += "<html>";
    content += "<head>";
    content += "<title>Kết nối đến MySQL</title>";
    content += "</head>";
    content += "<body>";
    content += "<h1>Kết nối đến MySQL</h1>";
    content += "<p>" + " " + 'Kết quả kết nối đến DB hiển thị ở đây' + " " + "</p>";
    content += "</body>";
    content += "</html>";
  }

  res.end(content);

});

server.listen(8080);
console.log('Listening to http://127.0.0.1:8080');
