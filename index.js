const http = require('http');
const util = require('util');
const url  = require('url');
const os   = require('os');
const datajson2 = require('./read-file.js');
const database = require('./connect-to-mysql.js');
const server = http.createServer();
server.on('request', async function (req, res) {
  const reqUrl = url.parse(req.url, true);
  res.writeHead(200, {'Content-Type': "text/html; charset=utf-8; application/json"});
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
    content += "<title>Đọc file JSON</title>";
    content += "</head>";
    content += "<body>";
    content += "<h1>Đọc file JSON</h1>";
    content += "<pre><code>" + JSON.stringify(datajson2, null, 2) + "</code></pre>";
    content += "</body>";
    content += "</html>";
  } else if (reqUrl.pathname === '/connect-mysql-db') {
    content += "<html>";
    content += "<head>";
    content += "<title>Kết nối đến MySQL</title>";
    content +="<style>";
    content +="table, th, td {";
    content +="border: 1px solid black;";
    content += "}";
    content +="</style>";
    content += "</head>";
    content += "<body>";
    content += "<h1>Kết nối đến MYSQL </h1>";
    content +="<table style = 'width:100% '>";
    content += "<tr>";
    content +="<th>employeeNumber</th>";
    content +="<th>lastName</th>";
    content +="<th>firstName</th>";
    content +="<th>extension</th>";
    content +="<th>email</th>";
    content +="<th>officeCode</th>";
    content +="<th>reportsTo</th>";
    content +="<th>jobTitle</th>";
    content +="</tr>";

    database.database.forEach(element => {

      content +="<tr>";
      content +="<td> ";
      content +="<pre><code>" + JSON.stringify(element.employeeNumber) + "</code></pre>";
      content +="</td>";
      content +="<td> ";
      content +="<pre><code>" + JSON.stringify(element.lastName) + "</code></pre>";
      content +="</td>";
      content +="<td> ";
      content +="<pre><code>" + JSON.stringify(element.firstName) + "</code></pre>";
      content +="</td>";
      content +="<td> ";
      content +="<pre><code>" + JSON.stringify(element.extension) + "</code></pre>";
      content +="</td>";
      content +="<td> ";
      content +="<pre><code>" + JSON.stringify(element.email) + "</code></pre>";
      content +="</td>";
      content +="<td> ";
      content +="<pre><code>" + JSON.stringify(element.officeCode) + "</code></pre>";
      content +="</td>";
      content +="<td> ";
      content +="<pre><code>" + JSON.stringify(element.reportsTo) + "</code></pre>";
      content +="</td>";
      content +="<td> ";
      content +="<pre><code>" + JSON.stringify(element.jobTitle) + "</code></pre>";
      content +="</td>";
      content +="</tr>";
      
       });
    content +="</table>  ";
    content += "</body>";
    content += "</html>";
  } 
  res.end(content);
});
server.listen(8000);
console.log('Listening to http://127.0.0.1:8000');
