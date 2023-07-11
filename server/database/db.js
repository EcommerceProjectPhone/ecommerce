const Sequelize = require('sequelize');

const sequelize = new Sequelize('ecommerce', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
  sync: false,
});


sequelize
  .query('CREATE DATABASE IF NOT EXISTS `ecommerce`;') 
  .then(() => {})
  .catch((error) => {
    console.error('Unable to create the database:', error);
    sequelize.close();
  });

  // sequelize.sync().then(()=>{
  //   console.log("database connected ")
    
  // }).catch((err)=>console.log(err))
  // sequelize.authenticate().then(()=>{
  //   console.log("connection has been established successfully ")
    
  // }).catch((err)=>console.error("unable to connect to the database :",err))

module.exports = sequelize;
