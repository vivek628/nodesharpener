const Sequelize=require('sequelize')
const sequelize=require('../utlis/database')
const User= sequelize.define('user',{
    id:{
       type: Sequelize.INTEGER,
       autoIncrement:true,
       allowNull:false,
       primaryKey:true
    },
    userName:{
        type:Sequelize.STRING,   

    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
    },
    mobileNumber: {
        type: Sequelize.STRING
    }
})
module.exports=User