const express = require("express");
const itemRoutes = require('./routes/route')
const db = require('./models/model');
const app = express();
const PORT = process.env.PORT || 3000
// const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use("api/profile",itemRoutes)


app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
