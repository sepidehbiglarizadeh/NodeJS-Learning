const http = require("http");

// * create server
const server = http.createServer((req, res) => {
  //* create a simple router
  if (req.url === "/") res.write("Home Page");
  else if (req.url === "/products")
    res.write(JSON.stringify({ products: ["product1", "product2"] }));
  else res.write("Not Found");
  res.end();
});

server.listen(3000);
