const express = require('express');
const cors = require("cors")
const sequelize = require("./database/db")
const app = express();
app.use(express.json());
app.use(cors())
const PORT = 3000

////// rout of product
const productRoute = require("./routes/product.routes")
app.use("/product",productRoute)
/////route of order
const orderRoute = require("./routes/order.routes")
app.use("/order",orderRoute)

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    return sequelize.sync({ force: false}); // Change this to "true" when You need to drop and change Tables (auto change)
  })//Keep it False if you are testing
  .then(() => {
    console.log('Models are synchronized with the database.');
    app.listen(PORT, function () {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });