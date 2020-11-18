const { Server } = require('http');
const fs = require("fs");

Server((req, res) => {
  res.writeHead(200, {
      "Content-Type": "text/html",
      "Access-Control-Allow-Origin": "*"
  });
  if (req.url === "/login/") {
      res.end("kokkareva97");
  } else if (req.url === "/sample/") {
      function task(x) {
        return x * (this ** 2);
      }
      res.end(task.toString());
  } else if (req.url === "/fetch/") {
      fs.readFile('./fetch.html', null, function (error, data) {
          if (error) {
              res.writeHead(404);
              res.write('Whoops! File not found!');
          } else {
              res.write(data);
          }
          res.end();
      });
  }
   else if (req.url === "/promise/") {
      function task(x) {
        return new Promise((res, rej) => x < 18 ? res('yes') : rej('no'));
      }
      res.end(task.toString());
  }
})
.listen(process.env.PORT);
