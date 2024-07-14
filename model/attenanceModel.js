// models/attendance.js
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database'); // Assuming your Sequelize instance is configured in database.js

const Attendance = sequelize.define('Attendance', {
  date: {
    type: DataTypes.DATEONLY,
   
  },
  status: {
    type: DataTypes.STRING,
    
  },
  
});

module.exports = Attendance;

