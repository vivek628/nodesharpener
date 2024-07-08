const Sequelize=require('sequelize')
const sequelize=require('../utils/database')
const User= sequelize.define('user',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    date:{
        type:Sequelize.DATE,
        allowNull:false,
    },
    amount:{
        type:Sequelize.DECIMAL,
        allowNull:false,
    },
     expenseDetail:{
        type:Sequelize.STRING,
        allowNull:false
     }

})
module.exports=User