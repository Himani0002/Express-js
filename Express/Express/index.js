import express from "express";
import net from "net";

const app = express();
const DEFAULT_PORT = 3000;

// Middleware for logging
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});

// Define routes
app.get("/", (req, res) => {
  res.send("Home route connected");
});

app.get("/apple", (req, res) => {
  res.send("Apple connected");
});

app.get("/banana", (req, res) => {
  res.send("Banana connected");
});

// Catch-all route for unmatched paths
app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Not Found</h1>");
});

app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  let htmlStr = `<h1>Welcome to the page of @${username}</h1>`;
  res.send(htmlStr);
});

// Function to find a free port
function findFreePort(startPort, callback) {
  const server = net.createServer();
  server.listen(startPort, () => {
    server.once("close", () => callback(startPort));
    server.close();
  });
  server.on("error", () => findFreePort(startPort + 1, callback));
}

// Start server on a free port
findFreePort(DEFAULT_PORT, (freePort) => {
  app.listen(freePort, () => {
    console.log(`Server is running at http://localhost:${freePort}`);
  });
});
