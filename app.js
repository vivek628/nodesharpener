const express= require('express')
const app=express()
const path=require('path')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const User=require('./model/detail')
const sequelize = require('./utils/database.js');

const userRout=require('./routes/user')
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(userRout)
sequelize.sync()
  .then((result) => {
    console.log("Database synced successfully");

    
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
    }).catch((error) => {
    console.error("Unable to sync database:", error);
  });