// app.js
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const sequelize = require('./database/db');
const productRoute = require('./routes/product.routes');
const usersRoute = require('./routes/user.routes');
const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/product', productRoute);
app.use('/users', usersRoute);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    return sequelize.sync({ force: false }); // Change this to "true" when you need to drop and change tables (auto change)
  }) // Keep it false if you are testing
  .then(() => {
    console.log('Models are synchronized with the database.');
    app.listen(PORT, function () {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
