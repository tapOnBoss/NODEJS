const db = require('../models');

// function to handle GET /api/products
async function getProducts(req, res) {
    try {
    // get all products from the database
    const products = await db.Product.findAll();
    // send the products as JSON response
    res.json(products);
} 

catch (err) {
    console.error(err);
    // send error response with 500 status code
    res.status(500).send('Error getting products from database.');
}

}

// function to handle GET /api/products/:id
async function getProductById(req, res) {
    try {
    // get the product with the specified id from the database
    const product = await db.Product.findByPk(req.params.id);
    if (!product) {
    // if product not found, send error response with 404 status code
    res.status(404).send('Product not found.');
} else {
    // send the product as JSON response
    res.json(product);}

}

catch (err) {
    console.error(err);
    // send error response with 500 status code
    res.status(500).send('Error getting product from database.');
}

}

// function to handle POST /api/products
async function createProduct(req, res) {
    try {
        // create a new product in the database using the request body
        const newProduct = await db.Product.create(req.body);
        // send the newly created product as JSON response
        res.json(newProduct);
    } catch (err) {
        console.error(err);
        // send error response with 500 status code
        res.status(500).send('Error creating product in database.');
    }
}

// function to handle PUT /api/products/:id
async function updateProduct(req, res) {
    try {
        // find the product with the specified id in the database
        const product = await db.Product.findByPk(req.params.id);
        if (!product) {
            // if product not found, send error response with 404 status code
            res.status(404).send('Product not found.');
        } else {
            // update the product with the request body
            await product.update(req.body);
            // send the updated product as JSON response
            res.json(product);
        }
    } catch (err) {
        console.error(err);
        // send error response with 500 status code
        res.status(500).send('Error updating product in database.');
    }
}

// function to handle DELETE /api/products/:id
async function deleteProduct(req, res) {
    try {
        // find the product with the specified id in the database
        const product = await db.Product.findByPk(req.params.id);
        if (!product) {
            // if product not found, send error response with 404 status code
            res.status(404).send('Product not found.');
        } else {
            // delete the product from the database
            await product.destroy();
            // send success response with 204 status code
            res.sendStatus(204);
        }
    } catch (err) {
        console.error(err);
        // send error response with 500 status code
        res.status(500).send('Error deleting product from database.');
    }
}

// export the functions for use in productRoutes.js
module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};
