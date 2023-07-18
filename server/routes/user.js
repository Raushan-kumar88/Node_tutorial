const express = require('express');
const userController = require('../controller/user');
const router= express.Router();

router
    .post('/', userController.createProduct)
    // Read get products
    .get('/', userController.readProduct)
    // read get products with id
    .get('/:id', userController.getProduct)
    // Update put products with id
    .put('/:id', userController.replaceProduct)
    // Update PATCH products with id
    .patch('/:id', userController.updateProduct)
    // Delete delete products with id
    .delete('/:id', userController.deleteProduct)

    exports.router= router