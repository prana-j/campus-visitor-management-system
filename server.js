
const http = require("http");
const fs = require("fs");
const path = require("path");

const pages = {
  "/": "index.html",
  "/index.html": "index.html",
  "/admin": "admin.html",
  "/visitor": "visitor.html",
  "/security": "security.html",
  "/host": "host.html"
};

const server = http.createServer((req, res) => {
  const requestedPath = new URL(
    req.url,
    "http://localhost:3000"
  ).pathname;

  // Serve the Amrita image used on the login page.
  if (requestedPath === "/amritapic.jpg") {
    const imagePath = path.join(__dirname, "amritapic.jpg");

    fs.readFile(imagePath, (error, content) => {
      if (error) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Image not found. Check that amritapic.jpg exists.");
        return;
      }

      res.writeHead(200, {
        "Content-Type": "image/jpeg",
        "Cache-Control": "no-cache"
      });
      res.end(content);
    });

    return;
  }

  const file = pages[requestedPath];

  if (!file) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
    return;
  }

  const filePath = path.join(__dirname, file);

  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Could not load page. Check that the HTML file exists.");
      return;
    }

    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8"
    });
    res.end(content);
  });
});

server.listen(3000, () => {
  console.log("Campus Visitor System running at http://localhost:3000");
});
