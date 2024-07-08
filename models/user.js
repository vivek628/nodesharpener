const Sequelize= require('sequelize')
const sequilize=require('../util/database')
const user= sequilize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:Sequelize.STRING,
    email:Sequelize.STRING
});
module.exports=user