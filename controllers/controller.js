import { v4 as uuidv4 } from 'uuid';

// CRUD
let products = [{
    "name": "Shoes",
    "quantity": 1,
}];

// Create Product.
export const createProduct = (req, res) => {
    const product = req.body;
    products.push({...product, id: uuidv4() })
    res.status(200).send(`Product with ID ${product.id} has been added to database.`)
}

// // Get All Product.
// export function getAllProducts(req, res) {}

// // Get specific Product.
// export function getSpecificProduct(req, res) {}

// // Update Product.
// export function updateProduct(req, res) {}

// // Delete Product.
// export function deleteProduct(req, res) {}