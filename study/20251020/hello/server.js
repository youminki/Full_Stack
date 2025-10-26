import http from "http";

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain; charset=utf-8");
//   res.end("Node.js Running!");
// });

const server = http.createServer((req, res) => {
  if (req.url === "/hello") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end(JSON.stringify({ message: "Hello, Node.js!" }));
  } else if (req.url === "/hello2") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end(JSON.stringify({ message: "Hello2, Node.js!" }));
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Sever is running on 3000!");
});
