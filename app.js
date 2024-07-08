const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();
const sequelize=require('./util/database')

app.set('view engine', 'ejs');
app.set('views', 'views');
const Product=require('./models/product')
const  User=require('./models/user')
app.use((req,res,next)=>{
    User.findByPk(1).then((user)=>{
        req.user=user
        next()
    }).catch((e)=>{
        console.log(e)
    })
    
})


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
Product.belongsTo(User),{constraint:true,onDelete:'CASCADE'}
User.hasMany(Product)
sequelize.sync().then((result)=>{
    return User.findByPk(1)
   

}).then((user)=>{
    console.log(user)
    if(!user)
    {
        return User.create({name:"vivek",email:"siloriv2@gmail.com"})
    }
    return user

}).then(user=>{
    console.log(user)
    app.listen(3000,()=>{
        console.log("server is running on localhost")
    })
}).catch((e)=>{
    console.log(e)
})


