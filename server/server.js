// app.js
const express = require('express');
const cors = require("cors")
const cookieParser = require("cookie-parser")
const sequelize = require("./database/db")
const productRoute = require("./routes/product.routes")
const usersRoute = require('./routes/user.routes');
const profileRoutes=require("./routes/profile.routes")
PORT  = 3000 ; 

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

PORT = 3000



app.use("/product",productRoute)
app.use('/users', usersRoute);

app.use("/api/profile",profileRoutes)




sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    return sequelize.sync({ force: false });
  })
  .then(() => {
    console.log('Models are synchronized with the database.');
    app.listen(PORT, function () {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
