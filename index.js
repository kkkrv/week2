const { Server } = require('http');
const fs = require("fs");

const cors = { 
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
  "Access-Control-Allow-Headers": "x-test,Content-Type,Accept,Access-Control-Allow-Headers"
};

Server((req, res) => {
  res.writeHead(200, {
      "Content-Type": "text/html",
      ...cors
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
  } else if (req.url === "/promise/") {
      function task(x) {
        return new Promise((res, rej) => x < 18 ? res('yes') : rej('no'));
      }
      res.end(task.toString());
  } else if (req.url === "/result4/") {
      const result = {
        message: "kokkareva97",
        "x-result": req.headers['x-test']
      }
      let body = "";
      req.on('data', chunk => body += chunk)
      .on('end', () => {
        res.writeHead('200', {
          "Content-Type": "application/json", 
          ...cors
        })
        result['x-body'] = body;
        res.end(JSON.stringify(result));
      })
  }
})
.listen(process.env.PORT);
