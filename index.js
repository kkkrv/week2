const { Server } = require('http');
const fs = require("fs");

Server((req, res) => {
  res.writeHead(200, {
		  "Content-Type": "text/plain; charset=UTF-8",
         	  "Access-Control-Allow-Origin": "*"
      		});
  if (req.url === "/login/") {
		res.end('kokkareva97');
	} else if (req.url === "/sample/") {
		console.log("Sample page");
		function task(x) {
			return x * this ** 2;
		}
		res.end(task);
	}
})
.listen(process.env.PORT);
