import express from 'express';
import bodyParser from 'body-parser';
import productRouter from './routes/products.js'
import cors from 'cors';


// App setup.
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json())
app.use(cors());

// Routes
app.get('/', (req, res) => { res.status(200).send('Welcome to the Products Management API v2') })
app.get('/products', productRouter);

// Server Initialization.
app.listen(PORT, () => { console.log(`Server Application running at http://localhost:${PORT}`); });