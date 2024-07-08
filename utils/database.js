const {Sequelize}= require('sequelize')
const sequelize= new Sequelize('task','root','Vivek@628',{dialect:'mysql',host:'localhost'})
module.exports = sequelize;