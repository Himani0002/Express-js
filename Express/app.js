// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   res.end("Hello world");
// });

// server.listen(3001);

const express = require("express");
const app = express();
const morgan = require("morgan");

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// app.get(
//   "/",
//   (req, res, next) => {
//     console.log("Hello World");
//     next();
//   },
//   (req, res) => {
//     res.render("index");
//   }
// );

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.post("/get-form-data", (req, res) => {
  console.log(req.body);
  res.send("Data Received");
});

app.listen(3001);
