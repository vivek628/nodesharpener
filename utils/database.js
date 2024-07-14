const Sequelize= require('sequelize')
const sequelize=new Sequelize('attendance','root','Vivek@628',{dialect:'mysql',host:'localhost'})
module.exports=sequelize