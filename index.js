console.log("starting up");
const express = require("express");
const app = express();

const morgan = require('morgan');
app.use(morgan('dev'))

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(express.static('public'));

app.get("/", (req, res) => {
  console.log("/route requested");
  res.send("<h1>HOME</h1><div>hello world</div>");
});

app.get("/users", (req, res) => {
  res.send([
    {
      name: "tom",
    },
    {
        name: "christian",
      },
  ]);
});


app.post('/users', (req, res) => {
  console.log('POST request made by users');
  console.log('request object:', req)
  console.log('body:', req.body)
  // do something with the body, then send back a response
  res.send({message: 'nothing here yet', youSentUs: req.body})
})

//***this code in console*/
// fetch('/users', {
//   method: 'POST',
//   headers: {
//     'Content-type': 'Application/json',
//   },
//   body: JSON.stringify([
//     {name: 'Mark'},
//     {name: 'Christian'},
//   ])
// }).then(res => 
// res.json()).then(console.log).catch(console.log);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server is up on port ${PORT}`);
});
