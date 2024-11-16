const Product = require("../models/product.model");

// Getting all products
const getProducts = async (req, res) => {

    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (e) {
        res.status(500).json({error: e});
    }

}

// Getting a Product by ID
const getProductById = async (req, res) => {

    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (e) {
        res.status(500).json({error: e});
    }

}


// Creating a Product

const createProduct = async (req, res) => {

    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (e) {
        res.status(500).json({message: `Error: ${e.message}`});
    }

}

// Updating a product with ID

const updateProduct = async (req, res) => {

    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            res.status(404).json({message: 'Product not found'});
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    } catch (e) {
        res.status(500).json({error: e});
    }

}

// Deleting a Product

const deleteProduct = async (req, res) => {

    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            res.status(404).json({message: 'Product not found'});
        }
        res.status(200).json({message: 'Product Deleted successfully'});

    } catch (e) {
        res.status(500).json({error: e});
    }

}


module.exports = {getProducts, getProductById, createProduct, updateProduct, deleteProduct};