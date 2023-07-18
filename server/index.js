// const http = require('http'); // used for http

// this method is use of without express start .....................




// const server = http.createServer((req, res) => {
//     console.log('server is stated');
//     console.log(req.url,req.method);
//     if(req.url.startsWith('/product')){
//         const id = req.url.split('/')[2]
//         const product = products.find(p =>p.id === (+id))
//         console.log(product);
//         res.setHeader('content-Type', 'text/html');
//         let modifiedIndex = index.replace('**title**', product.title)
//             .replace('**src**', product.thumbnail)
//             .replace('**rating**', product.rating)
//             .replace('**price**', product.price)
//             ;
//         res.end(modifiedIndex);
//         return
//     }
//     switch (req.url) {
//         case '/':
//             res.setHeader('content-Type', 'text/html');
//             res.end(index);
//             break;
//         case '/api':
//             res.setHeader('content-Type', 'application/json');
//             res.end(JSON.stringify(data));
//             // res.end(data);
//             break
//         // case '/product':
//         //     res.setHeader('content-Type', 'text/html');
//         //     // res.end(JSON.stringify(data));
//         //     let newIndex=index.replace('**title**',product.title)
//         //     .replace('**src**',product.thumbnail)
//         //     .replace('**rating**',product.rating)
//         //     .replace('**price**',product.price)
//         //     ;
//         //     res.end(newIndex);
//         //     break
//         default:
//             res.writeHead(404, 'Not found');
//             res.end();
//             break;
//     }
//     // res.setHeader('dummy', 'deuumy body');



// })
// server.listen(8080);


// method is end.....................




// body parser
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan'); //use third party middle ware
const server = express();
const cors = require('cors');
const productRouter= require('./routes/product');
const userRouter= require('./routes/user');

// db connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log("database connected");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}












//bodyParser
server.use(cors());
server.use(express.json());
server.use(morgan('default'));
server.use(express.static(process.env.PUBLIC_DIR));
server.use('/products', productRouter.router); // this is middle for router 
server.use('/users', userRouter.router);
// MVC model-view-controller

// server.use(( req,res,next)=>{
//     console.log(req.method,req.ip,req.hostname,new Date(),req.get('User-Agent'));
//     next();
// })




// const auth =(req,res,next)=>{
//     console.log(req.query)
//     // if(req.query.password==123){
//     //     next();
//     // }else{
//     //     res.sendStatus(404);
//     // }
//     next();
// }

// server.use(auth);

//API - end-point- route say 
// server.get('/product/:id',auth,(req,res)=>{
//     console.log(req.params)
//     res.json({type:'Get'});

// })

// start new method for api
// resource products

// ---------------------C R U D --------------------


// Create Post products by using Post method


console.log('DB_PASSWORD : ',process.env.DB_PASSWORD);
server.listen(process.env.PORT, () => {
    console.log('server is started...');
});



// test of github