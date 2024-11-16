const express = require('express')
const mongoose = require('mongoose');
const productRoutes = require('./routes/product.route');

// const {Query} = require("mongoose");
const app = express()

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/products", productRoutes);


mongoose.connect("mongodb+srv://sharif88dev:bgr2Bcar2LKiujbs@cluster0.vzoi3.mongodb.net/node-API?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.log(err)
});


app.listen(3000, function () {
    console.log('listening on port 3000!')
});