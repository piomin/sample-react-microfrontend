const express = require("express");
const path = require('path');
const axios = require("axios");

const PORT = process.env.PORT || 3000;
const apiUrl = process.env.REACT_APP_BACKEND_URL

const app = express();

app.use(express.static(path.resolve(__dirname, 'client/build')));

app.get("/persons", (req, res) => {
  axios.get(apiUrl + "/persons")
  .then(function (response) {
    // handle success
    console.log(response.data);
    res.json(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
//   console.log(response.data)
//   res.json(response.data);
//   res.json([{id: 1, name: "Piotr", gender: "MALE", age: 20 }]);
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
  });
  
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});