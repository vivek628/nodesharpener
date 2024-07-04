const Product = require('../models/product');
const Cart=require('../models/cart')
const { patch } = require('../routes/admin');

exports.getProducts = (req, res, next) => {
  Product.fetchAll().then(([rows,fieldData])=>{
    
    res.render('shop/product-list', {
      prods: rows,
      pageTitle: 'All Products',
      path: '/products'
    })
  }).catch((e)=>console.log(e))

};
exports.getProduct=(req,res,next)=>{
  const id=req.params.productId
  Product.FindById(id).then(([product])=>{
    res.render('shop/product-detail',{
      product:product[0],
      pageTitle:product.title,
      path:'/products'
     });
  }).catch(e=>console.log(e))
   
 
  
  
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll().then(([rows,fieldElement])=>{
    res.render('shop/index', {
      prods: rows,
      pageTitle: 'Shop',
      path: '/'
    })
  }).catch(err=>console.log(err));
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postcart=(req,res,next)=>{
  const proId=req.body.productId;
  Product.FindById(proId,(product)=>{
    Cart.addProduct(proId,product.price)
  })
  console.log(proId)
  res.redirect('/cart')

}
exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
