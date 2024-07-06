const express = require('express');
const path = require('path');
const app = express();
const userRoute = require('./routes/user');
const User= require('./model/user')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));


const sequelize = require('./utlis/database');


app.use(userRoute);


sequelize.sync()
  .then((result) => {
    console.log("Database synced successfully");

    
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
    }).catch((error) => {
    console.error("Unable to sync database:", error);
  });

