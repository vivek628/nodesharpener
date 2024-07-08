const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing:false
    
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  req.user.createProduct({title:title,imageUrl:imageUrl,price:price,description:description}).then((result)=>{console.log(result)
  res.redirect('/products')})
  .catch((e)=>console.log(e))
}
 exports.getEditProduct = (req, res, next) => {
  let editMode=req.query.edit
  if(!editMode)
    {
     return  res.redirect('/')
    }
    let proId=req.params.productId
    Product.findAll({where:{id:proId}}).then(product=>{
      if(!product){
        res.redirect('/')
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing:editMode,
        Product:product[0]
    })

    }).catch((e)=>console.log(e))
};
exports.postEditProduct=(req,res,next)=>{
  const prodId=req.body.productId;
  const updatedTitle=req.body.title;
  const updatedImageUrl=req.body.imageUrl;
  const updatedPrice=req.body.price;
  const updatedDesc=req.body.description;
 Product.findAll({where:{id:prodId}}).then(product=>
  {
    product[0].title=updatedTitle
    product[0].description=updatedDesc
    product[0].price=updatedPrice
    product[0].imageUrl=updatedImageUrl
    product[0].save()
    return res.redirect('products')
  }
 ).catch(e=>console.log(e))
};


exports.getProducts = (req, res, next) => {
  Product.findAll().then((products)=>{
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
   
  }).catch((e)=>console.log(e))
};
exports.deleteProduct=(req,res,next)=>{
  const prodId=req.params.productId
  Product.findAll(({where:{id:prodId}})).then(product=>{
    return product[0].destroy()
  }).then((result)=>{
    console.log("product is deleted")
    res.redirect('/products')
  }).catch((e)=>console.log(e))
 
  
}
