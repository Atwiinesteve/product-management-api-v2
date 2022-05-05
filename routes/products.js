import express from 'express';
// import { getAllProducts, createProduct, getSpecificProduct, updateProduct, deleteProduct } from '../controllers/controller.js';
import { createProduct } from '../controllers/controller.js';

// Main Router
const router = express.Router();

// // Show all users.
// router.get('/', getAllProducts);

// Create Product.
router.post('/', createProduct);

// Get Specific Products.
// router.get('/:id', getSpecificProduct);

// // Update Product.
// router.put('/:id', updateProduct);

// // Delete Product.
// router.delete('/:id', deleteProduct);

// Exporting router.
export default router;