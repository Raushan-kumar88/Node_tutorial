const fs = require('fs');
// const index = fs.readFileSync('index.html', 'utf-8');
// const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
// const products = data.products;
const model= require('../model/product');
const Product=model.Product;

exports.createProduct=async(req,res)=>{  // post request
    // console.log(req.body);
    // products.push(req.body);
//     const product = new Product();
//     // product.title='Realme 9';
//     // product.price=14999;
//     // product.brand='Realme'
//     // product.rating=4.5;
//     product.save()
//   .then(() => {
//     // Save operation successful
//     res.status(201).json(req.body);
//   })
//   .catch((error) => {
//     // Handle error
//   });

// // Updated code using async/await
// try {
//   await product.save((err,doc)=>{
//     console.log({err,doc})
//     res.status(201).json(req.body);

//   });
//   // Save operation successful
// } catch (error) {
//   // Handle error
// }
    // res.status(201).json(req.body);

    const productData = req.body;

    try {
      const product = new Product(productData);
      const savedProduct = await product.save();
      res.status(201).json(savedProduct);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while saving the product.' });
    }

}


exports.readProduct = async(req,res)=>{  //get request
  const products=await Product.find({price:{$gt:300}});
    res.json(products);
}

// get product 
exports.getProduct=async(req,res)=>{ //get request
    // const id=+req.params.id;
    // const product = products.find(p=>p.id===id);
    // res.json(product);
    const id = req.params.id;
    const product = await Product.findById(id);
    res.json(product);
}

exports.replaceProduct=async(req,res)=>{  //put request
    // const id=+req.params.id;
    // const productIndex = products.findIndex(p=>p.id===id);
    // products.splice(productIndex,1,{...req.body,id:id});
    // res.status(201).json(req.body);

    const id = req.params.id;
    try{
      const doc = await Product.findOneAndReplace({_id:id},req.body,{new:true});
      res.status(201).json(doc);
    }
    catch(err){
      res.status(400).json(err);
    }
}

exports.updateProduct=async(req,res)=>{   //patch request
    // const id=+req.params.id;
    // const productIndex = products.findIndex(p=>p.id===id);
    // const product = products[productIndex];
    // products.splice(productIndex,1,{...product,...req.body});
    // res.status(201).json(req.body);

    const id = req.params.id;
    try{
      const doc = await Product.findOneAndUpdate({_id:id},req.body,{new:true});
      res.status(201).json(doc);
    }
    catch(err){
      res.status(400).json(err);
    }
}
exports.deleteProduct = async (req,res)=>{
    // const id=+req.params.id;
    // const productIndex = products.findIndex(p=>p.id===id);
    // const product = products[productIndex];
    // products.splice(productIndex,1);
    // res.status(201).json(product);
    const id = req.params.id;
    try{
      const doc = await Product.findOneAndDelete({_id:id});
      res.status(201).json(doc);
    }
    catch(err){
      res.status(400).json(err);
    }
}
