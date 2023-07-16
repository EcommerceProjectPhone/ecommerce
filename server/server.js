
const express = require('express');
const cors = require("cors")
const cookieParser = require("cookie-parser")
const sequelize = require("./database/db")

const productRoute = require("./routes/product.routes")
const profileRoutes=require("./routes/profile.routes")
const 
PORT  = 3000 ; 


const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());








app.use("/product",productRoute)
const orderRoute = require('./routes/order.routes');
app.use('/order', orderRoute);
const companyRoute=require("./routes/Companies.routes")
app.use("/company",companyRoute)

const usersRoute = require('./routes/user.routes');




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
//   const RatingRoute = require("./routes/rating.routes")
// app.use("/rating",RatingRoute)



// const express = require('express')

// const cors = require("cors")
// const cookieParser = require("cookie-parser")
// const sequelize = require("./database/db")


// const app = express()
// app.use(express.json())
// app.use(cors())


// const productRoute = require("./routes/product.routes")
// const profileRoutes=require("./routes/profile.routes")
// PORT  = 3000 ; 










// app.use("/product",productRoute)
// const orderRoute = require('./routes/order.routes');
// app.use('/order', orderRoute);

// const usersRoute = require('./routes/user.routes');




// app.use('/users', usersRoute);

// app.use("/api/profile",profileRoutes)


// const companyRoute=require("./routes/Companies.routes")
// app.use("/company",companyRoute)
// // const userRoute=require("./routes/user.routes")
// // app.use("/user",userRoute)


// sequelize.authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//     return sequelize.sync({ force: false });
//   })
//   .then(() => {
//     console.log('Models are synchronized with the database.');
//     app.listen(PORT, function () {
//       console.log(`Listening on port ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error('Unable to connect to the database:', error);
//   });
//   const RatingRoute = require("./routes/rating.routes")
// app.use("/rating",RatingRoute)