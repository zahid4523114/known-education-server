const express = require("express");
const app = express();
const cors = require("cors");
const courses = require("./courses.json");
const category = require("./category.json");
const port = 5000;

app.use(cors());

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/course/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find((c) => c.id === id);
  res.send(course);
});

app.get("/course/detail/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find((c) => c.id === id);
  res.send(course);
});

app.get("/category", (req, res) => {
  res.send(category);
});

app.get("/", (req, res) => {
  res.send("hello author");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
