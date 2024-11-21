import express from "express";
const app = express();
const port = 3000;

// Define routes before starting the server
app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  let htmlStr = `<h1>Welcome to the page of @${username} with ID: ${id}</h1>`;
  res.send(htmlStr);
});

app.get("/Search", (req, res) => {
  let { q } = req.query;

  if (!q) {
    return res.send("Please provide a search query.");
  }

  res.send(`Search results for query: ${q}`);
});

// Start the server after defining all routes
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
