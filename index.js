const express = require("express");
const path = require('path');
const axios = require("axios");

const PORT = process.env.PORT || 3000;
const apiUrl = process.env.REACT_APP_BACKEND_URL

const app = express();

app.use(express.static(path.resolve(__dirname, 'client/build')));
app.use(express.json());

app.get("/persons", (req, res) => {
  axios.get(apiUrl + "/persons")
  .then(function (response) {
    res.json(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
  });
});

app.get("/persons/:id", (req, res) => {
  axios.get(apiUrl + "/persons/" + req.params.id)
  .then(function (response) {
    res.json(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
  });
});

app.post("/persons", (req, res) => {
  console.log("New person:" + req.body);
  axios.post(apiUrl + "/persons", {
    name: req.body.name,
    gender: req.body.gender,
    age: req.body.age,
    address: {
      city: "Warsaw",
      street: "None",
    }
  }, {
    headers: {'Content-Type': 'application/json'}
  })
  .then(function (response) {
    res.json(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});
  
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});