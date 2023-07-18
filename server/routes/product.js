const express = require('express');
const productController = require('../controller/product');
const router= express.Router();

router
    .post('/', productController.createProduct)
    // Read get products
    .get('/', productController.readProduct)
    // read get products with id
    .get('/:id', productController.getProduct)
    // Update put products with id
    .put('/:id', productController.replaceProduct)
    // Update PATCH products with id
    .patch('/:id', productController.updateProduct)
    // Delete delete products with id
    .delete('/:id', productController.deleteProduct)

    exports.router= router