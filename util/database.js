const mysql=  require('mysql2')
const pool= mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password:'Vivek@628'
})
module.exports=pool.promise()