const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../utils/database'); // Assuming your Sequelize instance is configured in database.js
const { status } = require('../controllers/admincontroller');

const Student = sequelize.define('Student', {
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
   allowNull:false
  },
  percentage:{
    type:DataTypes.INTEGER,
    allowNull:true
  }

 
});

module.exports = Student;