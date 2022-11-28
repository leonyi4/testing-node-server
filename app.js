const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>First page</title></head>");
  res.write("<body><h1>Hello, this is my node server!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
