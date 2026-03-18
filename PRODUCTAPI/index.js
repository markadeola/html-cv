const express = require('express'); // node module
const app = express(); // server instantiation

app.use(express.json()); // middleware to parse JSON bodies

let products = [];
app.get('/', (req, res) => {
    res.send('WELCOME TO PRODUCT API');
});

app.post('/products', (req, res) => {
const { name, price,size } = req.body;
if (!name || !price || !size) {
    return res.status(400).send({ error: 'All fields are required' });}
const product = { name, price,size };
products.push(product);
res.status(200).send({ message: 'Product created successfully', product });

});

app.get('/all_products', (req, res) => {
    res.json(products);
});

    app.listen(8080, () => {
        console.log('Server is running properly');
    });