console.log("starting up");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("/route requested");
  res.send("<h1>HOME</h1><div>hello world</div>");
});

app.get("/users", (req, res) => {
  res.send([
    {
      name: "robert",
    },
    {
        name: "christian",
      },
  ]);
});

app.listen(3000, () => {
  console.log("server is up");
});
