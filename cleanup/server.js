const http = require("http");
const routes = require("./routes");

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    res.setHeader("Content-Type", "text/html");

    if (routes[req.url]) {
        res.writeHead(200);
        res.end(routes[req.url]);
    } else {
        res.writeHead(404);
        res.end("<h1>404 - Page Not Found</h1>");
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});