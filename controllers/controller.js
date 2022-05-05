import { v4 as uuidv4 } from 'uuid';

// CRUD
let products = [

    {
        "name": "Shoes",
        "color": "Red",
        "quantity": 10,
        "quality": "Standard",
        "manufacturer": "Nike",
        "price": 14000,
        "remaining stock": 120,
        "address": {
            "location": "Kampala",
            "Shop/Mall": "Shoprite"
        },
        "id": uuidv4(),
    }

];

// Create Product.
export const createProduct = (req, res) => {
    const product = req.body;
    products.push({...product, id: uuidv4() })
    res.status(200).send(`Product with ID ${req.params} has been added to database.`)
}

// Get All Product.
export const getAllProducts = (req, res) => {
    res.send(products);
}

// Get specific Product.
export const getSpecificProduct = (req, res) => {
    const { id } = req.params;
    const foundProduct = products.find((product) => product.id === id);
    res.status(200).send(foundProduct);
}

// // Update Product.
// export function updateProduct(req, res) {}

// Delete Product.
export const deleteProduct = (req, res) => {
    const { id } = req.params;
    products = products.filter((product) => product.id !== id);
    res.status(200).send(`Product with ID ${id} has been deleted.`)
}