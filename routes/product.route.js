const express = require('express')
const Product = require("../models/product.model");
const productController = require("../controllers/product.controller");


const router = express.Router()


// Get All Products
router.get('/', productController.getProducts);


// Get a product by ID
router.get('/:id', productController.getProductById);

// Creating a Product
router.post('/', productController.createProduct);

// Update a product
router.put('/updateProduct/:id', productController.updateProduct);


// Delete a product
router.delete('/deleteProduct/:id', productController.deleteProduct);

module.exports = router;
