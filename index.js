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
		const func = function task(x) {
			return x * this ** 2;
		}
		func.bind(3);
		console.log(func(5));
		res.end(func);
	}
})
.listen(process.env.PORT);
