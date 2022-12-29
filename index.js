console.log("starting up");
const express = require("express");
const app = express();

app.use(express.static('public'));

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

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server is up on port ${PORT}`);
});
